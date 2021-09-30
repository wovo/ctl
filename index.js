<BODY onload="rewrite();">
<HTML>
If you keep seeing this message for more than a few seconds, 
either you must enable javascript, 
or I somehow introduced a javascript error.
</HTML>

<SCRIPT type="text/javascript">

var select_criteria = [ "meeting", "edition", "language", "speaker", "tag" ]
var search_criteria = [ "title", "speaker" ]
var thumbnail_size = 100

function rewrite(){
   var t = ""

   t += "<HTML><IMG SRC=C++.png>"
   t += "<BODY bgcolor=#94b89d><H1>C++ Talks List</H1>"
   t += "Updated <date-and-time>.<BR>"
   t += "Created by Wouter van Ooijen (wouter@voti.nl).<BR>"
   t += "Interface to "
   t += "<A HREF=https://www.github.com/wovo/ctl>www.github.com/wovo/ctl</A>."
   t += "<P>"
   t += "This is a list of talks about C++ or related subjects I compiled. "
   t += "Suggestions for other conferences to be included are welcome. "
   t += "I apologize for the (probably many) inaccuracies and omissions. "
   t += "Feel free to supply corrections and additions! "
   t += "<HR>"
   
   t += "Select specific<BR>"
   for( c of select_criteria ){
      t += selection( c )
   }   
   t += "<HR>"
    
   t += "Search for<BR><form>"
   for( c of search_criteria ){
      t += criterium( c ) + "<BR>"
   }   
   t += "</form><HR>"
    
   t += "<TABLE><TR>"
   t += "<TD>Show</TD>"
   for( c of [ "all", "thumbnail", "speakers", "details", "tags" ] ){
      t += "<TD>" + checkbox( "show_" + c, c == "all", "" ) + "</TD>"
   }
   t += "</TR></TABLE><HR>"
   
   var n = 0
   var t2 = ""
   for( const talk of talks ) { 
      if( include_talk( talk )) {
         n += 1
         t2 += entry( talk )
      }   
   }
   t += n.toString() + " entries<BR>" + t2
  
   t += "</BODY></HTML>"
   document.open()
   document.write( t )
   document.close()
   return true
}

function talk_ref( talk, s ){
   return "<A HREF=\"" + talk.video +"\" target=_blank>" + s + "</A>" 
}

function talk_thumbnail( talk ){
   return "<img src=\"" + talk.thumbnail + "\" height=" 
         + thumbnail_size.toString() + ">"
}

function format_duration( n ){
   return ( 
      Math.round( n / 60 ).toString()
      + ":"
      + ( 100 + Math.round( n % 60 )).toString().slice(-2)
   )  
}

function entry( talk, thumbnail ){
   var t = "", d =""
   
   if( show_all || show_speakers ){
      d += talk.speakers.join( ", " ) + "<BR>"
   }
   if( show_all || show_details ){
      d += "ctl-" + talk.number.toString() + " "
      d += talk.meeting + " " + talk.edition + " "
      d += "(" + format_duration( talk.duration ) + ") "
      d += talk.language + "<BR>"
   }
   if( show_all || show_tags ){
      d += talk.tags.join( ", " ) + "<BR>"
   }   
   
   if( show_all || show_thumbnail ){
      t += "<table><tr><td>"
      t += talk_ref( talk, talk_thumbnail( talk ))
      t += "</td><td>"
      t += talk_ref( talk, talk.title ) + "<BR>"
      t += d
      t += "</td></tr></table>"
   } else {
      t += talk_ref( talk, talk.title ) + "<BR>"
      if( d != "" ){
         t += "<TABLE><TR><TD> </TD><TD>" + d + "<TD></TABLE>"
      }   
   }
    
   return t
}

function checkbox_update( name ){
   window[ name ] = ! window[ name ]
   rewrite();
}

function sanitize( s ){
   return s.replace( " ", "_" ).replace( "'", "" ).replace( ".", "_" )
}

function checkbox( name, def, suffix ) {
   if( ! window.hasOwnProperty( sanitize( name )) ){
      window[ sanitize( name ) ] = def
   }   
   var t = ""
   t += "<div><input type=checkbox id=" + name
   t += " name=" + name
   t += " onclick='checkbox_update( \"" + sanitize( name ) + "\");' "
   if( window[ sanitize( name ) ] ){
      t += "checked>"
   } else {
      t += "unchecked>"
   } 
   t += "<label for=" + name + ">"
   t += name.replace( "select_", "" ).replace( "_include_", "" ).replace( "include_", "" ).replace( "show_", "" )
   t += suffix
   t += "</label></div>"
   return t
}   

function include_talk( talk ){
   use = true
   for( c of select_criteria ){
      if( window[ "select_" + c ] ){
         sub_use = false
         for( tag of window[ c + "s" ] ){
            if( window[ "_include_" + sanitize( tag ) ] ){
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
      s = window[ sel ].trim().toLowerCase()
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

function selection( name ){
   var t = ""
   const sel = "select_" + name
   t += checkbox( sel, false, " (" + window[ name + "s" ].length.toString() + ")" )
   if( window[ sel ] ){
      t += "<table><tr><td>&nbsp;&nbsp;&nbsp;&nbsp;</td><td>"
      for( c of window[ name + "s" ] ){
         c = "_include_" + c
         if( ! window.hasOwnProperty( c ) ) window[ c ] = false
         t += "   " + checkbox( c, false, "" )
      }   
      t += "</td></tr></table>"
   }
   return t
}

function criterum_changed(){
   for( c of search_criteria ){
      const sel = "match_" + c
      window[ sel ] = document.getElementById( "_" + sel ).value
   } 
   rewrite();   
   return true
}

function criterium( name ){
   var t = ""
   const sel = "match_" + name
   if( ! window.hasOwnProperty( sel ) ) window[ sel ] = ""
   const val = window[ sel ].replace( "'", "" )
   t += "<label for=_" + sel + ">" + name + "&nbsp;&nbsp;</label>"
   t += "<input onchange='criterum_changed();' type=text size=32" 
   t += " value='" + val + "' "
   t += "   id=_" + sel + " name=_" + sel + ">"
   return t
}
   



      