from pytube import Playlist
pl = Playlist( "https://www.youtube.com/playlist?list=PLaVkMRyQacUTrcO8AfosFKn-UcQ1i1T0q" )
n = 0
for v in pl.video_urls:
   n += 1
   print( n, v )
