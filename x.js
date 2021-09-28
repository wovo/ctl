var meetings = [
   "cppcon"
]

var editions = [
   "2018"
]

var speakers = [
   "Adi Shavit",
   "Alan Talbot",
   "Alisdair Meredith",
   "Anastasia Kazakova",
   "Anastasiia Kazakova",
   "Andreas Weis",
   "Andrei Alexandrescu",
   "Andrei Zlate-Podani",
   "Andrew Sutton",
   "Anna Gringauze",
   "Anny Gakhokidze",
   "Ansel Sermersheim",
   "Arno Lepisk",
   "Arno Schoedl",
   "Arthur O'Dwyer",
   "Arvid Gerstmann",
   "Arvid Norberg",
   "Barbara Geller",
   "Ben Deane",
   "Billy O'Neal",
   "Bjarne Stroustrup",
   "Bob Steagall",
   "Boris Kolpackov",
   "Borislav Stanimirov",
   "Brian Ruth",
   "Bryce Adelstein Lelbach",
   "CJ Johnson",
   "Chandler Carruth",
   "Christopher Di Bella",
   "Chuck Wilcox",
   "Colin Robertson",
   "CppCon 2018",
   "Damien Buhl",
   "Dan Saks",
   "Diego Rodriguez-Losada",
   "Dmitry Kozhevnikov",
   "Elmar Westphal",
   "Erik Valkering",
   "Eva Conti",
   "Ezra Chung",
   "Fabian Renn-Giles",
   "Fedor Pikus",
   "Fred Tingaud",
   "Funqual",
   "G. Nishanov",
   "Gabor Horvath",
   "Geoffrey Romer",
   "Gilang Hamidy",
   "Gordon Brown",
   "Greg Falcon",
   "Greg Law",
   "Guy Davidson",
   "Herb Sutter",
   "Howard Hinnant",
   "Ilya Biryukov",
   "JF Bastien",
   "James Bennett",
   "James McNellis",
   "Jason Turner",
   "Jean-Louis Leroy",
   "JeanHeyd Meneide",
   "Jeff Trull",
   "Jefferson Amstutz",
   "Jens Weller",
   "John Kalb",
   "John Lakos",
   "John McFarlane",
   "John Woolverton",
   "Jon Cohen",
   "Jon Kalb",
   "Jonathan Boccara",
   "Jonathan Keinan",
   "Juan Manuel Martinez Caamano",
   "Juan Pedro Bolivar Puente",
   "Jussi Pakkanen",
   "Kate Gregory",
   "Kevin Carpenter",
   "Kostya Serebryany",
   "Kris Jusiak",
   "Louis Dionne",
   "Maged Michael",
   "Marc Gregoire",
   "Mark Elendt",
   "Marshall Clow",
   "Martin Smarda",
   "Mateusz Pusz",
   "Mathieu Ropert",
   "Matt Godbolt",
   "Matt Kulukundis",
   "Matthew Butler",
   "Matthew von Arx",
   "Matthias Gehre",
   "Michael Caisse",
   "Michael Gopshtein",
   "Michael Price",
   "Michal Dominiak",
   "Mike Shah",
   "Morris Hafner",
   "Nathan Sidwell",
   "Nicolai Josuttis",
   "Nicole Mazzuca",
   "Niek J. Bouman",
   "Nimrod Sapir",
   "Nir Friedman",
   "Noel Tchidjo",
   "Odin Holmes",
   "Olafur Waage",
   "Olivier Giroux",
   "Pablo Halpern",
   "Patrice Roy",
   "Patricia Aas",
   "Paul McKenney",
   "Peter Bindels",
   "Peter Goldsborough",
   "Peter Sommerlad",
   "Phil Nash",
   "R. Leahy",
   "Richard Powell",
   "Rishi Wani",
   "Robert Ramey",
   "Robert Schumacher",
   "Rong Lu",
   "Sean Parent",
   "Serge Guelton",
   "Simon Brand",
   "Staffan Tjernstrom",
   "Stephan T. Lavavej",
   "Stephen Dewhurst",
   "Steven Simpson",
   "Stoyan Nikolov",
   "Takatoshi Kondo",
   "Thomas Rodgers",
   "Timur Doumler",
   "Titus Winters",
   "Tom Poole",
   "Tony Wasserka",
   "Tsung-Wei Huang",
   "Valentin Galea",
   "Victor Ciura",
   "Viktor Kirilov",
   "Vincent Reverdy",
   "Vinnie Falco",
   "Walter Brown",
   "Walter E. Brown",
   "William Clements",
   "Yu Qi",
   "Zach Turner",
   "xx"
]

var titles = [
   " 105 STL Algorithms in Less Than an Hour",
   " <chrono> Then and Now",
   " A Little Order: Delving into the STL sorting algorithms",
   " A Modern C++ Programming Model for GPUs using Khronos SYCL",
   " A Semi Compile/Run-time Map with (Nearly) Zero Overhead Lookup",
   " Almost Always Avoiding auto",
   " An Allocator is a Handle to a Heap",
   " Applied Best Practices",
   " Avoiding Disasters with Strongly Typed C++",
   " Better Code: Human Interface",
   " Better Tools in Your Clang Toolbox'",
   " Bringing C++ 17 Parallel Algorithms to a standard library near you",
   " Build Systems: a Simple Solution to a Complicated Problem",
   " Building a C++ Reflection System in One Weekend Using Clang and LLVM",
   " C++ Dependency Management: from Package Consumption to Project Development",
   " C++ Everywhere with WebAssembly",
   " C++ Function Templates: How Do They Really Work?",
   " C++ Modules",
   " C++ Modules and Large-Scale Development",
   " C++ in Elvenland",
   " CUDA Kernels with C++",
   " Cache Warming: Warm Up The Code",
   " Can I has grammar?",
   " Clang on Windows: It's a Thing",
   " Clangd: architecture of a scalable C++ language server",
   " Class Template Argument Deduction for Everyone",
   " Class template argument deduction in C++17",
   " Closing Panel: Spectre",
   " Co- and Contra-: Adding a Little Variance",
   " Communicating via Diagnostics: Observations and Tips for Authors",
   " Compile-time programming and reflection in C++20 and beyond",
   " Compiling Multi-Million Line C++ Code Bases Effortlessly with the Meson Build System",
   " Compute More in Less Time Using C++ Simd Wrapper Libraries",
   " Concepts As She Is Spoke",
   " Concepts and Contracts: When, What, and How",
   " Concepts in 60: Everything you need to know and nothing you don't",
   " Concepts: The Future of Generic Programming (the future is here)",
   " Concurrency Challenges of Interrupt Service Routines",
   " Constexpr and operator overloading: Why everything is terrible",
   " Contract Programming in C++(20) (part 1 of 2)",
   " Contract Programming in C++(20) (part 2 of 2)",
   " Copy Elision",
   " Crafting EDSL In C++ using Metaprogramming, Operator Overloading, & Lambda Expressions",
   " Curly Function Call Syntax",
   " Custom Overload Sets and Inline SFINAE for Truly Generic Interfaces",
   " Dangling in French and English",
   " Datum: A Compact Bitwise Copyable Variant Type",
   " Dealing with aliasing using contracts",
   " Debug C++ Without Running",
   " Debugging Linux C++",
   " Design for Performance",
   " Development strategies: You've written a library - now what?",
   " Don't package your libraries, write packagable libraries!",
   " DynaMix: A New Take on Polymorphism",
   " Early Modern C++: How to Handle a C++03 Codebase in $CURRENT_YEAR",
   " Easy to Use, Hard to Misuse: Declarative Style in C++",
   " Easy::Jit: A Just-in-Time compilation library for C++",
   " Effective replacement of dynamic polymorphism with std::variant",
   " Emulating the Nintendo 3DS: Generative & Declarative Programming in Action'",
   " Enough string_view to Hang Ourselves",
   " Ensuring Exception Safety Through Testing'",
   " Expect the expected",
   " Fancy Pointers for Fun and Profit",
   " Fast Conversion From UTF-8 with C++, DFAs, and SSE Intrinsics",
   " Fast Parallel Programming using Modern C++",
   " Feather: A Modern C++ Web Development Framework",
   " Fixing Two-Phase Initialization",
   " Forwarding Values... and Backwarding Them Too?'",
   " Frozen data structures in C++14",
   " Generating UI with C++, boost & Qt",
   " Get rich quick! Using Boost.Beast WebSockets and Networking TS",
   " Git, CMake, Conan - How to ship and reuse our C++ projects",
   " Grill the Committee",
   " High-Radix Concurrent C++",
   " How C++ Debuggers Work",
   " How to Argue(ment)'",
   " How to Teach C++ and Influence a Generation",
   " How to Write Well-Behaved Value Wrappers",
   " How to create slides about CMake with CMake?",
   " Implementing the C++ Core Guidelines' Lifetime Safety Profile in Clang",
   " Initialization, Shutdown, and constexpr",
   " Inside Visual C++' Parallel Algorithms",
   " Interactive C++ Compilation (REPL) Done in a Tiny and Embeddable Way",
   " Interfaces Matter",
   " Latest and Greatest in the Visual Studio Family for C++ Developers 2018",
   " Let's Intercept OpenGL Function Calls...for Logging!",
   " Let's learn programming by inventing it",
   " Liberating the Debugging Experience with the GDB Python API",
   " Lightweight 2D graphics with io2d",
   " Machine Learning in C++ with PyTorch",
   " Making New Friends",
   " Memory Tagging and how it improves C/C++ memory safety",
   " Modern C++ Design (part 1 of 2)",
   " Modern C++ Design (part 2 of 2)",
   " Modern C++ Testing with Catch2",
   " Modern C++ in Embedded Systems - The Saga Continues",
   " Moving Faster: Everyday efficiency in modern C++",
   " Multi-Precision Arithmetic for Cryptology in C++, at Run-Time and at Compile-Time",
   " Named Arguments from Scratch",
   " Nano-coroutines to the Rescue! (Using Coroutines TS, of Course)",
   " OOP Is Dead, Long Live Data-oriented Design",
   " Open is Good - yomm2: Fast, Orthogonal Open Methods",
   " Operator Overloading: History, Principles and Practice",
   " Parsing C++",
   " Patterns and Techniques Used in the Houdini 3D Graphics Application",
   " Pessimistic Programming",
   " Qt Signals and the Coroutines TS",
   " Range-Based Text Formatting For a Future Range-Based Standard Library",
   " Rapid Prototyping of Graphics Shaders in Modern C++",
   " Refactoring Legacy Codebases with LibTooling",
   " Regular Types and Why Do I Care ?",
   " Return Value Optimization: Harder Than It Looks",
   " SG14: CppCon Report",
   " Safe Numerics",
   " Sane and Safe C++ Classes",
   " Save $$ Testing Code the Playback-Based Way",
   " Scaling Financial Transaction using 0MQ and JSON",
   " Scripting at the Speed of Thought: Lua and C++ with sol3",
   " Secure Coding Best Practices: Your First Line Is The Last Line Of Defense (1 of 2)",
   " Secure Coding Best Practices: Your First Line Is The Last Line Of Defense (2 of 2)",
   " Set it and forget it!",
   " Signed integers are two's complement",
   " Simplicity: Not Just For Beginners",
   " Software Security",
   " Source Instrumentation for Monitoring C++ in Production",
   " Spectre: Secrets, Side-Channels, Sandboxes, and Security",
   " Standard Library Compatibility Guidelines (SD-8)",
   " State Machines Battlefield - Naive vs STL vs Boost",
   " Static analysis for concurrent C++ in Visual Studio",
   " Surprises in Object Lifetime",
   " Talk to me! The art of reporting a bug (and handling the feedback)",
   " Talking to Typelists",
   " Teaching Old Compilers New Tricks: Transpiling C++17 to C++11",
   " Thank You (I'm sorry that it's taken me so long to say it)",
   " The Bad Big Wolf Meets Riding Hood Little Red",
   " The Bits Between the Bits: How We Get to main()",
   " The C++ Execution Model",
   " The Landscape and Exciting New Future of Safe Reclamation for High Performance",
   " The Most Valuable Values",
   " The Networking TS in Practice: Testable, Composable Asynchronous I/O in C++",
   " The Nightmare of Initialization in C++",
   " The Salami Method for Cross Platform Development",
   " The Shape of a Program",
   " The perfect job interview (well, maybe)",
   " These Aren't the COM Objects You're Looking For",
   " This is Why We Can't Have Nice Things",
   " Thoughts on a more powerful and simpler C++ (5 of N)",
   " Touring the Tips of the Week Series",
   " Trivially Relocatable",
   " UEFI Applications With Modern C++",
   " Undefined Behavior is Not an Error",
   " Understanding Optimizers: Helping the Compiler Help You",
   " Unwinding the Stack: Exploring How C++ Exceptions Work on Windows",
   " Using Compile-time Code Generation to build an LLVM IR Pattern Matcher",
   " Value Semantics: Fast, Safe, and Correct by Default",
   " Wandbox: Online programming language testing environment",
   " What Could Possibly Go Wrong?: A Tale of Expectations and Exceptions",
   " What Do We Mean When We Say Nothing At All?",
   " What do you mean 'thread-safe'?",
   " What to Expect from a Next-Generation C++ Build System",
   " What's new in Visual Studio Code for C++ development",
   " Why and How to Roll Your Own std::function Implementation",
   " Why not Conan (part III)?",
   " Wise Enum: A C++ Smart Enum For All Your Reflective Enum Needs",
   " Woes of Scope Guards and Unique_Resource - 5+ years in the making",
   " Workflow hacks for developers",
   " Writing Standard Library Compliant Data Structures and Algorithms",
   " You're Not as Smart as You Think You Are",
   " [Boost].DI - Inject all the things!",
   " std::basic_string: for more than just text",
   " std::optional",
   " user-defined statically-checked call graph constraints in C++ - Andrew Nelson [CppCon 2018]",
   "C++ Cryptozoology - A Compendium of Cryptic Characters :: #2",
   "Engineering Software: integral types",
   "Especially nasty bug in our network scanner",
   "Feedback on practical use of C++17 std::recursive_directory_iterator",
   "H. Wright : Large-Scale Changes at Google: Lessons Learned From 5 Yrs of Mass Migrations",
   "Make It Fixable: Preparing for Security Vulnerability Reports",
   "Nicolas Fleury & Mathieu Nayrolles : Better C++ using Machine Learning on Large Projects",
   "Overloading: The Bane of All Higher-Order Functions",
   "SG14: The Story So Far",
   "Smart References: There and Back Again",
   "Test coverage",
   "Using Template Magic to Automatically Generate Hybrid CPU/GPU-Code",
   "What Bug Hunting Taught Me About Hunting Bugs",
   "Zero-Overhead Compiler Pessimization",
   "docs.microsoft.com Needs You!",
   "rof_egnar reversed adapter for(auto x:reversed(range))"
]

