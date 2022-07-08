# ===========================================================================
#
# File      : talks.py
# Part of   : the C++ Talks List (CTL)
# Copyright : Wouter van Ooijen 2021-2022
# repo      : https://www.github.com/wovo/ctl
# webpage   : https://wovo.github.io/ctl/
#
# This code is distributed under the Boost Software License, Version 1.0.
# (See accompanying boost.txt file or copy at 
# http://www.boost.org/LICENSE_1_0.txt)
#
# dependecies: python3.9 or higher; pytube, pafy, youtube-dl
# (as administrator) python -m pip install pytube pafy youtube-dl
#
# C:\Program Files\Python310\lib\site-packages\pafy\backend_youtube_dl.py 
# line 53 changed to [] to get( .., 0 ); same for dislikes
#
# This script is used to generate the C++ Talks List webpage by
# retrieving the information from the youtube playlists.
#
# ===========================================================================
#
# notes & todo:
# =============
# cleanup 'ignores' list (generate)
# python cleanup
# log all prints to a log file?
# ADC++ (no playlists?)
# Meetup Modena/Online 2021 - all italian?
# javascript: try first write only the fixed text, then full rewrite                             
# maybe not capitalize meetings?
# https://www.youtube.com/c/EevblogDave/playlists 
# cppcast, like https://www.youtube.com/playlist?list=PL4Vigs1cksAYAVOKe3M1tRcDh4umLxIiX
# https://hackingcpp.com/cpp/community.html
# isocpp.org/wiki/faq/user-groups-worldwide - checked t/m canada, no playlists found
# the GUI os getting sloooow
# some code europe talks are in ? polish
# SpringOne Platform has playlists, ~200 each
# check https://www.aristeia.com/presentations.html
# check https://andreasfertig.info/talks/
#
# tutorials
# ======================================================
# https://www.youtube.com/playlist?list=PLrjkTql3jnm-Voi7giH4JITCi6cuZSN42 OOPS in C++ (Indian accent)
# https://www.youtube.com/playlist?list=PL_c9BZzLwBRJVJsIfe97ey45V4LP_HXiG - caleb curry
# https://www.youtube.com/playlist?list=PLIY8eNdw5tW_o8gsLqNBu8gmScCAqKm2Q simple snippets
# https://www.youtube.com/playlist?list=PLbHYdvrWBMxazo1_B6vhW9gpd1wlkdeEW seng 745
# https://www.youtube.com/channel/UCA2YOQHuWzVn1TWmlK5XYxA?app=desktop codearchery
# 
# https://www.youtube.com/watch?v=_bYFu9mBnr4
# https://www.youtube.com/watch?v=wN0x9eZLix4
# https://www.youtube.com/watch?v=vLnPwxZdW4Y
#
# C++weekly, cppcast, cppchat
#
# ===========================================================================

import sys, glob, os, json, pickle, urllib.request
import functools, re, pytube, pafy, datetime, time

def time_in_minutes( time ):
    # from https://stackoverflow.com/questions/10663720
    return sum( x * int( t ) for x, t in zip( [ 60, 1 ], time.split( ":" )))

