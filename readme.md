CTL : the C++ Talks List 

license: Boost

wouter van ooijen

(2021-09-23) work in progress, come back later!

This is a list of talks about C++ or related subjects I compiled from
the published schedules of a number of C++ (and related) conferences.
Suggestions for other conferences to be included are welcome.
I apologize for the (probably many) inaccuracies and omissions.
In due time, corrections can supplied as pull requests for the json file on github.

I created the list by semi-automated processing of the
published schedules of conferences that I deemed interesting,
and searching for the combination of conference, title and speakers on youtube.
This mostly seems to work, but there are bound to be errors.
In the process, I converted all text to ascii (sorry speakers...).
The tags are still rudimentary.

I don't pretend to be a front-end developer, so 
beside the very spartan web page the list
is available in json and javscript formats, 
with a Python interface for maybe slightly easier use.
If you create you own interface, let me know!

To build the list, I downloaded a text copy (web cut-n-paste)
of the as-held schedules of the conferences I deemed interesting,
in a subdirectory (in input) for each conference, 
in a text file <edition>.txt
In most cases the edition is the year, but there are exceptions
like accu which has a 2019-autumn conference.
In each schedule file, I added some meta information ($add ...) lines,
and talk identifier lines (starting with a #). 
The latter must never be changed,
but can be removed, or new ones can be added later, provided that
they remain in alphabetical order.
The renumber command makes this somewhat easier, but
don't forget to put a #locked line in the file once it has
its identifiers.

- duplicates
- varying formats
- funny names


Often some hand processing is needed, like replacing special chars,
swapping first name and surname, combining multiple speakers (separated by @),
and elimination lightning talks (which don't have a distinct name)
and talks that can't be found on youtube.

A problem that I haven't solved yet is that sometimes a talks
title on youtube is abbreviated, and the youtube search 
finds the talk with the full title from another conference. 
Sigh.

The page https://isocpp.org/wiki/faq/conferences-worldwide
seems to have playlists for many conferences and editions, but
quite a lot of these links are incorrect.
But it provides some info I couldn't get from the published schedules.

c++now 2014 no keynotes??

The conferences I included so fare are (from the youtube playlists):
- c++now 2010-2019, 2021
- meeting-c++ 2014-2020
- meeting-embedded 2018, 2020
- cppcon 2014-2017


- accu 16-19 (20 cancelled)
- c++-on-sea 19-20
- code-dive 14-20
- cppcon 14-20
- embo++ (no schedules available? - must ask!)

The talks are tagged, but this has been done by hand and very roughly.
I used or plan to use these tags 
(in most cases, at most one from each line):
- conference, meetup
- talk, keynote, lightning, interview, panel
- live, online
- c++, c, java, javscript, python, assembler
- c++11, c++14, c++17, c++20

And add when appropriate (examples, avoid a trailing 's'):
- standard, evolution
- embedded, latency, freestanding, unit
- git, make, cmake
- exception, template, concept, constexpr, lambda, volatile, int
- stl, container, algorithm
- procedural, oo, functional
- jit, meta, quality, naming

There is a field to rate the talk for the experience level of the intended
audience, but this has not been done yet (all are at 0, which means unknown).
The intended levels are:
- 1 : no programming experience
- 2 : no experience with the programming language
- 3 : no experience with the subject within the programming language
- 4 : ??
- 5 : junior programmer level
- 6 : ??
- 7 : senior programmer level
- 8 : ??
- 9 : specialist in the subject
- 10 : central committee level

One conference that I'd like to include is FOSDEM, but they
have A LOT of talks, so that will be a challenge.                    
   