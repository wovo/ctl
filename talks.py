# ===========================================================================
#
# File      : talks.py
# Part of   : the Free C++ Talks List (FCTL)
# Copyright : wouter van ooijen 2021# home      
# repo      : https://www.github.com/wovo/fctl
#
# This code is distributed under the Boost Software License, Version 1.0.
# (See accompanying boost.txt file or copy at 
# http://www.boost.org/LICENSE_1_0.txt)
#
# dependecies: request, pafy, youtube-dl
#
# C:\Python39\lib\site-packages\pafy\backend_youtube_dl.py", line 53
# changed to [] to get( .., 0 )
# same for dislikes
#
# ===========================================================================

import sys, glob, os, json, urllib.request, re, pafy, datetime

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
   "x": "x",
   "x": "x",
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
   
def make_list_of_strings( list, prefix = "   " ):
   return ( ",\n" + prefix ).join( 
      map( lambda x: '"%s"' % x.replace( '"', "'" ), sorted( list ) ) )
   
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
      self.video       = video
      self.thumbnail   = thumbnail
      self.duration    = duration
      self.tags        = sorted( tags[:] )
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
         
   def add( self, talk, use_number ):
      """
      add a single talk
      """   
      if use_number:
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

   def write_html( self, file_name = "index.html" ):
      """
      write the talks to a simple html file
      """   
      file = open( file_name, "w" )
      for talk in self.list:
         file.write( "<img src='%s' height=100><BR>\n" % ( talk.thumbnail ))
         file.write( "%s<BR>\n" % ( talk.identifier ))
         file.write( "<A HREF='%s' target=_blank>%s</A><BR>\n" % ( talk.video, talk.title ))
         file.write( "%s<BR>\n" % ( ", ".join( talk.speakers )))
         file.write( "<BR>\n" )
      file.close()      
      
   def sort_talks( self ):      
      self.list = sorted( 
         self.list, 
         key = lambda t : t.title.lower().strip().replace( "'", "" )
      )
      
   def write_json( self, file_name = "talks.json" ):
      """
      write the talks to a json file
      """   
      self.sort_talks()
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
      self.sort_talks()
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
      
      t = ''
      t += read_from_file( "index.js" )
      t += read_from_file( file )
      t = t.replace( "<date-and-time>", \
         datetime.datetime.now().strftime("%Y-%m%d, %H:%M:%S") )
      t += "\n</SCRIPT>\n</BODY>\n"
      write_to_file( "docs/index.html", t )


# ===========================================================================

def renumber( file_name ):
   """
      renumber the #....DDDD lines in a file.
      Use this only once, before the file enters the list, because
      a number must be and remain unique.
      Place a '#locked' line in the file after adding it to the list.
   """
   result = []
   
   file = open( file_name, "r", encoding='utf-8', errors='replace' )
   nr = 0
   for line in file.readlines():
      if line.startswith( "$locked" ):
         print( "file has a $locked line - not renumbered" )
         exit( -1 )
      if line.startswith( "#" ):
         line = line[ : -1 ]
         nr += 1
         while line[ -1 ] in "01234567890":
            line = line[ : -1 ]
         line += "%04d\n" % nr
      result.append( line )
   file.close()
   
   file = open( file_name, "w", encoding='utf-8', errors='replace' )
   for line in result:
      file.write( line )
   file.close()   
   
   
# ===========================================================================   

def search_youtube( s ):
   s = ( "+".join( s ) ).replace( " ", "+" )
   html = urllib.request.urlopen( 
      "https://www.youtube.com/results?search_query=" + s )
   video_ids = re.findall( r"watch\?v=(\S{11})", html.read().decode() )
   return video_ids


# ===========================================================================   