def time_as_time( n ):
    return "%d:%02d" % ( n // 60, n % 60 )
   
def write_to_file( file, text ):
    with open( file, "w" ) as f:
        f.write( text )

def read_from_file( file ):
    with open( file, "r" ) as f:
        return "".join( f.readlines())
      

# ===========================================================================

replacements = {
    "•": "@",      "í": "i",      "á": "a",      "é": "e",      "á": "a",
    "ł": "l",      "ñ": "n",      "’": "'",      "＜": "<",     "＞": ">",
    "ň": "n",      "ř": "r",      "ý": "y",      "ń": "n",      "=": "=",
    "ü": "u",      "“": "'",      "”": "'",      "\"": "'",     "ç": "c",
    "–": "-",      "ć": "c",      "Á": "A",      "Ł": "L",      "ö": "o",
    "Č": "C",      "ć": "c",      "ä": "a",      "ë": "e",      "ó": "o",
    "ś": "s",      "ę": "e",      "ź": "z",      "î": "i",      "ą": "a",
    "ă": "a",      "ț": "t",      "ß": "ss",     "Š": "S",      "š": "s",
    "ž": "z",      "`": "'",      "—": "-",      "Ş": "S",      "…": "...",
    "ż": "z",      "′": "'",      "Ç": "C",      "À": "A",      "©": "(C)",
    "≤": "=<",     "Ó": "O",      "⬆️": "^",      "È": "E",      "ì": "i",
    "→": "->",     "λ": "lambda", "ï": "i",      "ò": "o",      "∞": "lemniscate",
    "𝐂": "C",      "á": "a",      "́": "",        "æ": "ae",     "➠": "",
    "\u0308": "",  "à": "a",      "🤖": "",      "ø": "o",      "🙂": "[Smile]",    
    "â": "a",      "û": "u",      "\t": " ",     "❯": ">",      "❮": "<",      
    "≡": "==",     "💻": "[PC]",  "å": "a",      "ņ": "n",      "🎨": "[Palette]", 
    "è": "e",      "ê": "e",      "ę": "e",      "ā": "a",      "Ø": "{nothing}",
    "Æ": "AE",     "…": "...",    "♥": "[love]", '\u200b': "",  '\u2212': "-",
    '\u0391': "A",
    "Ś": "S",
    "Ż": "Z",
    "ô": "o",
    "️": "^", "⬆": "", # ⬆️
    "x": "x",
    "x": "x",
    "x": "x",
    "x": "x",
    "x": "x",
    "x": "x",
    "x": "x",
}   
      
def make_ascii( s ):
    """
    returns the string with the non-ascii characters 
    replaced by an ascii equivalent.
    """
    result = ""
    for c in s:
        c = replacements.get( c, c )   
        result += c
    return result   
      
def is_ascii( s ):
     return all( ord( c ) < 128 for c in s )         
   
def force_ascii( s ):
    r = ""
    for c in s:
        if ord(c) < 128: r += c
    return r   
   
def lower_noquotes( s ):
    return s.lower().strip().replace( "'", "" ).replace( '"', '' )   

   
# ===========================================================================

def make_list_of_strings( list, prefix = "   " ):
    return ( ",\n" + prefix ).join( 
        map( lambda x: '"%s"' % x.replace( '"', "'" ), list ) )
   
def make_js_data( name, list ):
    return "var %s = [\n   %s\n]\n\n" % \
        ( name, make_list_of_strings( list ) )
   
def make_quote( s ):
    return '"%s"' % s
   
def make_js_pair( tag, value ):
    return "%10s: %s" % ( tag, str( value ))
   
def make_list( list ):
    return "[\n                     %s\n                  ]" % \
        make_list_of_strings( list, "                     " )  
      
def page_content( url ):
    return urllib.request.urlopen( url ).read().decode()
   
def strip_youtube_watch_prefix( s ):
    return  s.replace( "https://www.youtube.com/watch?v=", "" )
   
def youtube_ids( playlist ):
    url = "https://www.youtube.com/playlist?list=%s" % playlist
    pl = pytube.Playlist( url )
    return list( map( strip_youtube_watch_prefix, pl ) )
   
def remove_nocase( s, pp ):
    for p in pp:
        pattern = re.compile( re.escape( p ), re.IGNORECASE )
        s = pattern.sub( "", s )  
    return s      
      

# ===========================================================================

class talk:
    """
    the information of a single talk (all strings are ascii):
       - number      : unique ctl number for this talk
       - identifier  : unique identifier for this talk
       - meeting     : meeting name 
       - edition     : edition (often just the year) of the meeting
       - title       : title of the talk
       - speakers    : the speaker(s)
       - video       : video url (probably on youtube)
       - thumbnail   : video thumbnail url (probably also on youtube)
       - duration    : length of the video in minutes
       - tags        : tags of the talk
       - level       : level of the talk (1 novice, 10 expert, 0 unknow)
       - thumbnail   : language of the talk (mostly "english")
    """
 
    def __init__( self, 
        number      : int,
        identifier  : str, 
        meeting     : str, 
        edition     : str,
        title       : str,
        speakers    : list[ str ],
        yid         : str,
        video       : str, 
        thumbnail   : str, 
        duration    : str,
        tags        : list[ str ],
        level       : int,
        language    : str
     ):
        self.number      = number
        self.identifier  = identifier.strip().replace( " ", "-" )
        self.meeting     = meeting.strip()
        self.edition     = edition.strip()
        self.title       = title.strip()
        self.speakers    = sorted( speakers )
        self.yid         = yid
        self.video       = video.strip()
        self.thumbnail   = thumbnail.strip()
        self.duration    = duration
        self.tags        = sorted( tags )
        self.level       = level
        self.language    = language.strip()
       
    def to_json( self ):
        return json.dumps( self, 
            default = lambda o: o.__dict__, 
            sort_keys = True, 
            indent = 3 )      
          
    def to_js( self ):
        return "   {\n      %s\n   }" %  ",\n      ".join( [
            make_js_pair( "number",     str(        self.number     )),
            make_js_pair( "identifier", make_quote( self.identifier )),
            make_js_pair( "meeting",    make_quote( self.meeting    )),
            make_js_pair( "edition",    make_quote( self.edition    )),
            make_js_pair( "title",      make_quote( self.title      )),
            make_js_pair( "speakers",   make_list(  self.speakers   )),
            make_js_pair( "yid",        make_quote( self.yid        )),
            make_js_pair( "video",      make_quote( self.video      )),
            make_js_pair( "thumbnail",  make_quote( self.thumbnail  )),
            make_js_pair( "duration",   str(        self.duration   )),
            make_js_pair( "tags",       make_list(  self.tags       )),
            make_js_pair( "level",      str(        self.level      )),
            make_js_pair( "language",   make_quote( self.language   ))
        ])
 
      
# ===========================================================================

class talks:
    """
    all the talks, and some aggregate information:
       - list        : all talks
       - dict        : all talks, indexed by indentifier
       - meetings    : all meetings
       - editions    : all editions
       - speakers    : all speakers
       - tags        : all tags
       - languages   : all languages
    """
    
    def __init__( self, file_name = None ):
        """
        create an empty talks object, optionally reading its content from a json file
        """
        self.max_number   = 0
        self.list         = []
        self.dict         = dict()
        self.meetings     = set()
        self.titles       = set()
        self.editions     = set()
        self.speakers     = set()
        self.tags         = set()
        self.languages    = set()
        if file_name != None:
            self.read_json( file_name, use_number = true )
          
    def add( self, talk, use_number = True ):
        """
        add a single talk
        """   
        if ( talk.number != None ) and use_number:
            if talk.number > self.max_number:
                self.max_number = talk.number
            else:   
                print( "snark: duplicate number [%d]" % talk.number )
                exit( -1 )          
        else:
            self.max_number += 1
            talk.number = self.max_number
           
        if talk.identifier in self.dict:
            print( "snark: duplicate identifier [%s]" % talk.identifier )
            exit( -1 )
        self.list.append( talk )
        self.dict[ talk.identifier ] = talk
        if talk.meeting != "": self.meetings.add( talk.meeting )      
        if talk.edition != "": self.editions.add( talk.edition )
        self.titles.add( talk.title )
        self.speakers.update( talk.speakers ) 
        self.tags.update( talk.tags )  
        self.languages.add( talk.language )  
  
    def sort( self ):
        self.list      = sorted( self.list,     
            key = lambda t : lower_noquotes( t.title ))
        self.speakers   = sorted( self.speakers, 
            key = lower_noquotes )      
        self.tags       = sorted( self.tags, 
            key = lower_noquotes )      
        self.meetings   = sorted( set( self.meetings )- set([ "unknown" ]),
            key = lower_noquotes )      
        self.editions   = sorted( self.editions, 
            key = lower_noquotes )      
        self.languages  = sorted( self.languages,
            key = lower_noquotes )      
        
    def write_json( self, file_name = "talks.json" ):
        """
        write the talks to a json file
        """  
        self.sort()
        file = open( file_name, "w" )
        file.write( "{ \"list\": [" )
        separator = ""
        for talk in self.list:
            file.write( separator )
            separator = ","
            file.write( talk.to_json() )
        file.write( "]}" )     
        file.close()  
        
    def read_json( self, files = "talks.json" ):
        """      
        read and add talks from a json file
        """
        for file_name in glob.glob( files ):     
            print( "   reading json file %s" % file_name )      
            file = open( file_name, "r" )
            x = json.loads( file.read() )
            file.close()
            for t in x[ "list" ]:
                self.add( talk(
                    t.get( "number", 0 ),
                    t[ "identifier" ],
                    t[ "meeting" ],
                    t[ "edition" ],
                    t[ "title" ],
                    t[ "speakers" ],
                    t[ "video" ],
                    t[ "thumbnail" ],
                    t[ "duration" ],
                    t[ "tags" ],
                    t[ "level" ],
                    t[ "language" ],
                ),
                    use_number = ( file_name == "talks.json" )
                )
 
    def write_javascript( self, file ):
        self.sort()
        t = ''
        t += make_js_data( "meetings",   self.meetings )
        t += make_js_data( "editions",   self.editions )
        t += make_js_data( "languages",  self.languages )
        t += make_js_data( "speakers",   self.speakers )
        t += make_js_data( "titles",     self.titles )
        t += make_js_data( "tags",       self.tags )
        t += "const talks = [\n%s\n]\n\n" % \
            ",\n".join( map( lambda x : x.to_js(), 
                sorted( self.list, key=lambda x: x.title.lower() )))
        write_to_file( file, t )   
        
        t = javascript_code.replace( "<generated>", t )
        t = t.replace( "<date-and-time>", \
            datetime.datetime.now().strftime("%Y-%m-%d, %H:%M:%S") )
        t = t.replace( "<quotes>", "quotes = [\n%s ]\n" % \
            functools.reduce( lambda a, b: a + b, 
                map( lambda s: '   "%s",\n' % s, 
                    filter( lambda s : s != "", quotes ))))
        write_to_file( "docs/index.html", t )
  
 
# =========================================================================== 


missing_speakers = [
    [ "'An Approach to Dealing with Reference Types in the Generic Programming Paradigm'",
        "Matt Calabrese" ], 
    [ "C++Now 2018: You Can Do Better than std::unordered_map: New Improvements to Hash Table Performance",
        "Malte Skarupke" ], 
    [ "What Neighborhoods Owe Each Other: Rights, Duties, Immunities & Disabilities of Functions & Objects",
        "Lisa Lippincott" ],
    [ "Axiomatic Programming: From Euclidean Deductions to C++ Templates and Beyond",
        "Gabriel Dos Reis" ],
    [ "C++14: Through the Looking Glass",
        "Michael Wong" ],
    [ "Coroutines, Fibers and Threads, Oh My",
        "Nat Goodspeed" ],
    [ "ConceptClang: Theoretical Advances with Full C++ Concepts",
        "Larisse Vuofo" ],
    [  "Removing Undefined behavior from integer operations: The bounded::integer library",
        "David Stone" ],
    [ "Generic programming of Generic Spaces: Compile-Time Geometric Algebra with C++11",
        "Pable Colapinto" ],
    [ "Value Semantics and Range Algorithms - Composability and Efficiency",
        "Chandler Carruth" ],
    [ "Preparing the C++11 Library AFIO for Boost Peer Review",
        "Paul Kirth" ],
    [ "Undefined Behavior in C++: What is it, and why do you care?",
        "Marshall Clow" ],
    [ "The Optimization of a Boost.Asio-based Networking Server",
        "Nikita Chumakov, Sergei Khandrikov" ],
    [ "A Tutorial Introduction to C++11 & 14 Part 1",
        "Leor Zolman" ],
    [ "Mach7: The Design and Evolution of a Pattern Matching Library for C++",
        "Yury Solodkyy" ],
    [ "MPL11: A New Metaprogramming Library for C++11",
        "Luis Dionne" ],
    [ "Practical Type Erasure: A boost::any Based Configuration Framework",
        "Cheinan Marks" ],
    [ "C++11 Library Design",
        "Eric Niebler" ],
    [ "A Tutorial Introduction to C++11/14 - Part II",
        "Leor Zolman" ],
    [ "Goals for Better Code - Implement Complete Types",
        "Sean Parent" ],
    [ "Multiplatform C++",
        "Edouard Alligand" ],
    [ "Octopus: A Policy-Driven Framework for CFD Simulations",
        "Bryce Adelstein-Lelbach" ],
    [ "C++ in Space Plasma Model Development",
        "Ilja Honkonen" ],
    [ "Unicode in C++",
        "James McNellis" ],
    [ "CppComponents- A Modern Portable C++11 Component System",
        "John Bandela" ],
    [ "Understanding &&",
        "Scott Schurr" ],
    [ "Designing XML API for Modern C++",
        "Boris Kolpackov" ],
    [ "Interactive Metaprogramming Shell based on Clang",
        "Abel Sinkovics" ],
    [ "Modern C++ as Concurrent Assembly",
        "Diego Perini" ],
    [ "How to Design C++ Implementations of Complex Combinatorial Algorithms",
        "Piotr Wygocki" ],
    [ "Functional Data Structures in C++",
        "Barosz Milewski" ],
    [ "Asynchronous Programming Using the Boost.MetaStateMachine and the Upcoming Asynchrnonous Library",
        "Christophe Henry" ],
    [ "Lifetime and Usage of Global, Thread-local, and Static Data",
        "Daniel Dilts" ],
    [ "0xBADC0DE",
        "Jens Weller" ],
    [ "Intro to Functional Programming in C++",
        "David Sankel" ],
    [ "Create your own Refactoring Tool in Clang",
        "Richard Thompson" ],
    [ "Value Semantics: It aint about the syntax!",
        "John Lakos" ],
    [ "Iterators May Stay",
        "Sebastian Redl" ],
    [ "My Thoughts on Large Code Base Change Ripple Management in C++",
        "Niall Douglas" ],
    [ "Functional Reactive Programming - Cleanly Abstracted Interactivity",
        "David Sankel" ],
    [ "Disambiguation: The Black Technology",
        "Zhihao Yuan" ],
    [ "The Future of Accelerator Programming in C++",
        "Sebastian Schaetz" ],
    [ "Expected- An exception-friendly Error Monad",
        "Vicente Botet" ],  
    [ "Generating OpenCL/CUDA source code from C++ expressions in VexCL",
        "Dennis Demidov" ],  
    [ "'A lock-free concurrency toolkit for deferred reclamation and optimistic speculation'",
        "Paul E. McKenney, Maged Michael, Michael Wong" ],  
    [ "'Bringing Clang and C++ to GPUs: An Open-Source, CUDA-Compatible GPU C++ Compiler'",
        "Justin Lebar" ],  
    [ "'Building and Extending the Iterator Hierarchy in a Modern, Multicore World'",
        "Patrick Niedzielski" ],  
    [ "'Instruction Re-ordering Everywhere: The C++ 'As-If' Rule and the Role of Sequence'",
        "Charles Bay" ],  
    [ "'WG21-SG14 - Making C++ better for games, embedded and financial developers'",
        "Guy Davidson" ],  
    [ "'Introduction to C++ python extensions and embedding Python in C++ Apps'",
        "Diego Rodriguez-Losada" ],  
    [ "Crafting EDSL In C++ using Metaprogramming, Operator Overloading, & Lambda Expressions",
        "Gilang Hamidy" ],  
    [ "'C++ Dependency Management: from Package Consumption to Project Development'",
        "Boris Kolpackov" ],  
    [ "'Compiling Multi-Million Line C++ Code Bases Effortlessly with the Meson Build System'",
        "Jussi Pakkanen" ],  
    [ "'Latest and Greatest in the Visual Studio Family for C++ Developers 2018'",
        "Steve Carroll, Marian Luparu" ],  
    [ "'Secure Coding Best Practices: Your First Line Is The Last Line Of Defense (1 of 2)'",
        "Matthew Butler" ],  
    [ "'Secure Coding Best Practices: Your First Line Is The Last Line Of Defense (2 of 2)'",
        "Matthew Butler" ],  
    [ "'The Landscape and Exciting New Future of Safe Reclamation for High Performance'",
        "Paul McKenney & Maged Michael" ],  
    [ "'Multi-Precision Arithmetic for Cryptology in C++, at Run-Time and at Compile-Time'",
        "Niek J. Bouman" ],  
    [ "'Emulating the Nintendo 3DS: Generative & Declarative Programming in Action'",
        "Tony Wasserka" ],  
    [ "Selected C++11 Template Toffees From sqlpp11 (Part1)",
        "Roland Bock" ],
    [ "Selected C++11 Template Toffees From sqlpp11 (Part2)",
        "Roland Bock" ],
    [ "Selected C++11 Template Toffees From sqlpp11 (Part3)",
        "Roland Bock" ],
    [ "Selected C++11 Template Toffees From sqlpp11 (Part4)",
        "Roland Bock" ],
    [ "- Windows, macOS and the Web - Lessons from cross platform development",
        "Sebastian Theophil" ],  
    [ "rand() Considered Harmful",
        "Stephan T. Lavavej" ],  
    [ "",
        "" ],  
    [ "",
        "" ],  
    [ "",
        "" ],  
    [ "",
        "" ],  
    [ "",
        "" ],  
    [ "",
        "" ],  
    [ "",
        "" ],  
    [ "",
        "" ],  
]

must_total_replace = [
    [ "Scott Meyers - The evolving search for effective C++ - Keynote @ Meeting C++ 2014",
        "The evolving search for effective C++ : Scott Meyers keynote" ],
    [ "C++Now 2018: Jens Weller - The Problem with 'Cutting Edge C++'",
        "Jens Weller 'The Problem with 'Cutting Edge C++'" ],
    [ "On 'simple' Optimizations - Chandler Carruth - Secret Lightning Talks - Meeting C++ 2016",
        "Chandler Carruth : On 'simple' Optimizations - Secret Lightning Talks - Meeting C++ 2016" ],
    [ "Kate Gregory - It's Complicated - Meeting C++ 2017 Keynote",
        "It's Complicated - Kate Gregory - Keynote" ],   
    [ "Wouter van Ooijen - Embedded & C++ - Meeting 2017 Keynote",
        "Embedded & C++ - Wouter van Ooijen - Keynote" ],   
    [ "Jens Weller - Programming in a different domain - Meeting C++ 2017",
        "Programming in a different domain - Jens Weller" ],   
    [ "The need for a package manager interface - Mathieu Ropert - Lightningtalks Meeting C++ 2017",
        "The need for a package manager interface - Mathieu Ropert" ],      
    [ "C++ Class Natures - Peter Sommerlad - Meeting C++ Secret Lightning Talks",
        "C++ Class Natures - Peter Sommerlad - Meeting C++ 2019 Secret Lightning Talks" ],   
    [ "Klaus Iglberger   Calling Functions - Meeting C++ 2020",
        "Klaus Iglberger - Calling Functions - Meeting C++ 2020" ],   
    [ "Meta Polymorphism - Jonathan Boccara - Meeting C++ 2020 Opening Keynote",
        "Jonathan Boccara - Meta Polymorphism - Meeting C++ 2020 Opening Keynote" ],
    [ "Lambdas - uses and abuses - Dawid Zalewski - Meeting C++ 2020",
        "Dawid Zalewski - Lambdas - uses and abuses - Meeting C++ 2020" ],   
    [ "Mastering the Cell Broadband Engine via a Boost-based library - Falcou & Lacassagne & Schaetz",
        "Falcou & Lacassagne & Schaetz - Mastering the Cell Broadband Engine via a Boost-based library" ],   
    [ "Toward Native XML Processing Using Multi-paradigm Design in C++ - Aniruddha Gokhale & Sumant Tambe",
        "Aniruddha Gokhale & Sumant Tambe - Toward Native XML Processing Using Multi-paradigm Design in C++" ],   
    [ "Meeting C++ Lightning Talks - Odin Holmes - Modern special function register abstraction",
        "Odin Holmes - Modern special function register abstraction - Meeting C++ 2015 Lightning Talks" ],  
    [ "Meeting C++ Lightning Talks - Vittorio Romeo - 'Meaningful' casts",
        "Meaningful casts - Vittorio Romeo" ],   
    [ "Meeting C++ Lightning Talks - Vittorio Romeo - 'static_if' in C++14",
        "static_if in C++14 - Vittorio Romeo" ],   
    [ "Keep your code sane with clang-tidy - Daniel Jasper - Meeting C++ 2015 Lightning Talks",
        "Daniel Jasper - Keep your code sane with clang-tidy - Meeting C++ 2015 Lightning Talks" ],   
    [ "Ben Huckvale - A perfect async RPC Framework? - Lightning Talks - Meeting C++ 2015",
        "A perfect async RPC Framework? - Ben Huckvale - Lightning Talks Meeting C++ 2015" ],   
    [ "code::dive conference 2015 - Tomasz Kaczmarzyk HTTP 2 - The feature of www",
        "code::dive conference 2015 - Tomasz Kaczmarzyk - HTTP 2 - The feature of www" ],   
    [ "Lightning Strikes! - Walter E. Brown",
        "Lightning Strikes! (Walter E. Brown)" ],   
    [ "itCppCon20 Welcome + KEYNOTE Let's Move-The Hidden Features and Traps of C++ Move Semantics Josuttis",
        "itCppCon20 Welcome + KEYNOTE Let's Move-The Hidden Features and Traps of C++ Move Semantics (Josuttis)" ],   
    [ "itCppCon20 - Lightning Talks",
        "itCppCon20 - Combined Short Talks (various)" ],   
    [ "Core C++ 2021 :: Video Rendering on Frontend and Backend",
        "Shachar Langbeheim :: Video Rendering on Frontend and Backend" ],   
    [ "Core C++ 2021 :: Writing a cache-friendly C++ code",
        "[HEB] Avi Lachmish :: Writing a cache-friendly C++ code" ],   
    [ "Core C++ 2021 :: C++17 key features",
        "Alex Dathskovsky :: C++17 key features" ],
    [ "Core C++ 2021 :: Generators, Coroutines and Other Brain Unrolling Sweetness",
        "Adi Shavit :: Generators, Coroutines and Other Brain Unrolling Sweetness" ],
    [ "Core C++ 2021 :: The MLIR Framework: A Brief Introduction to Deep Learning Compilers",
        "[HEB] Dafna Mordechai :: The MLIR Framework: A Brief Introduction to Deep Learning Compilers" ],
    [ "Core C++ 2021 :: Ownership model in C++ and beyond",
        "Inbal Levi :: Ownership model in C++ and beyond" ],
    [ "Core C++ 2021 :: Don't do what I did",
       "[HEB] Yossi Moalem :: Don't do what I did" ],
    [ "Core C++ 2021 :: C++ 20 Overview: The Big Four",
       "Pavel Yosifovich :: C++ 20 Overview: The Big Four" ],
    [ "Core C++ 2021 :: Design Patterns for Hardware Packet Processing on FPGAs",
       "Haggai Eran ::  Design Patterns for Hardware Packet Processing on FPGAs" ],
    [ "Core C++ 2021 :: opt-viewer: Inspecting compiler optimizations in high-level code",
       "Ofek Shilon  :: opt-viewer: Inspecting compiler optimizations in high-level code" ],
    [ "Core C++ 2021 :: Argument Passing, Core Guidelines, and Aliasing",
       "Roi Barkan :: Argument Passing, Core Guidelines, and Aliasing" ],
    [ "Core C++ 2021 :: Obfuscation and beyond: securing your binary",
       "Alex Cohn :: Obfuscation and beyond: securing your binary" ],
    [ "Core C++ 2021 :: C++ on the Edge - Machine Learning + Microcontrollers + C++",
       "Michael Peeri :: C++ on the Edge – Machine Learning + Microcontrollers + C++" ],
    [ "Core C++ 2021 :: The many faces of Number -- String conversions",
       "Dvir Yitzchaki :: The many faces of Number -- String conversions" ],
    [ "Core C++ 2021 :: Latency Observability",
       "[HEB] Amir Kotler :: Latency Observability" ],
    [ "Core C++ 2021 :: Modern Design Patterns with Modern C++",
       "[HEB] Muhammad Zahalqa :: Modern Design Patterns with Modern C++" ],
    [ "Core C++ 2021 :: Implementing C++ Semantics in Python",
       "Tamir Bahar :: Implementing C++ Semantics in Python" ],
    [ "Core C++ 2021 :: Understanding and mastering C++'s complexities",
       "[HEB] Amir Kirsh, Amit Barzilay :: Understanding and mastering C++'s complexities" ],
    [ "Core C++ 2021 :: C++ Integer Promotion is Completely Broken",
       "Shachar Shemesh  :: C++ Integer Promotion is Completely Broken" ],
    [ "C++Now 2018: You Can Do Better than std::unordered_map: New Improvements to Hash Table Performance",
        "C++Now 2018: Malte Skarupke 'You Can Do Better than std::unordered_map: New Improvements to Hash Table Performance'" ],   
    [ "What's New in Visual C++ 2015 and Future Directions - Steve Carroll @ Ayman Shoukry [ CppCon 2015 ]",
        "What's New in Visual C++ 2015 and Future Directions - Steve Carroll, Ayman Shoukry [ CppCon 2015 ]" ],   
    [ "CppCon 2019: Hyrum Wright Time Travel: Applying Gradual Typing to Time Types with Clang's LibTooling",
        "Time Travel: Applying Gradual Typing to Time Types with Clang's LibTooling - Hyrum Wright" ],   
    [ "CppCon 2019: Kostas Kyrimis ADL: introduction in name taxonomy, customization points and use cases",
        "ADL: introduction in name taxonomy, customization points and use cases - Kostas Kyrimis" ],   
    [ "CppCon 2019: Tony Van Eerd Objects vs Values: Value Oriented Programming in an Object Oriented World",
        "Objects vs Values: Value Oriented Programming in an Object Oriented World - Tony Van Eerd" ],   
    [ "Core C++ 2021 :: Welcome Words :: Adi Shavit",
        "Adi Shavit :: Welcome Words" ],   
    [ "Fastbuild - Arvid Gerstmann - Lightningtalks Meeting C++ 2017",
        "Arvid Gerstmann - Fastbuild - Lightningtalks Meeting C++ 2017" ],   
    [ "C++Now 2017: John McFarlane 'Composite Arithmetic Types Are > the + of Their Parts",
        "C++Now 2017: John McFarlane 'Composite Arithmetic Types Are > the + of Their Parts'" ],   
    [ "code::dive conference 2014 - Damian Czernous Model - View - Whatever MVW",
        "Damian Czernous : Model - View - Whatever MVW" ],    
    [ "[IoT & Edge Computing] Zephyr, retour d'experience sur une des fondation de Stimio SDK",
        "[IoT & Edge Computing][FRE] Zephyr, retour d'experience sur une des fondation de Stimio SDK" ],    
    [ "Q&A - Monolith to Microservices with Sam Newman and Sven Johann @ GOTO 2020",
        "Monolith to Microservices @ Sam Newman, Sven Johann" ],    
    [ "RustConf 2019 - Closing Keynote by Lin Clark",
        "RustConf 2019 - Closing Keynote Rust beyond Rust by Lin Clark" ],    
    [ "RustConf 2019 - Opening Keynote by Steve Klabnik & Florian Gilcher",
        "RustConf 2019 - Conference Opening Opening Keynote by Steve Klabnik & Florian Gilcher" ],    
    [ "RustConf 2020 - Opening Keynote",
        "RustConf 2020 - Conference Opening Opening Keynote by Steve Klabnik & Florian Gilcher" ],    
    [ "RustConf 2020 - Closing Keynote by Sian Griffin",
        "RustConf 2020 - Conference Closing Closing Keynote by Sian Griffin" ],    
    [ "κeen - 言語自作を通して学んだRust - RustFest Global 2020",
        "Keen - Rust: Learning through the language itself — RustFest Global 2020" ],    
    [ "tkat0 - エッジとクラウドでRustを使いこなす ～AI/IoTでの事例～ - RustFest Global 2020",
        "tkat0 - Full use of Rust on edge and cloud: AI and IoT use cases - RustFest Global 2020" ],    
    [ "GoingNative 6: Walter Bright and Andrei Alexandrescu - D Programming Language",
        "Walter Bright, Andrei Alexandrescu : D Programming Language" ],    
    [ "GoingNative 7: VC11 Auto-Vectorizer, C++ NOW, Lang.NEXT",
        "Jim Radigan : VC11 Auto-Vectorizer, C++ NOW, Lang.NEXT" ],    
    [ "GoingNative 8: Introducing Casablanca - A Modern C++ API for Connected Computing",
        " : Introducing Casablanca - A Modern C++ API for Connected Computing" ],    
    [ "GoingNative 9: LINQ for C/C++, Native Rx, Meet Aaron Lahman",
        "Aaron Lahman : LINQ for C/C++, Native Rx" ],    
    [ "GoingNative 10: Welcome Ale Contenti, VC11 and Beyond with Steve Teixeira and Tarek Madkour",
        "Steve Teixeira, Tarek Madkour : VC11 and Beyond with Steve Teixeira and Tarek Madkour" ],    
    [ "GoingNative 11: Inside Fresh Paint - A C++ + XAML + DirectX Windows Store App",
        " : Inside Fresh Paint - A C++ + XAML + DirectX Windows Store App" ],    
    [ "GoingNative 12: C++ at Build 2012, Inside Profile Guided Optimization",
        " : C++ at Build 2012, Inside Profile Guided Optimization" ],    
    [ "GoingNative 2012 - Day 2 - Herb Sutter",
        "Herb Sutter : Day 2" ],    
    [ "GoingNative 2012 - Day 2 - Static if I had a hammer",
        " : Static if I had a hammer" ],    
    [ "GoingNative 2012 - Day 2 - Clang",
        " : Clang" ],    
    [ "GoingNative 2012 - Day 1 - Variadic templates are funadic",
        " : Variadic templates are funadic" ],    
    [ "GoingNative 2012 - Day 2 - Interactive Panel: Ask us anything",
        "Panel : Ask us anything" ],    
    [ "GoingNative 2012 - Day 1 - Interactive Panel: The importance of being native",
        " Panel : The importance of being native" ],    
    [ "GoingNative 2012 - Day 2 - A concept design for C++",
        " : A concept design for C++" ],    
    [ "GoingNative 2012 - Day 1 - C++11 style",
        " : C++11 style" ],    
    [ "GoingNative 2012 - Day 1 - Magic & secrets",
        " : Magic & secrets" ],    
    [ "GoingNative 2012 - Day 1 - Threads and shared variables",
        " : Threads and shared variables" ],    
    [ "rand() Considered Harmful",
        " : rand() Considered Harmful" ],    
    [ "Core C++ 2019 :: Rafi Wiener :: Interview Question",
        "Core C++ 2019 :: Rafi Wiener :: Inter$remove$view Question" ],    
    [ "code::dive 2016 conference - Chandler Carruth - Panel-style extended Q&A / AmA",
        "code::dive 2016 conference - Chandler Carruth - Ask Me Anything" ],    
    [ "itCppCon20 - The Silicon Valley coding interview (Nicolo Valigi)",
        "itCppCon20 - The Silicon Valley coding inter$remove$view (Nicolo Valigi)" ],    
    [ "itCppCon21 Welcome (Marco Arena) + KEYNOTE 'WARNING: std::find is broken' (Sean Parent)",
        "KEYNOTE 'WARNING: std::find is broken' (Sean Parent)" ],    
    [ "[CppIndiaCon 2021] AMA with Bjarne Stroustrup",
        "[CppIndiaCon 2021] Ask Me Anything by Bjarne Stroustrup" ],    
    [ "Ada in Debian and other distributions (Ludovic Brenta, Migue",
        "Ada in Debian and other distributions (Ludovic Brenta, Miguel Telleria de Esteban)" ],    
    [ "Configuration data upgrade during package upgrade (Dominique",
        "Configuration data upgrade during package upgrade (Dominique Dumont)" ],    
    [ "Distributed Compilation of RPMs (Geerd-Dietger Hoffmann, Bri",
        "Distributed Compilation of RPMs (Geerd-Dietger Hoffmann, Brian Scheuler)" ],    
    [ "Distribution collaboration manifesto (Stefano Zacchiroli, Ja",
        "Distribution collaboration manifesto (Stefano Zacchiroli, Jared K. Smith, Jos Poortvliet)" ],    
    [ "Downstream packaging collaboration (Hans de Goede, Michal Hr",
        "Downstream packaging collaboration (Hans de Goede, Michal Hrusecky)" ],    
    [ "Gentoo's Reform and Future (Petteri Räty, Jorge Manuel B. S.",
        "Gentoo's Reform and Future (Petteri Raty, Jorge Manuel Vincetto)" ],    
    [ "Using NixOS for declarative deployment and testing (Sander v",
        "Using NixOS for declarative deployment and testing (Sander van der Burg)" ],    
    [ "ZYpp your distro (Dominik Heidler Duncan Mac-Vicar P.)",
        "ZYpp your distro (Dominik Heidler, Duncan Mac-Vicar P.)" ],    
    [ "Lightning Talks - Go Devroom FOSDEM 2015",
        "Lightning Talks - Go Devroom FOSDEM 2015 Lightning$remove$ Talks" ],    
    [ "01   Welcome to the Perl devroom!   Claudio Ramirez, Wendy G A van Dijk",
        "[Claudio Ramirez, Wendy G A van Dijk] Welcome to the Perl devroom! " ],    
    [ "02   Schema Database Documentation Through Introspection   Emmanuel Seyman",
        "[Emmanuel Seyman] Schema Database Documentation Through Introspection" ],    
    [ "03   Containers in Pure Perl   Marian HackMan Marinov",
        "[Marian Marinov] Containers in Pure Perl" ],    
    [ "04   Perl6 as a First Language   The Merelo Family",
        "[Merelo Family] Perl6 as a First Language" ],    
    [ "05 5   Social Media Physics Lightning Talk   Stefan Seifert nine",
        "[Stefan Seifert] Social Media Physics Lightning Talk" ],    
    [ "06   Building a Universe with Perl   Curtis 'Ovid' Poe",
        "[Curtis Poe] Building a Universe with Perl" ],    
    [ "07   Docker for Perl56 People Docker for Perl56 People   Claudio Ramirez",
        "[Claudio Ramirez] Docker for Perl56 People Docker for Perl56 People" ],    
    [ "08   Informal Domain Specific Languages in Perl 6   Brian Duggan",
        "[Brian Dugga] Informal Domain Specific Languages in Perl 6" ],    
    [ "09   Simple Number Theory in Perl 6   Dana Jacobsen",
        "[Dana Jacobsen] Simple Number Theory in Perl 6" ],    
    [ "10   Changing the Image of Perl   Wendy G A  van Dijk",
        "Wendy G A van Dijk : Changing the Image of Perl" ],    
    [ "11   Notes from the Trenches Parsing Perl 6  in  Perl 6   Jeffrey Goff",
        "[Jeffrey Goff] Notes from the Trenches Parsing Perl 6 in Perl 6" ],    
    [ "12   Hold my beer and watch this!   Stevan Little",
        "[Stevan Little] Hold my beer and watch this!" ],    
    [ "13   Web Development and Perl 6   Stefan Seifert nine",
        "[Stefan Seifert] Web Development and Perl 6" ],    
    [ "14   Making Camelia Fly Faster   Liz Mattijsen",
        "[Liz Mattijsen] Making Camelia Fly Faster" ],    
    [ "15   Perl 5 24, 5 26, and the Future of Perl 5   Sawyer X",
        "[Sawyer X] Perl 5 24, 5 26, and the Future of Perl 5" ],    
    [ "Lightning Talks",
        "Light$remove$ning Ta$remove$lks Lightning Talks" ],    
    [ "Traits Go Mainstream...  Leor Zolman - [ CppCon 2015 ]",
        "Traits Go Mainstream... - Leor Zolman - [ CppCon 2015 ]" ],    
    [ "[Kernel System] Conjuguer modeles ouverts et propriete intellectuelle dans l'embarque",
        "[Kernel System] Conjuguer modeles ouverts et propriete intellectuelle dans l'embarque [FRE] " ],    
    [ "[Miscellaneous] Conan, le gestionnaire de paquets C/C++",
        "[Miscellaneous] Conan, le gestionnaire de paquets C/C++ [FRE] " ],    
    [ "Activities of Super Long Term Support Kernel Workgroup in Civil Infrastructure... SZ Lin (林上智)",
        "Activities of Super Long Term Support Kernel Workgroup in Civil Infrastructure... SZ Lin" ],    
    [ "Adopting Linux on BMW - The Long Road to Integrate Linux as Mainline Platform",
        "Adopting Linux on BMW - The Long Road to Integrate Linux as Mainline Platform - Helio Chissini de Castro" ],    
    [ "Community Transformation - Enable Scalable Onboarding through Data Driven Initiative",
        "Community Transformation : Enable Scalable Onboarding through Data Driven Initiative" ],    
    [ "If You Can't Measure It, You Can't Manage It - How to Assess Project Health",
        "If You Can't Measure It, You Can't Manage It : How to Assess Project Health" ],    
    [ "Open Source and ISO Standards - How OpenChain Became The International Standard for Compliance",
        "Open Source and ISO Standards : How OpenChain Became The International Standard for Compliance" ],    
    [ "Open Source Mindset to Mindflex - How Flexing Perceptions of OSS Can Change the World",
        "Open Source Mindset to Mindflex : How Flexing Perceptions of OSS Can Change the World" ],    
    [ "Public Money? Public Code! - What Role does Free Software Play after the Corona Crisis?",
        "Public Money? Public Code! What Role does Free Software Play after the Corona Crisis?" ],    
    [ "Threat Modelling - Key Methodologies and Applications from OSS CIP Perspective",
        "Threat Modelling : Key Methodologies and Applications from OSS CIP Perspective" ],    
    [ "Upstream First is Our Principle - Toward Super Long-Term Support",
        "Upstream First is Our Principle : Toward Super Long-Term Support" ],    
    [ "Journey to the Test - Experiences in Getting Serious About Testing Apache Traffic Server",
        "Journey to the Test : Experiences in Getting Serious About Testing Apache Traffic Server" ],    
    [ "Software in Space - What Can Everyday Developers and Managers Learn from Space Missions?",
        "Software in Space : What Can Everyday Developers and Managers Learn from Space Missions?" ],    
    [ "emBO++ 2020 - Odin Holmes: Keynote 2020",
        "emBO++ 2020 - Odin Holmes: Keynote About Libraries" ],    
    [ "Practical intelligence-driven defense - Lecture by Ivanow (...) - Code Europe Autumn 2017",
        "Practical intelligence-driven defense - Lecture by Gawel Mikolajczyk, Igor Ivanov, Daniil Yugoslavskiy  - Code Europe Autumn 2017" ],    
    [ "CppCon 2017: Siddharth Gupta - Fantastic Four, The Invisible 'Features'",
        "CppCon 2017: Siddharth Gupta 'Fantastic Four, The Invisible Features'" ],    
    [ "Making sense of terrible template errors with 'camomilla' - Vittorio Romeo - CppCon 2019",
        "Making sense of terrible template errors with camomilla - Vittorio Romeo - CppCon 2019" ],    
    [ "C++Tutorial for Beginners 42 - Reversing a String (Interview Question!)",
        "C++Tutorial for Beginners 42 - Reversing a String (Inter$remove$view Question!)" ],    
    [ "Neotron - Writing a Single-Tasking ‘DOS' for Arm Microcontrollers, in Rust Jonathan Pallant  ACCU 22",
        "Neotron - Writing a Single-Tasking ‘DOS' for Arm Microcontrollers in Rust - Jonathan Pallant - ACCU 22" ],    
    [ "",
        "" ],    
    [ "",
        "" ],    
    [ "",
        "" ],    
    [ "",
        "" ],    
]


# ===========================================================================

remove_noise = [
    "- [CppNow 2021]",
    "[CppNow 2021]",
    "[ CppNow 2021 ]",
    "[medium noise filtered]",
    "[filtered]",
    "[a bit noisy]",
    "[stereo sound]",
    "@ Meeting C++ 2014",
    "@ Meeting C++",
]      

def sanitize_raw_title( s, meeting, edition ):
    verbose = 1
    #meeting_edition = "%s %s" % ( meeting, edition )
    
    s = make_ascii( s ).strip()
    if verbose: print( "   raw title [%s]" % s )
    
    # would give problem with a ' delimited talk title
    s = s.replace( "O'Dwyer",  "ODwyer" )
    s = s.replace( "D'Angelo", "DAngelo" )
    s = s.replace( "O'Neal",   "ONeal" )
    s = s.replace( "Paul 'TBBle' Hampson", "Paul Hampson" )
    
    # naughty boy, especially the two '
    s = s.replace( "Nevin ':-)' Liber", "Nevin Liber" )   
    
    # WTF did he put in his title?
    if s.startswith( "CppCon 2019: JeanHeyd Meneide 'Catch" ):
        s = "CppCon 2019: JeanHeyd Meneide 'Catch [^]: Unicode for C++23'"
    if s.startswith( "Confessions of a Serial K-otlin Multiplatform-er" ):
        s = "Confessions of a Serial K–otlin Multiplatform–er __just don’t EXPECT too much__"
      
    # hopeless cases
    # do this first, so the matches are not affected by 
    # changes in later manipulations (like remove noise)
    print( "   before total replace [%s]" % s )
    for a, b in must_total_replace:
        if s == a:
            s = b
       
    # remove noise
    for a in remove_noise:
        s = s.replace( a, "" )   
    
    return s
    
    for a, b in must_append_speakers:
        if s == a:
            s = "%s : %s" % ( b, s )
       
    for a in must_append_box:
        if s == a:
            s += " []"   
 
    for head in [ 
        "Meeting C++ Lightning Talks - ",
        "Lightning Talks Meeting C++ 2016 - "
    ]:  
        if s.startswith( head ):
            # format: head speaker - title
            s = s.replace( head, "" ).replace( " - ", " : ", 1 )
 
    for tail in [ 
        "- Secret Lightning Talks - Meeting C++ 2016 - ",
        "- Secret Lightning Talks - Meeting C++",
        "- Meeting C++ 2015 Lightning Talks",
        "- Secret Lightning Talks - Meeting C++ 2017",
        "- Secret Lightning Talks @ Meeting C++ 2017"
    ]:   
        if s.endswith( tail ):
            # format: speaker - title tail
            s = s.replace( tail, "" ).replace( " - ", " : ", 1 )
    
    for tail in [ 
        "- Lightningtalks Meeting C++ 2017",
        "- Lightning Talks Meeting C++ 2017",
        "- Secret Lightning Talks",
        "- Meeting C++ 2019 secret lightning talks",
        "- Meeting C++ 2019 Secret Lightning Talks",
        "- Meeting C++ 2019 lightning talks",
        "- Meeting C++ Secret Lightning Talks"
    ]:   
        if s.endswith( tail ):
            # format: title - speaker tail
            s = s.replace( tail, "- []" )
          
    for event in [
        "Meeting Embedded 2018",      
    ]:
        if meeting_edition == event:
            # format: talk - speakers
            s += " - []"
 
    for event in [
        "Meeting Embedded 2020",      
    ]:
        if meeting_edition == event:
            # force format: speakers - talk - meeting_edition
            s = s.replace( "- " + meeting_edition, "" )
            s = s.replace( " - ", " : ", 1 )    
 
    if s.lower().startswith( meeting_edition.lower() ):
        # format: meeting edition[:] speaker "title"
        s = s.replace( " '", " : ", 1 ).strip()
        if s.endswith( "'" ): s = s[ : -1 ]     
       
    quote, bar = s.find( " '" ), s.find( " -" )
    if ( quote > -1 ) and ( ( bar == -1 ) or ( bar > quote )):
        # format: speaker-name "title"
        s = s.replace( " '", ": ", 1 ).strip()
        if s.endswith( "'" ): s = s[ : -1 ]
       
    if s.endswith( meeting_edition ):
        if( meeting_edition != "Meeting C++ 2020" ): # Jens has a bad day
            s = s.replace( meeting_edition, " []" )
         
    if ( bar > -1 ) and ( ( quote == -1 ) or ( quote > bar )):
        # format: speaker - "title with a : in the title"
        s = s.replace( " - ", " : ", 1 )
       
    s = remove_nocase( s, [ "@ "+ meeting, meeting, edition ] ).strip()
    s = s.replace( "[   ]", "[]" )
    if s.startswith( ":" ): s = s[ 1 : ].strip()
    
    if verbose: print( "   after sanitize_raw_tile [%s]" % s )
    return s  
 

# ===========================================================================

speaker_replacements = [
    [ "Falcou",                       "Joel Falcou" ],
    [ "Lapreste",                     "Jean-Thierry Lapreste" ],
    [ "Simonson",                     "Lucanus Simonson" ],
    [ "Sydorchuk",                    "Andrii Sydorchuk" ],
    [ "Gottschlich",                  "Justin Gottschlich" ],
    [ "Schaetz",                      "Sebastian Schaetz" ],
    [ "Lacassagne",                   "Lionel Lacassagne" ],
    [ "Lelbach",                      "Bryce Adelstein-Lelbach" ],
    [ "Bryce Lelbach",                "Bryce Adelstein-Lelbach" ],
    [ "Bryce Adelstein",              "Bryce Adelstein-Lelbach" ],
    [ "Habraken",                     "Jeroen Habraken" ],
    [ "Kale",                         "Laxmikant Kale" ],
    [ "Miller",                       "Phil Miller" ],
    [ "Venkataraman",                 "Ramprasad Venkataraman" ],
    [ "Sounders",                     "Richard Sounders" ],
    [ "Jefferey",                     "Clinton Jefferey" ],
    [ "Gaunard",                      "Mathias Gaunard" ],
    [ "Sean Parent's",                "Sean Parent" ],
    [ "Geller",                       "Barbara Geller" ],
    [ "Sermersheim",                  "Ansel Sermersheim" ],
    [ "Goodspeed",                    "Nat Goodspeed" ],
    [ "J H",                          "Daniel J H" ],
    [ "Khandrikov",                   "Sergei Khandrikov" ],
    [ "Reznikov",                     "Piotr Reznikov" ],
    [ "Edwards",                      "H. Carter Edwards" ],
    [ "Calabrese",                    "Matt Calabrese" ],
    [ "P. Goldsborough",              "Peter Goldsborough" ],
    [ "M. Skarupke",                  "Malte Skarupke" ],
    [ "T. Boddy",                     "Tim Boddy" ],
    [ "JeanHeyd M.",                  "JeanHeyd Meneide" ],
    [ "Z. Laine",                     "Zach Laine" ],
    [ "J. Falcou",                    "Joel Falcou" ],
    [ "E. Alligand",                  "Edouard Alligand" ],
    [ "Andreas Reischnuck",           "Andreas Reischuck" ],
    [ "Boris Schaling",               "Boris Schaeling" ],
    [ "Charley Bay",                  "Charles Bay" ],
    [ "Bryce Lelbach",                "Bryce Adelstein-Lelbach" ],
    [ "Bryce Adelstein Lelbach",      "Bryce Adelstein-Lelbach" ],
    [ "Bryce Lelbach",                "Bryce Adelstein-Lelbach" ],
    [ "Larisse Vuofo",                "Larisse Voufo" ],
    [ "Luis Dionne",                  "Louis Dionne" ],
    [ "Mario Mulansk",                "Mario Mulansky" ],
    [ "Oli Quinet",                   "Olivia Quinet" ],
    [ "Pable Colapinto",              "Pablo Colapinto" ],
    [ "Richard Sounders",             "Richard Saunders" ],
    [ "Arthur ODwyer",                "Arthur O'Dwyer" ],
    [ "Josuttis",                     "Nicolai Josuttis" ],
    [ "Walter E Brown",               "Walter E. Brown" ],
    [ "T. Grue",                      "Tony Grue" ],
    [ "S. Kabbes",                    "Steven Kabbes" ],
    [ "McKenney",                     "Paul E. McKenney" ],
    [ "Carroll",                      "Steve Carroll" ],
    [ "Moth",                         "Daniel Moth" ],
    [ "D. Dechev",                    "Damian Dechev" ],
    [ "D. Zhang",                     "Deli Zhang" ],
    [ "M. Wong",                      "Michael Wong" ],
    [ "P. McKenney",                  "Paul E. McKenney" ],
    [ "M. Michael",                   "Maged Michael" ],
    [ "Giuseppe DAngelo",             "Giuseppe D'Angelo" ],
    [ "J. McNellis",                  "James McNellis" ],
    [ "J. Mola",                      "Jordi Mola" ],
    [ "K. Sykes",                     "Ken Sykes" ],
    [ "Brand",                        "Simon Brand" ],
    [ "Nash",                         "Phil Nash" ],
    [ "R. Leahy",                     "Robert Leahy" ],
    [ "S. Al Bahra",                  "Samy Al Bahara" ],
    [ "H. Sowa",                      "Hannes Sowa" ],
    [ "P. Khuong",                    "Paul Khuong" ],
    [ "V. Romeo",                     "Vittorio Romeo" ],
    [ "B. Papis",                     "Bartosz Papis" ],
    [ "K. Grochowski",                "Konrad Grochowski" ],
    [ "K. Subzda",                    "Kamil Subzda" ],
    [ "Chris OldWood",                "Chris Oldwood" ],
    [ "M Angela Sasse",               "Martina Angela Sasse" ],
    [ "M. Arena",                     "Marco Arena" ],
    [ "M.Verasani",                   "Matti Verasani" ],
    [ "Anastasiia Kazakova",          "Anastasia Kazakova" ],
    [ "Andrzej Krzeminski",           "Andrzej Krzemienski" ],
    [ "Arno Schodl",                  "Arno Schoedl" ],
    [ "D. Rodriguez-Losada Gonzalez", "Diego Rodriguez-Losada" ],
    [ "Fabian Renn Giles",            "Fabian Renn-Giles" ],
    [ "Fran Buontempo",               "Frances Buontempo" ],
    [ "Felipe Almeida",               "Feliple Magno de Almeida" ],
    [ "G. Nishanov",                  "Gor Nishanov" ],
    [ "Gaby Dos Reis",                "Gabriel Dos Reis" ],
    [ "J Daniel Garcia",              "J. Daniel Garcia" ],
    [ "Wouter Van Ooijen",            "Wouter van Ooijen" ],
    [ "Wouter van Oijen",             "Wouter van Ooijen" ],
    [ "Verasani",                     "Matti Verasani" ],
    [ "Tondelli",                     "Eric Tondelli" ],
    [ "Yury Solodkyy",                "Yuriy Solodkyy" ],
    [ "Vincente Botet",               "Vicente J. Botet Escriba" ],
    [ "Vicente Botet",                "Vicente J. Botet Escriba" ],
    [ "Paul Bendixen",                "Paul M. Bendixen" ],
    [ "Dr. Kenneth Holmqvist",        "Kenneth Holmqvist" ],
    [ "Prof. Jurgen Mottok",          "Jurgen Mottok" ],
    [ "Uwe",                          "Uwe Friedrichsen" ],
    [ "Stefan",                       "Stefan Tilkov" ],
    [ "Erik",                         "Erik Doernenburg" ],
    [ "Ranganathan 'Ranga' Balashanmugam",    "Ranganathan Balashanmugam" ],
    [ "E. Boyle",                     "Eamonn Boyle" ],
    [ "G. Gilmour",                   "Garth Gilmour" ],
    [ "B. Wilcock",                   "Ben Wilcock" ],
    [ "S. v. Beelen",                 "Steven van Beelen" ],
    [ "J. Alvarez",                   "Juan Alvarez" ],
    [ "J. Szubryt",                   "Jim Szubryt" ],
    [ "C. Hees",                      "Christiaan Hees" ],
    [ "L. Boonstra",                  "Lee Boonstra" ],
    [ "M. Feigal",                    "Matt Feigal" ],
    [ "Tjeerd In't Veen",             "Tjeerd in 't Veen" ],
    [ "D. Mitrovic",                  "Dejan Mitrovic" ],
    [ "jam1garner",                   "Jam Garner" ],
    [ "glowcoil",                     "Micah Johnston" ],
    [ "Carlo",                        "Carlo Supina" ],
    [ "Micah",                        "Micah Tigley" ],
    [ "Gavin",                        "Gavin Mendel-Gleason" ],
    [ "Matthijs",                     "Matthijs van Otterdijk" ],
    [ "Juan Pedro Bolivar",           "Juan Pedro Bolivar Puente" ],
    [ "Jorge Manuel B. S.",           "Jorge Manuel Vicetto" ],
    [ "Jorge Manuel B. S. Vicetto",   "Jorge Manuel Vicetto" ],
    [ "Dr. Rumman Chowdhury",         "Rumman Chowdhury" ],
    [ "Bernhard 'Bero' Rosenkranzer", "Bernhard Rosenkranzer" ],
    [ "Gilad Ben Yossef",             "Gilad Ben-Yossef" ],
    [ "T.Skowronski",                 "T. Skowronski" ],
    [ "A.Janusz",                     "A. Janusz" ],
    [ "D.Deogun",                     "D. Deogun" ],
    [ "M.Dyminski",                   "Mateusz Dyminski" ],
    [ "T. Winters",                   "Titus Winters" ],
    [ "Stephan T. Lavavej",           "Stephan Lavavej" ],
    [ "Billy ONeal",                  "Billy O'Neal" ],
    [ "",                             "" ],
    [ "",                             "" ],
    [ "",                             "" ],
    [ "",                             "" ],
    [ "",                             "" ],
    [ "",                             "" ],
    [ "",                             "" ],
    [ "",                             "" ],
    [ "",                             "" ],
    [ "",                             "" ],
]
   
def sanitize_speaker( s ):
    verbose = 0
    if verbose: print( "   speaker [%s]" % s )
    
    for a in [ 
        "[", "]", 
        ":", 
        "@code_report", "@", 
        "'s", "- ", 
        "Moderator",
        "lecture by",
        "by",
        "Dr.",
        "Sir",
    ]:
        s = s.replace( a, "" ).strip()
    if s.endswith( "-" ): s = s[ : -1 ].strip()
    if s.startswith( "-" ): s = s[ 1 : ].strip()
    s = s.lstrip( " ." )
    for a, b in speaker_replacements:
        if s == a: 
            s = b           
         
    if verbose: print( "   => [%s]" % s )
    return s  


# ===========================================================================

def xdecode_title( s ):
    verbose = 0
    s = s.strip()
    if s.startswith( ":" ): s = s[ 1 : ].strip()
    
    if s.endswith( "]" ):
        # format like "title -/: speakers - [ meeting ]"
        s = s.rsplit( "[", 1 )[ 0 ].strip()
        if s.endswith( "-" ): s = s[ : -1 ].strip()
        fbar = s.find( " -" )
        fcolon = s.find( " :" )
        if verbose: print( [ "format A", fbar, fcolon ] )
        if fbar > -1 and fbar > fcolon:
            t, sp = s.rsplit( " -", 1 )
        elif fcolon > -1 and fcolon > fbar:
            t, sp = s.rsplit( " :", 1 )
        else:      
            print( "========== can't split [%s]" % s )
            t, sp = "", ""
       
    elif len( s.split( ": ", 1 )) == 2:
        # format speakers: title
        if verbose: print( [ "format B", s ] )
        sp, t = s.split( ": ", 1 )
       
    elif len( s.split( " - " )) == 2:      
        # format title - speakers
        if verbose: print( [ "format C", s ] )
        t, sp = s.split( " - ", 1 )      
       
    else:
        t, sp = "", ""
        print( "========== can't decode [%s]" % s )   
       
    print( [ t ] )      
    t = t.strip()   
    for c in "'\"":
        if t.startswith( c ) and t.endswith( c ):
            t = t[ 1 : -1 ]
    t = t.strip( " :")
    print( [ t ] )      

    return t, list( sp )


# ===========================================================================

def sanitize_title( s ):
    s = s.strip()
    if s.startswith( "-" ): s = s[ 1 : ]
    s = s.strip().strip( ": " )
    
    for c in [ "'", '"' ]:
        if s.startswith( c ):
            s = s.replace( c, "", 2 )
    s = s.strip( " :").lstrip( " ." ).strip()
    
    return s

# ===========================================================================

def find_nth( s, p, n ):
    i = 0
    while ( i != -1 ) and ( n > 0 ):
        i = s.find( p, i + 1 )
        n -= 1   
    return i

def split_st( meeting, edition, s ):
    # split on first occurrence of " -" or ":"
    print( "   split_st [%s]" % s )
    
    fbar = s.find( " -" )
    fcolon = s.find( ":" )
    
    if fbar > -1 and  ((fbar < fcolon ) or ( fcolon == -1 )):
        speakers, title = s.split( " -", 1 )
    elif fcolon > -1 and (( fcolon < fbar ) or ( fbar == -1 )):
        speakers, title  = s.split( ":", 1 )
    else:      
        # last resort: take first two words as name
        n = find_nth( s, " ", 2 )
        if n > -1:
            speakers, title = s[ : n ], s[ n : ]
        else:
            print( "========== split_st can't split [%s]" % s )
            speakers, title  = "", ""   
       
    return speakers, title   


# ===========================================================================

def split_ts( meeting, edition, s ):
    # split on last occurrence of " -" or ":"
    print( "   split_ts [%s]" % s )
    
    fbar = max( s.rfind( " -" ), s.rfind( "- " ))
    fcolon = s.rfind( ":" )
    
    if fbar > -1 and fbar > fcolon:
        title, speakers  = s[ : fbar ], s[ fbar : ]
    elif fcolon > -1 and fcolon > fbar:
        title, speakers  = s.rsplit( ":", 1 )
    else:      
        print( "========== split_ts can't split [%s]" % s )
        title, speakers  = "", ""   
       
    return speakers, title   
   
# ===========================================================================

def split_by( meeting, edition, s ):
    # split on (first) occurrence of " by "
    split = s.split( " by ", 1 )
    print( "   split_by [%s] %s" % ( s, split ))
    
    title, speakers  = split
       
    return speakers, title   
   
# ===========================================================================

def split_sqt( meeting, edition, s ):   
    # speakers "title"
    print( "   split_sqt [%s]" % s )
    
    s = s.replace( meeting, "" ).replace( edition, "" )
    speakers, title  = s.split( "'", 1 )
    title = title.rstrip( " '" )
    
    return speakers, title

   
# ===========================================================================

def split_cc( meeting, edition, s ):   
    # title [:: speaker])
    print( "   split_cc [%s]" % s )
    
    if s.find( "::" ) > -1:
        speakers, title = s.rsplit( "::", 1 )
    else:
        speakers, title = "", s    
    
    return speakers, title

   
# ===========================================================================

def split_tds( meeting, edition, s ):   
    # title. speaker
    print( "   split_tds [%s]" % s )
 
    s = s.strip( ". " )   
    x = s.find( "." )
    if x < 0: x = s.find( "," )
    
    title, speakers = s[ : x ], s[ x : ]
    
    return speakers, title

   
# ===========================================================================

def split_sdt( meeting, edition, s ):   
    # speaker. title
    print( "   split_sdt [%s]" % s )
    
    s = s.strip( ". " )
    x = s.find( "." )
    if x < 0: x = s.find( "," )
    
    speakers, title = s[ : x ], s[ x : ]
    
    return speakers, title

   
# ===========================================================================

def split_par( meeting, edition, s ):   
    # title (speaker)
    print( "   split_par [%s]" % s )
    
    s = s.strip( ")" )
    title, speakers  = s.rsplit( "(", 1 )
    
    return speakers, title

   
# ===========================================================================

def split_lee( meeting, edition, s ):   
    # [stuff] title
    print( "   split_lee [%s]" % s )
    
    if "]" in s:
        s = s.split( "]" )[ 1 ]
    speakers, title = "unknown", s
    
    return speakers, title

   
# ===========================================================================

def split_jst( meeting, edition, s ):   
    # [junk] speakers : title
    print( "   split_jst [%s]" % s )
    
    if s.startswith( "[" ) and ( s.find( "]" ) > 0 ):
        s = s.split( "]" )[ 1 ]
    speakers, title = s.split( ":", 1 )
    
    return speakers, title

   
# ===========================================================================

def split_interview( meeting, edition, s ):   
    # interviewee
    print( "   split_interview [%s]" % s )
    
    return "interview", "interview with %s" % s.strip( " -:" )

   
# ===========================================================================

def split_panel( meeting, edition, s ):   
    # panel title
    print( "   split_panel [%s]" % s )
    
    return "panel", s.strip( " -:" )

   
# ===========================================================================

def split_goto( meeting, edition, s ):   
    # @ separated
    print( "   split_goto [%s]" % s )
    split = s.replace( "GOTO 2019 @", "" ).split( "@" )
    
    if len( split ) > 1:
        return split[ 1 ].strip(), split[ 0 ].strip()
    else:
        return "", split[ 0 ]    

   
# ===========================================================================

def split_cap( meeting, edition, s ):   
    # Carrie Anne Philbin
    # Advanced CPU Designs: Crash Course Computer Science #9
    
    print( "   split_cap [%s]" % s )
    n = int( ( s + "#0" ).split( "#" )[ 1 ] )
    s = s.split( ": Crash Course Computer Science" )[ 0 ]
    s = "Crash Course Computer Science #%2d : %s" % ( n, s )
    
    return "Carrie Anne Philbin", s

   
# ===========================================================================

cherno_counter = 0

def split_t( meeting, edition, s ):   
    # no speakers mentione3d in the title
    global cherno_counter
    
    if meeting == "Banas":
        return "Derek Banas", s
       
    if meeting == "The Cherno":
        cherno_counter += 1
        return "Cherno", "Cherno's tutorials %2d : %s" % ( cherno_counter, s )
       
    if meeting == "Buckys Programming Tutorials":
        split = s.split( "-", 3 )
        s = split[ 0 ] + ( " - %2d - " % int( split[ 1 ] )) + split[ 2 ]   
        return "Bucky", s
    
    if meeting == "Cave of programming":
        split = s.split( " - ", 2 )
        split2 = split[ 0 ].rsplit( " ", 1 )
        s = "C++ tutorial for beginners - %2d - " % int( split2[ 1 ] )
        s += split[ 1 ]   
        return "Cave (John)", s
    
    if meeting == "Lavavej's Core C++":
        split = s.split( ", ", 2 )
        split2 = split[ 1 ].split( " ", 1 )
        s = "Stephan T. Lavavej's Core C++ %2d of n" % int( split2[ 0 ] )
        return "Stephan T. Lavavej", s
       
    if meeting == "Efficient programming with components":
        if s.find( "Lecture" ) > -1:
            split = s.rsplit( " ", 3 )
            s = "%s %2d %s" % ( split[ 0 ], int( split[ 1 ] ), split[ 2 ] )
        return "Alexander Stepanov", s
         
   
    return "", s

   
# ===========================================================================

def split_tos( meeting, edition, s ):   
    # title, or title (speakers
    
    if "(" in s:
        title, speakers = s.rstrip( ") " ).split( "(", 1 )
    else:
        speakers, title = "", s
       
    return speakers, title

   
# ===========================================================================

def split_tsj( meeting, edition, s ):   
    # title - speakers, other stuff
    # sometimes - in the title
    # sometimes no speakers
    # somtimes title... speakers
    # times OSS+ELC Europe 2020 - s Day 
    
    if s.find( " - " ) < 0:
        s = s.replace( "...", " - " )
       
    if s.replace( " ", "" ).replace( "Europe", "" ). \
        replace( "2020", "" ).startswith( "OSS+ELC-s" ):
            title, speakers = s.replace( " - s", " - Keynotes" ), ""
    elif s.find( " - " ) < 0:
        title, speakers = s, ""
    else:   
        title, speakers = s.rsplit( " - ", 1 )
        speakers = speakers.split( "," )[ 0 ].strip()
       
    return speakers, title

   
# ===========================================================================

def lowercase_remove_spaces( s ):
    return s.lower().replace( " ", "" )

def find_ignorespaces_ignorecase( s, x ):
    return lowercase_remove_spaces( s ).find( lowercase_remove_spaces( s ) ) > -1
   
def split_speakers_and_title( meeting, edition, s, splitter ):
    s = s.strip()
    print( "   split_speakers_and_title [%s]" % s )
    print( "   1", splitter )
    
    s = s.replace( "'s C++Now 2015", " : " )
    
    if( meeting == "FOSDEM" ) and ( edition == "2011" ):
        if s.startswith( "security" ):
            s = "[security]" + s[ 13 : ]
   
    if( splitter == split_sqt and s.count( "'" ) < 2 ):
        splitter = split_ts
   
    for x in [
        "ODB, Advanced Weapons and Tactics - Boris Kolpackov [ CppCon 2014 ]",
        "Convergent Evolution - Karl Niu [ CppCon 2014 ]",
        "0xBADC0DE - Jens Weller [ CppCon 2014 ]",
        "Embarcadero Case Study: Bringing CLANG/LLVM To Windows - John 'JT' Thomas [ CppCon 2014 ]",
        "UI prototyping and development for multiple devices in C++ - John 'JT' Thomas [ CppCon 2014 ]",
        "Rebuilding Boost Date-Time for C++11 - Jeff Garland [ CppCon 2014 ]",
        "Adventures In Updating A Legacy Codebase - Billy Baker [ CppCon 2014 ]",
        "Dynamic, Recursive, Heterogeneous Types in Statically-Typed Languages - Sounders and Jefferey",
        "array_ref: Multidimensional Array References for the C++ Standard Library - Edwards & Lelbach",
    ]:
        if s == x:
            splitter = split_ts
         
    for x in [         
       "Bjarne Stroustrup - GSL ad hoc overview - Meeting C++ 2016",
       "Louis Dionne -  Meeting C++ 2016 - C++ Metaprogramming: evolution and future direction",
       "Meeting C++ 2019 - Howard Hinnant - Design Rationale for the chrono Library",
       "CppCon 2019: David Stone - Removing Metaprogramming From C++, Part 1 of N: constexpr Function Params",
    ]:
        if s == x:
            splitter = split_st   

    print( "   2", splitter )

    for x in [
        "[ BoostCon ]",
        "[ BoostCon 2010 ]",
        "[ Boostcon 2011 ]",
        "[ Boostcon 2011]",
        "[Boostcon11]",
        "[ C++Now 2012 ]",
        "[ C++Now 2013 ]",
        "[ C++Now 2015 ]",
        "[ C++Now 2016 ]",
        "[ C++Now 2018 ]",
        "[ C++Now 2021 ]",
        "Lightning Talks Meeting C++ 2017",
        "Secret Lightning Talks @ Meeting C++ 2017",
        "- Meeting C++ 2019 Secret Lightning Talks",
    ]:
        if s.lower().find( x.lower() ) > -1:
            s = remove_nocase( s, [ x ] )
            splitter = split_ts
         
    print( "   3", splitter )
   
    for x in [
        "Lightning Talks Meeting C++ 2016 -",
        "Meeting C++ 2016:",
        "- Lightningtalks Meeting C++ 2017",
        "- Lightning Talks Meeting C++ 2017",
        "- Secret Lightning Talks -  Meeting C++ 2017",
        "- Secret Lightning Talks",
        "- Meeting C++ Secret Lightning Talks",
        " - Meeting C++ 2015 Lightning Talks",
    ]:
        if s.find( x ) > -1:
            s = s.replace( x, "" )
            splitter = split_st
          
    print( "   4", splitter )
   
    for x in [
        "Meeting C++ 2014",
        "Meeting C++ 2015",
        "Meeting C++ 2016",
        "Meeting C++ 2017",
        "Meeting C++ 2018",
        "Meeting C++ 2019",
        "Meeting C++ online",
        "Lightning Talks",
        "lightning talks",
        "Meeting C++ 2020",
        "Meeting Embedded 2018",
        "- Meeting Embedded 2020",
        "C++Now 2015",
        "C++Now 2017",
        "C++Now 2018",
        "C++Now 2019",
        " - Meeting Cpp 2019",
        "code::dive conference 2014 -",
        "code::dive conference 2015 -",
        "code::dive 2016 conference -",
        "code::dive 2017 -",
        " - code::dive 2018",
        " - code::dive 2019",
        " - code::dive 2020",
        "[ CppCon 2014 ]",
        "CppCon 2014:",
        "CppCon 2015:",
        "CppCon 2016:",
        "[ CppCon 2015 ]",
        "[CppCon 2015]",
        "[ CppCon 2016 ]",
        "[CppCon 2016]",
        "[ CppCon 2017 ]",
        "CppCon 2017",
        "[CppCon 2018]",
        "[ CppCon 2018 ]",
        "CppCon 2018:",
        "CppCon 2019:",
        "CppCon 2019",
        "CppCon 2020",
        "CppCon 20",
        "[CppIndiaCon 2021]",
        "Pacific++ 2017:",
        "Pacific++ 2018:",
        "[C++ on Sea 2019]",
        "[ C++ on Sea 2020 ]",
        "[C++ on Sea 2020]",
        "[ C++ on Sea 20 ]",
        "[ C++ on Sea ]",
        "[ C++ on Sea 2021 ]",
        "C++OnSea 2021",
        " C++onSea",
        " C++ on Sea",
        "[ ACCU 2016 ]",
        "[ACCU 2017]",
        "[ACCU 2018]",
        "[ACCU 2019]",
        "- ACCU 2022",
        "ACCU 22",
        "ACCU Conference 2019",
        "AUDIO FIXED",
        "REMASTERED",
        "ACCU2018",
        "[ACCU 2019]",
        "[CppDay20]",
        "itCppCon20",
        "itCppCon21",
        "Core C++ 2019 ::",
        "Core + 2019 ::",
        "Core C++ 2021 ::",
        "LIGHTNING TALK:",
        "Lightning Talk:",
        "at CppEurope 2020, Bucharest",
        "CppCon",
        "C++ CoreHard Spring 2017",
        "CoreHard Autumn 2016",
        "CoreHard Autumn 2017",
        "CoreHard Spring 2017",
        "C++ CoreHard Autumn 2018",
        "CoreHard Spring 2018",
        "CoreHard Autumn 2019",
        "CoreHard Spring 2019",
        "[MUC++]",
        "GoingNative 2012 - Day 1 -",
        "GoingNative 2012 - Day 2 -",      
        "(C++ Beginner's Lightning Talk)",
        "(C++ Lightning Talk)",
        "(Lightning Talk)",
        "RustConf 2019 - ",
        "RustConf 2020 - ",
        "RustConf 2021 - ",
        "RustFest Barcelona - ",
        " - RustFest Global 2020",
        "FOSDEM 2012 -",
        "fosdem2012",
        "(FOSDEM 2014)",
        "Go Devroom FOSDEM 2015",
        "FOSDEM 2015 - Developer Room -",
        "FOSDEM 2015 - ",
        "FOSDEM 2016 - Aw1120 - ",
        "FOSDEM 2016 - Aw1121 - ",
        "FOSDEM 2016 - Aw1125 - ",
        "FOSDEM 2016 - Aw1126 - ",
        "FOSDEM 2016 - H1301 - ",
        "FOSDEM 2016 - H1308 - ",
        "FOSDEM 2016 - H1309 - ",
        "FOSDEM 2016 - Janson - ",
        "FOSDEM 2016 - K3201 -",
        "FOSDEM 2016 - ",
        "FOSDEM 2017 - ",
        "FOSDEM 2017: ",
        "FOSDEM - ",
        "emBO++ 2019 - ",
        "emBO++ 2020 - ",
        "emBO++ 21 - ",
        "embo ++ 21",
        "emBO++ 21",
        "embo++ 21",
        "embo21++",
        "emBO++ 2020",
        "emBO++ 2018 -",
        " [Meetup C++]",
        "(2018-06-27)",
        "- Code Europe Autumn 2016",
        "- Code Europe Spring 2017",
        "-  Code Europe Spring 2017",
        "- Code Europe Autumn 2017",
        "- Code Europe Spring 201",
        "- Code Europe Spring 20",
        "- Code Europe",
        "2013 :",
        "2013 ", # C++Now
        "2016", # also C++Now
    ]:
        s = s.replace( x, "" )      
       
    # remove "Going Native NN : "   
    # this is a bit crude!
    # s = s.split( ":" )[ 1 ]      
      
    if s.endswith( ".mp4" ):
       s = s[ : -4 ]
         
    # C++Now 2014 omits the speakers
    s = s.strip()
    print( "   missing speakers [%s]" % s )
    for a, b in missing_speakers:
        if s == a:
            s = "%s : %s" % ( b, a )
            splitter = split_st            
      
    s = s.strip()
    if s.endswith( "-" ): s = s[ : -1 ].strip()
    if s.endswith( "(Virtual)" ): s = s.rsplit( "(" )[ 0 ].strip()

    speakers, title = splitter( meeting, edition, s )
    
    title = sanitize_title( title )
    
    if speakers.find( "PART" ) > -1:
        # cppcon 2015 "speaker PART1 'title'"
        a, b = speakers.split( "PART", 1 )
        speakers = a
        title += " (PART %s)" % b.strip()
  
    speakers = speakers.replace( ";", "," )
    speakers = speakers.replace( "&", "," )
    speakers = speakers.replace( " and ", "," )
    speakers = list( map( sanitize_speaker, speakers.split( "," )))
    speakers_eliminate = [ "", "panel", "various", "unknown", "interview" ]
    speakers = list( filter( lambda x : not x in speakers_eliminate, speakers ))
    speakers = sorted( speakers )
    
    return speakers, title
   
   
# ===========================================================================

def words( s ):
    for c in "',:;.":
       s = s.replace( c, " " )
    return s.split()   
   
global_talk_counter = 0         
   
def make_talk( 
    meeting, edition, 
    youtube_id, nr, v, splitter, tags_string 
):
    global global_talk_counter
    s = sanitize_raw_title( v.title, meeting, edition )    
    language = "English"               
    level = 0
    tags = []
    
    if 1: print( "   add_talk", nr, s )
 
    for marker, marked_language in [
        [ "[ITA]", "Italian" ],
        [ "[HEB]", "Hebrew" ],
        [ "[FRE]", "French" ]
    ]:
        if marker in s:
            s = s.replace( marker, "" )
            language = marked_language
          
    if "keynote" in s.lower():
        if tags == []: tags.append( "keynote" )
        s = remove_nocase( s, [ 
            "opening keynote", 
            "center keynote", 
            "closing keynote", 
            "keynote:", 
            "keynote" 
        ] )          
            
    if "hosted" in s.lower():
        if tags == []: tags.append( "panel" )
        s = remove_nocase( s, [ "discussion" ] )
        s = re.split( "hosted", s, flags=re.IGNORECASE )[ 0 ]
        splitter = split_interview      
             
    if "interview" in s.lower():
        if tags == []: tags.append( "interview" )
        s = remove_nocase( s, [ 
            "an interview with", 
            "interview with", 
            "an interview",
            "interview" 
        ] )
        splitter = split_interview      
   
    for c in [ "panel", "fireside chat" ]:
        if c in s.lower():
            if tags == []: tags.append( "panel" )
            s = remove_nocase( s, [ 
                "closing panel", 
                "panel", 
                "Interactive : ",            
                " @ Cindy, Simon, Geeta, James & Mark @ GOTO 2018",
            ] ) 
            splitter = split_panel
       
    for x in [ "grill" , "meet the authors" ]:
        if x in s.lower():
            splitter = split_panel
            if tags == []: tags.append( "panel" )
 
    speakers, title = split_speakers_and_title( 
        meeting, edition, s, splitter )
       
    title = title.replace( "$remove$", "" )
    
    if tags == []:
        # arbitrary choice: 
        # lightning talks are < 20 minutes
        if ( v.length < ( 20 * 60 ) ) or ( title in [ "Lightning Talks" ] ):
            tags.append( "lightning" )            
        else: 
            tags.append( "talk" )               
         
    w = words( title.lower().replace( "c++", "cpp" ).replace( "/", " " ) )
    print( "   words %s" %  w )
    for c in [ 
        "cpp", 
        "rust",
        "stl",
        "ada",
        "php",
        "scala",
        "perl",
        "python",
        "lua",
        "risc-v",
    ]:
        if c in w:
            if not c in tags: 
                tags.append( c.replace( "cpp", "c++" ) )
          
    for c in tags_string:
        t = { 
            'l' : "live",
            'o' : "online",
            '+' : "c++",
            'r' : "rust",
            'h' : "history",
            'e' : "embedded",
            'p' : "python",
            'g' : "go",
            '$' : "perl",
            '5' : "risc-v",
            't' : "tutorial",
        }[ c ]
        if not t in tags: 
            tags.append( t )
            if ( c == 't' ):
                for t in [ "talk", "lightning" ]:
                    if t in tags:
                        tags.remove( t )
           
    for c, t in [
        [ "Embedded - ",                      "embedded" ],
        [ "Geospatial - ",                    "geospatial" ],
        [ "Graphics - ",                      "graphics" ],
        [ "Perl - ",                          "perl" ],
        [ "Smalltalk - ",                     "smalltalk" ],
        [ "Php And Friends - ",               "php" ],
        [ "Developer Room Distributions - ",  "distros" ],
        [ "Distributions - ",                 "distros" ],
        [ "Electronic Design Automation - ",  "eda" ],
        [ "Go - ",                            "go" ],
        [ "Internet Of Things -",             "iot" ],
        [ "Mysql And Friends - ",             "mysql" ],
        [ "Software Defined Radio - ",        "sdr" ],
        [ "[security]",                       "security" ],
     ]:
        if title.startswith( c ):
            title = title.replace( c, "" ).strip()
            if not t in tags: 
                tags.append( t )         
            
    for t in additional_tags.get( youtube_id, "" ).split():
        if not t in tags: 
           tags.append( t )   
       
    global_talk_counter += 1
    id = "%s-%s-%d " % ( meeting.replace( " ", "-" ).lower(), edition, nr )
    print( "[%05d] %s : %s \"%s\" " % ( global_talk_counter, id, speakers, title ) )
       
    return talk(
        number      = None,
        identifier  = id,
        meeting     = meeting, 
        edition     = edition,
        title       = title,
        speakers    = speakers, 
        yid         = youtube_id,
        video       = "https://youtube.com/watch?v=%s" % youtube_id,
        thumbnail   = "http://img.youtube.com/vi/%s/0.jpg" % youtube_id,
        duration    = v.length,
        tags        = tags,
        level       = level,
        language    = language
    ) 
   
   
# ===========================================================================
      
excluded_talks = [
    "Meeting C++ 2014 - Survey Session",
    "Meeting C++ 2014 Update & Survey Session",
    "Timelapse of Meeting C++ 2016 beginning",
    "[old version]The C++20 Synchrononization Library - Bryce Adelstein Lelbach - Meeting C++ 2019",
    "Opening – code::dive 2020",
    "Closing – code::dive 2020",
    "Making of CppEurope 2020 - Bucharest, 25 February",
    "C++ on Sea 2021 C++ Conference Announcement Video - 3 Days of C++ Workshops & C++ Talk Sessions!",
    "ACCU Conference 2019 Highlight Video [ACCU 2019]",
    "ACCU Belfast Conference 2019 - PREVIEW VIDEO - November 2019",
    "[CppDay20] Welcome Message (Marco Arena)",
    "[CppDay20] Closing Message (Marco Arena)",
    "Core C++ 2019 Conference Recap",
    "Core C++ 2019 :: Adi Shavit :: Welcome!",
    "Core C++ 2021 :: Recap",
    "Core C++ 2021  Welcome Words",
    "Core C++ 2021 :: Welcome Words :: Dalit Naor",
    "[old version - see below] Quickly testing legacy code - Clare Macrae [C++ on Sea 2019]",
    "On the way of the 2nd edition in 2021 !",
    "Top 3 Most Viewed GOTO Chicago Talks • GOTO 2018",
    "GOTO Amsterdam 2018 Highlights",
    "GOTO Amsterdam 2019 Highlights",
    "GOTO Berlin 2018 Highlights",
    "GOTO Berlin 2019 Highlights",
    "Top 3 Most Viewed GOTO Berlin Talks • GOTO 2018",
    "GOTO Copenhagen 2019 Highlights",
    "Dibs / Immersive Afrobeats – Artist Performance — RustFest Global 2020",
    "[MONRHEA] – Artist Performance — RustFest Global 2020",
    "Aesthr: Rain on Titan – Artist Performance — RustFest Global 2020",
    "Linalab && !ME – Artist Performance — RustFest Global 2020",
    "Dahlia Fae – Artist Performance — RustFest Global 2020",
    "Summarizing Core C++ 2021",
    "Meeting C++ online tool fair - SonarSource intro",
    "Can We Run C Code And Be Safe",
    "Lessons Learned Running Ssl At Scale",
    "Rearchitecting Linux I O Towards Petascale Storage",
    "USBGuard",
    "EDjCKaE7Aks",
    "VCcSkImcEk0",
    "01 Welcome to the Perl devroom! Claudio Ramirez, Wendy G A  van Dijk",
    "ppTmPUapspI",
    "Every Rhymed Talk Intro by Andre Bogus (llogiq) the Rust Bard",
    "emBO++ 2020 Aftermovie",
    "Code Europe III Edition Autumn 2017 Aftermovie",
    "Code Europe II Edition Spring 2017",
    "",
    "",
    "",
    "",
    "",
]   

def use_nr( nr, nr1, nr2 ):
    if 0: print( nr, nr1, nr2 )
    if nr1 == "*":
        return True
    elif nr2 == "*":
        return nr == int( nr1 )
    else:
        return ( nr >= int( nr1 )) and ( nr <= int( nr2 ))   

def sanitize_path( s ):
    return s.replace( ":", "-" )
        
def add_or_retrieve_talk(  
    talks, full,
    meeting, edition, 
    youtube_id, nr, sp, tg 
):
    path = sanitize_path( os.path.join( "cache", meeting, edition ))
    try:
        os.makedirs( path )
    except:
        pass
    file_name = os.path.join( path, str( nr ) + ".talk" )
    
    if full and os.path.exists( file_name ):
        talk = pickle.load( open( file_name, "rb" ) )
        
    else:
        try:
            v = pafy.new( youtube_id )
        except:
            # should check which error, it is a weird one
            v = None
            talk = None
        if v != None:    
            talk = make_talk( 
                meeting, edition, 
                youtube_id, nr, v, sp, tg )
            pickle.dump( talk, open( file_name, "wb" ) )             
            
    if talk != None:        
        if 0: print( "   maybe exclude [%s]" % talk.title )
        if not (
            ( talk.title in excluded_talks ) 
            or ( talk.yid in excluded_talks )
        ):
            talks.add( talk )      
      
def add_playlist( 
    talks, full,
    meeting, edition, 
    playlists, 
    nr1, nr2 
):
    if 1: 
        print( "add_playlist", meeting, edition, nr1, nr2 )
    nr = 0
    done = []
    for playlist_id, sp, tg in playlists: 
        if playlist_id.startswith( "PL" ):
            ids = youtube_ids( playlist_id )
        else:
            ids = [ playlist_id ]
        for youtube_id in ids:
            nr += 1
            if 0: print( nr, youtube_id, youtube_id in done )
            if not youtube_id in done:
                done.append( youtube_id )
                if use_nr( nr, nr1, nr2 ):
                    add_or_retrieve_talk( 
                        talks, full,
                        meeting, edition, 
                        youtube_id, nr, sp, tg )
                 
                 
# ===========================================================================

playlists = [
    [ "accu", [ 
        [ "2016", [[ "PL9hrFapz4dsObkSjgBlyFl-aotNvk2GeP", split_ts,    "l"  ],
                   [ "PL9hrFapz4dsNx2fwGFwj8NtPzQr2SexTv", split_ts,    "l"  ],
                   [ "PL9hrFapz4dsM1B9bI8VmEE4JJlR0m-dvo", split_ts,    "l"  ],
                   [ "PL9hrFapz4dsM-8qu0wERM5UvCCKEKq3q7", split_ts,    "l"  ]]],
        [ "2017", [[ "PL9hrFapz4dsPvV6X9Iw3Yd2_N4NCoJwPh", split_ts,    "l"  ],
                   [ "PL9hrFapz4dsMDBef2SsNNHDXbEw62qdr6", split_ts,    "l"  ],
                   [ "PL9hrFapz4dsNYgaDy3CL76Cz2J_jSZrHA", split_ts,    "l"  ],
                   [ "PL9hrFapz4dsMQuBQTnHXogJpMj6L_EQ10", split_ts,    "l"  ]]],
        [ "2018", [[ "PL9hrFapz4dsOQmv7bcGoxl0iN3NRm_22N", split_ts,    "l"  ],
                   [ "PL9hrFapz4dsN6KK5gQ5pLCw_VydZnGgmV", split_ts,    "l"  ],
                   [ "PL9hrFapz4dsPSepY_AxxQEf6cjEqXht7B", split_ts,    "l"  ],
                   [ "PL9hrFapz4dsOLfsE8CpS_6Ixx6kIsIFV7", split_ts,    "l"  ]]],
        [ "2019", [[ "PL9hrFapz4dsMrrlvFMvuqy_cdpPadCyL8", split_ts,    "l"  ],
                   [ "PL9hrFapz4dsMmDBjD_hiGaYKTXXLo7bAv", split_ts,    "l"  ],
                   [ "PL9hrFapz4dsODt3aI5adCaZB6KHwz2Tpe", split_ts,    "o"  ], # belfast
                   [ "PL9hrFapz4dsNGsb0DdTDbX6elBLng8lg-", split_ts,    "l"  ],
                   [ "PL9hrFapz4dsMj31ZrsQNEXKqXJRbSXdHS", split_ts,    "l"  ]]],
        [ "2021", [[ "PL5XXu3X6L7jtk7-GIVq3-bkKDKDtoagj4", split_ts,    "o"  ],
                   [ "PL5XXu3X6L7jvWwbkUgMyGpA6VyqGrHbdv", split_ts,    "o"  ],
                   [ "PL5XXu3X6L7jvWwbkUgMyGpA6VyqGrHbdv", split_ts,    "o"  ],
                   [ "PL5XXu3X6L7juIhIykfhFmjyl4D5Tvjvdh", split_ts,    "o"  ]]],
        [ "2022", [[ "PL9hrFapz4dsNx4kjMVgGMP6u37U1dSy7F", split_ts,    "l"  ]]],                   
    ]], [ "Avast C++ Meetup", [ 
        [ "",     [[ "PLcx5OZDrH5tv9Bz9VGYV7fQCUkOTixOVl", split_st,    "l+"  ]]],
    ]], [ "BoostCon", [ 
        [ "2010", [[ "PL_AKIMJc4roVg67uMOpzEpsYTolMvhxho", split_st,    "l+"  ]]],
        [ "2011", [[ "PL_AKIMJc4roWHqe9Wt6AwYS6rpE2P0Rqh", split_st,    "l+"  ]]],
    ]], [ "Buckys Programming Tutorials", [ 
        [ "2014", [[ "PLAE85DE8440AA6B83",                 split_t,     "o+t"  ]]],
    ]], [ "C++ Day", [ 
        [ "2020", [[ "PLsCm1Hs016LX6l97Royt5DSYy7V05nZmS", split_par,   "o+"  ]]],
    ]], [ "C++ Europe", [ 
        [ "2018", [[ "PLKkbEnCSP7sfCuSYTm7gh0leP-HzN7O35", split_st,    "l+"  ]]],
        [ "2019", [[ "PLKkbEnCSP7sezU3eY8f7NrbJp5g4Kfurl", split_st,    "l+"  ]]],
        [ "2020", [[ "PLKkbEnCSP7sek-bn-Ae-b16aa7y_mc2EH", split_st,    "o+"  ]]],
    ]], [ "C++ on sea", [ 
        [ "2019", [[ "PL5XXu3X6L7jtk7-GIVq3-bkKDKDtoagj4", split_ts,    "l+"  ],
                   [ "PL5XXu3X6L7jvWwbkUgMyGpA6VyqGrHbdv", split_ts,    "l+"  ],
                   [ "PL5XXu3X6L7juIhIykfhFmjyl4D5Tvjvdh", split_ts,    "l+"  ]]],
        [ "2020", [[ "PL5XXu3X6L7juEpWIifd7h7c0h1y5s_DbE", split_ts,    "o+"  ],
                   [ "PL5XXu3X6L7jvdtND1SqgA3V-mfappzRIu", split_ts,    "o+"  ],
                   [ "PL5XXu3X6L7jvH9wRBfhzeW3tmazoFSrkC", split_ts,    "o+"  ],
                   [ "PL5XXu3X6L7jtcXY9Ilpv7WhDS6lEo1hBz", split_ts,    "o+"  ]]],
        [ "2021", [[ "PL5XXu3X6L7jsIaVI82HXU3p2yRz2kVDZf", split_ts,    "o+"  ],
                   [ "PL5XXu3X6L7jtLi9qqEAfVfcas5inGLbk9", split_ts,    "o+"  ]]],
    ]], [ "C++IndiaCon", [ 
        [ "2021", [[ "PLZ3iYBI9Conj6Vbm0KZhDAYOiXPVfSfip", split_by,    "o+"  ]]],
    ]], [ "C++Now", [ 
        [ "2012", [[ "PL_AKIMJc4roWXECUOVFsSTn6zs-145shM", split_st,    "l+"  ]]],
        [ "2013", [[ "PL_AKIMJc4roWzZsLGGhWbCAgr8l_Hr978", split_st,    "l+"  ]]],
        [ "2014", [[ "PL_AKIMJc4roXG7rOmqsb_wDG1btCzhS8F", split_ts,    "l+"  ]]],
        [ "2015", [[ "PL_AKIMJc4roX665MVPoqbzHVZFMBzgytT", split_st,    "l+"  ]]],
        [ "2016", [[ "PL_AKIMJc4roU0F3w20Ac77YeOFyvFmaJD", split_st,    "l+"  ]]],
        [ "2017", [[ "PL_AKIMJc4roXJldxjJGtH8PJb4dY6nN1D", split_sqt,   "l+"  ],
                   [ "PL_AKIMJc4roV-ATm4VQH5Tc78_0bruUuI", split_sqt,   "l+"  ]]],
        [ "2018", [[ "PL_AKIMJc4roVSbTTfHReQTl1dc9ms0lWH", split_sqt,   "l+"  ],
                   [ "PL_AKIMJc4roWtkG_Qiw6uwNWcjjG5WLHE", split_sqt,   "l+"  ]]],
        [ "2019", [[ "PL_AKIMJc4roW3jQgghyouFoX15m84YYB0", split_sqt,   "l+"  ],
                   [ "PL_AKIMJc4roXZPycnYPqK-FamxJdISihj", split_sqt,   "l+"  ]]],
        [ "2021", [[ "PL_AKIMJc4roXvFWuYzTL7Xe7j4qukOXPq", split_ts,    "o+"  ],
                   [ "PL_AKIMJc4roXczzBYPB-rsRmG8QTVsfeS", split_ts,    "o+"  ]]],
    ]], [ "Cave of programming", [ 
        [ "2015", [[ "PLmpc3xvYSk4wDCP5zjt2QQXe8-JGHa4Kt", split_t,     "o+t"  ]]],
    ]], [ "code::dive", [ 
        [ "2014", [[ "PLK3T2dt6T1fcZswWn2HbWpRHprPHyJ4wZ", split_st,    "l"   ]]],
        [ "2015", [[ "PLK3T2dt6T1fc-Duvq7ZXz0ZQFcSgVKyl4", split_st,    "l"   ]]],
        [ "2016", [[ "PLK3T2dt6T1fe_K81rfIBdGPfbMlLqeHBT", split_st,    "l"   ]]],
        [ "2017", [[ "PLK3T2dt6T1fdoBo5uqDjhLg5OcZYKh_KU", split_st,    "l"   ],
                   [ "Se9AEznM8TI",                        split_lee,   "l"   ]]],
        [ "2018", [[ "PLK3T2dt6T1fd6PILMU2lg7K6pWnUKl34S", split_ts,    "l"   ]]],
        [ "2019", [[ "PLK3T2dt6T1fd65u8sx01jRrp9aVquXIpN", split_ts,    "l"   ]]],
        [ "2020", [[ "PLK3T2dt6T1feBLbwORz3dBdCylfe0lBlR", split_ts,    "o"   ]]],
    ]], [ "Code Europe", [ 
        [ "2016", [[ "PLC4RM9NjfgabDo2nuTMdLPNZjcNYYHFwy", split_ts,    "l"   ]]],
        [ "2017", [[ "PLC4RM9NjfgaZ4nUCV5U4Qnabs0NN5UoDf", split_ts,    "l"   ]]],
        [ "2018", [[ "PLC4RM9NjfgabQKoFmgjEst9hM-h1g6lRF", split_ts,    "l"   ]]],
    ]], [ "Core C++", [ 
        [ "2019", [[ "PLn4wYlDYx4bszUM8uUJi55czMYuilXfaR", split_cc,    "l+"  ]]],
        [ "2021", [[ "PLn4wYlDYx4bt5jDwyOleg6J4kTtAu2rU5", split_cc,    "l+"  ]]],
    ]], [ "corehard", [ 
        [ "2017", [[ "XWn4_Vu7rUM",                        split_sdt,   "l+"  ],
                   [ "TX6aw2NtgVw",                        split_sdt,   "l+"  ],
                   [ "7wqpeVs6usY",                        split_sdt,   "l+"  ]]],
        [ "2018", [[ "5U8eN1h2_w0",                        split_ts,    "l+"  ],
                   [ "pqpoGJSlrbw",                        split_ts,    "l+"  ],
                   [ "unWsb-u4ors",                        split_ts,    "l+"  ],
                   [ "mIuqlsxAz0M",                        split_ts,    "l+"  ],
                   [ "GcfqHT4RtWc",                        split_sdt,   "l+"  ],
                   [ "560l4b3i4ew",                        split_sdt,   "l+"  ],
                   [ "OY_mS2e4XTk",                        split_sdt,   "l+"  ]]],
        [ "2019", [[ "s9vBk5CxFyY",                        split_tds,   "l+"  ],
                   [ "nqf53MlnMpo",                        split_tds,   "l+"  ],
                   [ "N8i2VITM4Pw",                        split_tds,   "l+"  ],
                   [ "tp9ZoQ6HJM4",                        split_tds,   "l+"  ],
                   [ "EeEjgT4OJ3E",                        split_tds,   "l+"  ],
                   [ "Vv3cz28Un3Y",                        split_tds,   "l+"  ],
                   [ "hcgL8QBmh2I",                        split_tds,   "l+"  ],
                   [ "4QO9FyH0KIY",                        split_tds,   "l+"  ]]],
    ]], [ "CppCon", [ 
        [ "2014", [[ "PLHTh1InhhwT7esTl1bRitiizeEnksGU7J", split_sqt,   "l+"  ]]],
        [ "2015", [[ "PLHTh1InhhwT75gykhs7pqcR_uSiG601oh", split_sqt,   "l+"  ]]],
        [ "2016", [[ "PLHTh1InhhwT7J5jl4vAhO1WvGHUUFgUQH", split_sqt,   "l+"  ]]],
        [ "2017", [[ "PLHTh1InhhwT6bwIpRk0ZbCA0N2p1taxd6", split_sqt,   "l+"  ]]],
        [ "2018", [[ "PLHTh1InhhwT6V9RVdFRoCG_Pm5udDxG1c", split_sqt,   "l+"  ]]],
        [ "2019", [[ "PLHTh1InhhwT6KhvViwRiTR7I5s09dLCSw", split_sqt,   "l+"  ]]],
        [ "2020", [[ "PLHTh1InhhwT6VxYHtoWIvOup9gz0p95Qr", split_ts,    "o+"  ]]],
    ]], [ "CPPP", [ 
        # no playlist
    ]], [ "Dutch C++ Group", [ 
        [ "",     [[ "PLJ8qy7OeQ8LQ3dgDOGAGDXBKvh0UItjE6", split_jst,   "l+"  ]]],
    ]], [ "Efficient programming with components", [ 
        [ "",     [[ "PLHxtyCq_WDLXryyw91lahwdtpZsmo4BGD", split_t,     "lt+"  ]]],
    ]], [ "emBo++", [ 
        [ "2018", [[ "PLIXq8kws1BI1Ff2pLc03aVj3MgKEV0RRL", split_st,    "le+"  ]]],
        [ "2019", [[ "PLIXq8kws1BI0DphR20fuG7n07F0DVM8VA", split_st,    "le+"  ]]],
        [ "2020", [[ "PLIXq8kws1BI36WI541w4gSuKA98ku5gJZ", split_st,    "le+"  ]]],
        [ "2021", [[ "PLIXq8kws1BI13bcTWNriKzirk5ayZehzT", split_st,    "oe+"  ]]],
    ]], [ "FOSDEM", [
        [ "2010", [[ "PLE2E70FE7B03D2FD0",                 split_lee,   "l"   ]]],
        [ "2011", [[ "PLD53AE1C197602E09",                 split_lee,   "l"   ],
                   [ "PLAC607424229CFC1A",                 split_tos,   "l"   ]]],
        [ "2012", [[ "PL31210579EDD785E7",                 split_lee,   "l"   ],
                   [ "PL8B4927E5AF1246B5",                 split_lee,   "l"   ]]],
        [ "2013", [[ "PLt9cyv3LnAHcncBHv8HEOljhK3NrBXg3e", split_lee,   "l"   ]]],
        [ "2014", [[ "PLt9cyv3LnAHdWFTosKHZadBceVNH3EWN9", split_lee,   "l"   ],
                   [ "PLtLJO5JKE5YDKG4WcaNts3IVZqhDmmuBH", split_lee,   "lg"  ],
                   [ "PLUgTyq9ZstaI3t2XKhPjvnm-QBJTQySjD", split_lee,   "lp"  ]]],
        [ "2015", [[ "PLz6de-QSE_1w7ib-xr04OcFyPB3HWH0P9", split_lee,   "l"   ],
                   [ "PLs_6_fgIXu8MlVUsD2BJEMGkqeZZuXPr9", split_lee,   "lg"  ],
                   [ "PLtLJO5JKE5YDK74RZm67xfwaDgeCj7oqb", split_lee,   "lg"  ]]],
        [ "2016", [[ "PLz6de-QSE_1x7BYLUz321_61x4yb_vc4C", split_lee,   "l"   ],
                   [ "PL-Em-BJn1-QNSde0yPBDykv4xT0ge1Es5", split_lee,   "l"   ]]],
        [ "2017", [[ "PL_QKjHDgmNzpCeqapn1plFjv4Dy5VoRYA", split_t,     "l"   ],
                   [ "PLtLJO5JKE5YAA7wdywh8ZJVdTXxnpdhNp", split_t,     "lg"  ],
                   [ "PLxavAW22r8AlqvRG_uG_CWU_ufJqMnJe1", split_st,    "l$"  ]]],
        [ "2018", [[ "PL_QKjHDgmNzpckLNciogFQ79csbL4JtzN", split_lee,   "l"   ],
                   [ "PLtLJO5JKE5YCYgIdpJPxNzWxpMuUWgbVi", split_lee,   "lg"  ],
                   [ "PLlhRHy4mKQlUrv76IIq72yF5WPbD9w_JG", split_lee,   "l"   ], # SDR
                 # [ "PL85XCvVPmGQjBZGvlsXmiT8UAHKUddrI9", split_st,    "lr"  ], # duplicates
                   [ "PL-6cC9LXzNm7nMPxNHSxzkEOyixUsTAwM", split_lee,   "lg"  ]]],
        [ "2019", [[ "PL_QKjHDgmNzrDhscKpNCbMtNYzqg6Srkr", split_t,     "l"   ]]],
                 # [ "PL5Ld68ole7j3GCPJCXNIcOc4KaBfBRGr6", split_t,     "lg"   ]]], # duplicates
                 # [ "PLr3Ro-iL61xZ8-97TWuqUszNVE-gTQd0I", split_t,     "l5"   ]]], # duplicates
        [ "2020", [[ "PL_QKjHDgmNzp7DA4KIR4qC-bjIVDlYdkk", split_t,     "l"   ]]],
    ]], [ "Going Native", [
        [ "2012", [[ "PLGvfHSgImk4aSCKMmnDl8ZXwL2CY6g8lH", split_st,    "l+"  ]]],
        [ "2013", [[ "PLD0gpuCC5_-kVh4Kvr6DfNJ3cBkxiKw1Q", split_st,    "l+"  ]]],
    ]], [ "GOTO Amsterdam", [
        [ "2018", [[ "PLEx5khR4g7PJzxBWC9c6xx0LghEIxCLwm", split_goto,  "l"  ]]],
        [ "2019", [[ "PLEx5khR4g7PKT9RvuVyQxJLO8CZUJzNMy", split_goto,  "l"  ]]],
    ]], [ "GOTO Berlin", [
        [ "2018", [[ "PLEx5khR4g7PJW7u0GKxRPIQddtu69boT3", split_goto,  "l"  ]]],
        [ "2019", [[ "PLEx5khR4g7PKMVeAqZdIHRdOwTM1yktD8", split_goto,  "l"  ]]],
    ]], [ "GOTO Chicago", [
        [ "2018", [[ "PLEx5khR4g7PKqVew27D3jvMknjxjowoKl", split_goto,  "l"  ]]],
        [ "2019", [[ "PLEx5khR4g7PLIxNHQ5Ze0Mz6sAXA8vSPE", split_goto,  "l"  ]]],
        [ "2020", [[ "PLEx5khR4g7PL-JwckuOkkc5cR6X5hn6ug", split_goto,  "l"  ]]],
    ]], [ "GOTO Copenhagen", [
        [ "2018", [[ "PLEx5khR4g7PIzxn476GK3Mkk19csZZjeH", split_goto,  "l"  ]]],
        [ "2019", [[ "PLEx5khR4g7PLHBVGOjNbevChU9DOL3Axj", split_goto,  "l"  ]]],
    ]], [ "GOTO Oslo", [
        [ "2018", [[ "PLEx5khR4g7PI57l4MJvLlhOJIKHLKghos", split_goto,  "l"  ]]],
    ]], [ "GOTOpia", [
        [ "2020", [[ "PLEx5khR4g7PIiAEHCt6LGMFnzq7JjO8we", split_goto,  "o"  ],
                   [ "PLEx5khR4g7PI4l8PnLCv9j3PlePzuQPbm", split_goto,  "o"  ]]],
        [ "2021", [[ "PLEx5khR4g7PI89_ZS_wz5suqCoqFgv-gO", split_goto,  "o"  ]]],
    ]], [ "ItCppCon", [ 
        [ "2020", [[ "PLsCm1Hs016LWIjOrEftUA42ZwxsF30vZB", split_par,   "o+"  ]]],
        [ "2021", [[ "PLsCm1Hs016LV9BRKIqrNWEXfa5ggpiyki", split_par,   "o+"  ]]],
    ]], [ "Lavavej's Core C++", [ 
        [ "2020", [[ "PLnE6dhNYoLZ6Y8k8l4fRz3lk-K6fAp5-K", split_t,   "o+t" ]]],
    ]], [ "Live Embedded Event", [
        [ "2020", [[ "PLn7YTy5_SF4_1ZLsQ29ZGpjZo7aNoLBIt", split_lee,   "oe"  ]]],
        [ "2021", [[ "PLn7YTy5_SF4-FRyY-5zwsKuTCOBRUkY_h", split_lee,   "oe"  ]]],
    ]], [ "Meeting C++", [ 
        [ "2014", [[ "PLRyNF2Y6sca0Luy-3XreR2l2aQ7Hf5ODl", split_ts,    "l+"  ]]],
        [ "2015", [[ "PLRyNF2Y6sca0UKKZ2PTSwF3WrDjABQdcL", split_ts,    "l+"  ]]],
        [ "2016", [[ "PLRyNF2Y6sca06lulacjysyu8RIwfKgYoY", split_ts,    "l+"  ]]],
        [ "2017", [[ "PLRyNF2Y6sca3EUO_RTNv5t7gUmppFl9R1", split_ts,    "l+"  ]]],
        [ "2018", [[ "PLRyNF2Y6sca3bxLLAojbEWaZ2DueRPZVy", split_ts,    "l+"  ]]],
        [ "2019", [[ "PLRyNF2Y6sca27wjBvjc5yg3F1QqZgazKb", split_ts,    "l+"  ],
                   [ "PLRyNF2Y6sca1nKqNGjafqpTke8RmvZIji", split_ts,    "l+"  ]]],
        [ "2020", [[ "PLRyNF2Y6sca0hXu0FG-5SP3lTI-g7srMW", split_st,    "o+"  ]]],
    ]], [ "Meeting C++ online", [ 
        [ "",     [[ "PLRyNF2Y6sca0J0CQje0ulSSPTaYkNE5yp", split_st,    "o+"  ]]],
    ]], [ "Meeting Embedded", [ 
        [ "2018", [[ "PLRyNF2Y6sca0eWtRoUIOW_5wVcghtm9rI", split_ts,    "le"  ]]],
        [ "2020", [[ "PLRyNF2Y6sca3HLKGGixEdBhYHNf0Z0ZPe", split_st,    "oe"  ]]],   
    ]], [ "MUC++", [ 
        [ "",      [[ "PLOqQEh8zIeoBH4gOJM9uZveUMW-uNmty8", split_st,   "l+"  ],   # normal
                    [ "PLO_1k6dh05Q_0yeJETerhbL6GlHsAt5RQ", split_st,   "l+"  ],   # lightning talks
                    [ "PLO_1k6dh05Q9DDnH9-FFkPFxMmgaypLMu", split_st,   "l+"  ],   # LT 2017
                    [ "PLO_1k6dh05Q8s2KA_9skFZdCN55F0tVyw", split_st,   "l+"  ]]], # LT spring 2018
    ]], [ "Open Source Summit", [
        [ "2017", [[ "PLbzoR-pLrL6pISWAq-1cXP4_UZAyRtesk", split_tsj,   "l"  ]]],
        [ "2019", [[ "PLbzoR-pLrL6pamOj4UifcMJf560Ph6mJp", split_tsj,   "l"  ],   # Lyon
                   [ "PLbzoR-pLrL6ol7Cf1g_4rsCda23OiLh8d", split_tsj,   "l"  ]]], # NA
        [ "2020", [[ "PLbzoR-pLrL6rm6j0ZQ5m9niWyrzFJlKLH", split_tsj,   "o"  ],   # Europe
                   [ "PLbzoR-pLrL6oyIqGsEZdb1E4pWzWn9qOZ", split_tsj,   "o"  ]]], # NA
    ]], [ "Oxidize Global", [
        [ "2020", [[ "PL85XCvVPmGQjbJxpRTopnzCVMUwAKsfB7", split_t,     "ro"  ]]],
    ]], [ "Pacific C++", [ 
        [ "2017", [[ "PLd4OrpVodmxUf6WsIJhb2KvYaq9RBuIr3", split_sqt,   "l+"  ]]],
        [ "2018", [[ "PLd4OrpVodmxUCBpzlkPYsiP9hOtLFpAjk", split_sqt,   "l+"  ]]],
    ]], [ "RustConf", [
        [ "2019", [[ "PL85XCvVPmGQhDOUIZBe6u388GydeACbTt", split_by,    "ro"  ]]],
        [ "2020", [[ "PL85XCvVPmGQijqvMcMBfYAwExx1eBu1Ei", split_by,    "ro"  ]]],
        [ "2021", [[ "PL85XCvVPmGQgACNMZlhlRZ4zlKZG_iWH5", split_by,    "ro"  ]]],
    ]], [ "RustFest", [
        [ "2019", [[ "PL85XCvVPmGQg-dewHRpM08JkGrBPdIVHw", split_st,    "rl"  ]]],
        [ "2020", [[ "PL85XCvVPmGQiudPknCxiSpybc5RTfkXe6", split_st,    "ro"  ]]],
    ]], [ "The Cherno", [
        [ "",     [[ "PLlrATfBNZ98dudnM48yfGUldqGD0S4FFb", split_t,     "o+t" ]]],
    ]], [ "Banas", [
        [ "",     [[ "PLGLfVvz_LVvQ9S8YSV0iDsuEU8v11yP9M", split_t,     "o+t" ], # C++
                   [ "PLGLfVvz_LVvS5P7khyR4xDp7T9lCk9PgE", split_t,     "ot"  ], # OO
                   [ "PLF206E906175C7E07",                 split_t,     "ot"  ], # patterns
                   [ "Rub-JsjMhWY",                        split_st,    "ot"  ]]], # C++ intro
    ]], [ "BBC History of Computers", [
        [ "",     [[ "PL1331A4548513EA81",                 split_t,     "lh" ]]],
    ]], [ "Crash Course: Computer Science", [
        [ "",     [[ "PLH2l6uzC4UEW0s7-KewFLBC1D0l6XRfye", split_cap,   "ot" ]]],
    ]], [ "", [ 
        [ "",     [[ "JxI3Eu5DPwE",                        split_st,    "l"   ],   # Nystrom
                   [ "g2tMcMQqSbA",                        split_t,     "lh"  ]]],   # Colossus
    ]],      
]

def remove_and_replace( a ):
    for c in ":- ":
        a = a.replace( c, "" )
    return a.replace( "+", "p" )  

def matches( a, b ):
    "compare, ignore spaces and -, treat + and p as same"
    return ( a == "*" ) or \
        ( remove_and_replace( a ).lower() ==
            remove_and_replace( b ).lower()[ 
                0 : len( remove_and_replace( a ) ) ] )
        
#def match_nr( s ):        
#   return None if s == "*" else int( s )
   
def build( full, match_meeting, match_edition, match1, match2 ):  
    "build and write the list, as far as it matches the criteria"
    
    if 0: 
        print( "build" , full, match_meeting, match_edition, match1, match2 )
        
    start = time.time()
    talks_list = talks()
    for meeting, editions in playlists:
        for edition, playlist in editions:
            if matches( match_meeting, meeting ) \
                and matches( match_edition, edition ):
                   add_playlist( 
                       talks_list, 
                       full,
                       meeting, 
                       edition, 
                       playlist, 
                       match1, 
                       match2 )
    talks_list.write_json( "docs/talks.json" )
    talks_list.write_javascript( "docs/talks.js" )  
    end = time.time()
    
    print( "%s" % str( datetime.timedelta( seconds = end - start )))


# ===========================================================================

javascript_code = """

<BODY onload="startup();">
<HTML>
If you keep seeing this message for more than a few seconds, 
either you must enable javascript, 
or I somehow introduced a javascript error.
</HTML>

<SCRIPT type="text/javascript">

// === copy-back first line =================================================


// ==========================================================================
//
// C++ Talks List
//
// http://www.github.com/wovo/ctl
//
// ==========================================================================


// ==========================================================================
//
// tooling
//
// ==========================================================================

function talk_reference( talk, s ){
    return '<A HREF="' + talk.video + '" target=_blank>' + s + "</A>" 
}

function talk_thumbnail( talk ){
    return '<img src="' + talk.thumbnail 
        + '" height="' + thumbnail_height.toString() + '"' 
        + '" width="'  + thumbnail_width.toString() + '"' 
        + ">"
}

function format_duration( n ){
    var date = new Date(0);
    date.setSeconds( n ); 
    var t = date.toISOString().substr(11, 8);
    n = Math.round( n / ( 24 * 60 * 60 ))
    if( n > 0 ){
        t = n.toString() + "d " + t
    }      
    return t
}

function sanitize( s ){
    return s.replace( " ", "_" ).replace( "'", "" ).replace( ".", "_" )
}

function cap_first_letter( s ){
    return s.charAt(0).toUpperCase() + s.slice(1)
}   

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}


// ==========================================================================
//
// define the interface
//
// ==========================================================================

var thumbnail_height = 75
var thumbnail_width = 100

var selection_criteria = [ 
    "meeting", 
    "edition", 
    "language", 
    "tag", 
    "speaker", 
]
   
var search_criteria = [ 
    "title", 
    "speaker", 
]

const show_checkboxes = [ 
    "all", 
    "title", 
    "thumbnail", 
    "speakers", 
    "details", 
    "tags", 
]

checked_boxes = []
criteria_fields = []


// ==========================================================================
//
// handle url parameters
//
// ==========================================================================

function startup(){
    const queryString = window.location.search
    const urlParams = new URLSearchParams( queryString )
    
    at_least_one = false
    for( b of show_checkboxes ){
        b = "show_" + b
        if( urlParams.has( b ) ){
            checked_boxes[ b ] = true
            checked_boxes.show_all = false
            at_least_one = true
        }
    }      
    if( ! at_least_one ){
        checked_boxes.show_title = true
    }   
    
    for( c of selection_criteria ){
        for( tag of window[ c + "s" ] ){
            sane = "include_" + sanitize( tag )
            if( urlParams.has( sane ) ){
                checked_boxes[ "select_" + c ] = true
                checked_boxes[ sane ] = true 
            }            
        }
    }
    
    for( c of search_criteria ){
        c = "match_" + c
        if( urlParams.has( c ) ){
            criteria_fields[ c ] = urlParams.get( c )
        }
    }
    
    rewrite()
}

function add_parameter( s, p ){
    return s + (( s == "" ) ? "?" : "&" ) + p
}

function url_with_parameters(){
    t = ""
   
    for( b of show_checkboxes ){
        b = "show_" + b
        if( ( b in checked_boxes ) && ( checked_boxes[ b ] ) ){
            t = add_parameter( t, b )
        }
    }
    
    for( c of selection_criteria ){
        sel = "select_" + c
        if(( sel in checked_boxes ) && ( checked_boxes[ sel ] )){
            for( tag of window[ c + "s" ] ){
                sane = "include_" + sanitize( tag )
                if( ( sane in checked_boxes ) && ( checked_boxes[ sane ] ) ){
                    t = add_parameter( t, sane )
                }   
            }            
        }
    }
    
    for( crit of search_criteria ){
        crit = "match_" + crit
        if( crit in criteria_fields ){
            v = criteria_fields[ crit ]
            if( v != "" ){
                t = add_parameter( t, crit + "=" + v )
            }
        }
    }
    
    t = window.location.origin+window.location.pathname + t
    return t
}


// ==========================================================================
//
// (re)generate the html content
//
// ==========================================================================

function index_of_max_entry( a ){
    num_max_occurences = 0
    m = -1
    for( key in a ){
        if( a[ key ] == m ){
            num_max_occurences += 1
        } else if( a[ key ] > m ){
            num_max_occurences = 1
            m = a[ key ]
            k = key
        }  
    }
    return [ k, num_max_occurences ]
}   

function rewrite(){
    var t = ""
 
    t += "<HTML>"
    t += "<head>"
    t += "<title>C++ talks</title>"
    t += "</head>"
    t += "<BODY bgcolor=#94b89d>"
    t += "<TABLE><TR><TD>"
    t += "<IMG SRC=C++.png height=177 width=162>"
    t += "</TD><TD>&nbsp;</TD><TD>"
    t += "<H1>CTL: C++ (and Rust, embedded, ...) Talks List</H1>"
    t += "Last updated " + date_and_time + ".<BR/>"
    t += "Compiled by Wouter van Ooijen (wouter@voti.nl).<BR>"
    t += "Script & raw data available from "
    t += "<A HREF=https://www.github.com/wovo/ctl>"
    t += "www.github.com/wovo/ctl</A>.<P>"
    t += "This is a list of talks about C++, Rust, embedded "
    t += "and related subjects "
    t += "I compiled from youtube playlists. "
    t += "You can select on a specific meeting, edition (year), speaker, "
    t += "talk language (most are in English), various tags, "
    t += "or a combination. "
    t += "<P>"
    t += "Suggestions for other conferences to be included are welcome. "
    t += "I apologize for any inaccuracies and omissions, "
    t += "feel free to supply corrections. "
    t += "For additions, provide youtube playlist(s), but please please "
    t += "use a consistent title format, "
    t += "like 'speaker, speaker : title [other stuff]'."
    t += "</TD></TR><TABLE>"
    t += "<HR>"
    
    r = randomIntFromInterval( 0, quotes.length - 1 )
    t += quotes[ r ] + "<HR>"
    
    // the checkboxes for meetings, editions, etc.
    t += "Select a specific<BR>"
    for( c of selection_criteria ){
        t += selection_html( c )
    }   
    t += "<HR>"
     
    // the text fields to search in the titles or speakers 
    t += "Search for<BR><form>"
    for( c of search_criteria ){
        t += criterium_html( c ) + "<BR>"
    }   
    t += "</form><HR>"
     
    // the checkboxes that determine what to show 
    t += "<TABLE><TR><TD>Show</TD>"
    for( c of show_checkboxes ){
        t += "<TD>" + checkbox_html( 
            "show_" + c, false, "" ) + "</TD>"
    }
    t += "</TR></TABLE><HR>"
    
    // the list of talks
    var n = 0
    var t2 = ""
    var d = 0
    var total_speakers = 0
    var speaker_count = []
    var speaker_minutes = []
    for( s of speakers ){
        speaker_count[ s ] = 0;
        speaker_minutes[ s ] = 0
    }   
    for( const talk of talks ) { 
        if( include_talk( talk )) {
            n += 1
            t2 += talk_html( talk )
            d += talk.duration
            num_sp = talk.speakers.length
            for( speaker of talk.speakers ){
                if( speaker_count[ speaker ] == 0 ){
                    total_speakers += 1
                }   
                speaker_count[ speaker ] += ( 1 / num_sp )
                speaker_minutes[ speaker ] += ( talk.duration / num_sp )
            }
        }   
    }
    t += n.toString() + " entries "
    if( n > 0 ){
        t += "(" + format_duration( d ) + " total duration) "
    }   
    t += '<A HREF="' + url_with_parameters()
    t += '">url for this selection' + "</A> "
    if( total_speakers > 0 ){
        t += total_speakers.toString() + " different speakers; "
        t += "most talks: "
        maxi = index_of_max_entry( speaker_count )
        t += maxi[ 0 ] + " (" 
        if( maxi[ 1 ] > 1 ){
            t += "and " + ( maxi[ 1 ] - 1 ).toString() + " others: "
        }   
        t += Math.round( speaker_count[ maxi[ 0 ] ] ).toString() + "); "
        maxi = index_of_max_entry( speaker_minutes )
        t += "longest total speaking time: " +  maxi[ 0 ] + " (" 
        t += format_duration( Math.round( speaker_minutes[ maxi[ 0 ] ]) ) 
            + " total). "
    }   
    t += "<BR>" + t2
   
    t += "</BODY></HTML>"
    document.open()
    document.write( t )
    document.close()
}


// ==========================================================================
//
// html for one talk
//
// ==========================================================================

function talk_html( talk, thumbnail ){
    var t = "", title = "", details = ""
    
    if( checked_boxes.show_all || checked_boxes.show_title ){
        title += talk_reference( talk, talk.title ) + "<BR>"
    }
   
    if( checked_boxes.show_all || checked_boxes.show_speakers ){
       details += talk.speakers.join( ", " ) + "<BR>"
    }
    
    if( checked_boxes.show_all || checked_boxes.show_details ){
        //details += "ctl-" + talk.number.toString() + " "
        details += talk.identifier + " "
        details += talk.meeting + " " + talk.edition + " "
        details += "(" + format_duration( talk.duration ) + ") "
        details += talk.language + "<BR>"
    }
    
    if( checked_boxes.show_all || checked_boxes.show_tags ){
        details += talk.tags.join( ", " ) + "<BR>"
    }   
    
    if( checked_boxes.show_all || checked_boxes.show_thumbnail ){
        t += "<table><tr><td>"
        t += talk_reference( talk, talk_thumbnail( talk ))
        t += "</td><td>"
        t += title
        t += details
        t += "</td></tr></table>"
     } else {
        t += title
        if( details != "" ){
            t += "<TABLE><TR><TD> </TD><TD>" + details + "<TD></TABLE>"
        }   
    }
     
    return t
}


// ==========================================================================
//
// a selection, with (when selected), 
// the list of options within that sections
//
// ==========================================================================

function selection_html( name ){
    var t = ""
    var list = included_talks_attribute_upto( name, name )
    const sel = "select_" + name
    t += checkbox_html( 
        sel, false, " (" + list.length.toString() + ")" )
    
    if( checked_boxes[ sel ] ){
        t += "<table><tr><td>&nbsp;&nbsp;&nbsp;&nbsp;</td><td>"
        for( c of list ){
            c = "include_" + c
            t += "   " + checkbox_html( c, false, "" )
        }   
        t += "</td></tr></table>"
    }
    return t
}


// ==========================================================================
//
// a checkbox
//
// ==========================================================================

function name_as_shown( s ){
    return cap_first_letter( s.replace( "select_", "" )
       .replace( "include_", "" )
       .replace( "show_", "" ))
}

function checkbox_update( name ){
    checked_boxes[ name ] = ! checked_boxes[ name ]
    rewrite();
}

function checkbox_html( name, def, suffix ) {
    sane_name = sanitize( name )
    if( ! checked_boxes.hasOwnProperty( sane_name )){
        checked_boxes[ sane_name ] = def
    }   
   
   var t = ""
   
    t += "<div><input type=checkbox id=" + name + " name=" + name
    t += " onclick='checkbox_update( " + '"' + sane_name + '"' + ");' "
    t += ( checked_boxes[ sane_name ] ) ? "checked>" : "unchecked>"
    t += "<label for=" + sane_name + ">"
    t += name_as_shown( name ) + suffix
    t += "</label></div>"
    
    return t
}   


// ==========================================================================
//
// a search criterium
//
// ==========================================================================

function criterum_changed(){
    for( c of search_criteria ){
        const sel = "match_" + c
        criteria_fields[ sel ] = document.getElementById( "_" + sel ).value
    } 
    rewrite()  
}

function criterium_html( name ){
    var t = ""
    const sel = "match_" + name
    if( ! criteria_fields.hasOwnProperty( sel ) ){
        criteria_fields[ sel ] = ""
    }   
    const val = criteria_fields[ sel ].replace( "'", "" )
    t += "<label for=_" + sel + ">" + cap_first_letter( name )
    t += "&nbsp;&nbsp;</label>"
    t += "<input onchange='criterum_changed();' type=text size=32" 
    t += " value='" + val + "' "
    t += "   id=_" + sel + " name=_" + sel + ">"
    return t
}


// ==========================================================================
//
// determine whether a talk should be shown
//
// ==========================================================================

function include_talk_by( talk, c ){
    use = true
    if( checked_boxes[ "select_" + c ] ){
        use = false
        for( tag of window[ c + "s" ] ){
            if( checked_boxes[ "include_" + sanitize( tag ) ] ){
               suffix = ""
               if( [ "speaker", "tag" ].includes( c ) ) suffix = "s"
               if( talk[ c + suffix ].includes( tag ) ){
                   use = true
              }   
           }   
        }   
    }   
    return use
}

function include_talk_upto( talk, stop ){
    for( c of selection_criteria ){
       if( c == stop ){
           return true
       }
       if( ! include_talk_by( talk, c )){
           return false
       }   
    }   
    return true
}

function plural( s ){
    if( [ "speaker", "tag" ].includes( s ) ){
        s += "s"
    }
    return s;   
}

function included_talks_attribute_upto( a, c ){
    list = []
    for( talk of talks ){
        if( include_talk_upto( talk, c ) ){
            x = talk[ plural( a ) ]
            if( a == plural( a ) ){ x = [ x ]; }
            for( y of x ){
                if( ( y != "" ) && ! list.includes( y ) ){
                    list.push( y )
                }   
            }   
        }   
    }
    list.sort(
        (a, b) => a.localeCompare(b, undefined, {sensitivity: 'base'})
    )
    return list
}

function include_talk( talk ){
    use = true
    
    use = use && include_talk_upto( talk, "" )
    
    for( c of search_criteria ){
        const sel = "match_" + c
        const s = criteria_fields[ sel ].trim().toLowerCase()
        if( s != "" ){
            sub_use = false
            var suffix = ""
            if( [ "speaker" ].includes( c ) ) suffix = "s" 
            m = talk[ c + suffix ]         
            if( [ "speaker" ].includes( c ) ) m = m.join( " , " )
            if( m.toLowerCase().indexOf( s ) > -1 ){
                sub_use = true
            }   
            use = use && sub_use
        }
    }   
       
    return use   
}

<quotes>

// === copy-back last line ==================================================


date_and_time = "<date-and-time>"

<generated>

</SCRIPT>\n</BODY>
   
"""

additional_tags = {
    "OQgFEkgKx2s" : "naming quality",
    "VN0VNoykxtk" : "units",
    "2Yu8qYFS2R0" : "random",
    "wvtFGa6XJDU" : "quality",
    "rNNnPrMHsAA" : "ub",
    "KtMbQ-hg8vM" : "c++",
    "" : "",
    "" : "",
    "" : "",
    "" : "",
    "" : "",
    "" : "",
}

quotes = [
    "Any fool can write code that a computer can understand. Good "
        "programmers write code that humans can understand. "
        "(Martin Fowler)",
    "War is Peace, Freedom is Slavery, Ignorance is Strength, "
        "Scrum is Agile (George Orwell / Allen Holub)",
    "the agile-industrial complex (Allen Holub?)",
    "Errors are just conditions we refuse to take seriously "
        "(Michael Feathers)",
    "If you're arguing, you're losing (Mike Thomas)",
    "Otherwise intelligent people will likely misunderstand data if "
       "understanding it challenges their preexisting beliefs. "
       "(Kahan et. al.)",
    "Reasoning will never make a man correct an ill opinion, "
        "which by reasoning he never acquired. (Jonathan Swift)",
    "the paradox of the useless fence (Chesterton?)",
    "The S in IoT is for security and the P is for privacy.",
    "What one programmer can do in one month, "
        "two programmers can do in two months. (Fred Brooks)",
    "It is not enough for code to work. (Robert C. Martin)",
    "Clean code always looks like it was written by someone who cares "
        "(Michael Feathers)",  
    "The question of whether computers can think is like the question "
        "of whether submarines can swim. (Edsger Dijkstra)",
    "Programming is a race between software engineers "
        "striving to build bigger and better idiot-proof programs, "
        "and the Universe trying to produce bigger "
        "and better idiots. So far, the Universe is winning. (Rick Cook)",
    "Always code as if the person who ends up maintaining your code will "
        "be a violent psychopath who knows where you live. (John F. Woods)",
    "If debugging is the process of removing bugs, then programming must "
        "be the process of putting them in.",
    "Program testing can be used to show the presence of bugs, "
        "but never to show their absence! (Edsger Dijkstra)",
    "99 little bugs in the code. 99 little bugs in the code. Take one down, "
        "patch it around. 127 little bugs in the code ...",
    "No code has zero defects.",
    "Measuring programming progress by lines of code is like measuring "
        "aircraft building progress by weight. (Bill Gates)",
    "Walking on water and developing software from a specification "
        "are easy if both are frozen. (Edward V Berard)",
    "There are only two kinds of programming languages out there. The ones "
        "people complain about and the ones no one uses. (Bjarne Stroustrup)",
    "C makes it easy to shoot yourself in the foot; C++ makes it harder, but "
        "when you do, it blows your whole leg off. (Bjarne Stroustrup)",
    "The evolution of languages: FORTRAN is a non-typed language. "
        "C is a weakly typed language. Ada is a strongly typed language. "
        "C++ is a strongly hyped language. (Ron Sercely)",
    "C++: an octopus made by nailing extra legs onto a dog. (Steve Taylor)",
    "Without C we only have Obol, Pasal, and BASI.",
    "What’s the object-oriented way to get wealthy? Inheritance.",
    "If you put a million monkeys at a million keyboards, one of them will "
        "eventually write a Java program. The rest of them will "
        "write Perl programs. ()",
    "There’s no obfuscated Perl contest because it’s pointless. (Jeff Polk)",
    "If Java had true garbage collection, most programs would delete "
        "themselves upon execution. (Robert Sewell)",
    "Russian roulette: [ $[ $RANDOM % 6 ] == 0 ] "
        "&& rm -rf / || echo *Click*",
    "There are only two hard things in computer science: "
        "cache invalidation and naming things. (Phil Karlton) ",
    "There are only two hard problems in distributed systems:  "
        "2. Exactly-once delivery "
        "1. Guaranteed order of messages "
        "2. Exactly-once delivery",
    "Keyboard Failure. Press F1 to continue.",
    "There’s no place like 127.0.0.1.",
    "I have not failed. I’ve just found 10,000 ways that won’t work. "
        "(Thomas Edison)",
    "In theory there is no difference between theory and practice - "
        "in practice there is. (Yogi Berra)",
    "Software gets slower faster than hardware gets faster. (Niklaus Wirth)",
    "Good code is its own best documentation. (Steve McConnell)",
    "Adding manpower to a late software project makes it later. "
        "(Fred Brooks)",
    "If you think good architecture is expensive, try bad architecture. "
        "(Brian Foote)",
    "The cheapest, fastest, and most reliable components are those "
        "that aren't there. (Gordon Bell)",
    "When someone says, 'I want a programming language in which I need "
        "only say what I want done' give him a lollipop. (Alan Perlis)",
    "Code reuse is the Holy Grail of Software Engineering. "
        "(Douglas Crockford)",
    "Nine people can't make a baby in a month. (Fred Brooks)",
    "It's better to wait for a productive programmer to become available "
        "than it is to wait for the first available programmer "
        "to become productive. (Steve McConnell)",
    "Don't document bad code - rewrite it. (Brian Kernighan)",
    "Nothing has ever been achieved by the person who says, "
        "'It can't be done.' (Eleanor Roosevelt)",
    "Most of the good programmers do programming not because they expect to "
        "get paid or get adulation by the public, "
        "but because it is fun to program. (Linus Torvalds)",
    "Never make fun of someone who speaks broken English. "
        "It means they know another language. (H. Jackson Brown, Jr.)",
    "It takes a touch of genius - and a lot of courage to move "
        "in the opposite direction. (Albert Einstein)",
    "Talk is cheap. Show me the code. (Linus Torvalds)",
    "Code never lies, comments sometimes do. (Ron Jeffries)",
    "When debugging, novices insert corrective code; "
        "experts remove defective code. (Richard E. Pattis)",
    "What is now proved was once only imagined. (William Blake)",
    "I'm not a great programmer; I'm just a good programmer "
        "with great habits. (Kent Beck)",
    "Good visual layout shows the logical structure of a program. "
        "Steve McConnell",
    "The use of lines of code metrics for productivity and quality "
        "studies [is] to be regarded as professional malpractice "
        "starting in 1995. (Capers Jones)",
    "Without requirements or design, programming is the art of adding "
        "bugs to an empty text file. (Louis Srygley)",
    "Before software can be reusable it first has to be usable. "
        "(Ralph Johnson)",
    "The best method for accelerating a computer is the one "
        "that boosts it by 9.8 m/s2.",
    "If builders built buildings the way programmers wrote programs, "
        "then the first woodpecker that came along would destroy "
        "civilization. (Gerald Weinberg)",
    "There are two ways to write error-free programs; "
        "only the third one works. (Alan J. Perlis)",
    "It’s not a bug – it’s an undocumented feature.",
    "In order to understand recursion, one must first understand recursion.",
    "The best performance improvement is the transition from the "
        "nonworking state to the working state. (J. Osterhout)",
    "Experience is the name everyone gives to their mistakes. (Oscar Wilde)",
    "Perfection is achieved not when there is nothing more to add, "
        "but rather when there is nothing more to take away. "
        "(Antoine de Saint-Exupery)",
    "Code is like humor. When you have to explain it, it’s bad. "
        "(Cory House)",
    "Fix the cause, not the symptom. (Steve Maguire)",
    "Optimism is an occupational hazard of programming: "
        "feedback is the treatment. (Kent Beck)",
    "Programming isn't about what you know; "
        "it's about what you can figure out. (Chris Pine)",
    "The most damaging phrase in the language is.. "
        "it's always been done this way (Grace Hopper)",
    "Don't write better error messages, "
        "write code that doesn't need them. (Jason C. McDonald)",
    "There are only 10 types of people in the world: "
        "Those who understand binary, and those who don’t.",
    "It’s always a long day, 86,400 won’t fit into a short.",
    "Why do programmers always mix up Halloween "
        "and Christmas? Because Oct 31 equals Dec 25.",
    "Q. How did the programmer die in the shower? "
        "He read the shampoo bottle instructions: Lather. Rinse. Repeat.",
    "How many programmers does it take to change a light bulb? "
        "None, it is a hardware problem",
    "A programmer walks to the butcher shop and buys a kilo of meat. "
        "An hour later he comes back upset that the butcher "
        "shortchanged him by 24 grams.",
    "Programming is 10% science, 20% ingenuity, "
        "and 70% getting the ingenuity to work with the science.",
    "The generation of random numbers is too important to be left to chance.",
    "The computer is mightier than the pen, "
        "the sword, and usually, the programmer.",
    "Debugging: Removing the needles from the haystack.",
    "A SQL query goes to a restaurant, walks up to 2 "
        "tables and says 'Can I join you?'",
    "There are three kinds of lies: Lies, damned lies, and benchmarks.",
    "The three most dangerous things in the world are a programmer "
        "with a soldering iron, a hardware engineer with a software patch, "
        "and a user (or manager) with an idea.",
    "PCMCIA: People Can’t Memorize Computer Industry Acronyms",
    "MIPS: Meaningless Indication of Processor Speed",
    "Shaw’s Principle: Build a system that even a fool can "
        "use, and only a fool will want to use it.",
    "What Color is Your Function? (Bob Nystrom)",
    "don't use unsigned for quatities (unknown, cited by John Kalb)",      
    "'Object oriented programs are offered as alternatives to correct ones.'"
    "(Edsger Dijkstra, according to Bob Crawford)",   
    "assert( p = allocateWidget() );",
    "Studpidity is a more dangerous enemy of the good than malice (Bonhoefer)",
    "Never attribute to malice that which is adequately explained by stupidity. "
        "(Hanlon's razor)",
    "All computers wait at the same speed.",
    "There is no reason for any individual to have a computer in his home. "
        "(Ken Olson, President, Digital Equipment Corporation, 1977)",
    "But what is it good for? (Engineer at the Advanced Computing Systems "
        "Division of IBM, commenting on the microchip, 1968)",
    "If McDonalds were run like a software company, one out of every hundred "
        "Big Macs would give you food poisoning, and the response would be, "
        "'We're sorry, here's a coupon for two more.' (Mark Minasi)",
    "You can either have software quality or you can have pointer arithmetic, "
        "but you cannot have both at the same time. (Bertrand Meyer)",
    "Java is, in many ways, C++–. (Michael Feldman)",
        "Computer language design is just like a stroll in the park. "
        "Jurassic Park, that is. (Larry Wall)",
    "Optimism is an occupational hazard of programming; feedback is the "
        "treatment. (Kent Beck)",
    "First learn computer science and all the theory. Next develop a "
        "programming style. Then forget all that and just hack. "
        "(George Carrette)",
    "Writing code has a place in the human hierarchy worth somewhere above "
        "grave robbing and beneath managing. (Gerald Weinberg) ",
    "The best programmers are not marginally better than merely good ones. "
        "They are an order-of-magnitude better, measured by whatever standard: "
        "conceptual creativity, speed, ingenuity of design, or "
        "problem-solving ability. (Randall E. Stross)",
    "The trouble with programmers is that you can never tell what a "
        "programmer is doing until it’s too late. (Seymour Cray)",
    "Software suppliers are trying to make their software packages more "
        "user-friendly. Their best approach so far has been to take all the "
        "old brochures and stamp the words 'user-friendly' on the cover. "
        "(Bill Gates)",
    "Hardware: The parts of a computer system that can be kicked. "
        "(Jeff Pesis)",
    "Some people, when confronted with a problem, think 'I know, I'll use "
        "regular expressions.' Now they have two problems. (Jamie Zawinski)",
    "If you think your management doesn't know what it's doing or that "
        "your organisation turns out low-quality software crap that "
        "embarrasses you, then leave. (Edward Yourdon)",
    "More computing sins are committed in the name of efficiency "
        "(without necessarily achieving it) than for any other single reason "
        "- including blind stupidity. (W.A. Wulf)",
    "As soon as we started programming, we found to our surprise that "
        "it wasn't as easy to get programs right as we had thought. "
        "Debugging had to be discovered. I can remember the exact instant "
        "when I realized that a large part of my life from then on was going "
        "to be spent in finding mistakes in my own programs. "
        "(Maurice Wilkes, 1949)",
    "When I wrote this, only God and I understood what I was doing. "
        "Now, God only knows. (Karl Weierstrass)",
    "The pessimist complains about the wind; the optimist expects it to "
        "change; the realist adjusts the sails. (William Arthur Ward)",
    "An organisation that treats its programmers as morons will soon "
        "have programmers that are willing and able to act like morons only. "
        "(Bjarne Stroustrup)",
    "A notation is important for what it leaves out. (Joseph Stoy)",
    "Without requirements or design, programming is the art of adding "
        "bugs to an empty text file. (Louis Srygley)",
    "It is a painful thing to look at your own trouble amd know that you "
        "yourself and no one else has made it. (Sophocles)",
    "When you think of the long and gloomy history of man, you will find "
        "far more hideous crimes have been committed in the name of obedience "
        "than have been committed in the name of rebellion. (C.P. Snow)",
    "It is difficult to get a man to understand something when his salary "
        "depends on his not understanding it. (Upton Sinclair)",
    "The only sin is to make a choice without knowing you are making one. "
        "(Jonathan Shewchuk)",
    "Putting a good comment on bad code does not redeem the bad code. "
        "(Shawn Sheridan)",
    "Forgive him, for he believes that the customs of his tribe "
        "are the laws of nature! (G.B. Shaw)",
    "If it were done when 'tis done, then 'twere well it were done quickly. "
        "(William Shakespeare)",
    "Those who cannot remember the past are condemned to repeat it. "
        "(George Santayana)",
    "Great minds discuss ideas. Average minds discuss events. "
        "Small minds discuss people. (Eleanor Roosevelt)",
    "Even if you're on the right track, you'll get run over "
        "if you just sit there. (Will Rogers)",
    "We only acknowledge small faults in order to make it appear that we "
        "are free from great ones. (La Rochefoucauld)",
    "A computer lets you make more mistakes faster than any invention in "
        "human history - with the possible exceptions of handguns and "
        "tequila. (Mitche Ratcliffe)",
    "Technology is dominated by two types of people: Those who understand "
        "what they do not manage. Those who manage what they "
        "do not understand. (Putt's Law)",
    "A computer once beat me at chess, but it was no match for me "
        "at kick boxing. (Emo Philips)",
    "The most amazing achievement of the computer software industry is its "
        "continuing cancellation of the steady and staggering gains made "
        "by the computer hardware industry. (Henry Petroski)",
    "If you make a study of failure cases, you will less likely be the "
        "subject of one. (Mike Perkin)",
    "Alas, to wear the mantle of Galileo it is not enough that you be "
        "persecuted by an unkind establishment, you must also be right. "
        "(Bob Park)",
    "Complexity kills. It sucks the life out of developers, it makes "
        "products difficult to plan, build and test, it introduces "
        "security challenges and it causes end-user and "
        "administrator frustration. (Ray Ozzie)",
    "Search all the parks in all your cities; you'll find no statues "
        "of committees. (David Ogilvy)",
    "The truth does not change according to our ability to stomach it. "
        "(Flannery O'Connor)",
    "That's the thing about people who think they hate computers. "
        "What they really hate is lousy programmers. "
        "Larry Niven, Jerry Pournelle)",
    "There's no sense being exact about something if you don't even know "
        "what you're talking about. (John von Neumann)",
    "Any fool can use a computer. Many do. (Ted Nelson)",
    "Incorrect documentation is often worse than no documentation. "
        "(Bertrand Meyer)",
    "Incompetents invariably make trouble for people other than themselves. "
        "(Larry McMurtry)",
    "You can't have great software without a great team, and most software "
        "teams behave like dysfunctional families. (Jim McCarthy)",
    "The proper use of comments is to compensate for our failure to express "
        "ourself in code. (Robert C. Martin)",
    "But in our enthusiasm, we could not resist a radical overhaul of the "
        "system, in which all of its major weaknesses have been exposed, "
        "analyzed, and replaced with new weaknesses. (Bruce Leverett)",
    "The perfect project plan is possible if one first documents a list "
        "of all the unknowns. (Bill Langley)",
    "A distributed system is one in which the failure of a computer you "
        "didn't even know existed can render your own computer unusable. "
        "(Leslie Lamport)",
    "Let us change our traditional attitude to the construction of programs. "
        "Instead of imagining that our main task "
        "is to instruct a computer what "
        "to do, let us concentrate rather on explaining to human beings what "
        "we want a computer to do. (Donald Knuth)",
    "Computers are good at following instructions, but not at reading "
        "your mind. (Donald Knuth)",
    "Trying to outsmart a compiler defeats much of the purpose of using one. "
        "(Kernighan, Plauger)",
    "Believe the terrain, not the map. (Brian W. Kernighan)",
    "Get the weirdnesses into the data where you can manipulate them easily, "
        "and the regularity into the code because regular code is a lot "
        "easier to work with. (Brian W. Kernighan)",
    "It's so easy to become mesmerized by the immediacy of a result that "
        "you don't question its validity. (Naomi Karten)",
    "Perl is another example of filling a tiny, short-term need, and then "
        "being a real problem in the longer term. (Alan Kay)",
    "It's not at all important to get it right the first time. It's vitally "
        "important to get it right the last time. "
        "(Andrew Hunt, David Thomas)",
    "A type system is the most cost effective unit test you'll ever have. "
        "(Peter Hallam)",
    "The key to getting a reputation for being brilliant is actually "
        "being brilliant, not just acting like you are. (Seth Godin)",
    "Don't get me wrong: Emacs is a great operating system; "
        "it lacks a good editor, though. (Thomer M. Gil)",
    "Comparing to another activity is useful if it helps you formulate "
        "questions, it's dangerous when you use it to justify answers. "
        "(Martin Fowler)",
    "Progress in science comes when experiments contradict theory. "
        "(Richard Feynman)",
    "For a sucessful technology, honesty must take precedence "
        "over public relations, for nature cannot be fooled. "
        "(Richard Feynman)",
    "We can't solve problems by using the same kind of thinking "
        "we used when we created them. (Albert Einstein)",
    "Two things are infinite: the universe and human stupidity; "
        "and I'm not sure about the universe. (Albert Einstein)",
    "Do not worry about your difficulties in mathematics. "
        "I can assure you that mine are still greater. (Albert Einstein)",
    "Any code of your own that you haven't looked at for six or more months "
        "might as well have been written by someone else. (Eagleson's law)",
    "Just because the standard provides a cliff in front of you, you are "
        "not necessarily required to jump off it. (Norman Diamond)",
    "Learning is not compulsory. Neither is survival. (W. Edwards Deming)",
    "The generation of random numbers "
        "is too important to be left to chance. "
        "(Robert R. Coveyou)",
    "It has been said that the great scientific disciplines are examples "
        "of giants standing on the shoulders of other giants. It has also "
        "been said that the software industry is an example of midgets "
        "standing on the toes of other midgets. (Alan Cooper)",
    "Organizations which design systems are constrained to produce designs "
        "which are copies of the communication structures of these "
        "organizations. (Conway's Law)",
    "C++ tries to guard against Murphy, not Machiavelli. (Damian Conway)",
    "Einstein argued that there must be simplified explanations of nature, "
        "because God is not capricious or arbitrary. No such faith comforts "
        "the software engineer. (Fred Brooks)",
    "If there's one thing worse than a program that doesn't work when it "
        "should, it's a program that does work when it shouldn't. "
        "(Bob Archer)",
    "It's not reality's job to satisfy our egos.",
    "Enthusiasm, Disillusionment, Panic, Search for the Guilty "
        "Punishment of the Innocent, Praise for non-participants",
    "Sufficiently advanced incompetence is indistinguishable from malice.",
    "Real computer scientists despise the idea of actual hardware. "
        "Hardware has limitations, software doesn't. It's a real shame "
        "that Turing machines are so poor at I/O.",
    "If the lessons of history teach us anything it is that nobody "
        "learns the lessons that history teaches us.",
    "If you can't be a good example, then you'll just have to be a horrible "
        "warning. (Catherine Aird)",
    "640K (bytes RAM) ought to be enough for anybody (Bill Gates)",
    "Can God write a Program so complex that He cannot debug it?",
    "The programming language [abc] was invented so that any idiot could "
        "program a computer, and, as a result, many do.",
    "The use of COBOL cripples the mind; its teaching should, therefore, "
        "be regarded as a criminal offence. (Edsger Dijkstra)",
    "It is often easier to not do something dumb "
        "than it is to do something smart.",
    "I think there's a world market for about five computers "
        "(attr. Thomas J Watson Senior, 1945)",
    "Errors, like straws, upon the surface flow; He who would search "
        "for pearls must dive down below. (John Dryden)",
    "Development has two outputs... Code & Bugs.",
    "There is not now, nor will there ever be, a language in which "
        "it is the least bit difficult to write bad code. (Lawrence Flon)",
    "Why did you call them 'beta'? -- Uhh... 'coz they're beta than nothin.",
    "The whole point of getting things done is knowing what to leave undone. "
        "(Oswald Chambers)",
    "Tell me what you need and I'll tell you how to get along without it.",
    "Computers enable us to in thirty minutes "
        "what we never would have had to do before",
    "Assumption is the mother of all f***ups.",
    "If it is worth doing once, it is worth automating.",
    "Computer programmers don't byte, they nibble a bit.",
    "Never Base a Technical Decision on Political Issues, "
        "never Base a Political Decision on Technical Issues (Geoffrey Jame)",
    "Jesus saves but only Buddha makes incremental backups.",
    "j++; // increment j",
    "If the quality of your insight is very high, "
        "you realise that Martin Fowler "
        "published the idea only five years ago. "
        "If the idea is poor, you realise "
        "that he published your idea more than 10 years ago. (Fowler’s law)",
    "I am not smart, I just screwed up earlier than you did!",
    "While tracking down a long running process, I found the offending "
        "line of code. The bad code had the following comment: "
        "Change so simple, no need to test.",
    "It's hard enough to find an error in your code when you're looking for it; "
        "it's even harder when you've assumed your code is error-free.",
    "Arrogance in computer science is measured in nano-Dijkstras. (Alan Kay)",
    "If you're going to break it, then break it good. Break everything. "
        "Get to the very front of the line. Don't like move up a couple "
        "of slots. That's pointless. (Anders Hejlsberg)",
    "Some programmers try to reach higher by standing on other "
        "programmers' shoulders. Others try to reach higher by standing "
        "on other programmers' toes.",
    "0x2B || !0x2B",
    "The first 90% of the code accounts for the first 90% of the "
        "development time. The remaining 10% of the code accounts for "
        "the other 90% of the development time. (Tom Cargill)",
    "If I have not seen as far as others, it is because giants "
        "were standing on my shoulders. (Hal Abelson)",
    "Process is no substitute for synaptic activity. (Jeff DeLuca)",
    "F × S = k : the product of freedom and security is a constant (Niven)",
    "If your hammer is C++, everything looks like your thumb. "
        "(Scott Douglass)",
    "The reason we plan ahead is so that we "
        "don't have to do anything right now.",
    "Fatal exception at address: Ox13374A40. Press OK to continue.",
    "If it doesn't have to work, we can do it real quick. (Watts Humphrey)",
    "C trades a slap on the wrist at compile time "
        "for a knife in the back at run time.",
    "Simplicity -- the art of maximizing the amount of work not done "
        "-- is essential. (the Agile Manifesto)",
    "It's OK to figure out murder mysteries, but you shouldn't need to "
        "figure out code. You should be able to read it. (Steve McConnell)",
    "When in doubt, leave it out. (Joshua Bloch)",
    "If you use copy and paste while you're coding, you're probably "
        "committing a design error. (David Parnas)",
    "Amateur programmers think there are 1000 bytes in a kilobyte; "
        "Real Programmers know there are 1024 meters in a kilometer.",
    "Computers make it easier to do a lot of things, but most of the things "
        "they make it easier to do don't need to be done. (Andy Rooney)",
    "The third version is the first version that doesn't suck. "
        "(Mike Simpson)",
    "If you've seen one picture of the Mandelbrot Set, "
        "you've seen them all.",
    "What is the difference between "
        "an object methodologist and a terrorist? "
        "You can negotiate with the terrorist.",
    "Good programmers invest the effort to learn "
        "how to use current practices. "
        "Not-so-good programmers just learn the buzzwords, "
        "and that’s been a "
        "software industry constant for a half century. (Boris Beizer)",
    "If you want to confuse your enemies, give them the source code. "
        "If you want to really confuse them, give them the documentation.",
    "Good enough is neither. (Jim Spivey?)",
    "Tell him that language is a virus and that religion is an operating "
        "system and that prayers are just so much f*ng spam. (Neil Gaiman)",
    "For every problem, there is a solution that is simple, "
        "elegant, and wrong. (H.L. Mencken)",
    "If you get it free, it is worthless. If you pay for it, is has value. "
        "If you build it yourself, it is priceless. (Raj More)",
    "C: the language that combines all the elegance "
        "and power of assembly language "
        "with all the readability and maintainability of assembly language",
    "The manager's function is not to make people work, "
        "it is to make it possible for people to work. (Lister)",
    "Compatibility means deliberately repeating other people's mistakes. "
        "(David Wheeler)",
    "Never change a running system. - Never run a changing system.",
    "Two protons walked into a Black Hole.",
    "Every new development contains at least one bug. "
        "Every bug correction is a new development.",
    "The function name should define everything the function does.",
    "One must learn from design patterns, not the design patterns.",
    "Programmers do not die. They just gosub without return.",
    "A fool with a tool is still a fool.",
    "The problem with this code is that it has "
        "far too many levels of misdirection.",
    "I have always found that plans are useless, "
        "but planning is indispensable. (Dwight D. Eisenhower)",
    "The definition of insanity is doing the same thing over and over "
        "and expecting a different result.",
    "Software is either testable or detestable.",
    "If you give someone a program, you will frustrate him for a day; "
        "if you teach them how to program, "
        "you will frustrate him for a lifetime.",
    "Never trust a computer you can’t throw out a window. (Steve Wozniak)",
    "Users are a terrible thing. Systems would be infinitely more "
        "stable without them. (Michael T. Nygard)",
    "There are 10 types of people. Those who can read ternary, "
        "those who can't and those who mistake it for binary. "
        "(Darren Thomas?)",
    "Anything that can go wrong will go wrong, "
        "anything that can't go wrong will go wrong anyway.",
    "Simplicity is the ultimate sophistication. (Leonardo da Vinci)",
    "I love deadlines. I like the whooshing sound they make as they fly by. "
        "(Douglas Adams)",
    "When you want to do something differently from the rest of the world, "
        "it's a good idea to look into whether the rest of the world knows "
        "something you don't.",
    "Go away or I will replace you with a very small shell script!",
    "Worry is a dividend paid to disaster before it is due. (Ian Fleming)",
    "Every truth passes through three stages before it is recognized. "
        "In the first, it is ridiculed, in the second it is opposed, "
        "in the third it is regarded as self-evident. (Arthur Schopenhauer)",
    "It’s hard to read through a book on the principles of magic without "
        "glancing at the cover periodically to make sure it isn’t a book "
        "on software design. (Bruce Tognazzini)",
    "The sooner you get behind in your work, "
        "the more time you have to catch up.",
    "Keyboard not found. Press < F1 > to RESUME.",
    "Better is the enemy of good. (Voltaire)",
    "If it doesn't work, it doesn't matter how fast it doesn't work. "
        "(Ravera)",
    "Manually managing blocks of memory in C is like juggling bars of soap "
        "in a prison shower: It's all fun and games until you "
        "forget about one of them.",
    "My other car is a cdr.",
    "Now I'm a pretty lazy person and am prepared to work quite "
        "hard in order to avoid work. (Martin Fowler)",
    "Only Half of programming is coding. The other 90% is debugging.",
    "People who deal with bits should expect to get bitten. (Jon Bentley)",
    "Just don't create a file called -rf. ( Larry Wall)",
    "God is Real, unless declared Integer. (J. Allan Toogood)",
    "Should array indices start at 0 or 1? My compromise of 0.5 was "
        "rejected without, I thought, proper consideration. "
        "(Stan Kelly-Bootle)",
    "The user is a peripheral that types when you issue a read request. "
        "(Peter Williams)",
    "They did not know it was impossible, so they did it! (Marc Twain)",
    "Your code is both good and original. Unfortunately the parts that are "
        "good are not original, and the parts that are original are not good.",
    "Your mom is so fat she sat on a binary tree and turned it into a "
        "linked list in constant time!",
    "Real Programmers don't comment their code. If it was hard to write, "
        "it should be hard to understand.",
    "Plan to throw one away; you will anyway. (Fred Brooks)",
    "The word 'experienced' often refers to someone who’s gotten away with "
        "doing the wrong thing more frequently than you have. "
        "(Laurence Gonzales)",
    "A C program is like a fast dance on a newly waxed dance floor "
        "by people carrying razors. (Waldi Ravens)",
    "A common mistake that people make when trying to design something "
        "completely foolproof is to underestimate the ingenuity of "
        "complete fools. (Douglas Adams)",
    "The two most common elements in the universe "
        "are hydrogen and stupidity. (Harlan Ellison)",
    "Work expands so as to fill the time available for its completion. "
        "(Parkinson’s Law)",
    "Good design adds value faster than it adds cost. (Thomas C. Gale)",
    "Program testing can be a very effective way to show the presence of "
        "bugs, but is hopelessly inadequate for showing their absence. "
        "(Edsger Dijkstra)",
    "Multi-threading is the art of screwing things up before, "
        "during or after something else.",
    "If you can't explain something to a six-year-old, you really don't "
        "understand it yourself. (Albert Einstein)",
    "Let the code run free, if it needs to be debugged, it will come back.",
    "Programmers usually have good reasons for making bad decisions.",
    "Before software can be reusable it first has to be usable.",
    "Make it correct, make it clear, make it concise, make it fast. "
        "In that order. (Wes Dyer)",
    "Nothing is more permanent than a temporary solution. "
        "(Thomas' First Law)",
    "Giving pointers and threads to programmers is like giving "
        "whisky and car keys to teenagers",
    "Beware of programmers who carry screwdrivers. (Leonard Brandwein)",
    "Java. The elegant simplicity of C++. The blazing speed of Smalltalk.",
    "Pasting code from the Internet into production code is "
        "like chewing gum found in the street.",
    "How does a large software project get to be one year late? "
        "One day at a time! (Fred Brooks)",
    "Simplicity is prerequisite for reliability. (Edsger Dijkstra)",
    "Man is the best computer we can put aboard a spacecraft...and the only "
        "one that can be mass produced with unskilled labor. "
        "(Wernher von Braun)",
    "Good judgement is the result of experience. Experience is the "
        "result of bad judgement. (Fred Brooks)",
    "There are two major products that come out of Berkeley: LSD and UNIX. "
        "We don't believe this to be a coincidence. (Jeremy S. Anderson)",
    "Confidence, n.: "
        "The feeling you have before you understand the situation",
    "It is easier to optimize correct code than to correct optimized code.",
    "Never memorize what you can look up in books. (Albert Einstein)",
    "Sufficiently advanced incompetence is indistinguishable from malice. "
        "(Clark's law, after J. Porter Clark)",
    "If you don't have time to do it right, when will you have time "
        "to do it over? (John Wooden)",
    "You start writing code, I'll go see what the customer wants.",
    "Any sufficiently advanced technology is indistinguishable from magic."
        "(Arthur C Clarke)",
    "If I had more time, I would have written a shorter letter. (Cicero)",
    "If we're supposed to work in Hex, why have we only got A fingers?",
    "% rm -rf * .o",
    "A good programmer looks both ways before crossing a one-way street.",
    "Anyone who considers arithmetic methods of producing random digits is, "
        "of course, in a state of sin. (John von Neumann)",
    "Better train people and risk they leave – "
        "than do nothing and risk they stay.",
    "A computer is a stupid machine with the ability to do incredibly "
        "smart things, while computer programmers are smart people with the "
        "ability to do incredibly stupid things. They are, in short, "
        "a perfect match (Bill Bryson)",
    "C++ : Where friends have access to your private members. "
        "(Gavin Russell Baker)",
    "The greatest performance improvement of all is when a "
        "system goes from not-working to working. (John Ousterhout)",
    "We better hurry up and start coding, "
        "there are going to be a lot of bugs to fix.",
    "All problems in computer science can be solved by another level "
        "of indirection. (David Wheeler?)",
    "If builders built buildings the way programmers wrote programs, "
        "then the first woodpecker that came along "
        "would destroy civilization. (Gerald Weinberg)",
    "One day my daughter came in, looked over my shoulder at some "
        "Perl 4 code, and said, 'What is that, swearing?' (Larry Wall)",
    "Software and cathedrals are much the same – first we build them, "
        "then we pray. (Sam Redwine)",
    "He who hasn't hacked assembly language as a youth has no heart. "
    "He who does as an adult has no brain. (John Moore)",
    "One in a million is next Tuesday. (Gordon Letwin)",
    "The most important thing in a programming language is the name. "
        "A language will not succeed without a good name. "
        "I have recently invented a very good name, and now I am "
        "looking for a suitable language. (Donald Knuth)",
    "We should forget about small efficiencies, say about 97% of the time: "
        "premature optimization is the root of all evil. (Donald Knuth)",
    "There is no programming language, no matter how structured, "
        "that will prevent programmers from making bad programs. "
        "(Larry Flon)",
    "The cleaner and nicer the program, the faster it's going to run. "
        "And if it doesn't, it'll be easy to make it fast. (Joshua Bloch)",
    "There's no test like production.",
    "You can have the project: Done On Time, Done On Budget, "
        "Done Properly. Pick any two.",
    "Every language has an optimization operator. "
        "In C++ that operator is '//'",
    "Any fool can write code that a computer can understand. "
        "Good programmers write code that humans can understand. "
        "(Martin Fowler)",
    "Whereas Europeans generally pronounce my name the right way "
        "('Nick-louse Veert'), Americans invariably mangle it into "
        "'Nickel's Worth.' This is to say that Europeans call me by "
        "name, but Americans call me by value. (Niklaus Wirth)",
    "You can stand on the shoulders of giants OR a big enough "
        "pile of dwarfs, works either way.",
    "An expert is a man who has made all the mistakes that can be made in "
        "a very narrow field. (Niels Bohr)",
    "Beware of bugs in the above code; I have only proved it correct, "
        "not tried it. (Donald Knuth)",
    "There are only 3 numbers of interest to a computer architect: "
        "1, 0 and infinity.",
    "Engineers are all basically high-functioning autistics "
        "who have no idea how normal people do stuff. (Cory Doctorow)",
    "I invented the term Object-Oriented, and I can tell you I "
        "did not have C++ in mind. (Alan Kay)",
    "Perl - The only language that looks the same before and "
        "after RSA encryption. (Keith Bostic)",
    "Computer Science is no more about computers than astronomy is "
        "about telescopes. (E. W. Dijkstra)",
    "It works on my machine. (Anonymous programmer)",
    "I have always wished for my computer to be as easy to use as my "
        "telephone; my wish has come true because I can no longer figure "
        "out how to use my telephone (Bjarne Stroustrup)",
    "If we developed a way to program in clear, simple English, "
        "we would discover that programmers could not "
        "write clear, simple English. (Hoare? Hansen?)",
    "Did you hear about the man who got cooled to absolute zero? "
        "He's 0K now.",
    "There is only one boss: the customer. And he can fire everybody in "
        "the company from the chairman on down, "
        "simply by spending his money somewhere else. (Sam Walton)",
    "The agile notion of constantly soliciting customer feedback and "
        "incorporating that input into a product "
        "is a brilliant way to produce prototypes.",
    "The customer is often wrong.",
    "Stupidity is causing loss to others without gain for yourself "
        "(Carlo Cipolla)",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
]


# ===========================================================================

if __name__ == "__main__":
    """
    C++ Talks List generator command line interface
   
    four arguments (not case sensitive, '+'=='p', * matches any):
        meeting   
        edition
        from this number
        up to and including this number 
           (if omitted: only the starting number)
           
    When one or more arguments are specified, 
    results are fetched from the web and written to the cache.
    The generated html and json will contain only the matching results.
    
    When no arguments are specified, available results are taken from
    the cache. Results that are not available are taken from
    the web, and written to the cache.
    The generated html and json files will contain all results.
    """
    args = sys.argv[ 1 : ] + [ "*", "*", "*", "*", "*" ]
    if args[ 0 ] == "keep":
        args = args[ 1 : ]
        keep = True
    else:
        keep = len( sys.argv ) == 1    
    build( 
        keep, 
        args[ 0 ], args[ 1 ], args[ 2 ], args[ 3 ] 
    )