# ===========================================================================
#
# File      : talks.py
# Part of   : the C++ Talks List (CTL)
# Copyright : Wouter van Ooijen 2021
# repo      : https://www.github.com/wovo/ctl
#
# This code is distributed under the Boost Software License, Version 1.0.
# (See accompanying boost.txt file or copy at 
# http://www.boost.org/LICENSE_1_0.txt)
#
# dependecies: python3.9 or higher, request, pafy
#
# C:\Python39\lib\site-packages\pafy\backend_youtube_dl.py", line 53
# changed to [] to get( .., 0 )
# same for dislikes
#
# notes & todo:
# talk nr is sometimes 'wrong'
# show both ctl- and meeting-edition-nr
# cleanup 'ignores' list (generate)
# python cleanup
# full regeneration takes ~ 26m, and sometimes a failure: cache things?
# log all prints to a log file?
# one talk in 'panel' that isn't a panel
# add some trivia (top nr of talks, nr of minutes)
# FOSDEM (lots of talks, but maybe not so interesting?)
# embo++, ADC++ (no playlists?)
# Meetup Modena/Online 2021 - all italian?
# code::dive 2016 conference – Chandler Carruth – Panel-style extended Q&A / AmA
# Core C++ 2019 :: Rafi Wiener :: Interview Question
# itCppCon20 - The Silicon Valley coding interview (Nicolo Valigi)
# Welcome (Marco Arena) + 'WARNING: std::find is broken
# first write only the fixed text, then full rewrite
#
# more tags: units, naming
# how to record tags??
# tag 'time travel': units
# When Should You Give Two Things the Same Name?: naming, quality
#
# ===========================================================================

import sys, glob, os, json, urllib.request, re, pafy, datetime, time

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
   "ł": "l",      "ñ": "n",      "’": "'",      "＜": "<",      "＞": ">",
   "ň": "n",      "ř": "r",      "ý": "y",      "ń": "n",      "=": "=",
   "ü": "u",      "“": "'",      "”": "'",      "\"": "'",      "ç": "c",
   "–": "-",      "ć": "c",      "Á": "A",      "Ł": "L",      "ö": "o",
   "Č": "C",      "ć": "c",      "ä": "a",      "ë": "e",      "ó": "o",
   "ś": "s",      "ę": "e",      "ź": "z",      "î": "i",      "ą": "a",
   "ă": "a",      "ț": "t",      "ß": "ss",     "Š": "S",      "š": "s",
   "ž": "z",      "`": "'",      "—": "-",      "Ş": "S",      "…": "...",
   "ż": "z",      "′": "'",      "Ç": "C",      "À": "A",      "©": "(C)",
   "≤": "=<",     "Ó": "O",      "⬆️": "^",      "È": "E",      "ì": "i",
   "→": "->",     "λ": "lambda", "ï": "i",      "ò": "o",      "∞": "lemniscate",
   "𝐂": "C",      "á": "a",      "́": "",        "æ": "ae",     "➠": "",
   "\u0308": "",  "à": "a",
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
   return s.lower().strip().replace( "'", "" )   

   
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
   
def youtube_ids( playlist ):
   url = "https://www.youtube.com/playlist?list=%s" % playlist
   return re.findall( r"watch\?v=(\S{11})", page_content( url ) )
   
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
         video       : str, 
         thumbnail   : str, 
         duration    : str,
         tags        : list[ str ],
         level       : int,
         language    : str
   ):
      self.number      = number
      self.identifier  = identifier.strip()
      self.meeting     = meeting.strip()
      self.edition     = edition.strip()
      self.title       = title.strip()
      self.speakers    = sorted( speakers )
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
      self.editions.add( talk.edition )
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
   
   # naughty boy, especially the two '
   s = s.replace( "Nevin ':-)' Liber", "Nevin Liber" )   
   
   # WTF did he put in his title?
   if s.startswith( "CppCon 2019: JeanHeyd Meneide 'Catch" ):
      s = "CppCon 2019: JeanHeyd Meneide 'Catch [^]: Unicode for C++23'"
   
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
   [ "Vicente Botet",                "Vicente J. Botet Escriba" ],
   [ "Paul Bendixen",                "Paul M. Bendixen" ],
   [ "Dr. Kenneth Holmqvist",        "Kenneth Holmqvist" ],
   [ "Prof. Jurgen Mottok",          "Jurgen Mottok" ],
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
      "Moderator" 
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
   
   for c in "'\"":
      if s.startswith( c ) and s.endswith( c ):
         s = s[ 1 : -1 ]
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
   print( "   split_by [%s]" % s )
   
   title, speakers  = s.split( " by ", 1 )
      
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
   # title (speaker)
   print( "   split_cc [%s]" % s )
   
   speakers, title = s.rsplit( "::", 1 )
   
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