def make_talk(
      identifier,
      meeting,
      edition,
      language,
      title,
      speakers,
      youtube,
      tags,
      level
   ):
      """   
      return a talk object from the info found in a conference schedule
      """
   
      video = ""
      thumbnail = ""
      duration = ""
      match = []
      meeting = meeting.replace( "-", " " ) # for c++-on-sea etc.
      if meeting == "none": meeting = ""
      
      title2 = title
      if title2.endswith( " I" ): title2 = '"%s"' % title2
      if title2.endswith( " II" ): title2 = '"%s"' % title2
      
      if youtube:
         search_terms = speakers + [ meeting, edition, title2 ]
         #print( "search %s" % " ".join( search_terms ) )
         match = search_youtube( search_terms )
         #print( "done" )
         if len( match ) == 0:
            # try without the speakers
            search_terms = [ meeting, edition, title2 ]
            #print( "search 2" )
            match = search_youtube( search_terms )
            #print( "done 2" )
            if len( match ) == 0:
               print( "video not found for [ %s ]" % " ".join( search_terms ))   
            
      if len( match ) > 0:
         video       = "https://youtube.com/watch?v=%s" % match[ 0 ]
         thumbnail   = "http://img.youtube.com/vi/%s/0.jpg" % match[ 0 ]
         duration    = pafy.new( video ).length
          
      return talk(
         number      = 0,
         identifier  = identifier,
         meeting     = meeting, 
         edition     = edition,
         title       = title,
         speakers    = speakers, 
         video       = video,
         thumbnail   = thumbnail,
         duration    = duration,
         tags        = tags,
         level       = level,
         language    = language
      )
      
      
# =========================================================================== 
   
def process_marker_title_author( meeting, edition, lines, youtube, progress ):
   found_talks = []    
   state = 0
   found = {}
   tags = []
   once_tags = []
   once_level = 0
   language = ""
   for nr, line in lines:
      if line.startswith( "$set tags" ):
         tags = line.split( " ")[ 2 : ] 
         
      elif line.startswith( "$once tags" ):
         once_tags = line.split( " ")[ 2 : ] 
         
      elif line.startswith( "$once level" ):
         once_level = int( line.split( " ")[ 2 ] )
         
      elif line.startswith( "$set language" ):
         language = line.split( " " )[ 2 ] 
         
      elif line.startswith( "$locked" ):
         pass
         
      elif ( state == 0 ) and line.startswith( "#" ):
         state = 1
         identification = line[:].replace( "marker", meeting + "-" + edition )
         
      elif state == 1:
         state = 2
         title = line[:]
         
      # ccpcon 2016 has title-(room)-speakers
      # youtube playlists have WORDT NU AFGESPEELD + spearks : title
      elif ( state == 2 ) and \
       ( title.startswith( "WORDT NU AFGESPEELD" ) or not line.endswith( ")" ) ):         
      
         if title.startswith( "WORDT NU AFGESPEELD" ):
            line = line.strip()
            if line.endswith( "[]" ):
               # format: title - speakers - []
               line = line[ : -2 ].strip()
               if line.endswith( "-" ):
                  line = line[ : -1 ].strip()
               title, speakers = line.rsplit( " - ", 1 )
               
            else:
               # format: speakers: title
               speakers, title = line.split( ":", 1 )
               
         else:
            speakers = line[:]

         speakers = speakers.replace( ",", "@" )
         speakers = speakers.replace( "&", "@" )
         state = 0
         
         if progress:
            sys.stdout.write( "\r%s   " % identification )
            sys.stdout.flush()
            
         key = title + " " + speakers
         if key in found:
            print( "duplicate: %s %s" % ( found[ key ], identification ))
         found[ key ] = identification   
            
         found_talks.append( make_talk( 
            identifier  = identification,
            meeting     = meeting,
            edition     = edition,
            language    = language,
            title       = title, 
            speakers    = list( map( lambda s : s.strip(), speakers.split( '@' ))),
            youtube     = youtube,
            tags        = tags + once_tags,
            level       = once_level
         ))
         
         once_tags = []
         once_level = 0
         
   return found_talks   
   
   
# ===========================================================================