var tags = [
   "c++",
   "conference",
   "lightning",
   "live",
   "panel",
   "talk"
]

const talks = [
   {
          number: 33,
      identifier: "#cppcon-2018-0033",
         meeting: "cppcon",
         edition: "2018",
           title: " 105 STL Algorithms in Less Than an Hour",
        speakers: [
                     "Jonathan Boccara"
                  ],
           video: "https://youtube.com/watch?v=2olsGf6JIkU",
       thumbnail: "http://img.youtube.com/vi/2olsGf6JIkU/0.jpg",
        duration: 3466,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 183,
      identifier: "#cppcon-2018-0187",
         meeting: "cppcon",
         edition: "2018",
           title: " <chrono> Then and Now",
        speakers: [
                     "Howard Hinnant"
                  ],
           video: "https://youtube.com/watch?v=Q-4fzrhgBTg",
       thumbnail: "http://img.youtube.com/vi/Q-4fzrhgBTg/0.jpg",
        duration: 204,
            tags: [
                     "c++",
                     "conference",
                     "lightning",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 177,
      identifier: "#cppcon-2018-0181",
         meeting: "cppcon",
         edition: "2018",
           title: " [Boost].DI - Inject all the things!",
        speakers: [
                     "Kris Jusiak"
                  ],
           video: "https://youtube.com/watch?v=8HmjM3G8jhQ",
       thumbnail: "http://img.youtube.com/vi/8HmjM3G8jhQ/0.jpg",
        duration: 307,
            tags: [
                     "c++",
                     "conference",
                     "lightning",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 11,
      identifier: "#cppcon-2018-0011",
         meeting: "cppcon",
         edition: "2018",
           title: " A Little Order: Delving into the STL sorting algorithms",
        speakers: [
                     "Fred Tingaud"
                  ],
           video: "https://youtube.com/watch?v=-0tO3Eni2uo",
       thumbnail: "http://img.youtube.com/vi/-0tO3Eni2uo/0.jpg",
        duration: 1614,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 110,
      identifier: "#cppcon-2018-0114",
         meeting: "cppcon",
         edition: "2018",
           title: " A Modern C++ Programming Model for GPUs using Khronos SYCL",
        speakers: [
                     "Gordon Brown"
                  ],
           video: "https://youtube.com/watch?v=miqZS6aS9K0",
       thumbnail: "http://img.youtube.com/vi/miqZS6aS9K0/0.jpg",
        duration: 3685,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 57,
      identifier: "#cppcon-2018-0057",
         meeting: "cppcon",
         edition: "2018",
           title: " A Semi Compile/Run-time Map with (Nearly) Zero Overhead Lookup",
        speakers: [
                     "Fabian Renn-Giles"
                  ],
           video: "https://youtube.com/watch?v=qNAbGpV1ZkU",
       thumbnail: "http://img.youtube.com/vi/qNAbGpV1ZkU/0.jpg",
        duration: 1523,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 161,
      identifier: "#cppcon-2018-0165",
         meeting: "cppcon",
         edition: "2018",
           title: " Almost Always Avoiding auto",
        speakers: [
                     "Staffan Tjernstrom"
                  ],
           video: "https://youtube.com/watch?v=bSgrKgfFFMQ",
       thumbnail: "http://img.youtube.com/vi/bSgrKgfFFMQ/0.jpg",
        duration: 310,
            tags: [
                     "c++",
                     "conference",
                     "lightning",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 68,
      identifier: "#cppcon-2018-0068",
         meeting: "cppcon",
         edition: "2018",
           title: " An Allocator is a Handle to a Heap",
        speakers: [
                     "Arthur O'Dwyer"
                  ],
           video: "https://youtube.com/watch?v=IejdKidUwIg",
       thumbnail: "http://img.youtube.com/vi/IejdKidUwIg/0.jpg",
        duration: 3790,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 141,
      identifier: "#cppcon-2018-0145",
         meeting: "cppcon",
         edition: "2018",
           title: " Applied Best Practices",
        speakers: [
                     "Jason Turner"
                  ],
           video: "https://youtube.com/watch?v=DHOlsEd0eDE",
       thumbnail: "http://img.youtube.com/vi/DHOlsEd0eDE/0.jpg",
        duration: 3798,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 22,
      identifier: "#cppcon-2018-0022",
         meeting: "cppcon",
         edition: "2018",
           title: " Avoiding Disasters with Strongly Typed C++",
        speakers: [
                     "Arno Lepisk"
                  ],
           video: "https://youtube.com/watch?v=1fwbG5TyI18",
       thumbnail: "http://img.youtube.com/vi/1fwbG5TyI18/0.jpg",
        duration: 2433,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 129,
      identifier: "#cppcon-2018-0133",
         meeting: "cppcon",
         edition: "2018",
           title: " Better Code: Human Interface",
        speakers: [
                     "Sean Parent"
                  ],
           video: "https://youtube.com/watch?v=0WlJEz2wb8Y",
       thumbnail: "http://img.youtube.com/vi/0WlJEz2wb8Y/0.jpg",
        duration: 3520,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 63,
      identifier: "#cppcon-2018-0063",
         meeting: "cppcon",
         edition: "2018",
           title: " Better Tools in Your Clang Toolbox'",
        speakers: [
                     "Victor Ciura"
                  ],
           video: "https://youtube.com/watch?v=4X_fZkl7kkU",
       thumbnail: "http://img.youtube.com/vi/4X_fZkl7kkU/0.jpg",
        duration: 3641,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 145,
      identifier: "#cppcon-2018-0149",
         meeting: "cppcon",
         edition: "2018",
           title: " Bringing C++ 17 Parallel Algorithms to a standard library near you",
        speakers: [
                     "Thomas Rodgers"
                  ],
           video: "https://youtube.com/watch?v=-KT8gaojHUU",
       thumbnail: "http://img.youtube.com/vi/-KT8gaojHUU/0.jpg",
        duration: 1846,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 144,
      identifier: "#cppcon-2018-0148",
         meeting: "cppcon",
         edition: "2018",
           title: " Build Systems: a Simple Solution to a Complicated Problem",
        speakers: [
                     "Peter Bindels"
                  ],
           video: "https://youtube.com/watch?v=mWOmkwv8N_U",
       thumbnail: "http://img.youtube.com/vi/mWOmkwv8N_U/0.jpg",
        duration: 2942,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 121,
      identifier: "#cppcon-2018-0125",
         meeting: "cppcon",
         edition: "2018",
           title: " Building a C++ Reflection System in One Weekend Using Clang and LLVM",
        speakers: [
                     "Arvid Gerstmann"
                  ],
           video: "https://youtube.com/watch?v=DUiUBt-fqEY",
       thumbnail: "http://img.youtube.com/vi/DUiUBt-fqEY/0.jpg",
        duration: 2767,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 43,
      identifier: "#cppcon-2018-0043",
         meeting: "cppcon",
         edition: "2018",
           title: " C++ Dependency Management: from Package Consumption to Project Development",
        speakers: [
                     "Boris Kolpackov"
                  ],
           video: "https://youtube.com/watch?v=Nni2Qu2WitY",
       thumbnail: "http://img.youtube.com/vi/Nni2Qu2WitY/0.jpg",
        duration: 3774,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 127,
      identifier: "#cppcon-2018-0131",
         meeting: "cppcon",
         edition: "2018",
           title: " C++ Everywhere with WebAssembly",
        speakers: [
                     "Damien Buhl"
                  ],
           video: "https://youtube.com/watch?v=QPJPS-Jjb-g",
       thumbnail: "http://img.youtube.com/vi/QPJPS-Jjb-g/0.jpg",
        duration: 1911,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 67,
      identifier: "#cppcon-2018-0067",
         meeting: "cppcon",
         edition: "2018",
           title: " C++ Function Templates: How Do They Really Work?",
        speakers: [
                     "Walter E. Brown"
                  ],
           video: "https://youtube.com/watch?v=NIDEjY5ywqU",
       thumbnail: "http://img.youtube.com/vi/NIDEjY5ywqU/0.jpg",
        duration: 3618,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 61,
      identifier: "#cppcon-2018-0061",
         meeting: "cppcon",
         edition: "2018",
           title: " C++ in Elvenland",
        speakers: [
                     "Serge Guelton"
                  ],
           video: "https://youtube.com/watch?v=CVg7CYVV3KI",
       thumbnail: "http://img.youtube.com/vi/CVg7CYVV3KI/0.jpg",
        duration: 3536,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 96,
      identifier: "#cppcon-2018-0100",
         meeting: "cppcon",
         edition: "2018",
           title: " C++ Modules",
        speakers: [
                     "Nathan Sidwell"
                  ],
           video: "https://youtube.com/watch?v=xi2lTaC5p0I",
       thumbnail: "http://img.youtube.com/vi/xi2lTaC5p0I/0.jpg",
        duration: 3519,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 143,
      identifier: "#cppcon-2018-0147",
         meeting: "cppcon",
         edition: "2018",
           title: " C++ Modules and Large-Scale Development",
        speakers: [
                     "John Lakos"
                  ],
           video: "https://youtube.com/watch?v=K_fTl_hIEGY",
       thumbnail: "http://img.youtube.com/vi/K_fTl_hIEGY/0.jpg",
        duration: 3542,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 170,
      identifier: "#cppcon-2018-0174",
         meeting: "cppcon",
         edition: "2018",
           title: " Cache Warming: Warm Up The Code",
        speakers: [
                     "Jonathan Keinan"
                  ],
           video: "https://youtube.com/watch?v=XzRxikGgaHI",
       thumbnail: "http://img.youtube.com/vi/XzRxikGgaHI/0.jpg",
        duration: 272,
            tags: [
                     "c++",
                     "conference",
                     "lightning",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 146,
      identifier: "#cppcon-2018-0150",
         meeting: "cppcon",
         edition: "2018",
           title: " Can I has grammar?",
        speakers: [
                     "Timur Doumler"
                  ],
           video: "https://youtube.com/watch?v=tsG95Y-C14k",
       thumbnail: "http://img.youtube.com/vi/tsG95Y-C14k/0.jpg",
        duration: 411,
            tags: [
                     "c++",
                     "conference",
                     "lightning",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 179,
      identifier: "#cppcon-2018-0183",
         meeting: "cppcon",
         edition: "2018",
           title: " Clang on Windows: It's a Thing",
        speakers: [
                     "Zach Turner"
                  ],
           video: "https://youtube.com/watch?v=WLdid9PvaPo",
       thumbnail: "http://img.youtube.com/vi/WLdid9PvaPo/0.jpg",
        duration: 319,
            tags: [
                     "c++",
                     "conference",
                     "lightning",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 132,
      identifier: "#cppcon-2018-0136",
         meeting: "cppcon",
         edition: "2018",
           title: " Clangd: architecture of a scalable C++ language server",
        speakers: [
                     "Ilya Biryukov"
                  ],
           video: "https://youtube.com/watch?v=5HIyAXj1YNQ",
       thumbnail: "http://img.youtube.com/vi/5HIyAXj1YNQ/0.jpg",
        duration: 3148,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 119,
      identifier: "#cppcon-2018-0123",
         meeting: "cppcon",
         edition: "2018",
           title: " Class Template Argument Deduction for Everyone",
        speakers: [
                     "Stephan T. Lavavej"
                  ],
           video: "https://youtube.com/watch?v=-H-ut6j1BYU",
       thumbnail: "http://img.youtube.com/vi/-H-ut6j1BYU/0.jpg",
        duration: 3641,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 128,
      identifier: "#cppcon-2018-0132",
         meeting: "cppcon",
         edition: "2018",
           title: " Class template argument deduction in C++17",
        speakers: [
                     "Timur Doumler"
                  ],
           video: "https://youtube.com/watch?v=UDs90b0yjjQ",
       thumbnail: "http://img.youtube.com/vi/UDs90b0yjjQ/0.jpg",
        duration: 3610,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 1,
      identifier: "#cppcon-2018-0001",
         meeting: "cppcon",
         edition: "2018",
           title: " Closing Panel: Spectre",
        speakers: [
                     "Matt Godbolt"
                  ],
           video: "https://youtube.com/watch?v=mt_ULMnQ4_A",
       thumbnail: "http://img.youtube.com/vi/mt_ULMnQ4_A/0.jpg",
        duration: 2571,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "panel"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 89,
      identifier: "#cppcon-2018-0093",
         meeting: "cppcon",
         edition: "2018",
           title: " Co- and Contra-: Adding a Little Variance",
        speakers: [
                     "Michal Dominiak"
                  ],
           video: "https://youtube.com/watch?v=nlxA7CWfy78",
       thumbnail: "http://img.youtube.com/vi/nlxA7CWfy78/0.jpg",
        duration: 1859,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 167,
      identifier: "#cppcon-2018-0171",
         meeting: "cppcon",
         edition: "2018",
           title: " Communicating via Diagnostics: Observations and Tips for Authors",
        speakers: [
                     "Walter Brown"
                  ],
           video: "https://youtube.com/watch?v=GNhwzTlcDp0",
       thumbnail: "http://img.youtube.com/vi/GNhwzTlcDp0/0.jpg",
        duration: 446,
            tags: [
                     "c++",
                     "conference",
                     "lightning",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 12,
      identifier: "#cppcon-2018-0012",
         meeting: "cppcon",
         edition: "2018",
           title: " Compile-time programming and reflection in C++20 and beyond",
        speakers: [
                     "Louis Dionne"
                  ],
           video: "https://youtube.com/watch?v=CRDNPwXDVp0",
       thumbnail: "http://img.youtube.com/vi/CRDNPwXDVp0/0.jpg",
        duration: 4120,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 10,
      identifier: "#cppcon-2018-0010s",
         meeting: "cppcon",
         edition: "2018",
           title: " Compiling Multi-Million Line C++ Code Bases Effortlessly with the Meson Build System",
        speakers: [
                     "Jussi Pakkanen"
                  ],
           video: "https://youtube.com/watch?v=SCZLnopmYBM",
       thumbnail: "http://img.youtube.com/vi/SCZLnopmYBM/0.jpg",
        duration: 2026,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 123,
      identifier: "#cppcon-2018-0127",
         meeting: "cppcon",
         edition: "2018",
           title: " Compute More in Less Time Using C++ Simd Wrapper Libraries",
        speakers: [
                     "Jefferson Amstutz"
                  ],
           video: "https://youtube.com/watch?v=8khWb-Bhhvs",
       thumbnail: "http://img.youtube.com/vi/8khWb-Bhhvs/0.jpg",
        duration: 3803,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 45,
      identifier: "#cppcon-2018-0045",
         meeting: "cppcon",
         edition: "2018",
           title: " Concepts and Contracts: When, What, and How",
        speakers: [
                     "Michael Price"
                  ],
           video: "https://youtube.com/watch?v=Vj2vuoPJNfE",
       thumbnail: "http://img.youtube.com/vi/Vj2vuoPJNfE/0.jpg",
        duration: 3669,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 66,
      identifier: "#cppcon-2018-0066",
         meeting: "cppcon",
         edition: "2018",
           title: " Concepts As She Is Spoke",
        speakers: [
                     "Arthur O'Dwyer"
                  ],
           video: "https://youtube.com/watch?v=CXn02MPkn8Y",
       thumbnail: "http://img.youtube.com/vi/CXn02MPkn8Y/0.jpg",
        duration: 3990,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 120,
      identifier: "#cppcon-2018-0124",
         meeting: "cppcon",
         edition: "2018",
           title: " Concepts in 60: Everything you need to know and nothing you don't",
        speakers: [
                     "Andrew Sutton"
                  ],
           video: "https://youtube.com/watch?v=ZeU6OPaGxwM",
       thumbnail: "http://img.youtube.com/vi/ZeU6OPaGxwM/0.jpg",
        duration: 4266,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 3,
      identifier: "#cppcon-2018-0003",
         meeting: "cppcon",
         edition: "2018",
           title: " Concepts: The Future of Generic Programming (the future is here)",
        speakers: [
                     "Bjarne Stroustrup"
                  ],
           video: "https://youtube.com/watch?v=HddFGPTAmtU",
       thumbnail: "http://img.youtube.com/vi/HddFGPTAmtU/0.jpg",
        duration: 5911,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 137,
      identifier: "#cppcon-2018-0141",
         meeting: "cppcon",
         edition: "2018",
           title: " Concurrency Challenges of Interrupt Service Routines",
        speakers: [
                     "Odin Holmes"
                  ],
           video: "https://youtube.com/watch?v=gcRdG7dGMOw",
       thumbnail: "http://img.youtube.com/vi/gcRdG7dGMOw/0.jpg",
        duration: 3663,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 174,
      identifier: "#cppcon-2018-0178",
         meeting: "cppcon",
         edition: "2018",
           title: " Constexpr and operator overloading: Why everything is terrible",
        speakers: [
                     "CJ Johnson"
                  ],
           video: "https://youtube.com/watch?v=a8-VaKuK594",
       thumbnail: "http://img.youtube.com/vi/a8-VaKuK594/0.jpg",
        duration: 211,
            tags: [
                     "c++",
                     "conference",
                     "lightning",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 52,
      identifier: "#cppcon-2018-0052",
         meeting: "cppcon",
         edition: "2018",
           title: " Contract Programming in C++(20) (part 1 of 2)",
        speakers: [
                     "Alisdair Meredith"
                  ],
           video: "https://youtube.com/watch?v=aAFRxRznVjQ",
       thumbnail: "http://img.youtube.com/vi/aAFRxRznVjQ/0.jpg",
        duration: 3771,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 53,
      identifier: "#cppcon-2018-0053",
         meeting: "cppcon",
         edition: "2018",
           title: " Contract Programming in C++(20) (part 2 of 2)",
        speakers: [
                     "Alisdair Meredith"
                  ],
           video: "https://youtube.com/watch?v=7RWJQLpmrS0",
       thumbnail: "http://img.youtube.com/vi/7RWJQLpmrS0/0.jpg",
        duration: 3876,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 158,
      identifier: "#cppcon-2018-0162",
         meeting: "cppcon",
         edition: "2018",
           title: " Copy Elision",
        speakers: [
                     "Jon Kalb"
                  ],
           video: "https://youtube.com/watch?v=IZbL-RGr_mk",
       thumbnail: "http://img.youtube.com/vi/IZbL-RGr_mk/0.jpg",
        duration: 301,
            tags: [
                     "c++",
                     "conference",
                     "lightning",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 54,
      identifier: "#cppcon-2018-0054",
         meeting: "cppcon",
         edition: "2018",
           title: " Crafting EDSL In C++ using Metaprogramming, Operator Overloading, & Lambda Expressions",
        speakers: [
                     "Gilang Hamidy"
                  ],
           video: "https://youtube.com/watch?v=ijh3Tse5L8s",
       thumbnail: "http://img.youtube.com/vi/ijh3Tse5L8s/0.jpg",
        duration: 3710,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 16,
      identifier: "#cppcon-2018-0016",
         meeting: "cppcon",
         edition: "2018",
           title: " CUDA Kernels with C++",
        speakers: [
                     "Michael Gopshtein"
                  ],
           video: "https://youtube.com/watch?v=HIJTRrm9nzY",
       thumbnail: "http://img.youtube.com/vi/HIJTRrm9nzY/0.jpg",
        duration: 3252,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 166,
      identifier: "#cppcon-2018-0170",
         meeting: "cppcon",
         edition: "2018",
           title: " Curly Function Call Syntax",
        speakers: [
                     "Tony Wasserka"
                  ],
           video: "https://youtube.com/watch?v=L8eeDzTWEtU",
       thumbnail: "http://img.youtube.com/vi/L8eeDzTWEtU/0.jpg",
        duration: 309,
            tags: [
                     "c++",
                     "conference",
                     "lightning",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 104,
      identifier: "#cppcon-2018-0108",
         meeting: "cppcon",
         edition: "2018",
           title: " Custom Overload Sets and Inline SFINAE for Truly Generic Interfaces",
        speakers: [
                     "Vincent Reverdy"
                  ],
           video: "https://youtube.com/watch?v=WBTNCYT20f0",
       thumbnail: "http://img.youtube.com/vi/WBTNCYT20f0/0.jpg",
        duration: 3319,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 148,
      identifier: "#cppcon-2018-0152",
         meeting: "cppcon",
         edition: "2018",
           title: " Dangling in French and English",
        speakers: [
                     "Mark Elendt"
                  ],
           video: "https://youtube.com/watch?v=jieYLTcmTS0",
       thumbnail: "http://img.youtube.com/vi/jieYLTcmTS0/0.jpg",
        duration: 220,
            tags: [
                     "c++",
                     "conference",
                     "lightning",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 35,
      identifier: "#cppcon-2018-0035",
         meeting: "cppcon",
         edition: "2018",
           title: " Datum: A Compact Bitwise Copyable Variant Type",
        speakers: [
                     "Rishi Wani"
                  ],
           video: "https://youtube.com/watch?v=YdzbrFerlRY",
       thumbnail: "http://img.youtube.com/vi/YdzbrFerlRY/0.jpg",
        duration: 1578,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 114,
      identifier: "#cppcon-2018-0118",
         meeting: "cppcon",
         edition: "2018",
           title: " Dealing with aliasing using contracts",
        speakers: [
                     "Gabor Horvath"
                  ],
           video: "https://youtube.com/watch?v=mWK0ZO8xOoY",
       thumbnail: "http://img.youtube.com/vi/mWK0ZO8xOoY/0.jpg",
        duration: 2236,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 81,
      identifier: "#cppcon-2018-0083",
         meeting: "cppcon",
         edition: "2018",
           title: " Debug C++ Without Running",
        speakers: [
                     "Anastasiia Kazakova"
                  ],
           video: "https://youtube.com/watch?v=eGWM_dI5egQ",
       thumbnail: "http://img.youtube.com/vi/eGWM_dI5egQ/0.jpg",
        duration: 3194,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 39,
      identifier: "#cppcon-2018-0039",
         meeting: "cppcon",
         edition: "2018",
           title: " Debugging Linux C++",
        speakers: [
                     "Greg Law"
                  ],
           video: "https://youtube.com/watch?v=V1t6faOKjuQ",
       thumbnail: "http://img.youtube.com/vi/V1t6faOKjuQ/0.jpg",
        duration: 3505,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 103,
      identifier: "#cppcon-2018-0107",
         meeting: "cppcon",
         edition: "2018",
           title: " Design for Performance",
        speakers: [
                     "Fedor Pikus"
                  ],
           video: "https://youtube.com/watch?v=m25p3EtBua4",
       thumbnail: "http://img.youtube.com/vi/m25p3EtBua4/0.jpg",
        duration: 3819,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 124,
      identifier: "#cppcon-2018-0128",
         meeting: "cppcon",
         edition: "2018",
           title: " Development strategies: You've written a library - now what?",
        speakers: [
                     "Marshall Clow"
                  ],
           video: "https://youtube.com/watch?v=bfWxNoyRrXs",
       thumbnail: "http://img.youtube.com/vi/bfWxNoyRrXs/0.jpg",
        duration: 4620,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 28,
      identifier: "#cppcon-2018-0028",
         meeting: "cppcon",
         edition: "2018",
           title: " Don't package your libraries, write packagable libraries!",
        speakers: [
                     "Robert Schumacher"
                  ],
           video: "https://youtube.com/watch?v=sBP17HQAQjk",
       thumbnail: "http://img.youtube.com/vi/sBP17HQAQjk/0.jpg",
        duration: 2006,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 84,
      identifier: "#cppcon-2018-0086",
         meeting: "cppcon",
         edition: "2018",
           title: " DynaMix: A New Take on Polymorphism",
        speakers: [
                     "Borislav Stanimirov"
                  ],
           video: "https://youtube.com/watch?v=ckY7Pc-A9Xc",
       thumbnail: "http://img.youtube.com/vi/ckY7Pc-A9Xc/0.jpg",
        duration: 3587,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 106,
      identifier: "#cppcon-2018-0110",
         meeting: "cppcon",
         edition: "2018",
           title: " Early Modern C++: How to Handle a C++03 Codebase in $CURRENT_YEAR",
        speakers: [
                     "Mathieu Ropert"
                  ],
           video: "https://youtube.com/watch?v=76uHxUi6L5g",
       thumbnail: "http://img.youtube.com/vi/76uHxUi6L5g/0.jpg",
        duration: 2892,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 133,
      identifier: "#cppcon-2018-0137",
         meeting: "cppcon",
         edition: "2018",
           title: " Easy to Use, Hard to Misuse: Declarative Style in C++",
        speakers: [
                     "Ben Deane"
                  ],
           video: "https://youtube.com/watch?v=I52uPJSoAT4",
       thumbnail: "http://img.youtube.com/vi/I52uPJSoAT4/0.jpg",
        duration: 3666,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 15,
      identifier: "#cppcon-2018-0015",
         meeting: "cppcon",
         edition: "2018",
           title: " Easy::Jit: A Just-in-Time compilation library for C++",
        speakers: [
                     "Juan Manuel Martinez Caamano"
                  ],
           video: "https://youtube.com/watch?v=_WPdof1dTqo",
       thumbnail: "http://img.youtube.com/vi/_WPdof1dTqo/0.jpg",
        duration: 1531,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 97,
      identifier: "#cppcon-2018-0101",
         meeting: "cppcon",
         edition: "2018",
           title: " Effective replacement of dynamic polymorphism with std::variant",
        speakers: [
                     "Mateusz Pusz"
                  ],
           video: "https://youtube.com/watch?v=gKbORJtnVu8",
       thumbnail: "http://img.youtube.com/vi/gKbORJtnVu8/0.jpg",
        duration: 1739,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 82,
      identifier: "#cppcon-2018-0084",
         meeting: "cppcon",
         edition: "2018",
           title: " Emulating the Nintendo 3DS: Generative & Declarative Programming in Action'",
        speakers: [
                     "Tony Wasserka"
                  ],
           video: "https://youtube.com/watch?v=67OCoOLVuK8",
       thumbnail: "http://img.youtube.com/vi/67OCoOLVuK8/0.jpg",
        duration: 3446,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 41,
      identifier: "#cppcon-2018-0041",
         meeting: "cppcon",
         edition: "2018",
           title: " Enough string_view to Hang Ourselves",
        speakers: [
                     "Victor Ciura"
                  ],
           video: "https://youtube.com/watch?v=xwP4YCP_0q0",
       thumbnail: "http://img.youtube.com/vi/xwP4YCP_0q0/0.jpg",
        duration: 3714,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 14,
      identifier: "#cppcon-2018-0014",
         meeting: "cppcon",
         edition: "2018",
           title: " Ensuring Exception Safety Through Testing'",
        speakers: [
                     "Jon Cohen"
                  ],
           video: "https://youtube.com/watch?v=XPzHNSUnTc4",
       thumbnail: "http://img.youtube.com/vi/XPzHNSUnTc4/0.jpg",
        duration: 3501,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 83,
      identifier: "#cppcon-2018-0085",
         meeting: "cppcon",
         edition: "2018",
           title: " Expect the expected",
        speakers: [
                     "Andrei Alexandrescu"
                  ],
           video: "https://youtube.com/watch?v=PH4WBuE1BHI",
       thumbnail: "http://img.youtube.com/vi/PH4WBuE1BHI/0.jpg",
        duration: 3538,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 92,
      identifier: "#cppcon-2018-0096",
         meeting: "cppcon",
         edition: "2018",
           title: " Fancy Pointers for Fun and Profit",
        speakers: [
                     "Bob Steagall"
                  ],
           video: "https://youtube.com/watch?v=_nIET46ul6E",
       thumbnail: "http://img.youtube.com/vi/_nIET46ul6E/0.jpg",
        duration: 3705,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 17,
      identifier: "#cppcon-2018-0017",
         meeting: "cppcon",
         edition: "2018",
           title: " Fast Conversion From UTF-8 with C++, DFAs, and SSE Intrinsics",
        speakers: [
                     "Bob Steagall"
                  ],
           video: "https://youtube.com/watch?v=5FQ87-Ecb-A",
       thumbnail: "http://img.youtube.com/vi/5FQ87-Ecb-A/0.jpg",
        duration: 4180,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 164,
      identifier: "#cppcon-2018-0168",
         meeting: "cppcon",
         edition: "2018",
           title: " Fast Parallel Programming using Modern C++",
        speakers: [
                     "Tsung-Wei Huang"
                  ],
           video: "https://youtube.com/watch?v=ho9bqIJkvkc",
       thumbnail: "http://img.youtube.com/vi/ho9bqIJkvkc/0.jpg",
        duration: 297,
            tags: [
                     "c++",
                     "conference",
                     "lightning",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 142,
      identifier: "#cppcon-2018-0146",
         meeting: "cppcon",
         edition: "2018",
           title: " Feather: A Modern C++ Web Development Framework",
        speakers: [
                     "Yu Qi"
                  ],
           video: "https://youtube.com/watch?v=DoXXCZJVNeo",
       thumbnail: "http://img.youtube.com/vi/DoXXCZJVNeo/0.jpg",
        duration: 1862,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 181,
      identifier: "#cppcon-2018-0185",
         meeting: "cppcon",
         edition: "2018",
           title: " Fixing Two-Phase Initialization",
        speakers: [
                     "Andreas Weis"
                  ],
           video: "https://youtube.com/watch?v=S7I66lZX_zM",
       thumbnail: "http://img.youtube.com/vi/S7I66lZX_zM/0.jpg",
        duration: 301,
            tags: [
                     "c++",
                     "conference",
                     "lightning",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 182,
      identifier: "#cppcon-2018-0186",
         meeting: "cppcon",
         edition: "2018",
           title: " Forwarding Values... and Backwarding Them Too?'",
        speakers: [
                     "Ezra Chung"
                  ],
           video: "https://youtube.com/watch?v=hwT8K3-NH1w",
       thumbnail: "http://img.youtube.com/vi/hwT8K3-NH1w/0.jpg",
        duration: 281,
            tags: [
                     "c++",
                     "conference",
                     "lightning",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 73,
      identifier: "#cppcon-2018-0073",
         meeting: "cppcon",
         edition: "2018",
           title: " Frozen data structures in C++14",
        speakers: [
                     "Serge Guelton"
                  ],
           video: "https://youtube.com/watch?v=vA5sdxbwUG8",
       thumbnail: "http://img.youtube.com/vi/vA5sdxbwUG8/0.jpg",
        duration: 3461,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 171,
      identifier: "#cppcon-2018-0175",
         meeting: "cppcon",
         edition: "2018",
           title: " Generating UI with C++, boost & Qt",
        speakers: [
                     "Jens Weller"
                  ],
           video: "https://youtube.com/watch?v=L0ipwl5uXCE",
       thumbnail: "http://img.youtube.com/vi/L0ipwl5uXCE/0.jpg",
        duration: 307,
            tags: [
                     "c++",
                     "conference",
                     "lightning",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 116,
      identifier: "#cppcon-2018-0120",
         meeting: "cppcon",
         edition: "2018",
           title: " Get rich quick! Using Boost.Beast WebSockets and Networking TS",
        speakers: [
                     "Vinnie Falco"
                  ],
           video: "https://youtube.com/watch?v=7FQwAjELMek",
       thumbnail: "http://img.youtube.com/vi/7FQwAjELMek/0.jpg",
        duration: 3644,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 74,
      identifier: "#cppcon-2018-0074",
         meeting: "cppcon",
         edition: "2018",
           title: " Git, CMake, Conan - How to ship and reuse our C++ projects",
        speakers: [
                     "Mateusz Pusz"
                  ],
           video: "https://youtube.com/watch?v=S4QSKLXdTtA",
       thumbnail: "http://img.youtube.com/vi/S4QSKLXdTtA/0.jpg",
        duration: 3666,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 111,
      identifier: "#cppcon-2018-0115",
         meeting: "cppcon",
         edition: "2018",
           title: " Grill the Committee",
        speakers: [
                     "John Kalb"
                  ],
           video: "https://youtube.com/watch?v=cH0nJPbMFAY",
       thumbnail: "http://img.youtube.com/vi/cH0nJPbMFAY/0.jpg",
        duration: 5225,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 48,
      identifier: "#cppcon-2018-0048",
         meeting: "cppcon",
         edition: "2018",
           title: " High-Radix Concurrent C++",
        speakers: [
                     "Olivier Giroux"
                  ],
           video: "https://youtube.com/watch?v=75LcDvlEIYw",
       thumbnail: "http://img.youtube.com/vi/75LcDvlEIYw/0.jpg",
        duration: 3381,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 49,
      identifier: "#cppcon-2018-0049",
         meeting: "cppcon",
         edition: "2018",
           title: " How C++ Debuggers Work",
        speakers: [
                     "Simon Brand"
                  ],
           video: "https://youtube.com/watch?v=0DDrseUomfU",
       thumbnail: "http://img.youtube.com/vi/0DDrseUomfU/0.jpg",
        duration: 3659,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 108,
      identifier: "#cppcon-2018-0112",
         meeting: "cppcon",
         edition: "2018",
           title: " How to Argue(ment)'",
        speakers: [
                     "Richard Powell"
                  ],
           video: "https://youtube.com/watch?v=ZbVCGCy3mGQ",
       thumbnail: "http://img.youtube.com/vi/ZbVCGCy3mGQ/0.jpg",
        duration: 3250,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 150,
      identifier: "#cppcon-2018-0154",
         meeting: "cppcon",
         edition: "2018",
           title: " How to create slides about CMake with CMake?",
        speakers: [
                     "Mateusz Pusz"
                  ],
           video: "https://youtube.com/watch?v=sFH8IvPfHx0",
       thumbnail: "http://img.youtube.com/vi/sFH8IvPfHx0/0.jpg",
        duration: 250,
            tags: [
                     "c++",
                     "conference",
                     "lightning",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 42,
      identifier: "#cppcon-2018-0042",
         meeting: "cppcon",
         edition: "2018",
           title: " How to Teach C++ and Influence a Generation",
        speakers: [
                     "Christopher Di Bella"
                  ],
           video: "https://youtube.com/watch?v=3AkPd9Nt2Aw",
       thumbnail: "http://img.youtube.com/vi/3AkPd9Nt2Aw/0.jpg",
        duration: 3521,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 47,
      identifier: "#cppcon-2018-0047",
         meeting: "cppcon",
         edition: "2018",
           title: " How to Write Well-Behaved Value Wrappers",
        speakers: [
                     "Simon Brand"
                  ],
           video: "https://youtube.com/watch?v=J4A2B9eexiw",
       thumbnail: "http://img.youtube.com/vi/J4A2B9eexiw/0.jpg",
        duration: 3173,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 101,
      identifier: "#cppcon-2018-0105",
         meeting: "cppcon",
         edition: "2018",
           title: " Implementing the C++ Core Guidelines' Lifetime Safety Profile in Clang",
        speakers: [
                     "Gabor Horvath",
                     "Matthias Gehre"
                  ],
           video: "https://youtube.com/watch?v=sjnp3P9x5jA",
       thumbnail: "http://img.youtube.com/vi/sjnp3P9x5jA/0.jpg",
        duration: 4084,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 125,
      identifier: "#cppcon-2018-0129",
         meeting: "cppcon",
         edition: "2018",
           title: " Initialization, Shutdown, and constexpr",
        speakers: [
                     "Greg Falcon"
                  ],
           video: "https://youtube.com/watch?v=6ZOygaUjzjQ",
       thumbnail: "http://img.youtube.com/vi/6ZOygaUjzjQ/0.jpg",
        duration: 3669,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 99,
      identifier: "#cppcon-2018-0103",
         meeting: "cppcon",
         edition: "2018",
           title: " Inside Visual C++' Parallel Algorithms",
        speakers: [
                     "Billy O'Neal"
                  ],
           video: "https://youtube.com/watch?v=nOpwhTbulmk",
       thumbnail: "http://img.youtube.com/vi/nOpwhTbulmk/0.jpg",
        duration: 3712,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 107,
      identifier: "#cppcon-2018-0111",
         meeting: "cppcon",
         edition: "2018",
           title: " Interactive C++ Compilation (REPL) Done in a Tiny and Embeddable Way",
        speakers: [
                     "Viktor Kirilov"
                  ],
           video: "https://youtube.com/watch?v=UEuA0yuw_O0",
       thumbnail: "http://img.youtube.com/vi/UEuA0yuw_O0/0.jpg",
        duration: 1829,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 140,
      identifier: "#cppcon-2018-0144",
         meeting: "cppcon",
         edition: "2018",
           title: " Interfaces Matter",
        speakers: [
                     "John Woolverton"
                  ],
           video: "https://youtube.com/watch?v=PG_sbSZL06U",
       thumbnail: "http://img.youtube.com/vi/PG_sbSZL06U/0.jpg",
        duration: 2148,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 26,
      identifier: "#cppcon-2018-0026",
         meeting: "cppcon",
         edition: "2018",
           title: " Latest and Greatest in the Visual Studio Family for C++ Developers 2018",
        speakers: [
                     "xx"
                  ],
           video: "https://youtube.com/watch?v=6NAAuxWNhk4",
       thumbnail: "http://img.youtube.com/vi/6NAAuxWNhk4/0.jpg",
        duration: 3590,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 109,
      identifier: "#cppcon-2018-0113",
         meeting: "cppcon",
         edition: "2018",
           title: " Let's Intercept OpenGL Function Calls...for Logging!",
        speakers: [
                     "Mike Shah"
                  ],
           video: "https://youtube.com/watch?v=DMNFb5ycpNY",
       thumbnail: "http://img.youtube.com/vi/DMNFb5ycpNY/0.jpg",
        duration: 1771,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 147,
      identifier: "#cppcon-2018-0151",
         meeting: "cppcon",
         edition: "2018",
           title: " Let's learn programming by inventing it",
        speakers: [
                     "Olafur Waage"
                  ],
           video: "https://youtube.com/watch?v=l5Mp_DEn4bs",
       thumbnail: "http://img.youtube.com/vi/l5Mp_DEn4bs/0.jpg",
        duration: 289,
            tags: [
                     "c++",
                     "conference",
                     "lightning",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 117,
      identifier: "#cppcon-2018-0121",
         meeting: "cppcon",
         edition: "2018",
           title: " Liberating the Debugging Experience with the GDB Python API",
        speakers: [
                     "Jeff Trull"
                  ],
           video: "https://youtube.com/watch?v=ck_jCH_G7pA",
       thumbnail: "http://img.youtube.com/vi/ck_jCH_G7pA/0.jpg",
        duration: 1749,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 80,
      identifier: "#cppcon-2018-0082",
         meeting: "cppcon",
         edition: "2018",
           title: " Lightweight 2D graphics with io2d",
        speakers: [
                     "Guy Davidson"
                  ],
           video: "https://youtube.com/watch?v=7Jk1a4cnukQ",
       thumbnail: "http://img.youtube.com/vi/7Jk1a4cnukQ/0.jpg",
        duration: 3421,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 152,
      identifier: "#cppcon-2018-0156",
         meeting: "cppcon",
         edition: "2018",
           title: " Machine Learning in C++ with PyTorch",
        speakers: [
                     "Peter Goldsborough"
                  ],
           video: "https://youtube.com/watch?v=auRPXMMHJzc",
       thumbnail: "http://img.youtube.com/vi/auRPXMMHJzc/0.jpg",
        duration: 253,
            tags: [
                     "c++",
                     "conference",
                     "lightning",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 36,
      identifier: "#cppcon-2018-0036",
         meeting: "cppcon",
         edition: "2018",
           title: " Making New Friends",
        speakers: [
                     "Dan Saks"
                  ],
           video: "https://youtube.com/watch?v=POa_V15je8Y",
       thumbnail: "http://img.youtube.com/vi/POa_V15je8Y/0.jpg",
        duration: 3691,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 91,
      identifier: "#cppcon-2018-0095",
         meeting: "cppcon",
         edition: "2018",
           title: " Memory Tagging and how it improves C/C++ memory safety",
        speakers: [
                     "Kostya Serebryany"
                  ],
           video: "https://youtube.com/watch?v=lLEcbXidK2o",
       thumbnail: "http://img.youtube.com/vi/lLEcbXidK2o/0.jpg",
        duration: 1887,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 56,
      identifier: "#cppcon-2018-0056",
         meeting: "cppcon",
         edition: "2018",
           title: " Modern C++ Design (part 1 of 2)",
        speakers: [
                     "Titus Winters"
                  ],
           video: "https://youtube.com/watch?v=xTdeZ4MxbKo",
       thumbnail: "http://img.youtube.com/vi/xTdeZ4MxbKo/0.jpg",
        duration: 3712,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 85,
      identifier: "#cppcon-2018-0087",
         meeting: "cppcon",
         edition: "2018",
           title: " Modern C++ Design (part 2 of 2)",
        speakers: [
                     "Titus Winters"
                  ],
           video: "https://youtube.com/watch?v=tn7oVNrPM8I",
       thumbnail: "http://img.youtube.com/vi/tn7oVNrPM8I/0.jpg",
        duration: 3463,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 31,
      identifier: "#cppcon-2018-0031",
         meeting: "cppcon",
         edition: "2018",
           title: " Modern C++ in Embedded Systems - The Saga Continues",
        speakers: [
                     "Michael Caisse"
                  ],
           video: "https://youtube.com/watch?v=LfRLQ7IChtg",
       thumbnail: "http://img.youtube.com/vi/LfRLQ7IChtg/0.jpg",
        duration: 4144,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 55,
      identifier: "#cppcon-2018-0055",
         meeting: "cppcon",
         edition: "2018",
           title: " Modern C++ Testing with Catch2",
        speakers: [
                     "Phil Nash"
                  ],
           video: "https://youtube.com/watch?v=Ob5_XZrFQH0",
       thumbnail: "http://img.youtube.com/vi/Ob5_XZrFQH0/0.jpg",
        duration: 3307,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 130,
      identifier: "#cppcon-2018-0134",
         meeting: "cppcon",
         edition: "2018",
           title: " Moving Faster: Everyday efficiency in modern C++",
        speakers: [
                     "Alan Talbot"
                  ],
           video: "https://youtube.com/watch?v=EovBkh9wDnM",
       thumbnail: "http://img.youtube.com/vi/EovBkh9wDnM/0.jpg",
        duration: 3582,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 60,
      identifier: "#cppcon-2018-0060",
         meeting: "cppcon",
         edition: "2018",
           title: " Multi-Precision Arithmetic for Cryptology in C++, at Run-Time and at Compile-Time",
        speakers: [
                     "Niek J. Bouman"
                  ],
           video: "https://youtube.com/watch?v=G33yF26UGMo",
       thumbnail: "http://img.youtube.com/vi/G33yF26UGMo/0.jpg",
        duration: 1888,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 95,
      identifier: "#cppcon-2018-0099",
         meeting: "cppcon",
         edition: "2018",
           title: " Named Arguments from Scratch",
        speakers: [
                     "Richard Powell"
                  ],
           video: "https://youtube.com/watch?v=Grveezn0zhU",
       thumbnail: "http://img.youtube.com/vi/Grveezn0zhU/0.jpg",
        duration: 3263,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 9,
      identifier: "#cppcon-2018-0009",
         meeting: "cppcon",
         edition: "2018",
           title: " Nano-coroutines to the Rescue! (Using Coroutines TS, of Course)",
        speakers: [
                     "G. Nishanov"
                  ],
           video: "https://youtube.com/watch?v=j9tlJAqMV7U",
       thumbnail: "http://img.youtube.com/vi/j9tlJAqMV7U/0.jpg",
        duration: 3865,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 65,
      identifier: "#cppcon-2018-0065",
         meeting: "cppcon",
         edition: "2018",
           title: " OOP Is Dead, Long Live Data-oriented Design",
        speakers: [
                     "Stoyan Nikolov"
                  ],
           video: "https://youtube.com/watch?v=yy8jQgmhbAU",
       thumbnail: "http://img.youtube.com/vi/yy8jQgmhbAU/0.jpg",
        duration: 3646,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 58,
      identifier: "#cppcon-2018-0058",
         meeting: "cppcon",
         edition: "2018",
           title: " Open is Good - yomm2: Fast, Orthogonal Open Methods",
        speakers: [
                     "Jean-Louis Leroy"
                  ],
           video: "https://youtube.com/watch?v=xkxo0lah51s",
       thumbnail: "http://img.youtube.com/vi/xkxo0lah51s/0.jpg",
        duration: 1908,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 32,
      identifier: "#cppcon-2018-0032",
         meeting: "cppcon",
         edition: "2018",
           title: " Operator Overloading: History, Principles and Practice",
        speakers: [
                     "Ben Deane"
                  ],
           video: "https://youtube.com/watch?v=zh4EgO13Etg",
       thumbnail: "http://img.youtube.com/vi/zh4EgO13Etg/0.jpg",
        duration: 3716,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 29,
      identifier: "#cppcon-2018-0029",
         meeting: "cppcon",
         edition: "2018",
           title: " Parsing C++",
        speakers: [
                     "Dmitry Kozhevnikov",
                     "Timur Doumler"
                  ],
           video: "https://youtube.com/watch?v=WfIr7lKT4Sk",
       thumbnail: "http://img.youtube.com/vi/WfIr7lKT4Sk/0.jpg",
        duration: 3191,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 4,
      identifier: "#cppcon-2018-0004",
         meeting: "cppcon",
         edition: "2018",
           title: " Patterns and Techniques Used in the Houdini 3D Graphics Application",
        speakers: [
                     "Mark Elendt"
                  ],
           video: "https://youtube.com/watch?v=2YXwg0n9e7E",
       thumbnail: "http://img.youtube.com/vi/2YXwg0n9e7E/0.jpg",
        duration: 5227,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 34,
      identifier: "#cppcon-2018-0034",
         meeting: "cppcon",
         edition: "2018",
           title: " Pessimistic Programming",
        speakers: [
                     "Patrice Roy"
                  ],
           video: "https://youtube.com/watch?v=pnSvUbE1HHk",
       thumbnail: "http://img.youtube.com/vi/pnSvUbE1HHk/0.jpg",
        duration: 3143,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 156,
      identifier: "#cppcon-2018-0160",
         meeting: "cppcon",
         edition: "2018",
           title: " Qt Signals and the Coroutines TS",
        speakers: [
                     "Jeff Trull"
                  ],
           video: "https://youtube.com/watch?v=2wz0r2FfJmg",
       thumbnail: "http://img.youtube.com/vi/2wz0r2FfJmg/0.jpg",
        duration: 282,
            tags: [
                     "c++",
                     "conference",
                     "lightning",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 46,
      identifier: "#cppcon-2018-0046",
         meeting: "cppcon",
         edition: "2018",
           title: " Range-Based Text Formatting For a Future Range-Based Standard Library",
        speakers: [
                     "Arno Schoedl"
                  ],
           video: "https://youtube.com/watch?v=uCybqSX1idU",
       thumbnail: "http://img.youtube.com/vi/uCybqSX1idU/0.jpg",
        duration: 3376,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 118,
      identifier: "#cppcon-2018-0122",
         meeting: "cppcon",
         edition: "2018",
           title: " Rapid Prototyping of Graphics Shaders in Modern C++",
        speakers: [
                     "Valentin Galea"
                  ],
           video: "https://youtube.com/watch?v=8FoAxasNssA",
       thumbnail: "http://img.youtube.com/vi/8FoAxasNssA/0.jpg",
        duration: 2940,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 98,
      identifier: "#cppcon-2018-0102",
         meeting: "cppcon",
         edition: "2018",
           title: " Refactoring Legacy Codebases with LibTooling",
        speakers: [
                     "James Bennett"
                  ],
           video: "https://youtube.com/watch?v=tUBUqJSGr54",
       thumbnail: "http://img.youtube.com/vi/tUBUqJSGr54/0.jpg",
        duration: 1427,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 27,
      identifier: "#cppcon-2018-0027",
         meeting: "cppcon",
         edition: "2018",
           title: " Regular Types and Why Do I Care ?",
        speakers: [
                     "Victor Ciura"
                  ],
           video: "https://youtube.com/watch?v=h60zqdzIelE",
       thumbnail: "http://img.youtube.com/vi/h60zqdzIelE/0.jpg",
        duration: 3103,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 86,
      identifier: "#cppcon-2018-0089",
         meeting: "cppcon",
         edition: "2018",
           title: " Return Value Optimization: Harder Than It Looks",
        speakers: [
                     "Arthur O'Dwyer"
                  ],
           video: "https://youtube.com/watch?v=hA1WNtNyNbo",
       thumbnail: "http://img.youtube.com/vi/hA1WNtNyNbo/0.jpg",
        duration: 1591,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 21,
      identifier: "#cppcon-2018-0021",
         meeting: "cppcon",
         edition: "2018",
           title: " Safe Numerics",
        speakers: [
                     "Robert Ramey"
                  ],
           video: "https://youtube.com/watch?v=93Cjg42bGEw",
       thumbnail: "http://img.youtube.com/vi/93Cjg42bGEw/0.jpg",
        duration: 3928,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 18,
      identifier: "#cppcon-2018-0018",
         meeting: "cppcon",
         edition: "2018",
           title: " Sane and Safe C++ Classes",
        speakers: [
                     "Peter Sommerlad"
                  ],
           video: "https://youtube.com/watch?v=REIEaUY9np4",
       thumbnail: "http://img.youtube.com/vi/REIEaUY9np4/0.jpg",
        duration: 3820,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 38,
      identifier: "#cppcon-2018-0038",
         meeting: "cppcon",
         edition: "2018",
           title: " Save $$ Testing Code the Playback-Based Way",
        speakers: [
                     "William Clements"
                  ],
           video: "https://youtube.com/watch?v=DcNYQ4qFpiI",
       thumbnail: "http://img.youtube.com/vi/DcNYQ4qFpiI/0.jpg",
        duration: 1762,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 113,
      identifier: "#cppcon-2018-0117",
         meeting: "cppcon",
         edition: "2018",
           title: " Scaling Financial Transaction using 0MQ and JSON",
        speakers: [
                     "Kevin Carpenter"
                  ],
           video: "https://youtube.com/watch?v=XLSckGMyzbs",
       thumbnail: "http://img.youtube.com/vi/XLSckGMyzbs/0.jpg",
        duration: 2272,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 138,
      identifier: "#cppcon-2018-0142",
         meeting: "cppcon",
         edition: "2018",
           title: " Scripting at the Speed of Thought: Lua and C++ with sol3",
        speakers: [
                     "JeanHeyd Meneide"
                  ],
           video: "https://youtube.com/watch?v=xQAmGBfKnas",
       thumbnail: "http://img.youtube.com/vi/xQAmGBfKnas/0.jpg",
        duration: 3637,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 50,
      identifier: "#cppcon-2018-0050",
         meeting: "cppcon",
         edition: "2018",
           title: " Secure Coding Best Practices: Your First Line Is The Last Line Of Defense (1 of 2)",
        speakers: [
                     "Matthew Butler"
                  ],
           video: "https://youtube.com/watch?v=n4Yf2tBeAbE",
       thumbnail: "http://img.youtube.com/vi/n4Yf2tBeAbE/0.jpg",
        duration: 3596,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 51,
      identifier: "#cppcon-2018-0051",
         meeting: "cppcon",
         edition: "2018",
           title: " Secure Coding Best Practices: Your First Line Is The Last Line Of Defense (2 of 2)",
        speakers: [
                     "Matthew Butler"
                  ],
           video: "https://youtube.com/watch?v=i0m0FBD-McY",
       thumbnail: "http://img.youtube.com/vi/i0m0FBD-McY/0.jpg",
        duration: 3750,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 175,
      identifier: "#cppcon-2018-0179",
         meeting: "cppcon",
         edition: "2018",
           title: " Set it and forget it!",
        speakers: [
                     "Matthew von Arx"
                  ],
           video: "https://youtube.com/watch?v=Dm0OMYUZ06A",
       thumbnail: "http://img.youtube.com/vi/Dm0OMYUZ06A/0.jpg",
        duration: 286,
            tags: [
                     "c++",
                     "conference",
                     "lightning",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 149,
      identifier: "#cppcon-2018-0153",
         meeting: "cppcon",
         edition: "2018",
           title: " SG14: CppCon Report",
        speakers: [
                     "John McFarlane"
                  ],
           video: "https://youtube.com/watch?v=tEH_9f8StQ0",
       thumbnail: "http://img.youtube.com/vi/tEH_9f8StQ0/0.jpg",
        duration: 311,
            tags: [
                     "c++",
                     "conference",
                     "lightning",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 100,
      identifier: "#cppcon-2018-0104",
         meeting: "cppcon",
         edition: "2018",
           title: " Signed integers are two's complement",
        speakers: [
                     "JF Bastien"
                  ],
           video: "https://youtube.com/watch?v=JhUxIVf1qok",
       thumbnail: "http://img.youtube.com/vi/JhUxIVf1qok/0.jpg",
        duration: 3621,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 5,
      identifier: "#cppcon-2018-0005",
         meeting: "cppcon",
         edition: "2018",
           title: " Simplicity: Not Just For Beginners",
        speakers: [
                     "Kate Gregory"
                  ],
           video: "https://youtube.com/watch?v=n0Ak6xtVXno",
       thumbnail: "http://img.youtube.com/vi/n0Ak6xtVXno/0.jpg",
        duration: 5313,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 2,
      identifier: "#cppcon-2018-0002",
         meeting: "cppcon",
         edition: "2018",
           title: " Software Security",
        speakers: [
                     "Eva Conti"
                  ],
           video: "https://youtube.com/watch?v=Vgirordcrsw",
       thumbnail: "http://img.youtube.com/vi/Vgirordcrsw/0.jpg",
        duration: 3673,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "panel"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 20,
      identifier: "#cppcon-2018-0020",
         meeting: "cppcon",
         edition: "2018",
           title: " Source Instrumentation for Monitoring C++ in Production",
        speakers: [
                     "Steven Simpson"
                  ],
           video: "https://youtube.com/watch?v=0WgC5jnrRx8",
       thumbnail: "http://img.youtube.com/vi/0WgC5jnrRx8/0.jpg",
        duration: 3579,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 8,
      identifier: "#cppcon-2018-0008",
         meeting: "cppcon",
         edition: "2018",
           title: " Spectre: Secrets, Side-Channels, Sandboxes, and Security",
        speakers: [
                     "Chandler Carruth"
                  ],
           video: "https://youtube.com/watch?v=_f7O3IfIR2k",
       thumbnail: "http://img.youtube.com/vi/_f7O3IfIR2k/0.jpg",
        duration: 5255,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 135,
      identifier: "#cppcon-2018-0139",
         meeting: "cppcon",
         edition: "2018",
           title: " Standard Library Compatibility Guidelines (SD-8)",
        speakers: [
                     "Titus Winters"
                  ],
           video: "https://youtube.com/watch?v=BWvSSsKCiAw",
       thumbnail: "http://img.youtube.com/vi/BWvSSsKCiAw/0.jpg",
        duration: 3646,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 7,
      identifier: "#cppcon-2018-0007",
         meeting: "cppcon",
         edition: "2018",
           title: " State Machines Battlefield - Naive vs STL vs Boost",
        speakers: [
                     "Kris Jusiak"
                  ],
           video: "https://youtube.com/watch?v=yZVby-PuXM0",
       thumbnail: "http://img.youtube.com/vi/yZVby-PuXM0/0.jpg",
        duration: 3602,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 126,
      identifier: "#cppcon-2018-0130",
         meeting: "cppcon",
         edition: "2018",
           title: " Static analysis for concurrent C++ in Visual Studio",
        speakers: [
                     "Anna Gringauze"
                  ],
           video: "https://youtube.com/watch?v=p5iwbuAFpUo",
       thumbnail: "http://img.youtube.com/vi/p5iwbuAFpUo/0.jpg",
        duration: 1444,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 165,
      identifier: "#cppcon-2018-0169",
         meeting: "cppcon",
         edition: "2018",
           title: " std::basic_string: for more than just text",
        speakers: [
                     "Brian Ruth"
                  ],
           video: "https://youtube.com/watch?v=SDJImePyftY",
       thumbnail: "http://img.youtube.com/vi/SDJImePyftY/0.jpg",
        duration: 277,
            tags: [
                     "c++",
                     "conference",
                     "lightning",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 160,
      identifier: "#cppcon-2018-0164",
         meeting: "cppcon",
         edition: "2018",
           title: " std::optional",
        speakers: [
                     "Simon Brand"
                  ],
           video: "https://youtube.com/watch?v=-5MlmugEzG0",
       thumbnail: "http://img.youtube.com/vi/-5MlmugEzG0/0.jpg",
        duration: 49,
            tags: [
                     "c++",
                     "conference",
                     "lightning",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 71,
      identifier: "#cppcon-2018-0071",
         meeting: "cppcon",
         edition: "2018",
           title: " Surprises in Object Lifetime",
        speakers: [
                     "Jason Turner"
                  ],
           video: "https://youtube.com/watch?v=EQ8egqj0rxY",
       thumbnail: "http://img.youtube.com/vi/EQ8egqj0rxY/0.jpg",
        duration: 791,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 185,
      identifier: "#cppcon-2018-0189",
         meeting: "cppcon",
         edition: "2018",
           title: " Talk to me! The art of reporting a bug (and handling the feedback)",
        speakers: [
                     "Anastasia Kazakova"
                  ],
           video: "https://youtube.com/watch?v=V1nc9riqksY",
       thumbnail: "http://img.youtube.com/vi/V1nc9riqksY/0.jpg",
        duration: 489,
            tags: [
                     "c++",
                     "conference",
                     "lightning",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 87,
      identifier: "#cppcon-2018-0091",
         meeting: "cppcon",
         edition: "2018",
           title: " Talking to Typelists",
        speakers: [
                     "Stephen Dewhurst"
                  ],
           video: "https://youtube.com/watch?v=oK7hdBoxRcs",
       thumbnail: "http://img.youtube.com/vi/oK7hdBoxRcs/0.jpg",
        duration: 1780,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 115,
      identifier: "#cppcon-2018-0119",
         meeting: "cppcon",
         edition: "2018",
           title: " Teaching Old Compilers New Tricks: Transpiling C++17 to C++11",
        speakers: [
                     "Tony Wasserka"
                  ],
           video: "https://youtube.com/watch?v=-dtWIY3UMQM",
       thumbnail: "http://img.youtube.com/vi/-dtWIY3UMQM/0.jpg",
        duration: 1915,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 153,
      identifier: "#cppcon-2018-0157",
         meeting: "cppcon",
         edition: "2018",
           title: " Thank You (I'm sorry that it's taken me so long to say it)",
        speakers: [
                     "Walter E. Brown"
                  ],
           video: "https://youtube.com/watch?v=L5daPjK00bo",
       thumbnail: "http://img.youtube.com/vi/L5daPjK00bo/0.jpg",
        duration: 783,
            tags: [
                     "c++",
                     "conference",
                     "lightning",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 168,
      identifier: "#cppcon-2018-0172",
         meeting: "cppcon",
         edition: "2018",
           title: " The Bad Big Wolf Meets Riding Hood Little Red",
        speakers: [
                     "Borislav Stanimirov"
                  ],
           video: "https://youtube.com/watch?v=Dw0UBuTKHHg",
       thumbnail: "http://img.youtube.com/vi/Dw0UBuTKHHg/0.jpg",
        duration: 379,
            tags: [
                     "c++",
                     "conference",
                     "lightning",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 139,
      identifier: "#cppcon-2018-0143",
         meeting: "cppcon",
         edition: "2018",
           title: " The Bits Between the Bits: How We Get to main()",
        speakers: [
                     "Matt Godbolt"
                  ],
           video: "https://youtube.com/watch?v=dOfucXtyEsU",
       thumbnail: "http://img.youtube.com/vi/dOfucXtyEsU/0.jpg",
        duration: 3813,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 44,
      identifier: "#cppcon-2018-0044",
         meeting: "cppcon",
         edition: "2018",
           title: " The C++ Execution Model",
        speakers: [
                     "Bryce Adelstein Lelbach"
                  ],
           video: "https://youtube.com/watch?v=FJIn1YhPJJc",
       thumbnail: "http://img.youtube.com/vi/FJIn1YhPJJc/0.jpg",
        duration: 3374,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 40,
      identifier: "#cppcon-2018-0040",
         meeting: "cppcon",
         edition: "2018",
           title: " The Landscape and Exciting New Future of Safe Reclamation for High Performance",
        speakers: [
                     "Maged Michael",
                     "Paul McKenney"
                  ],
           video: "https://youtube.com/watch?v=nvfzQAUpunI",
       thumbnail: "http://img.youtube.com/vi/nvfzQAUpunI/0.jpg",
        duration: 3500,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 134,
      identifier: "#cppcon-2018-0138",
         meeting: "cppcon",
         edition: "2018",
           title: " The Most Valuable Values",
        speakers: [
                     "Juan Pedro Bolivar Puente"
                  ],
           video: "https://youtube.com/watch?v=_oBx_NbLghY",
       thumbnail: "http://img.youtube.com/vi/_oBx_NbLghY/0.jpg",
        duration: 3532,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 94,
      identifier: "#cppcon-2018-0098",
         meeting: "cppcon",
         edition: "2018",
           title: " The Networking TS in Practice: Testable, Composable Asynchronous I/O in C++",
        speakers: [
                     "R. Leahy"
                  ],
           video: "https://youtube.com/watch?v=hdRpCo94_C4",
       thumbnail: "http://img.youtube.com/vi/hdRpCo94_C4/0.jpg",
        duration: 3459,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 70,
      identifier: "#cppcon-2018-0070",
         meeting: "cppcon",
         edition: "2018",
           title: " The Nightmare of Initialization in C++",
        speakers: [
                     "Nicolai Josuttis"
                  ],
           video: "https://youtube.com/watch?v=7DTlWPgX6zs",
       thumbnail: "http://img.youtube.com/vi/7DTlWPgX6zs/0.jpg",
        duration: 3597,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 163,
      identifier: "#cppcon-2018-0167",
         meeting: "cppcon",
         edition: "2018",
           title: " The perfect job interview (well, maybe)",
        speakers: [
                     "Nimrod Sapir"
                  ],
           video: "https://youtube.com/watch?v=TKUmi724k7Y",
       thumbnail: "http://img.youtube.com/vi/TKUmi724k7Y/0.jpg",
        duration: 306,
            tags: [
                     "c++",
                     "conference",
                     "lightning",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 136,
      identifier: "#cppcon-2018-0140",
         meeting: "cppcon",
         edition: "2018",
           title: " The Salami Method for Cross Platform Development",
        speakers: [
                     "Adi Shavit"
                  ],
           video: "https://youtube.com/watch?v=ZSpGNiUvXVI",
       thumbnail: "http://img.youtube.com/vi/ZSpGNiUvXVI/0.jpg",
        duration: 3616,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 184,
      identifier: "#cppcon-2018-0188",
         meeting: "cppcon",
         edition: "2018",
           title: " The Shape of a Program",
        speakers: [
                     "James McNellis"
                  ],
           video: "https://youtube.com/watch?v=P2lxGnbDkDI",
       thumbnail: "http://img.youtube.com/vi/P2lxGnbDkDI/0.jpg",
        duration: 306,
            tags: [
                     "c++",
                     "conference",
                     "lightning",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 13,
      identifier: "#cppcon-2018-0013",
         meeting: "cppcon",
         edition: "2018",
           title: " These Aren't the COM Objects You're Looking For",
        speakers: [
                     "Victor Ciura"
                  ],
           video: "https://youtube.com/watch?v=T_1zutIBHs0",
       thumbnail: "http://img.youtube.com/vi/T_1zutIBHs0/0.jpg",
        duration: 3576,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 169,
      identifier: "#cppcon-2018-0173",
         meeting: "cppcon",
         edition: "2018",
           title: " This is Why We Can't Have Nice Things",
        speakers: [
                     "Jon Kalb"
                  ],
           video: "https://youtube.com/watch?v=fv--IKZFVO8",
       thumbnail: "http://img.youtube.com/vi/fv--IKZFVO8/0.jpg",
        duration: 282,
            tags: [
                     "c++",
                     "conference",
                     "lightning",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 6,
      identifier: "#cppcon-2018-0006",
         meeting: "cppcon",
         edition: "2018",
           title: " Thoughts on a more powerful and simpler C++ (5 of N)",
        speakers: [
                     "Herb Sutter"
                  ],
           video: "https://youtube.com/watch?v=80BZxujhY38",
       thumbnail: "http://img.youtube.com/vi/80BZxujhY38/0.jpg",
        duration: 5949,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 69,
      identifier: "#cppcon-2018-0069",
         meeting: "cppcon",
         edition: "2018",
           title: " Touring the Tips of the Week Series",
        speakers: [
                     "Jon Cohen",
                     "Matt Kulukundis"
                  ],
           video: "https://youtube.com/watch?v=THDpfWG5T7Y",
       thumbnail: "http://img.youtube.com/vi/THDpfWG5T7Y/0.jpg",
        duration: 1180,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 178,
      identifier: "#cppcon-2018-0182",
         meeting: "cppcon",
         edition: "2018",
           title: " Trivially Relocatable",
        speakers: [
                     "Arthur O'Dwyer"
                  ],
           video: "https://youtube.com/watch?v=xxta6LEn9Hk",
       thumbnail: "http://img.youtube.com/vi/xxta6LEn9Hk/0.jpg",
        duration: 485,
            tags: [
                     "c++",
                     "conference",
                     "lightning",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 19,
      identifier: "#cppcon-2018-0019",
         meeting: "cppcon",
         edition: "2018",
           title: " UEFI Applications With Modern C++",
        speakers: [
                     "Morris Hafner"
                  ],
           video: "https://youtube.com/watch?v=z6wKEJ-daD4",
       thumbnail: "http://img.youtube.com/vi/z6wKEJ-daD4/0.jpg",
        duration: 1808,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 77,
      identifier: "#cppcon-2018-0077",
         meeting: "cppcon",
         edition: "2018",
           title: " Undefined Behavior is Not an Error",
        speakers: [
                     "Ansel Sermersheim",
                     "Barbara Geller"
                  ],
           video: "https://youtube.com/watch?v=XEXpwis_deQ",
       thumbnail: "http://img.youtube.com/vi/XEXpwis_deQ/0.jpg",
        duration: 3440,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 23,
      identifier: "#cppcon-2018-0023",
         meeting: "cppcon",
         edition: "2018",
           title: " Understanding Optimizers: Helping the Compiler Help You",
        speakers: [
                     "Nir Friedman"
                  ],
           video: "https://youtube.com/watch?v=8nyq8SNUTSc",
       thumbnail: "http://img.youtube.com/vi/8nyq8SNUTSc/0.jpg",
        duration: 3842,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 78,
      identifier: "#cppcon-2018-0080",
         meeting: "cppcon",
         edition: "2018",
           title: " Unwinding the Stack: Exploring How C++ Exceptions Work on Windows",
        speakers: [
                     "James McNellis"
                  ],
           video: "https://youtube.com/watch?v=COEv2kq_Ht8",
       thumbnail: "http://img.youtube.com/vi/COEv2kq_Ht8/0.jpg",
        duration: 3986,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 72,
      identifier: "#cppcon-2018-0072",
         meeting: "cppcon",
         edition: "2018",
           title: " user-defined statically-checked call graph constraints in C++ - Andrew Nelson [CppCon 2018]",
        speakers: [
                     "Funqual"
                  ],
           video: "https://youtube.com/watch?v=oOZN6GqfdTs",
       thumbnail: "http://img.youtube.com/vi/oOZN6GqfdTs/0.jpg",
        duration: 1615,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 62,
      identifier: "#cppcon-2018-0062",
         meeting: "cppcon",
         edition: "2018",
           title: " Using Compile-time Code Generation to build an LLVM IR Pattern Matcher",
        speakers: [
                     "Pablo Halpern"
                  ],
           video: "https://youtube.com/watch?v=DUEkxJ9YxMY",
       thumbnail: "http://img.youtube.com/vi/DUEkxJ9YxMY/0.jpg",
        duration: 3620,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 37,
      identifier: "#cppcon-2018-0037",
         meeting: "cppcon",
         edition: "2018",
           title: " Value Semantics: Fast, Safe, and Correct by Default",
        speakers: [
                     "Nicole Mazzuca"
                  ],
           video: "https://youtube.com/watch?v=PkyD1iv3ATU",
       thumbnail: "http://img.youtube.com/vi/PkyD1iv3ATU/0.jpg",
        duration: 1306,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 157,
      identifier: "#cppcon-2018-0161",
         meeting: "cppcon",
         edition: "2018",
           title: " Wandbox: Online programming language testing environment",
        speakers: [
                     "Takatoshi Kondo"
                  ],
           video: "https://youtube.com/watch?v=To-hsQeNmVE",
       thumbnail: "http://img.youtube.com/vi/To-hsQeNmVE/0.jpg",
        duration: 311,
            tags: [
                     "c++",
                     "conference",
                     "lightning",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 30,
      identifier: "#cppcon-2018-0030",
         meeting: "cppcon",
         edition: "2018",
           title: " What Could Possibly Go Wrong?: A Tale of Expectations and Exceptions",
        speakers: [
                     "Phil Nash",
                     "Simon Brand"
                  ],
           video: "https://youtube.com/watch?v=GC4cp4U2f2E",
       thumbnail: "http://img.youtube.com/vi/GC4cp4U2f2E/0.jpg",
        duration: 3761,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 25,
      identifier: "#cppcon-2018-0025",
         meeting: "cppcon",
         edition: "2018",
           title: " What Do We Mean When We Say Nothing At All?",
        speakers: [
                     "Kate Gregory"
                  ],
           video: "https://youtube.com/watch?v=kYVxGyido9g",
       thumbnail: "http://img.youtube.com/vi/kYVxGyido9g/0.jpg",
        duration: 3674,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 105,
      identifier: "#cppcon-2018-0109",
         meeting: "cppcon",
         edition: "2018",
           title: " What do you mean 'thread-safe'?",
        speakers: [
                     "Geoffrey Romer"
                  ],
           video: "https://youtube.com/watch?v=s5PCh_FaMfM",
       thumbnail: "http://img.youtube.com/vi/s5PCh_FaMfM/0.jpg",
        duration: 3223,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 24,
      identifier: "#cppcon-2018-0024",
         meeting: "cppcon",
         edition: "2018",
           title: " What to Expect from a Next-Generation C++ Build System",
        speakers: [
                     "Boris Kolpackov"
                  ],
           video: "https://youtube.com/watch?v=cJP7SSLjvSI",
       thumbnail: "http://img.youtube.com/vi/cJP7SSLjvSI/0.jpg",
        duration: 3740,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 59,
      identifier: "#cppcon-2018-0059",
         meeting: "cppcon",
         edition: "2018",
           title: " What's new in Visual Studio Code for C++ development",
        speakers: [
                     "Rong Lu"
                  ],
           video: "https://youtube.com/watch?v=JME1i3vCRR8",
       thumbnail: "http://img.youtube.com/vi/JME1i3vCRR8/0.jpg",
        duration: 1871,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 88,
      identifier: "#cppcon-2018-0092",
         meeting: "cppcon",
         edition: "2018",
           title: " Why and How to Roll Your Own std::function Implementation",
        speakers: [
                     "Tom Poole"
                  ],
           video: "https://youtube.com/watch?v=VY83afAJUIg",
       thumbnail: "http://img.youtube.com/vi/VY83afAJUIg/0.jpg",
        duration: 1913,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 162,
      identifier: "#cppcon-2018-0166",
         meeting: "cppcon",
         edition: "2018",
           title: " Why not Conan (part III)?",
        speakers: [
                     "Diego Rodriguez-Losada"
                  ],
           video: "https://youtube.com/watch?v=c1msH54wYKI",
       thumbnail: "http://img.youtube.com/vi/c1msH54wYKI/0.jpg",
        duration: 243,
            tags: [
                     "c++",
                     "conference",
                     "lightning",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 188,
      identifier: "#cppcon-2018-0192",
         meeting: "cppcon",
         edition: "2018",
           title: " Wise Enum: A C++ Smart Enum For All Your Reflective Enum Needs",
        speakers: [
                     "Nir Friedman"
                  ],
           video: "https://youtube.com/watch?v=GCkhcT2oxCA",
       thumbnail: "http://img.youtube.com/vi/GCkhcT2oxCA/0.jpg",
        duration: 281,
            tags: [
                     "c++",
                     "conference",
                     "lightning",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 79,
      identifier: "#cppcon-2018-0081",
         meeting: "cppcon",
         edition: "2018",
           title: " Woes of Scope Guards and Unique_Resource - 5+ years in the making",
        speakers: [
                     "Peter Sommerlad"
                  ],
           video: "https://youtube.com/watch?v=O1sK__G5Nrg",
       thumbnail: "http://img.youtube.com/vi/O1sK__G5Nrg/0.jpg",
        duration: 3748,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 154,
      identifier: "#cppcon-2018-0158",
         meeting: "cppcon",
         edition: "2018",
           title: " Workflow hacks for developers",
        speakers: [
                     "Anny Gakhokidze"
                  ],
           video: "https://youtube.com/watch?v=K4XxeB1Duyo",
       thumbnail: "http://img.youtube.com/vi/K4XxeB1Duyo/0.jpg",
        duration: 232,
            tags: [
                     "c++",
                     "conference",
                     "lightning",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 64,
      identifier: "#cppcon-2018-0064",
         meeting: "cppcon",
         edition: "2018",
           title: " Writing Standard Library Compliant Data Structures and Algorithms",
        speakers: [
                     "Marc Gregoire"
                  ],
           video: "https://youtube.com/watch?v=fChDijocVec",
       thumbnail: "http://img.youtube.com/vi/fChDijocVec/0.jpg",
        duration: 3692,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 151,
      identifier: "#cppcon-2018-0155",
         meeting: "cppcon",
         edition: "2018",
           title: " You're Not as Smart as You Think You Are",
        speakers: [
                     "Phil Nash"
                  ],
           video: "https://youtube.com/watch?v=fbkfH0IZW8g",
       thumbnail: "http://img.youtube.com/vi/fbkfH0IZW8g/0.jpg",
        duration: 412,
            tags: [
                     "c++",
                     "conference",
                     "lightning",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 112,
      identifier: "#cppcon-2018-0116",
         meeting: "cppcon",
         edition: "2018",
           title: "C++ Cryptozoology - A Compendium of Cryptic Characters :: #2",
        speakers: [
                     "Adi Shavit"
                  ],
           video: "https://youtube.com/watch?v=f-O8RTdcKeY",
       thumbnail: "http://img.youtube.com/vi/f-O8RTdcKeY/0.jpg",
        duration: 1805,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 155,
      identifier: "#cppcon-2018-0159",
         meeting: "cppcon",
         edition: "2018",
           title: "docs.microsoft.com Needs You!",
        speakers: [
                     "Colin Robertson"
                  ],
           video: "https://youtube.com/watch?v=V3h3X08A0DY",
       thumbnail: "http://img.youtube.com/vi/V3h3X08A0DY/0.jpg",
        duration: 285,
            tags: [
                     "c++",
                     "conference",
                     "lightning",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 122,
      identifier: "#cppcon-2018-0126",
         meeting: "cppcon",
         edition: "2018",
           title: "Engineering Software: integral types",
        speakers: [
                     "Andrei Zlate-Podani"
                  ],
           video: "https://youtube.com/watch?v=YB18n52BUYM",
       thumbnail: "http://img.youtube.com/vi/YB18n52BUYM/0.jpg",
        duration: 1766,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 159,
      identifier: "#cppcon-2018-0163",
         meeting: "cppcon",
         edition: "2018",
           title: "Especially nasty bug in our network scanner",
        speakers: [
                     "Martin Smarda"
                  ],
           video: "https://youtube.com/watch?v=FiOkJN1UUQY",
       thumbnail: "http://img.youtube.com/vi/FiOkJN1UUQY/0.jpg",
        duration: 280,
            tags: [
                     "c++",
                     "conference",
                     "lightning",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 187,
      identifier: "#cppcon-2018-0191",
         meeting: "cppcon",
         edition: "2018",
           title: "Feedback on practical use of C++17 std::recursive_directory_iterator",
        speakers: [
                     "Noel Tchidjo"
                  ],
           video: "https://youtube.com/watch?v=aRb5uK-LMiE",
       thumbnail: "http://img.youtube.com/vi/aRb5uK-LMiE/0.jpg",
        duration: 259,
            tags: [
                     "c++",
                     "conference",
                     "lightning",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 131,
      identifier: "#cppcon-2018-0135",
         meeting: "cppcon",
         edition: "2018",
           title: "H. Wright : Large-Scale Changes at Google: Lessons Learned From 5 Yrs of Mass Migrations",
        speakers: [
                     "CppCon 2018"
                  ],
           video: "https://youtube.com/watch?v=TrC6ROeV4GI",
       thumbnail: "http://img.youtube.com/vi/TrC6ROeV4GI/0.jpg",
        duration: 3616,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 76,
      identifier: "#cppcon-2018-0076",
         meeting: "cppcon",
         edition: "2018",
           title: "Make It Fixable: Preparing for Security Vulnerability Reports",
        speakers: [
                     "Patricia Aas"
                  ],
           video: "https://youtube.com/watch?v=IupP8AFrOJk",
       thumbnail: "http://img.youtube.com/vi/IupP8AFrOJk/0.jpg",
        duration: 1725,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 90,
      identifier: "#cppcon-2018-0094",
         meeting: "cppcon",
         edition: "2018",
           title: "Nicolas Fleury & Mathieu Nayrolles : Better C++ using Machine Learning on Large Projects",
        speakers: [
                     "CppCon 2018"
                  ],
           video: "https://youtube.com/watch?v=QDvic0QNtOY",
       thumbnail: "http://img.youtube.com/vi/QDvic0QNtOY/0.jpg",
        duration: 2090,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 75,
      identifier: "#cppcon-2018-0075",
         meeting: "cppcon",
         edition: "2018",
           title: "Overloading: The Bane of All Higher-Order Functions",
        speakers: [
                     "Simon Brand"
                  ],
           video: "https://youtube.com/watch?v=L_QKlAx31Pw",
       thumbnail: "http://img.youtube.com/vi/L_QKlAx31Pw/0.jpg",
        duration: 1310,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 176,
      identifier: "#cppcon-2018-0180",
         meeting: "cppcon",
         edition: "2018",
           title: "rof_egnar reversed adapter for(auto x:reversed(range))",
        speakers: [
                     "Peter Sommerlad"
                  ],
           video: "https://youtube.com/watch?v=ALKpSBX2W-8",
       thumbnail: "http://img.youtube.com/vi/ALKpSBX2W-8/0.jpg",
        duration: 318,
            tags: [
                     "c++",
                     "conference",
                     "lightning",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 180,
      identifier: "#cppcon-2018-0184",
         meeting: "cppcon",
         edition: "2018",
           title: "SG14: The Story So Far",
        speakers: [
                     "John McFarlane"
                  ],
           video: "https://youtube.com/watch?v=W0UHKh6tF9E",
       thumbnail: "http://img.youtube.com/vi/W0UHKh6tF9E/0.jpg",
        duration: 297,
            tags: [
                     "c++",
                     "conference",
                     "lightning",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 93,
      identifier: "#cppcon-2018-0097",
         meeting: "cppcon",
         edition: "2018",
           title: "Smart References: There and Back Again",
        speakers: [
                     "Erik Valkering"
                  ],
           video: "https://youtube.com/watch?v=bfm9m3xJQRY",
       thumbnail: "http://img.youtube.com/vi/bfm9m3xJQRY/0.jpg",
        duration: 1867,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 173,
      identifier: "#cppcon-2018-0177",
         meeting: "cppcon",
         edition: "2018",
           title: "Test coverage",
        speakers: [
                     "Arvid Norberg"
                  ],
           video: "https://youtube.com/watch?v=aLpdVSGX3K0",
       thumbnail: "http://img.youtube.com/vi/aLpdVSGX3K0/0.jpg",
        duration: 179,
            tags: [
                     "c++",
                     "conference",
                     "lightning",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 102,
      identifier: "#cppcon-2018-0106",
         meeting: "cppcon",
         edition: "2018",
           title: "Using Template Magic to Automatically Generate Hybrid CPU/GPU-Code",
        speakers: [
                     "Elmar Westphal"
                  ],
           video: "https://youtube.com/watch?v=Xd4NVV-Uy0I",
       thumbnail: "http://img.youtube.com/vi/Xd4NVV-Uy0I/0.jpg",
        duration: 3509,
            tags: [
                     "c++",
                     "conference",
                     "live",
                     "talk"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 186,
      identifier: "#cppcon-2018-0190",
         meeting: "cppcon",
         edition: "2018",
           title: "What Bug Hunting Taught Me About Hunting Bugs",
        speakers: [
                     "Adi Shavit"
                  ],
           video: "https://youtube.com/watch?v=NuAQRPeV_Yk",
       thumbnail: "http://img.youtube.com/vi/NuAQRPeV_Yk/0.jpg",
        duration: 261,
            tags: [
                     "c++",
                     "conference",
                     "lightning",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
          number: 172,
      identifier: "#cppcon-2018-0176",
         meeting: "cppcon",
         edition: "2018",
           title: "Zero-Overhead Compiler Pessimization",
        speakers: [
                     "Chuck Wilcox"
                  ],
           video: "https://youtube.com/watch?v=AmmTNBUuqPA",
       thumbnail: "http://img.youtube.com/vi/AmmTNBUuqPA/0.jpg",
        duration: 268,
            tags: [
                     "c++",
                     "conference",
                     "lightning",
                     "live"
                  ],
           level: 0,
        language: "english"
   }
]