def lowercase_remove_spaces( s ):
   return s.lower().replace( " ", "" )

def find_ignorespaces_ignorecase( s, x ):
   return lowercase_remove_spaces( s ).find( lowercase_remove_spaces( s ) ) > -1
   
def split_speakers_and_title( meeting, edition, s, splitter ):
   s = s.strip()
   print( "   split_speakers_and_title [%s]" % s )
   print( "   1", splitter )
   
   s = s.replace( "'s C++Now 2015", " : " )
   
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
      "Lightning Talks",
      "Meeting C++ 2020",
      "Meeting Embedded 2018",
      "- Meeting Embedded 2020",
      "C++Now 2015",
      "C++Now 2017",
      "C++Now 2018",
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
      "2013 ", # C++Now
      "2016", # also C++Now
   ]:
      s = s.replace( x, "" )
         
   # C++Now 2014 omits the speakers
   s = s.strip()
   print( "   missing speakers [%s]" % s )
   for a, b in missing_speakers:
      if s == a:
         s = "%s : %s" % ( b, a )
         splitter = split_st
      
   if meeting == "C++Now":
      s = s.replace( "2013 :", "" )               
      
   s = s.strip()
   if s.endswith( "-" ): s = s[ : -1 ].strip()

   speakers, title = splitter( meeting, edition, s )
   
   title = sanitize_title( title )
   
   if speakers.find( "PART" ) > -1:
      # cppcon 2015 "speaker PART1 'title'"
      a, b = speakers.split( "PART", 1 )
      speakers = a
      title += " (PART %s)" % b.strip()
  
   speakers = speakers.replace( "&", "," )
   speakers = speakers.replace( " and ", "," )
   speakers = list( map( sanitize_speaker, speakers.split( "," )))
   speakers_eliminate = [ "", "panel", "various", "unknown", "interview" ]
   speakers = list( filter( lambda x : not x in speakers_eliminate, speakers ))
   speakers = sorted( speakers )
   
   return speakers, title
   
   
# ===========================================================================
   
def add_talk( 
   talks, meeting, edition, youtube_id, nr, v, splitter, tags_string 
):
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
      
   if "panel" in s.lower():
      if tags == []: tags.append( "panel" )
      s = remove_nocase( s, [ 
         "closing panel", 
         "panel", 
      ] ) 
      splitter = split_panel
      
   for x in [ "grill" , "meet the authors" ]:
      if x in s.lower():
         splitter = split_panel
         if tags == []: tags.append( "panel" )

   speakers, title = split_speakers_and_title( 
      meeting, edition, s, splitter )
      
   if tags == []:
      # arbitrary choice: 
      # lightning talks are < 20 minutes
      if v.length < ( 20 * 60 ):
        tags.append( "lightning" )            
      else: 
        tags.append( "talk" )      
        
   for c in tags_string:
      tags.append( {
         'l' : "live",
         'o' : "online",
         '+' : "c++",
         'e' : "embedded",
      }[ c ] )   
      
   if title.lower().find( "c++" ) and not "c++" in tags:
      tags.append( "c++" )
      
   id = "%s-%s-%d " % ( meeting, edition, nr )
   print( "%s : %s \"%s\" " % ( id, speakers, title ) )
      
   talks.add( talk(
      number      = None,
      identifier  = id,
      meeting     = meeting, 
      edition     = edition,
      title       = title,
      speakers    = speakers, 
      video       = "https://youtube.com/watch?v=%s" % youtube_id,
      thumbnail   = "http://img.youtube.com/vi/%s/0.jpg" % youtube_id,
      duration    = v.length,
      tags        = tags,
      level       = level,
      language    = language
   ))  
   
   
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
   "",
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
      