def add_talks( talks, files, youtube, progress ):

   n_files = 0
   tags = []
   meeting = None
   edition = None
   language = None
   for file_name in glob.glob( files ):
   
      n_files += 1
      file = open( file_name, "r", encoding='utf-8', errors='replace' )
      nr = 0
      lines = []
      for line in file.readlines():
         nr += 1
         line = make_ascii( line.strip() )
         if not is_ascii( line ):
            print( "%s:%d : non ascii" % ( file_name, nr ))         
            for c in line:
               if not is_ascii( c ):
                  print( "[%s]" % c )
            exit( -1 )
         lines.append( [ nr, line ] )
         if line.startswith( "$add" ):
            split = line.split( " " )[ 1 : ]
            if split[ 0 ] == "meeting":
               meeting = split[ 1 ]
            elif split[ 0 ] == "edition":
               edition = split[ 1 ]
            elif split[ 0 ] == "language":
               language = split[ 1 ]
            elif split[ 0 ] == "tags":
               tags.extend( split[ 1 : ] )      
            else:
               print( "unknow $add [%s]" % line )
               exit( -1 )
         
      if meeting == None or edition == None or language == None:
         print( "no meeting, edition, language set" )
         exit( -1 )
         
      new_talks = process_marker_title_author( meeting, edition, lines, youtube, progress )
      for t in new_talks:
         t.tags.extend( tags )
         if t.language == "": t.language = language[:]
         talks.add( t, use_number = False )


# ===========================================================================

def command_line_command( args, c, f ):
   if len( args ) > 0 and args[ 0 ] == c:
      youtube = True
      progress = True
      args.pop( 0 )
      while ( len( args ) > 0 ) and args[ 0 ].startswith( "-" ):
         if args[ 0 ] == "-noyoutube":
            youtube = False
         elif args[ 0 ] == "-noprogress":  
            progress = False
         else:
            print( "unknown option [%s]" % args[ 0 ] )
            exit( -1 )
         args.pop( 0 ) 
      if c == "build":
         f()
      elif len( args ) > 0:
         print( "do %s %s" % ( c, args[ 0 ] ))
         f( args[ 0 ], youtube, progress )    
         args.pop( 0 )
      else:
         print( "'%s' command needs a <file>" % ( c ) )
         exit( -1 )

# ===========================================================================         
         
def process( talks, files, youtube, progress ):         
   for file_name in glob.glob( files + ".txt" ):
      add_talks( talks, file_name, youtube, progress )      
      talks.write_json( file_name.replace( ".txt", ".json" ) ) 
      
      
# ===========================================================================         
         
def build():   
   for text_file in glob.glob( "input/*/*.txt" ):
      t = talks()      
      json_file = text_file.replace( ".txt", ".json" )
      if 0:
         print( json_file, os.path.isfile( json_file ) )
         print( os.path.getmtime( text_file ) )
         print( os.path.getmtime( json_file ),
            os.path.getmtime( text_file ) > os.path.getmtime( json_file ) )
      if( not os.path.isfile( json_file ) ) \
       or ( os.path.getmtime( text_file ) > os.path.getmtime( json_file ) ):
         print( "process %s" % text_file )
         add_talks( t, text_file, True, True )
         t.write_json( json_file )
         
   t = talks()      
   for json_file in glob.glob( "input/*/*.json" ):
      t.read_json( json_file )
      t.write_json( "talks.json" )
      t.write_javascript( "talks.js" )


# ===========================================================================

if __name__ == "__main__":
   """
   command line interface
   """
   args = sys.argv[ 1 : ]
   if args == []:
      print( """commands:
         renumber <text_file>
         process <text_file without text suffix>
         read_text <text_file>
         read_json <json_file>
         write_json <json_file>
         write_html <html_file>
         write_js <javascript_file>
         build
      """ )   
      exit( -1 )
   
   t = talks()
   while args != []:
      old_args = args[ : ]
      
      command_line_command( args, "renumber",    lambda f, y, p: renumber( f ) )
      command_line_command( args, "process",     lambda f, y, p: process( t, f, y, p ) )
      command_line_command( args, "read_text",   lambda f, y, p: add_talks( t, f, y, p ) )
      command_line_command( args, "read_json",   lambda f, y, p: t.read_json( f ) )
      command_line_command( args, "write_json",  lambda f, y, p: t.write_json( f ) )
      command_line_command( args, "write_html",  lambda f, y, p: t.write_html( f ) )
      command_line_command( args, "write_js",    lambda f, y, p: t.write_javascript( f ) )
      command_line_command( args, "build",       build )
               
      if args == old_args:
         print( "unknown command %s" % args[ 0 ] )
         exit( -1 )
      