def add_playlist( talks, meeting, edition, playlists, nr1, nr2 ):
   if 1: print( "add_playlist", meeting, edition, nr1, nr2, playlists )
   nr = 0
   done = []
   for playlist_id, sp, tg in playlists: 
      if len( playlist_id ) < 30:
         ids = [ playlist_id ]
      else:
         ids = youtube_ids( playlist_id )
      for youtube_id in ids:
         nr += 1
         if 0: print( nr, youtube_id, youtube_id in done )
         if not youtube_id in done:
            done.append( youtube_id )
            if use_nr( nr, nr1, nr2 ):
               v = pafy.new( youtube_id )
               if not v.title in excluded_talks:
                  add_talk( 
                     talks, meeting, edition, youtube_id, nr, v, sp, tg )
               
               
# ===========================================================================

playlists = [
   [ "BoostCon", [ 
      [ "2010", [[ "PL_AKIMJc4roVg67uMOpzEpsYTolMvhxho", split_st,  "l+"  ]]],
      [ "2011", [[ "PL_AKIMJc4roWHqe9Wt6AwYS6rpE2P0Rqh", split_st,  "l+"  ]]],
   ]], [ "C++Now", [ 
      [ "2012", [[ "PL_AKIMJc4roWXECUOVFsSTn6zs-145shM", split_st,  "l+"  ]]],
      [ "2013", [[ "PL_AKIMJc4roWzZsLGGhWbCAgr8l_Hr978", split_st,  "l+"  ]]],
      [ "2014", [[ "PL_AKIMJc4roXG7rOmqsb_wDG1btCzhS8F", split_ts,  "l+"  ]]],
      [ "2015", [[ "PL_AKIMJc4roX665MVPoqbzHVZFMBzgytT", split_st,  "l+"  ]]],
      [ "2016", [[ "PL_AKIMJc4roU0F3w20Ac77YeOFyvFmaJD", split_st,  "l+"  ]]],
      [ "2017", [[ "PL_AKIMJc4roXJldxjJGtH8PJb4dY6nN1D", split_sqt, "l+"  ]]],
      [ "2018", [[ "PL_AKIMJc4roVSbTTfHReQTl1dc9ms0lWH", split_sqt, "l+"  ]]],
      [ "2019", [[ "PL_AKIMJc4roW3jQgghyouFoX15m84YYB0", split_sqt, "l+"  ]]],
      [ "2021", [[ "PL_AKIMJc4roXvFWuYzTL7Xe7j4qukOXPq", split_ts,  "o+"  ]]],
   ]], [ "Meeting C++", [ 
      [ "2014", [[ "PLRyNF2Y6sca0Luy-3XreR2l2aQ7Hf5ODl", split_ts,  "l+"  ]]],
      [ "2015", [[ "PLRyNF2Y6sca0UKKZ2PTSwF3WrDjABQdcL", split_ts,  "l+"  ]]],
      [ "2016", [[ "PLRyNF2Y6sca06lulacjysyu8RIwfKgYoY", split_ts,  "l+"  ]]],
      [ "2017", [[ "PLRyNF2Y6sca3EUO_RTNv5t7gUmppFl9R1", split_ts,  "l+"  ]]],
      [ "2018", [[ "PLRyNF2Y6sca3bxLLAojbEWaZ2DueRPZVy", split_ts,  "l+"  ]]],
      [ "2019", [[ "PLRyNF2Y6sca27wjBvjc5yg3F1QqZgazKb", split_ts,  "l+"  ],
                 [ "PLRyNF2Y6sca1nKqNGjafqpTke8RmvZIji", split_ts,  "l+"  ]]],
      [ "2020", [[ "PLRyNF2Y6sca0hXu0FG-5SP3lTI-g7srMW", split_st,  "o+"  ]]],
   ]], [ "Meeting Embedded", [ 
      [ "2018", [[ "PLRyNF2Y6sca0eWtRoUIOW_5wVcghtm9rI", split_ts,  "le"  ]]],
      [ "2020", [[ "PLRyNF2Y6sca3HLKGGixEdBhYHNf0Z0ZPe", split_st,  "oe"  ]]],     
   ]], [ "CppCon", [ 
      [ "2014", [[ "PLHTh1InhhwT7esTl1bRitiizeEnksGU7J", split_sqt, "l+"  ]]],
      [ "2015", [[ "PLHTh1InhhwT75gykhs7pqcR_uSiG601oh", split_sqt, "l+"  ]]],
      [ "2016", [[ "PLHTh1InhhwT7J5jl4vAhO1WvGHUUFgUQH", split_sqt, "l+"  ]]],
      [ "2017", [[ "PLHTh1InhhwT6bwIpRk0ZbCA0N2p1taxd6", split_sqt, "l+"  ]]],
      [ "2018", [[ "PLHTh1InhhwT6V9RVdFRoCG_Pm5udDxG1c", split_sqt, "l+"  ]]],
      [ "2019", [[ "PLHTh1InhhwT6KhvViwRiTR7I5s09dLCSw", split_sqt, "l+"  ]]],
      [ "2020", [[ "PLHTh1InhhwT6VxYHtoWIvOup9gz0p95Qr", split_ts,  "o+"  ]]],
   ]], [ "code::dive", [ 
      [ "2014", [[ "PLK3T2dt6T1fcZswWn2HbWpRHprPHyJ4wZ", split_st,  "l"   ]]],
      [ "2015", [[ "PLK3T2dt6T1fc-Duvq7ZXz0ZQFcSgVKyl4", split_st,  "l"   ]]],
      [ "2016", [[ "PLK3T2dt6T1fe_K81rfIBdGPfbMlLqeHBT", split_st,  "l"   ]]],
      [ "2017", [[ "PLK3T2dt6T1fdoBo5uqDjhLg5OcZYKh_KU", split_st,  "l"   ],
                 [ "Se9AEznM8TI",                        split_lee, "l"   ]]],
      [ "2018", [[ "PLK3T2dt6T1fd6PILMU2lg7K6pWnUKl34S", split_ts,  "l"   ]]],
      [ "2019", [[ "PLK3T2dt6T1fd65u8sx01jRrp9aVquXIpN", split_ts,  "l"   ]]],
      [ "2020", [[ "PLK3T2dt6T1feBLbwORz3dBdCylfe0lBlR", split_ts,  "o"   ]]],
   ]], [ "accu", [ 
      [ "2016", [[ "PL9hrFapz4dsObkSjgBlyFl-aotNvk2GeP", split_ts,  "l"  ],
                 [ "PL9hrFapz4dsNx2fwGFwj8NtPzQr2SexTv", split_ts,  "l"  ],
                 [ "PL9hrFapz4dsM1B9bI8VmEE4JJlR0m-dvo", split_ts,  "l"  ],
                 [ "PL9hrFapz4dsM-8qu0wERM5UvCCKEKq3q7", split_ts,  "l"  ]]],
      [ "2017", [[ "PL9hrFapz4dsPvV6X9Iw3Yd2_N4NCoJwPh", split_ts,  "l"  ],
                 [ "PL9hrFapz4dsMDBef2SsNNHDXbEw62qdr6", split_ts,  "l"  ],
                 [ "PL9hrFapz4dsNYgaDy3CL76Cz2J_jSZrHA", split_ts,  "l"  ],
                 [ "PL9hrFapz4dsMQuBQTnHXogJpMj6L_EQ10", split_ts,  "l"  ]]],
      [ "2018", [[ "PL9hrFapz4dsOQmv7bcGoxl0iN3NRm_22N", split_ts,  "l"  ],
                 [ "PL9hrFapz4dsN6KK5gQ5pLCw_VydZnGgmV", split_ts,  "l"  ],
                 [ "PL9hrFapz4dsPSepY_AxxQEf6cjEqXht7B", split_ts,  "l"  ],
                 [ "PL9hrFapz4dsOLfsE8CpS_6Ixx6kIsIFV7", split_ts,  "l"  ]]],
      [ "2019", [[ "PL9hrFapz4dsMrrlvFMvuqy_cdpPadCyL8", split_ts,  "l"  ],
                 [ "PL9hrFapz4dsMmDBjD_hiGaYKTXXLo7bAv", split_ts,  "l"  ],
                 [ "PL9hrFapz4dsODt3aI5adCaZB6KHwz2Tpe", split_ts,  "o"  ], # belfast
                 [ "PL9hrFapz4dsNGsb0DdTDbX6elBLng8lg-", split_ts,  "l"  ],
                 [ "PL9hrFapz4dsMj31ZrsQNEXKqXJRbSXdHS", split_ts,  "l"  ]]],
      [ "2021", [[ "PL5XXu3X6L7jtk7-GIVq3-bkKDKDtoagj4", split_ts,  "o"  ],
                 [ "PL5XXu3X6L7jvWwbkUgMyGpA6VyqGrHbdv", split_ts,  "o"  ],
                 [ "PL5XXu3X6L7jvWwbkUgMyGpA6VyqGrHbdv", split_ts,  "o"  ],
                 [ "PL5XXu3X6L7juIhIykfhFmjyl4D5Tvjvdh", split_ts,  "o"  ]]],
   ]], [ "C++ Day", [ 
      [ "2020", [[ "PLsCm1Hs016LX6l97Royt5DSYy7V05nZmS", split_par, "o+"  ]]],
   ]], [ "Italian C++ Conference", [ # checked
      [ "2020", [[ "PLsCm1Hs016LWIjOrEftUA42ZwxsF30vZB", split_par, "o+"  ]]],
      [ "2021", [[ "PLsCm1Hs016LV9BRKIqrNWEXfa5ggpiyki", split_par, "o+"  ]]],
   ]], [ "C++ on sea", [ 
      [ "2019", [[ "PL5XXu3X6L7jtk7-GIVq3-bkKDKDtoagj4", split_ts,  "l+"  ],
                 [ "PL5XXu3X6L7jvWwbkUgMyGpA6VyqGrHbdv", split_ts,  "l+"  ],
                 [ "PL5XXu3X6L7juIhIykfhFmjyl4D5Tvjvdh", split_ts,  "l+"  ]]],
      [ "2020", [[ "PL5XXu3X6L7juEpWIifd7h7c0h1y5s_DbE", split_ts,  "o+"  ],
                 [ "PL5XXu3X6L7jvdtND1SqgA3V-mfappzRIu", split_ts,  "o+"  ],
                 [ "PL5XXu3X6L7jvH9wRBfhzeW3tmazoFSrkC", split_ts,  "o+"  ],
                 [ "PL5XXu3X6L7jtcXY9Ilpv7WhDS6lEo1hBz", split_ts,  "o+"  ]]],
      [ "2021", [[ "PL5XXu3X6L7jsIaVI82HXU3p2yRz2kVDZf", split_ts,  "o+"  ],
                 [ "PL5XXu3X6L7jtLi9qqEAfVfcas5inGLbk9", split_ts,  "o+"  ]]],
   ]], [ "Core C++", [ 
      [ "2019", [[ "PLn4wYlDYx4bszUM8uUJi55czMYuilXfaR", split_cc,  "l+"  ]]],
      [ "2021", [[ "PLn4wYlDYx4bt5jDwyOleg6J4kTtAu2rU5", split_cc,  "l+"  ]]],
   ]], [ "C++ Europe", [ 
      [ "2018", [[ "PLKkbEnCSP7sfCuSYTm7gh0leP-HzN7O35", split_st,  "l+"  ]]],
      [ "2019", [[ "PLKkbEnCSP7sezU3eY8f7NrbJp5g4Kfurl", split_st,  "l+"  ]]],
      [ "2020", [[ "PLKkbEnCSP7sek-bn-Ae-b16aa7y_mc2EH", split_st,  "o+"  ]]],
   ]], [ "C++IndiaCon", [ 
      [ "2021", [[ "PLZ3iYBI9Conj6Vbm0KZhDAYOiXPVfSfip", split_by,  "o+"  ]]],
   ]], [ "CPPP", [ 
      # no playlist
   ]], [ "Pacific C++", [ 
      [ "2017", [[ "PLd4OrpVodmxUf6WsIJhb2KvYaq9RBuIr3", split_sqt, "l+"  ]]],
      [ "2018", [[ "PLd4OrpVodmxUCBpzlkPYsiP9hOtLFpAjk", split_sqt, "l+"  ]]],
   ]], [ "Live Embedded Event", [
      [ "2020", [[ "PLn7YTy5_SF4_1ZLsQ29ZGpjZo7aNoLBIt", split_lee, "oe"  ]]],
      [ "2021", [[ "PLn7YTy5_SF4-FRyY-5zwsKuTCOBRUkY_h", split_lee, "oe"  ]]],
   ]], [ "corehard", [ 
      [ "2017", [[ "XWn4_Vu7rUM",                        split_sdt, "l+"  ],
                 [ "TX6aw2NtgVw",                        split_sdt, "l+"  ],
                 [ "7wqpeVs6usY",                        split_sdt, "l+"  ]]],
      [ "2018", [[ "5U8eN1h2_w0",                        split_ts,  "l+"  ],
                 [ "pqpoGJSlrbw",                        split_ts,  "l+"  ],
                 [ "unWsb-u4ors",                        split_ts,  "l+"  ],
                 [ "mIuqlsxAz0M",                        split_ts,  "l+"  ],
                 [ "GcfqHT4RtWc",                        split_sdt, "l+"  ],
                 [ "560l4b3i4ew",                        split_sdt, "l+"  ],
                 [ "OY_mS2e4XTk",                        split_sdt, "l+"  ]]],
      [ "2019", [[ "s9vBk5CxFyY",                        split_tds, "l+"  ],
                 [ "nqf53MlnMpo",                        split_tds, "l+"  ],
                 [ "N8i2VITM4Pw",                        split_tds, "l+"  ],
                 [ "tp9ZoQ6HJM4",                        split_tds, "l+"  ],
                 [ "EeEjgT4OJ3E",                        split_tds, "l+"  ],
                 [ "Vv3cz28Un3Y",                        split_tds, "l+"  ],
                 [ "hcgL8QBmh2I",                        split_tds, "l+"  ],
                 [ "4QO9FyH0KIY",                        split_tds, "l+"  ]]],
   ]], [ "MUC++", [ 
      [ "",      [[ "PLOqQEh8zIeoBH4gOJM9uZveUMW-uNmty8", split_st, "l+"  ]]],
   ]], [ "", [
   ]],      
]

def remove_and_replace( a ):
   for c in ":- ":
      a = a.replace( c, "" )
   a = a.replace( "+", "p" )
   return a   

def matches( a, b ):
   "compare, ignore spaces and -, treat + and p as same"
   return ( a == "*" ) or \
      ( remove_and_replace( a ).lower() ==
        remove_and_replace( b ).lower())
        
def match_nr( s ):        
   return None if s == "*" else int( s )
   
def build( match_meeting, match_edition, match1, match2 ):  
   if 0: print( "build" , match_meeting, match_edition, match1, match2 )
   start = time.time()
   t = talks()
   for meeting, editions in playlists:
      for edition, list in editions:
         if matches( match_meeting, meeting ) \
           and matches( match_edition, edition ):
             add_playlist( t, meeting, edition, list, match1, match2 )
   t.write_json( "docs/talks.json" )
   t.write_javascript( "docs/talks.js" )  
   end = time.time()
   print( "%s" % str(datetime.timedelta(seconds = end - start )))


# ===========================================================================

javascript_code = """

<BODY onload="rewrite();">
<HTML>
If you keep seeing this message for more than a few seconds, 
either you must enable javascript, 
or I somehow introduced a javascript error.
</HTML>

<SCRIPT type="text/javascript">

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
   return '<img src="' + talk.thumbnail + '" height="' 
      + thumbnail_size.toString() + '"' + ">"
}

function format_duration( n ){
   return Math.round( n / 60 ).toString() +
      ":" + ( 100 + Math.round( n % 60 )).toString().slice(-2)
}

function sanitize( s ){
   return s.replace( " ", "_" ).replace( "'", "" ).replace( ".", "_" )
}


// ==========================================================================
//
// define the interface
//
// ==========================================================================

var thumbnail_size = 75

var selection_criteria = [ 
   "meeting", 
   "edition", 
   "language", 
   "speaker", 
   "tag" 
]
   
var search_criteria = [ 
   "title", 
   "speaker" 
]

checked_boxes = []
criteria_fields = []


// ==========================================================================
//
// (re)generate the html content
//
// ==========================================================================

function rewrite(){
   var t = ""

   t += "<HTML><IMG SRC=C++.png>"
   t += "<BODY bgcolor=#94b89d><H1>C++ Talks List</H1>"
   t += "Last updated <date-and-time>.<BR>"
   t += "Compiled by Wouter van Ooijen (wouter@voti.nl).<BR>"
   t += "Raw data avaiulable at <A HREF=https://www.github.com/wovo/ctl>"
   t += "www.github.com/wovo/ctl</A>.<P>"
   t += "This is a list of talks about C++, embedded and related subjects "
   t += "I compiled from youtube playlists. "
   t += "Suggestions for other conferences to be included are welcome. "
   t += "I apologize for any inaccuracies and omissions. "
   t += "Feel free to supply corrections. "
   t += "For additions, provide youtube playlist(s), but please please "
   t += "use a consistent title format, like 'speaker, speaker : title'."
   t += "<HR>"
   
   // the checkboxes for meetings, editions, etc.
   t += "Select a specific<BR>"
   for( c of selection_criteria ){
      t += selection_html( c )
   }   
   t += "<HR>"
    
   // the text fields to search in the titles or speakers 
   t += "Search in the<BR><form>"
   for( c of search_criteria ){
      t += criterium_html( c ) + "<BR>"
   }   
   t += "</form><HR>"
    
   // the checkboxes that determine what to show 
   t += "<TABLE><TR><TD>Show</TD>"
   for( c of [ "all", "thumbnail", "speakers", "details", "tags" ] ){
      t += "<TD>" + checkbox_html( 
         "show_" + c, c == "all", "" ) + "</TD>"
   }
   t += "</TR></TABLE><HR>"
   
   // the list of talks
   var n = 0
   var t2 = ""
   for( const talk of talks ) { 
      if( include_talk( talk )) {
         n += 1
         t2 += talk_html( talk )
      }   
   }
   t += n.toString() + " entries<BR>" + t2
  
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
   var t = "", details = ""
   
   if( checked_boxes.show_all || checked_boxes.show_speakers ){
      details += talk.speakers.join( ", " ) + "<BR>"
   }
   
   if( checked_boxes.show_all || checked_boxes.show_details ){
      details += "ctl-" + talk.number.toString() + " "
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
      t += talk_reference( talk, talk.title ) + "<BR>"
      t += details
      t += "</td></tr></table>"
   } else {
      t += talk_reference( talk, talk.title ) + "<BR>"
      if( details != "" ){
         t += "<TABLE><TR><TD> </TD><TD>" + d + "<TD></TABLE>"
      }   
   }
    
   return t
}


// ==========================================================================
//
// a selection, with (when selected) 
// the list of options within that sections
//
// ==========================================================================

function selection_html( name ){
   var t = ""
   const sel = "select_" + name
   t += checkbox_html( 
      sel, false, " (" + window[ name + "s" ].length.toString() + ")" )
   
   if( checked_boxes[ sel ] ){
      t += "<table><tr><td>&nbsp;&nbsp;&nbsp;&nbsp;</td><td>"
      for( c of window[ name + "s" ] ){
         c = "_include_" + c
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
   return s.replace( "select_", "" )
      .replace( "_include_", "" )
      .replace( "include_", "" )
      .replace( "show_", "" )
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
   t += "<label for=_" + sel + ">" + name + "&nbsp;&nbsp;</label>"
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

function include_talk( talk ){
   use = true
   
   for( c of selection_criteria ){
      if( checked_boxes[ "select_" + c ] ){
         sub_use = false
         for( tag of window[ c + "s" ] ){
            if( checked_boxes[ "_include_" + sanitize( tag ) ] ){
               var suffix = ""
               if( [ "speaker", "tag" ].includes( c ) ) suffix = "s"
               if( talk[ c + suffix ].includes( tag ) ){
                  sub_use = true
               }   
            }   
         }   
         use = use && sub_use
      }   
   }
   
   for( c of search_criteria ){
      const sel = "match_" + c
      const s = criteria_fields[ sel ].trim().toLowerCase()
      if( s != "" ){
         sub_use = false
         var suffix = ""
         if( [ "speaker" ].includes( c ) ) suffix = "s" 
         m = talk[ c + suffix ]         
         if( [ "speaker" ].includes( c ) ) m = m.join( " , " )
         if( m.toLowerCase().search( s ) > -1 ){
            sub_use = true
         }   
         use = use && sub_use
      }
   }   
      
   return use   
}



<generated>

</SCRIPT>\n</BODY>
   
"""


# ===========================================================================

if __name__ == "__main__":
   """
   command line interface
   """
   args = sys.argv[ 1 : ] + [ "*", "*", "*", "*" ]
   build( args[ 0 ], args[ 1 ], args[ 2 ], args[ 3 ] )