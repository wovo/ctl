const meetings = [
   "c++now",
   "cppcon"
]

const editions = [
   "2018",
   "2019"
]

const speakers = [
   "Aaron R Robinson",
   "Adi Shavit",
   "Alan Talbot",
   "Alastair Rankine",
   "Alisdair Meredith",
   "Anastasiia Kazakova",
   "Andre Bergner",
   "Andreas Weis",
   "Andrei Alexandrescu",
   "Andrei Zlate-Podani",
   "Andrew Nelson",
   "Andrew Sloss",
   "Andrew Sutton",
   "Anna Gringauze",
   "Ansel Sermersheim",
   "Arno Lepisk",
   "Arno Schoedl",
   "Arthur O'Dwyer",
   "Arvid Gerstmann",
   "Arvid Norberg",
   "Attila Feher",
   "Barbara Geller",
   "Ben Deane",
   "Ben Saks",
   "Billy O'Neal",
   "Bjarne Stroustrup",
   "Bob Steagall",
   "Boris Kolpackov",
   "Borislav Stanimirov",
   "Brett Searles",
   "Bryce Adelstein Lelbach",
   "Chandler Carruth",
   "Charley Bay",
   "Christopher Di Bella",
   "Conor Hoekstra",
   "Damien Buhl",
   "Dan Saks",
   "Daniel Ruoso",
   "Daveed Vandevoorde",
   "David Faure",
   "David Hollman",
   "David Sankel",
   "Dmitry Kozhevnikov",
   "Ed Davies",
   "Elmar Westphal",
   "Erik Valkering",
   "Eva Conti",
   "Fabian Renn-Giles",
   "Fedor Pikus",
   "Fred Tingaud",
   "Gabor Horvath",
   "Gasper Azman",
   "Geoffrey Romer",
   "Gilang Hamidy",
   "Gor Nishanov",
   "Gordon Brown",
   "Greg Falcon",
   "Greg Law",
   "Guy Davidson",
   "Hana Dusikova",
   "Hannes Sowa",
   "Herb Sutter",
   "Howard Hinnant",
   "Hyrum Wright",
   "Ian Bearman",
   "Ilya Biryukov",
   "Isabella Muerte",
   "JF Bastien",
   "James Bennett",
   "James McNellis",
   "Jason McGuiness",
   "Jason Rice",
   "Jason Turner",
   "Jean-Louis Leroy",
   "JeanHeyd Meneide",
   "Jeff Garland",
   "Jeff Trull",
   "Jefferson Amstutz",
   "Jeremy Murphy",
   "John Lakos",
   "John Woolverton",
   "Jon Cohen",
   "Jon Kalb",
   "Jonathan Boccara",
   "Juan Manuel Martinez Caamano",
   "Juan Pedro Bolivar Puente",
   "Jussi Pakkanen",
   "Kai Nelson",
   "Kate Gregory",
   "Kevin Carpenter",
   "Klaus Iglberger",
   "Kostya Serebryany",
   "Kris Jusiak",
   "Lisa Lippincott",
   "Lloyd Moore",
   "Louis Dionne",
   "Maged Michael",
   "Manuel Klimek",
   "Marc Goodner",
   "Marc Gregoire",
   "Marian Luparu",
   "Mark Elendt",
   "Marshall Clow",
   "Mateusz Pusz",
   "Mathieu Nayrolles",
   "Mathieu Ropert",
   "Matt Godbolt",
   "Matt Kulukundis",
   "Matt Miller",
   "Matthew Butler",
   "Matthew Fleming",
   "Matthias Gehre",
   "Michael Caisse",
   "Michael Gopshtein",
   "Michael Park",
   "Michael Price",
   "Michael Wong",
   "Michal Dominiak",
   "Mike Shah",
   "Morris Hafner",
   "Nathan Sidwell",
   "Nevin Liber",
   "Nicolai Josuttis",
   "Nicolas Fleury",
   "Nicole Mazzuca",
   "Niek J. Bouman",
   "Nir Friedman",
   "Norman Birkett",
   "Odin Holmes",
   "Olivier Giroux",
   "Pablo Halpern",
   "Paddy McDonald",
   "Patrice Roy",
   "Patricia Aas",
   "Paul Fultz II",
   "Paul McKenney",
   "Peter Bindels",
   "Peter Goldsborough",
   "Peter Sommerlad",
   "Phil Nash",
   "Rainer Grimm",
   "Richard Powell",
   "Richard Szalay",
   "Rishi Wani",
   "Robert Leahy",
   "Robert Maynard",
   "Robert Ramey",
   "Robert Schumacher",
   "Robin Kuzmin",
   "Rong Lu",
   "Ryan Dougherty",
   "Samy Al Bahra",
   "Scott Meyers",
   "Sean Parent",
   "Serge Guelton",
   "Simon Brand",
   "Stephan T. Lavavej",
   "Stephen Dewhurst",
   "Steve Carroll",
   "Steven Simpson",
   "Stoyan Nikolov",
   "Tara Raj",
   "Thomas Rodgers",
   "Timur Doumler",
   "Titus Winters",
   "Tom Poole",
   "Tony Wasserka",
   "Valentin Galea",
   "Victor Ciura",
   "Viktor Kirilov",
   "Ville Voutilainen",
   "Vincent Reverdy",
   "Vinnie Falco",
   "Vittorio Romeo",
   "Walter E. Brown",
   "William Clements",
   "Xiang Fan",
   "Yu Qi"
]

const titles = [
   "105 STL Algorithms in Less Than an Hour",
   "A Little Order: Delving into the STL sorting algorithms",
   "A Modern C++ Programming Model for GPUs using Khronos SYCL",
   "A Multithreaded, Transaction-Based Read/Write Locking Strategy for Containers",
   "A Semi Compile/Run-time Map with (Nearly) Zero Overhead Lookup",
   "A generic binary tree: why grow your own?",
   "Academic BoF",
   "Accelerated TDD: For More Productive C++",
   "Accelerating Applications on a GPU with CUDA C++",
   "Algorithm Intuition",
   "An Allocator is a Handle to a Heap",
   "An Alternate Smart Pointer Hierarchy",
   "Applied Best Practices",
   "Audio in standard C++",
   "Avoiding Disasters with Strongly Typed C++",
   "Better C++ using Machine Learning on Large Projects",
   "Better CTAD for C++20",
   "Better Code: Human Interface",
   "Better Tools in Your Clang Toolbox: Extending clang-tidy With Your Custom Checks",
   "Beyond C++17 (Part 2 of N)",
   "Bringing C++ 17 Parallel Algorithms to a standard library near you",
   "Build Systems: a Simple Solution to a Complicated Problem",
   "Building a C++ Reflection System in One Weekend Using Clang and LLVM",
   "C++ Audio Meetup",
   "C++ Best Practices",
   "C++ Constants",
   "C++ Cryptozoology - A Compendium of Cryptic Characters",
   "C++ Dependency Management: from Package Consumption to Project Development",
   "C++ Development with Visual Studio Code",
   "C++ Everywhere with WebAssembly",
   "C++ Function Templates: How Do They Really Work?",
   "C++ Modules and Large-Scale Development",
   "C++ in Elvenland",
   "C++20 in Breadth (not depth!)",
   "C++: Engineers Wanted, Programmers not so Much",
   "C++Now 2020 Planning Session",
   "C++Now and CppCon, the View From Inside",
   "Clang Automated Refactoring for everyone with clangmetatool",
   "Clangd: architecture of a scalable C++ language server",
   "Class Template Argument Deduction for Everyone",
   "Class template argument deduction in C++17",
   "Co- and Contra-: Adding a Little Variance",
   "Compile Time Regular Expressions",
   "Compile Time Regular Expressions with Deterministic Finite Automaton",
   "Compile-time programming and reflection in C++20 and beyond",
   "Compiling Multi-Million Line C++ Code Bases Effortlessly with the Meson Build System",
   "Compute More in Less Time Using C++ Simd Wrapper Libraries",
   "Concepts As She Is Spoke",
   "Concepts and Contracts: When, What, and How",
   "Concepts in 60: Everything you need to know and nothing you don't",
   "Concepts: The Future of Generic Programming (the future is here)",
   "Concurrency Challenges of Interrupt Service Routines",
   "ConcurrencyCheck - Static Analyzer for Concurrency Issues in Modern C++",
   "Contract Programming in C++(20) (part 1 of 2)",
   "Contract Programming in C++(20) (part 2 of 2)",
   "Cpp.Chat - Live Episode! Interview with Herb Sutter.",
   "Cpp.Chat - Live Episode! Interview with Nicolai Josuttis.",
   "CppCon 2019 Kick-off Meeting",
   "CppCon 2019 Planning Committee Work Session",
   "CppCon Program Committee",
   "Crafting Embedded Domain-Specific Language (EDSL) In C++ using Metaprogramming, Operator Overloading, and Lambda Expressions",
   "Creating the Complete Build Package",
   "Cross-platform C++ development is challenging - let tools help!",
   "Datum: A Trivially Constructible, Bitwise Copyable Compact Value-semantic Variant Type",
   "Dealing with aliasing using contracts",
   "Debug C++ Without Running",
   "Debuggers for Modern Applications: Performance and Static Analysis",
   "Debugging and Profiling C++ Code on Linux",
   "Dependency Injection - a 25-dollar term for a 5-cent concept",
   "Design for Performance: Practical Experience",
   "Development strategies: You've written a library - now what?",
   "Don't package your libraries, write packagable libraries!",
   "DynaMix: A New Take on Polymorphism",
   "Early Modern C++: How to Handle a C++03 Codebase in $CURRENT_YEAR",
   "Easy to Use, Hard to Misuse: Declarative Style in C++",
   "Easy::Jit: A Just-in-Time compilation library for C++",
   "Effective replacement of dynamic polymorphism with std::variant",
   "Emacs BoF",
   "Embedded C++",
   "Embedded Domain Specific Languages for Embedded Bare Metal Projects",
   "Emulating the Nintendo 3DS: Generative & Declarative Programming in Action",
   "End of Error - Boost.SafeNumerics",
   "Engage, Entertain, Educate: Technical Speaking that Works",
   "Engineering Software: integral types",
   "Enough string_view to Hang Ourselves",
   "Ensuring Exception Safety Through Testing",
   "Essential C++ Design",
   "Exceptions Demystified",
   "Expect the Expected",
   "Experiences in Teaching Modern C++ to Beginners",
   "Fancy Pointers for Fun and Profit",
   "Fast Conversion From UTF-8 with C++, DFAs, and SSE Intrinsics",
   "Feather: A Modern C++ Web Development Framework",
   "From Metaprogramming Tricks to Elegance: Custom Overload Sets and Inline SFINAE for Truly Generic Interfaces",
   "Frozen data structures in C++14",
   "Funqual: user-defined statically-checked call tree constraints in C++",
   "General Conference Welcome",
   "Generic Programming 2.0 with Concepts and Ranges",
   "Get rich quick! Using Boost.Beast WebSockets and Networking TS",
   "Git, CMake, Conan - How to ship and reuse our C++ projects",
   "Grill the Committee",
   "Grill the Resumes",
   "Hey C, This Is What Performance Looks like (Manually Generating Optimal Assembly at Compile Time)",
   "High-Radix Concurrent C++",
   "Higher-order functions and `function_ref`",
   "How C++ Debuggers Work",
   "How I learned to Stop Worrying and Love the C++ Type System",
   "How to Argue(ment): What Type Should I Use for My Function's Arguments",
   "How to Teach C++ and Influence a Generation",
   "How to Write Well-Behaved Value Wrappers",
   "Identifying Monoids: Exploiting Compositional Structure in Code",
   "If You Can't Open It, You Don't Own It",
   "Implementing Physical Units Library for C++",
   "Implementing the C++ Core Guidelines' Lifetime Safety Profile in Clang",
   "Initialization, Shutdown, and constexpr",
   "Inside Visual C++' Parallel Algorithms",
   "Inside yomm2",
   "Interactive C++ Compilation (REPL) Done in a Tiny and Embeddable Way",
   "Interface Design for Modern C++",
   "Interfaces matter: High Performance and Heap Allocated Containers",
   "Large-Scale Changes at Google: Lessons Learned From Five Years of Mass Migrations",
   "Latest and Greatest in the Visual Studio Family for C++ Developers 2018",
   "Lesser known Linux Kernel APIs",
   "Let's Intercept OpenGL Function Calls...for Logging!",
   "Leveraging Modern C++ for Embedded Systems",
   "Liberating the Debugging Experience with the GDB Python API",
   "Lightweight 2D graphics with io2d",
   "Linear Algebra for the Standard C++ Library",
   "Machine Learning with C++ BoF",
   "Make It Fixable: Preparing for Security Vulnerability Reports",
   "Make World: The Most Miserable Place In C++",
   "Making New Friends",
   "Matchine: Pattern Matching for Open Sum Types",
   "Memory Latency Troubles You? Nano-coroutines to the Rescue! (Using Coroutines TS, of Course)",
   "Memory Tagging and how it improves C++ memory safety",
   "Mixing Managed and Unmanaged Code",
   "Mock Interviews",
   "Modern C++ Design (part 1 of 2)",
   "Modern C++ Design (part 2 of 2)",
   "Modern C++ Testing with Catch2",
   "Modern C++ in Embedded Systems - The Saga Continues",
   "More gdb and other Linux debugging wizardry",
   "Moving Faster: Everyday efficiency in modern C++",
   "Multi-Precision Arithmetic for Cryptology in C++, at Run-Time and at Compile-Time",
   "Named Arguments in C++ from Scratch",
   "OOP Is Dead, Long Live Data-oriented Design",
   "Operator Overloading: History, Principles and Practice",
   "Optimizing Code Speed and Space with Build Time Switches",
   "Overloading: The Bane of All Higher-Order Functions",
   "Parallel Programming with Modern C++: from CPU to GPU",
   "Parametric Expressions: A Proposed Language Feature",
   "Parsing C++",
   "Pattern Matching: Match Me If You Can",
   "Patterns and Techniques Used in the Houdini 3D Graphics Application",
   "Pessimistic Programming",
   "Points of Order",
   "Practical Interfaces for Practical Functions",
   "Progress with C++ Modules",
   "Property-Based Declarative Containers",
   "RVO is Harder than it Looks: the story of -Wreturn-std-move",
   "Rapid Prototyping of Graphics Shaders in Modern C++",
   "Refactoring Legacy Codebases with LibTooling",
   "Regular Types and Why Do I Care ?",
   "Rise of the State Machines",
   "Run-Time Polymorphism BoF",
   "Sane Modern Special Member Functions",
   "Sane and Safe C++ Classes",
   "Save $$ Testing Code the Playback-Based Way",
   "Scaling Financial Transaction using 0MQ and JSON",
   "Scripting at the Speed of Thought: Lua and C++ with sol3",
   "Secure Coding Best Practices: Your First Line Is The Last Line Of Defense (part 1 of 2)",
   "Secure Coding Best Practices: Your First Line Is The Last Line Of Defense (part 2 of 2)",
   "Signed integers are two's complement",
   "Simplicity: not just for beginners",
   "Smart References: There and Back Again",
   "Software Security",
   "Software Vulnerabilities in C and C++",
   "Source Instrumentation for Monitoring C++ in Production",
   "Spectre: Secrets, Side-Channels, Sandboxes, and Security",
   "Standard Library Compatibility Guidelines",
   "State Machines Battlefield - Naive vs STL vs Boost",
   "Surprises in Object Lifetime",
   "Tacit DSL All the Things",
   "Taking the Plunge Towards CMake in Boost",
   "Talking to Typelists",
   "Teaching Old Compilers New Tricks: Transpiling C++17 to C++11",
   "Text Formatting For a Future Range-Based Standard Library",
   "The ABI challenge",
   "The Bits Between the Bits: How We Get to main()",
   "The C++ Execution Model",
   "The C++ Reflection TS",
   "The C++20 Standard Library - Beyond Ranges",
   "The Embedded Device Under Your Desk: UEFI Applications With Modern C++",
   "The Exciting New Future of Safe Reclamation for High Performance",
   "The Impact of Compilers, O/Ses and Mitigations for Spectre & Meltdown upon a Low-Latency Trading System.",
   "The Many Variants of std::variant",
   "The Most Valuable Values",
   "The Networking TS in Practice: Testable, Composable Asynchronous I/O in C++",
   "The Nightmare of Initialization in C++",
   "The Ongoing Saga of ISO-C++ Executors",
   "The Plan for Tomorrow: Extension Points in C++ Applications",
   "The Rough Road Towards Upgrading to C++ Modules",
   "The Salami Method for Cross Platform Development",
   "The Standard Library from Scratch",
   "The Truth of a Procedure",
   "The View from a C++ Standard Library Implementor",
   "These Aren't the COM Objects You're Looking For",
   "Thoughts on a More Powerful and Simpler C++ (5 of N)",
   "Threat Hunting",
   "To Kill a Mocking Framework: Tools and Techniques for Testing Callbacks Using Standard C++",
   "Tool Time",
   "Touring the 'C++ Tip of the Week' Series",
   "Trainers Panel I",
   "Trainers Panel II",
   "Trivially Relocatable",
   "Undefined Behavior is Not an Error",
   "Understanding Optimizers: Helping the Compiler Help You",
   "Unwinding the Stack: Exploring How C++ Exceptions Work on Windows",
   "Using C++20 Ranges Effectively",
   "Using Compile-time Code Generation to build an LLVM IR Pattern Matcher",
   "Using Template Magic to Automatically Generate Hybrid CPU/GPU-Code",
   "Value Proposition: Allocator-Aware (AA) Software",
   "Value Semantics: Fast, Safe, and Correct by Default",
   "What Could Possibly Go Wrong?: A Tale of Expectations and Exceptions",
   "What Do We Mean When We Say Nothing At All?",
   "What do you mean 'thread-safe'?",
   "What to Expect from a Next-Generation C++ Build System",
   "What's new in Visual Studio Code for C++ development",
   "Why and How to Roll Your Own std::function Implementation",
   "Woes of Scope Guards and Unique Resource - 5+ years in the making",
   "Writing Standard Library Compliant Data Structures and Algorithms",
   "minidumps: gdb-compatible, software controlled core dumps",
   "test_resource: the pmr detective",
   "yomm2 - Fast Orthogonal Open (Multi) Methods"
]

const tags = [
   "c++",
   "conference",
   "live"
]

const talks = [
   {
      identifier: "#cppcon-2018-0003",
         meeting: "cppcon",
         edition: "2018",
           title: "Interface Design for Modern C++",
        speakers: [
                     "Bob Steagall"
                  ],
           video: "https://youtube.com/watch?v=-PxeGr-9Gvg",
       thumbnail: "http://img.youtube.com/vi/-PxeGr-9Gvg/0.jpg",
        duration: 1140,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0009",
         meeting: "cppcon",
         edition: "2018",
           title: "Engage, Entertain, Educate: Technical Speaking that Works",
        speakers: [
                     "Andrei Alexandrescu",
                     "Kate Gregory",
                     "Scott Meyers"
                  ],
           video: "https://youtube.com/watch?v=KAWA1DuvCnQ",
       thumbnail: "http://img.youtube.com/vi/KAWA1DuvCnQ/0.jpg",
        duration: 3294,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0014",
         meeting: "cppcon",
         edition: "2018",
           title: "Concepts: The Future of Generic Programming (the future is here)",
        speakers: [
                     "Bjarne Stroustrup"
                  ],
           video: "https://youtube.com/watch?v=HddFGPTAmtU",
       thumbnail: "http://img.youtube.com/vi/HddFGPTAmtU/0.jpg",
        duration: 5911,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0015",
         meeting: "cppcon",
         edition: "2018",
           title: "C++ Dependency Management: from Package Consumption to Project Development",
        speakers: [
                     "Boris Kolpackov"
                  ],
           video: "https://youtube.com/watch?v=Nni2Qu2WitY",
       thumbnail: "http://img.youtube.com/vi/Nni2Qu2WitY/0.jpg",
        duration: 3774,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0016",
         meeting: "cppcon",
         edition: "2018",
           title: "The C++ Execution Model",
        speakers: [
                     "Bryce Adelstein Lelbach"
                  ],
           video: "https://youtube.com/watch?v=FJIn1YhPJJc",
       thumbnail: "http://img.youtube.com/vi/FJIn1YhPJJc/0.jpg",
        duration: 3374,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0017",
         meeting: "cppcon",
         edition: "2018",
           title: "Enough string_view to Hang Ourselves",
        speakers: [
                     "Victor Ciura"
                  ],
           video: "https://youtube.com/watch?v=xwP4YCP_0q0",
       thumbnail: "http://img.youtube.com/vi/xwP4YCP_0q0/0.jpg",
        duration: 3714,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0018",
         meeting: "cppcon",
         edition: "2018",
           title: "How to Teach C++ and Influence a Generation",
        speakers: [
                     "Christopher Di Bella"
                  ],
           video: "https://youtube.com/watch?v=3AkPd9Nt2Aw",
       thumbnail: "http://img.youtube.com/vi/3AkPd9Nt2Aw/0.jpg",
        duration: 3521,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0019",
         meeting: "cppcon",
         edition: "2018",
           title: "Concepts and Contracts: When, What, and How",
        speakers: [
                     "Michael Price"
                  ],
           video: "https://youtube.com/watch?v=Vj2vuoPJNfE",
       thumbnail: "http://img.youtube.com/vi/Vj2vuoPJNfE/0.jpg",
        duration: 3669,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0020",
         meeting: "cppcon",
         edition: "2018",
           title: "Text Formatting For a Future Range-Based Standard Library",
        speakers: [
                     "Arno Schoedl"
                  ],
           video: "https://youtube.com/watch?v=uCybqSX1idU",
       thumbnail: "http://img.youtube.com/vi/uCybqSX1idU/0.jpg",
        duration: 3376,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0021",
         meeting: "cppcon",
         edition: "2018",
           title: "Trainers Panel I",
        speakers: [
                     "Jon Kalb",
                     "Michael Caisse",
                     "Nicolai Josuttis",
                     "Scott Meyers",
                     "Stephen Dewhurst"
                  ],
           video: "https://youtube.com/watch?v=IZbL-RGr_mk",
       thumbnail: "http://img.youtube.com/vi/IZbL-RGr_mk/0.jpg",
        duration: 301,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0022",
         meeting: "cppcon",
         edition: "2018",
           title: "Modern C++ Design (part 1 of 2)",
        speakers: [
                     "Titus Winters"
                  ],
           video: "https://youtube.com/watch?v=xTdeZ4MxbKo",
       thumbnail: "http://img.youtube.com/vi/xTdeZ4MxbKo/0.jpg",
        duration: 3712,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0023",
         meeting: "cppcon",
         edition: "2018",
           title: "C++ Function Templates: How Do They Really Work?",
        speakers: [
                     "Walter E. Brown"
                  ],
           video: "https://youtube.com/watch?v=NIDEjY5ywqU",
       thumbnail: "http://img.youtube.com/vi/NIDEjY5ywqU/0.jpg",
        duration: 3618,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0024",
         meeting: "cppcon",
         edition: "2018",
           title: "Contract Programming in C++(20) (part 1 of 2)",
        speakers: [
                     "Alisdair Meredith"
                  ],
           video: "https://youtube.com/watch?v=aAFRxRznVjQ",
       thumbnail: "http://img.youtube.com/vi/aAFRxRznVjQ/0.jpg",
        duration: 3771,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0025",
         meeting: "cppcon",
         edition: "2018",
           title: "Crafting Embedded Domain-Specific Language (EDSL) In C++ using Metaprogramming, Operator Overloading, and Lambda Expressions",
        speakers: [
                     "Gilang Hamidy"
                  ],
           video: "https://youtube.com/watch?v=ijh3Tse5L8s",
       thumbnail: "http://img.youtube.com/vi/ijh3Tse5L8s/0.jpg",
        duration: 3710,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0026",
         meeting: "cppcon",
         edition: "2018",
           title: "Secure Coding Best Practices: Your First Line Is The Last Line Of Defense (part 1 of 2)",
        speakers: [
                     "Matthew Butler"
                  ],
           video: "https://youtube.com/watch?v=n4Yf2tBeAbE",
       thumbnail: "http://img.youtube.com/vi/n4Yf2tBeAbE/0.jpg",
        duration: 3596,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0027",
         meeting: "cppcon",
         edition: "2018",
           title: "Modern C++ Testing with Catch2",
        speakers: [
                     "Phil Nash"
                  ],
           video: "https://youtube.com/watch?v=Ob5_XZrFQH0",
       thumbnail: "http://img.youtube.com/vi/Ob5_XZrFQH0/0.jpg",
        duration: 3307,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0028",
         meeting: "cppcon",
         edition: "2018",
           title: "How to Write Well-Behaved Value Wrappers",
        speakers: [
                     "Simon Brand"
                  ],
           video: "https://youtube.com/watch?v=J4A2B9eexiw",
       thumbnail: "http://img.youtube.com/vi/J4A2B9eexiw/0.jpg",
        duration: 3173,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0029",
         meeting: "cppcon",
         edition: "2018",
           title: "High-Radix Concurrent C++",
        speakers: [
                     "Olivier Giroux"
                  ],
           video: "https://youtube.com/watch?v=75LcDvlEIYw",
       thumbnail: "http://img.youtube.com/vi/75LcDvlEIYw/0.jpg",
        duration: 3381,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0030",
         meeting: "cppcon",
         edition: "2018",
           title: "An Allocator is a Handle to a Heap",
        speakers: [
                     "Arthur O'Dwyer"
                  ],
           video: "https://youtube.com/watch?v=IejdKidUwIg",
       thumbnail: "http://img.youtube.com/vi/IejdKidUwIg/0.jpg",
        duration: 3790,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0031",
         meeting: "cppcon",
         edition: "2018",
           title: "Modern C++ Design (part 2 of 2)",
        speakers: [
                     "Titus Winters"
                  ],
           video: "https://youtube.com/watch?v=tn7oVNrPM8I",
       thumbnail: "http://img.youtube.com/vi/tn7oVNrPM8I/0.jpg",
        duration: 3463,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0032",
         meeting: "cppcon",
         edition: "2018",
           title: "Contract Programming in C++(20) (part 2 of 2)",
        speakers: [
                     "Alisdair Meredith"
                  ],
           video: "https://youtube.com/watch?v=7RWJQLpmrS0",
       thumbnail: "http://img.youtube.com/vi/7RWJQLpmrS0/0.jpg",
        duration: 3876,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0033",
         meeting: "cppcon",
         edition: "2018",
           title: "The Nightmare of Initialization in C++",
        speakers: [
                     "Nicolai Josuttis"
                  ],
           video: "https://youtube.com/watch?v=7DTlWPgX6zs",
       thumbnail: "http://img.youtube.com/vi/7DTlWPgX6zs/0.jpg",
        duration: 3597,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0034",
         meeting: "cppcon",
         edition: "2018",
           title: "Secure Coding Best Practices: Your First Line Is The Last Line Of Defense (part 2 of 2)",
        speakers: [
                     "Matthew Butler"
                  ],
           video: "https://youtube.com/watch?v=i0m0FBD-McY",
       thumbnail: "http://img.youtube.com/vi/i0m0FBD-McY/0.jpg",
        duration: 3750,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0035",
         meeting: "cppcon",
         edition: "2018",
           title: "How C++ Debuggers Work",
        speakers: [
                     "Simon Brand"
                  ],
           video: "https://youtube.com/watch?v=0DDrseUomfU",
       thumbnail: "http://img.youtube.com/vi/0DDrseUomfU/0.jpg",
        duration: 3659,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0036",
         meeting: "cppcon",
         edition: "2018",
           title: "Git, CMake, Conan - How to ship and reuse our C++ projects",
        speakers: [
                     "Mateusz Pusz"
                  ],
           video: "https://youtube.com/watch?v=S4QSKLXdTtA",
       thumbnail: "http://img.youtube.com/vi/S4QSKLXdTtA/0.jpg",
        duration: 3666,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0037",
         meeting: "cppcon",
         edition: "2018",
           title: "A Modern C++ Programming Model for GPUs using Khronos SYCL",
        speakers: [
                     "Gordon Brown",
                     "Michael Wong"
                  ],
           video: "https://youtube.com/watch?v=miqZS6aS9K0",
       thumbnail: "http://img.youtube.com/vi/miqZS6aS9K0/0.jpg",
        duration: 3685,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0038",
         meeting: "cppcon",
         edition: "2018",
           title: "Emulating the Nintendo 3DS: Generative & Declarative Programming in Action",
        speakers: [
                     "Tony Wasserka"
                  ],
           video: "https://youtube.com/watch?v=67OCoOLVuK8",
       thumbnail: "http://img.youtube.com/vi/67OCoOLVuK8/0.jpg",
        duration: 3446,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0039",
         meeting: "cppcon",
         edition: "2018",
           title: "Unwinding the Stack: Exploring How C++ Exceptions Work on Windows",
        speakers: [
                     "James McNellis"
                  ],
           video: "https://youtube.com/watch?v=COEv2kq_Ht8",
       thumbnail: "http://img.youtube.com/vi/COEv2kq_Ht8/0.jpg",
        duration: 3986,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0040",
         meeting: "cppcon",
         edition: "2018",
           title: "Expect the Expected",
        speakers: [
                     "Andrei Alexandrescu"
                  ],
           video: "https://youtube.com/watch?v=PH4WBuE1BHI",
       thumbnail: "http://img.youtube.com/vi/PH4WBuE1BHI/0.jpg",
        duration: 3538,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0041",
         meeting: "cppcon",
         edition: "2018",
           title: "Surprises in Object Lifetime",
        speakers: [
                     "Jason Turner"
                  ],
           video: "https://youtube.com/watch?v=uQyT-5iWUow",
       thumbnail: "http://img.youtube.com/vi/uQyT-5iWUow/0.jpg",
        duration: 3688,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0042",
         meeting: "cppcon",
         edition: "2018",
           title: "Debug C++ Without Running",
        speakers: [
                     "Anastasiia Kazakova"
                  ],
           video: "https://youtube.com/watch?v=eGWM_dI5egQ",
       thumbnail: "http://img.youtube.com/vi/eGWM_dI5egQ/0.jpg",
        duration: 3194,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0044",
         meeting: "cppcon",
         edition: "2018",
           title: "Grill the Committee",
        speakers: [
                     "Bjarne Stroustrup",
                     "Herb Sutter",
                     "Howard Hinnant",
                     "Jon Kalb",
                     "Marshall Clow",
                     "Olivier Giroux",
                     "Titus Winters",
                     "Ville Voutilainen"
                  ],
           video: "https://youtube.com/watch?v=cH0nJPbMFAY",
       thumbnail: "http://img.youtube.com/vi/cH0nJPbMFAY/0.jpg",
        duration: 5225,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0045",
         meeting: "cppcon",
         edition: "2018",
           title: "minidumps: gdb-compatible, software controlled core dumps",
        speakers: [
                     "Matthew Fleming"
                  ],
           video: "https://youtube.com/watch?v=Dm0OMYUZ06A",
       thumbnail: "http://img.youtube.com/vi/Dm0OMYUZ06A/0.jpg",
        duration: 286,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0046",
         meeting: "cppcon",
         edition: "2018",
           title: "What Do We Mean When We Say Nothing At All?",
        speakers: [
                     "Kate Gregory"
                  ],
           video: "https://youtube.com/watch?v=kYVxGyido9g",
       thumbnail: "http://img.youtube.com/vi/kYVxGyido9g/0.jpg",
        duration: 3674,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0047",
         meeting: "cppcon",
         edition: "2018",
           title: "Compile Time Regular Expressions",
        speakers: [
                     "Hana Dusikova"
                  ],
           video: "https://youtube.com/watch?v=QM3W36COnE4",
       thumbnail: "http://img.youtube.com/vi/QM3W36COnE4/0.jpg",
        duration: 3288,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0048",
         meeting: "cppcon",
         edition: "2018",
           title: "Source Instrumentation for Monitoring C++ in Production",
        speakers: [
                     "Steven Simpson"
                  ],
           video: "https://youtube.com/watch?v=0WgC5jnrRx8",
       thumbnail: "http://img.youtube.com/vi/0WgC5jnrRx8/0.jpg",
        duration: 3579,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0049",
         meeting: "cppcon",
         edition: "2018",
           title: "DynaMix: A New Take on Polymorphism",
        speakers: [
                     "Borislav Stanimirov"
                  ],
           video: "https://youtube.com/watch?v=ckY7Pc-A9Xc",
       thumbnail: "http://img.youtube.com/vi/ckY7Pc-A9Xc/0.jpg",
        duration: 3587,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0050",
         meeting: "cppcon",
         edition: "2018",
           title: "Avoiding Disasters with Strongly Typed C++",
        speakers: [
                     "Arno Lepisk"
                  ],
           video: "https://youtube.com/watch?v=1fwbG5TyI18",
       thumbnail: "http://img.youtube.com/vi/1fwbG5TyI18/0.jpg",
        duration: 2433,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0051",
         meeting: "cppcon",
         edition: "2018",
           title: "Fancy Pointers for Fun and Profit",
        speakers: [
                     "Bob Steagall"
                  ],
           video: "https://youtube.com/watch?v=_nIET46ul6E",
       thumbnail: "http://img.youtube.com/vi/_nIET46ul6E/0.jpg",
        duration: 3705,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0052",
         meeting: "cppcon",
         edition: "2018",
           title: "Regular Types and Why Do I Care ?",
        speakers: [
                     "Victor Ciura"
                  ],
           video: "https://youtube.com/watch?v=h60zqdzIelE",
       thumbnail: "http://img.youtube.com/vi/h60zqdzIelE/0.jpg",
        duration: 3103,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0053",
         meeting: "cppcon",
         edition: "2018",
           title: "Patterns and Techniques Used in the Houdini 3D Graphics Application",
        speakers: [
                     "Mark Elendt"
                  ],
           video: "https://youtube.com/watch?v=2YXwg0n9e7E",
       thumbnail: "http://img.youtube.com/vi/2YXwg0n9e7E/0.jpg",
        duration: 5227,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0054",
         meeting: "cppcon",
         edition: "2018",
           title: "Make World: The Most Miserable Place In C++",
        speakers: [
                     "Isabella Muerte",
                     "Jason Turner",
                     "Jussi Pakkanen",
                     "Peter Bindels",
                     "Robert Maynard"
                  ],
           video: "https://youtube.com/watch?v=7DTlWPgX6zs",
       thumbnail: "http://img.youtube.com/vi/7DTlWPgX6zs/0.jpg",
        duration: 3597,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0055",
         meeting: "cppcon",
         edition: "2018",
           title: "CppCon Program Committee",
        speakers: [
                     "Bryce Adelstein Lelbach",
                     "Jon Kalb"
                  ],
           video: "https://youtube.com/watch?v=FJIn1YhPJJc",
       thumbnail: "http://img.youtube.com/vi/FJIn1YhPJJc/0.jpg",
        duration: 3374,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0056",
         meeting: "cppcon",
         edition: "2018",
           title: "Grill the Resumes",
        speakers: [
                     "Kai Nelson",
                     "Michal Dominiak",
                     "Steve Carroll"
                  ],
           video: "https://youtube.com/watch?v=mczankVg2a0",
       thumbnail: "http://img.youtube.com/vi/mczankVg2a0/0.jpg",
        duration: 5299,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0057",
         meeting: "cppcon",
         edition: "2018",
           title: "Debuggers for Modern Applications: Performance and Static Analysis",
        speakers: [
                     "Samy Al Bahra"
                  ],
           video: "https://youtube.com/watch?v=N07tM7xWF1U",
       thumbnail: "http://img.youtube.com/vi/N07tM7xWF1U/0.jpg",
        duration: 3308,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0059",
         meeting: "cppcon",
         edition: "2018",
           title: "The Exciting New Future of Safe Reclamation for High Performance",
        speakers: [
                     "Maged Michael",
                     "Michael Wong",
                     "Paul McKenney"
                  ],
           video: "https://youtube.com/watch?v=nvfzQAUpunI",
       thumbnail: "http://img.youtube.com/vi/nvfzQAUpunI/0.jpg",
        duration: 3500,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0060",
         meeting: "cppcon",
         edition: "2018",
           title: "Making New Friends",
        speakers: [
                     "Dan Saks"
                  ],
           video: "https://youtube.com/watch?v=POa_V15je8Y",
       thumbnail: "http://img.youtube.com/vi/POa_V15je8Y/0.jpg",
        duration: 3691,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0061",
         meeting: "cppcon",
         edition: "2018",
           title: "Operator Overloading: History, Principles and Practice",
        speakers: [
                     "Ben Deane"
                  ],
           video: "https://youtube.com/watch?v=zh4EgO13Etg",
       thumbnail: "http://img.youtube.com/vi/zh4EgO13Etg/0.jpg",
        duration: 3716,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0062",
         meeting: "cppcon",
         edition: "2018",
           title: "What Could Possibly Go Wrong?: A Tale of Expectations and Exceptions",
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
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0063",
         meeting: "cppcon",
         edition: "2018",
           title: "Woes of Scope Guards and Unique Resource - 5+ years in the making",
        speakers: [
                     "Peter Sommerlad"
                  ],
           video: "https://youtube.com/watch?v=O1sK__G5Nrg",
       thumbnail: "http://img.youtube.com/vi/O1sK__G5Nrg/0.jpg",
        duration: 3748,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0064",
         meeting: "cppcon",
         edition: "2018",
           title: "Pessimistic Programming",
        speakers: [
                     "Patrice Roy"
                  ],
           video: "https://youtube.com/watch?v=pnSvUbE1HHk",
       thumbnail: "http://img.youtube.com/vi/pnSvUbE1HHk/0.jpg",
        duration: 3143,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0065",
         meeting: "cppcon",
         edition: "2018",
           title: "More gdb and other Linux debugging wizardry",
        speakers: [
                     "Greg Law"
                  ],
           video: "https://youtube.com/watch?v=V1t6faOKjuQ",
       thumbnail: "http://img.youtube.com/vi/V1t6faOKjuQ/0.jpg",
        duration: 3505,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0066",
         meeting: "cppcon",
         edition: "2018",
           title: "A Semi Compile/Run-time Map with (Nearly) Zero Overhead Lookup",
        speakers: [
                     "Fabian Renn-Giles"
                  ],
           video: "https://youtube.com/watch?v=qNAbGpV1ZkU",
       thumbnail: "http://img.youtube.com/vi/qNAbGpV1ZkU/0.jpg",
        duration: 1523,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0067",
         meeting: "cppcon",
         edition: "2018",
           title: "Touring the 'C++ Tip of the Week' Series",
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
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0068",
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
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0069",
         meeting: "cppcon",
         edition: "2018",
           title: "RVO is Harder than it Looks: the story of -Wreturn-std-move",
        speakers: [
                     "Arthur O'Dwyer"
                  ],
           video: "https://youtube.com/watch?v=hA1WNtNyNbo",
       thumbnail: "http://img.youtube.com/vi/hA1WNtNyNbo/0.jpg",
        duration: 1591,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0070",
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
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0071",
         meeting: "cppcon",
         edition: "2018",
           title: "Funqual: user-defined statically-checked call tree constraints in C++",
        speakers: [
                     "Andrew Nelson"
                  ],
           video: "https://youtube.com/watch?v=oOZN6GqfdTs",
       thumbnail: "http://img.youtube.com/vi/oOZN6GqfdTs/0.jpg",
        duration: 1615,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0072",
         meeting: "cppcon",
         edition: "2018",
           title: "Talking to Typelists",
        speakers: [
                     "Stephen Dewhurst"
                  ],
           video: "https://youtube.com/watch?v=oK7hdBoxRcs",
       thumbnail: "http://img.youtube.com/vi/oK7hdBoxRcs/0.jpg",
        duration: 1780,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0073",
         meeting: "cppcon",
         edition: "2018",
           title: "yomm2 - Fast Orthogonal Open (Multi) Methods",
        speakers: [
                     "Jean-Louis Leroy"
                  ],
           video: "https://youtube.com/watch?v=xkxo0lah51s",
       thumbnail: "http://img.youtube.com/vi/xkxo0lah51s/0.jpg",
        duration: 1908,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0074",
         meeting: "cppcon",
         edition: "2018",
           title: "Memory Tagging and how it improves C++ memory safety",
        speakers: [
                     "Kostya Serebryany"
                  ],
           video: "https://youtube.com/watch?v=lLEcbXidK2o",
       thumbnail: "http://img.youtube.com/vi/lLEcbXidK2o/0.jpg",
        duration: 1887,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0075",
         meeting: "cppcon",
         edition: "2018",
           title: "Teaching Old Compilers New Tricks: Transpiling C++17 to C++11",
        speakers: [
                     "Tony Wasserka"
                  ],
           video: "https://youtube.com/watch?v=-dtWIY3UMQM",
       thumbnail: "http://img.youtube.com/vi/-dtWIY3UMQM/0.jpg",
        duration: 1915,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0076",
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
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0077",
         meeting: "cppcon",
         edition: "2018",
           title: "Why and How to Roll Your Own std::function Implementation",
        speakers: [
                     "Tom Poole"
                  ],
           video: "https://youtube.com/watch?v=VY83afAJUIg",
       thumbnail: "http://img.youtube.com/vi/VY83afAJUIg/0.jpg",
        duration: 1913,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0078",
         meeting: "cppcon",
         edition: "2018",
           title: "Frozen data structures in C++14",
        speakers: [
                     "Serge Guelton"
                  ],
           video: "https://youtube.com/watch?v=vA5sdxbwUG8",
       thumbnail: "http://img.youtube.com/vi/vA5sdxbwUG8/0.jpg",
        duration: 3461,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0079",
         meeting: "cppcon",
         edition: "2018",
           title: "Lightweight 2D graphics with io2d",
        speakers: [
                     "Guy Davidson"
                  ],
           video: "https://youtube.com/watch?v=7Jk1a4cnukQ",
       thumbnail: "http://img.youtube.com/vi/7Jk1a4cnukQ/0.jpg",
        duration: 3421,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0080",
         meeting: "cppcon",
         edition: "2018",
           title: "Named Arguments in C++ from Scratch",
        speakers: [
                     "Richard Powell"
                  ],
           video: "https://youtube.com/watch?v=Grveezn0zhU",
       thumbnail: "http://img.youtube.com/vi/Grveezn0zhU/0.jpg",
        duration: 3263,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0081",
         meeting: "cppcon",
         edition: "2018",
           title: "Undefined Behavior is Not an Error",
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
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0082",
         meeting: "cppcon",
         edition: "2018",
           title: "Progress with C++ Modules",
        speakers: [
                     "Nathan Sidwell"
                  ],
           video: "https://youtube.com/watch?v=xi2lTaC5p0I",
       thumbnail: "http://img.youtube.com/vi/xi2lTaC5p0I/0.jpg",
        duration: 3519,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0083",
         meeting: "cppcon",
         edition: "2018",
           title: "The Networking TS in Practice: Testable, Composable Asynchronous I/O in C++",
        speakers: [
                     "Robert Leahy"
                  ],
           video: "https://youtube.com/watch?v=hdRpCo94_C4",
       thumbnail: "http://img.youtube.com/vi/hdRpCo94_C4/0.jpg",
        duration: 3459,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0085",
         meeting: "cppcon",
         edition: "2018",
           title: "Embedded C++",
        speakers: [
                     "Andrew Sloss",
                     "Ben Saks",
                     "Brett Searles",
                     "Dan Saks",
                     "Odin Holmes"
                  ],
           video: "https://youtube.com/watch?v=c9Xt6Me3mJ4",
       thumbnail: "http://img.youtube.com/vi/c9Xt6Me3mJ4/0.jpg",
        duration: 5440,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0086",
         meeting: "cppcon",
         edition: "2018",
           title: "Tool Time",
        speakers: [
                     "Phil Nash"
                  ],
           video: "https://youtube.com/watch?v=GC4cp4U2f2E",
       thumbnail: "http://img.youtube.com/vi/GC4cp4U2f2E/0.jpg",
        duration: 3761,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0089",
         meeting: "cppcon",
         edition: "2018",
           title: "Fast Conversion From UTF-8 with C++, DFAs, and SSE Intrinsics",
        speakers: [
                     "Bob Steagall"
                  ],
           video: "https://youtube.com/watch?v=5FQ87-Ecb-A",
       thumbnail: "http://img.youtube.com/vi/5FQ87-Ecb-A/0.jpg",
        duration: 4180,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0090",
         meeting: "cppcon",
         edition: "2018",
           title: "State Machines Battlefield - Naive vs STL vs Boost",
        speakers: [
                     "Kris Jusiak"
                  ],
           video: "https://youtube.com/watch?v=yZVby-PuXM0",
       thumbnail: "http://img.youtube.com/vi/yZVby-PuXM0/0.jpg",
        duration: 3602,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0091",
         meeting: "cppcon",
         edition: "2018",
           title: "These Aren't the COM Objects You're Looking For",
        speakers: [
                     "Victor Ciura"
                  ],
           video: "https://youtube.com/watch?v=T_1zutIBHs0",
       thumbnail: "http://img.youtube.com/vi/T_1zutIBHs0/0.jpg",
        duration: 3576,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0092",
         meeting: "cppcon",
         edition: "2018",
           title: "Software Vulnerabilities in C and C++",
        speakers: [
                     "Patricia Aas"
                  ],
           video: "https://youtube.com/watch?v=0S0QgQd75Sw",
       thumbnail: "http://img.youtube.com/vi/0S0QgQd75Sw/0.jpg",
        duration: 3073,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0093",
         meeting: "cppcon",
         edition: "2018",
           title: "Ensuring Exception Safety Through Testing",
        speakers: [
                     "Jon Cohen"
                  ],
           video: "https://youtube.com/watch?v=XPzHNSUnTc4",
       thumbnail: "http://img.youtube.com/vi/XPzHNSUnTc4/0.jpg",
        duration: 3501,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0094",
         meeting: "cppcon",
         edition: "2018",
           title: "Sane and Safe C++ Classes",
        speakers: [
                     "Peter Sommerlad"
                  ],
           video: "https://youtube.com/watch?v=REIEaUY9np4",
       thumbnail: "http://img.youtube.com/vi/REIEaUY9np4/0.jpg",
        duration: 3820,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0095",
         meeting: "cppcon",
         edition: "2018",
           title: "Simplicity: not just for beginners",
        speakers: [
                     "Kate Gregory"
                  ],
           video: "https://youtube.com/watch?v=n0Ak6xtVXno",
       thumbnail: "http://img.youtube.com/vi/n0Ak6xtVXno/0.jpg",
        duration: 5313,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0096",
         meeting: "cppcon",
         edition: "2018",
           title: "Mixing Managed and Unmanaged Code",
        speakers: [
                     "Aaron R Robinson",
                     "Brett Searles",
                     "Kate Gregory",
                     "Lloyd Moore"
                  ],
           video: "https://youtube.com/watch?v=lFQUrhOo1e8",
       thumbnail: "http://img.youtube.com/vi/lFQUrhOo1e8/0.jpg",
        duration: 3432,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0098",
         meeting: "cppcon",
         edition: "2018",
           title: "Lesser known Linux Kernel APIs",
        speakers: [
                     "Hannes Sowa"
                  ],
           video: "https://youtube.com/watch?v=XrW5yerbAog",
       thumbnail: "http://img.youtube.com/vi/XrW5yerbAog/0.jpg",
        duration: 4082,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0099",
         meeting: "cppcon",
         edition: "2018",
           title: "Inside yomm2",
        speakers: [
                     "Jean-Louis Leroy"
                  ],
           video: "https://youtube.com/watch?v=xkxo0lah51s",
       thumbnail: "http://img.youtube.com/vi/xkxo0lah51s/0.jpg",
        duration: 1908,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0101",
         meeting: "cppcon",
         edition: "2018",
           title: "What to Expect from a Next-Generation C++ Build System",
        speakers: [
                     "Boris Kolpackov"
                  ],
           video: "https://youtube.com/watch?v=cJP7SSLjvSI",
       thumbnail: "http://img.youtube.com/vi/cJP7SSLjvSI/0.jpg",
        duration: 3740,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0102",
         meeting: "cppcon",
         edition: "2018",
           title: "How to Argue(ment): What Type Should I Use for My Function's Arguments",
        speakers: [
                     "Richard Powell"
                  ],
           video: "https://youtube.com/watch?v=ZbVCGCy3mGQ",
       thumbnail: "http://img.youtube.com/vi/ZbVCGCy3mGQ/0.jpg",
        duration: 3250,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0103",
         meeting: "cppcon",
         edition: "2018",
           title: "Compile-time programming and reflection in C++20 and beyond",
        speakers: [
                     "Louis Dionne"
                  ],
           video: "https://youtube.com/watch?v=CRDNPwXDVp0",
       thumbnail: "http://img.youtube.com/vi/CRDNPwXDVp0/0.jpg",
        duration: 4120,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0104",
         meeting: "cppcon",
         edition: "2018",
           title: "Understanding Optimizers: Helping the Compiler Help You",
        speakers: [
                     "Nir Friedman"
                  ],
           video: "https://youtube.com/watch?v=8nyq8SNUTSc",
       thumbnail: "http://img.youtube.com/vi/8nyq8SNUTSc/0.jpg",
        duration: 3842,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0105",
         meeting: "cppcon",
         edition: "2018",
           title: "End of Error - Boost.SafeNumerics",
        speakers: [
                     "Robert Ramey"
                  ],
           video: "https://youtube.com/watch?v=93Cjg42bGEw",
       thumbnail: "http://img.youtube.com/vi/93Cjg42bGEw/0.jpg",
        duration: 3928,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0106",
         meeting: "cppcon",
         edition: "2018",
           title: "Latest and Greatest in the Visual Studio Family for C++ Developers 2018",
        speakers: [
                     "Marian Luparu",
                     "Steve Carroll"
                  ],
           video: "https://youtube.com/watch?v=6NAAuxWNhk4",
       thumbnail: "http://img.youtube.com/vi/6NAAuxWNhk4/0.jpg",
        duration: 3590,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0107",
         meeting: "cppcon",
         edition: "2018",
           title: "Don't package your libraries, write packagable libraries!",
        speakers: [
                     "Robert Schumacher"
                  ],
           video: "https://youtube.com/watch?v=sBP17HQAQjk",
       thumbnail: "http://img.youtube.com/vi/sBP17HQAQjk/0.jpg",
        duration: 2006,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0108",
         meeting: "cppcon",
         edition: "2018",
           title: "A Little Order: Delving into the STL sorting algorithms",
        speakers: [
                     "Fred Tingaud"
                  ],
           video: "https://youtube.com/watch?v=-0tO3Eni2uo",
       thumbnail: "http://img.youtube.com/vi/-0tO3Eni2uo/0.jpg",
        duration: 1614,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0109",
         meeting: "cppcon",
         edition: "2018",
           title: "The Embedded Device Under Your Desk: UEFI Applications With Modern C++",
        speakers: [
                     "Morris Hafner"
                  ],
           video: "https://youtube.com/watch?v=z6wKEJ-daD4",
       thumbnail: "http://img.youtube.com/vi/z6wKEJ-daD4/0.jpg",
        duration: 1808,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0110",
         meeting: "cppcon",
         edition: "2018",
           title: "Refactoring Legacy Codebases with LibTooling",
        speakers: [
                     "James Bennett"
                  ],
           video: "https://youtube.com/watch?v=tUBUqJSGr54",
       thumbnail: "http://img.youtube.com/vi/tUBUqJSGr54/0.jpg",
        duration: 1427,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0111",
         meeting: "cppcon",
         edition: "2018",
           title: "To Kill a Mocking Framework: Tools and Techniques for Testing Callbacks Using Standard C++",
        speakers: [
                     "Alastair Rankine"
                  ],
           video: "https://youtube.com/watch?v=9aGI5k8DmT8",
       thumbnail: "http://img.youtube.com/vi/9aGI5k8DmT8/0.jpg",
        duration: 1382,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0112",
         meeting: "cppcon",
         edition: "2018",
           title: "What's new in Visual Studio Code for C++ development",
        speakers: [
                     "Rong Lu"
                  ],
           video: "https://youtube.com/watch?v=JME1i3vCRR8",
       thumbnail: "http://img.youtube.com/vi/JME1i3vCRR8/0.jpg",
        duration: 1871,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0113",
         meeting: "cppcon",
         edition: "2018",
           title: "Compiling Multi-Million Line C++ Code Bases Effortlessly with the Meson Build System",
        speakers: [
                     "Jussi Pakkanen"
                  ],
           video: "https://youtube.com/watch?v=SCZLnopmYBM",
       thumbnail: "http://img.youtube.com/vi/SCZLnopmYBM/0.jpg",
        duration: 2026,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0114",
         meeting: "cppcon",
         edition: "2018",
           title: "Easy::Jit: A Just-in-Time compilation library for C++",
        speakers: [
                     "Juan Manuel Martinez Caamano"
                  ],
           video: "https://youtube.com/watch?v=_WPdof1dTqo",
       thumbnail: "http://img.youtube.com/vi/_WPdof1dTqo/0.jpg",
        duration: 1531,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0115",
         meeting: "cppcon",
         edition: "2018",
           title: "Multi-Precision Arithmetic for Cryptology in C++, at Run-Time and at Compile-Time",
        speakers: [
                     "Niek J. Bouman"
                  ],
           video: "https://youtube.com/watch?v=G33yF26UGMo",
       thumbnail: "http://img.youtube.com/vi/G33yF26UGMo/0.jpg",
        duration: 1888,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0116",
         meeting: "cppcon",
         edition: "2018",
           title: "Save $$ Testing Code the Playback-Based Way",
        speakers: [
                     "William Clements"
                  ],
           video: "https://youtube.com/watch?v=DcNYQ4qFpiI",
       thumbnail: "http://img.youtube.com/vi/DcNYQ4qFpiI/0.jpg",
        duration: 1762,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0117",
         meeting: "cppcon",
         edition: "2018",
           title: "Datum: A Trivially Constructible, Bitwise Copyable Compact Value-semantic Variant Type",
        speakers: [
                     "Rishi Wani"
                  ],
           video: "https://youtube.com/watch?v=YdzbrFerlRY",
       thumbnail: "http://img.youtube.com/vi/YdzbrFerlRY/0.jpg",
        duration: 1578,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0118",
         meeting: "cppcon",
         edition: "2018",
           title: "Value Semantics: Fast, Safe, and Correct by Default",
        speakers: [
                     "Nicole Mazzuca"
                  ],
           video: "https://youtube.com/watch?v=PkyD1iv3ATU",
       thumbnail: "http://img.youtube.com/vi/PkyD1iv3ATU/0.jpg",
        duration: 1306,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0119",
         meeting: "cppcon",
         edition: "2018",
           title: "Memory Latency Troubles You? Nano-coroutines to the Rescue! (Using Coroutines TS, of Course)",
        speakers: [
                     "Gor Nishanov"
                  ],
           video: "https://youtube.com/watch?v=j9tlJAqMV7U",
       thumbnail: "http://img.youtube.com/vi/j9tlJAqMV7U/0.jpg",
        duration: 3865,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0120",
         meeting: "cppcon",
         edition: "2018",
           title: "105 STL Algorithms in Less Than an Hour",
        speakers: [
                     "Jonathan Boccara"
                  ],
           video: "https://youtube.com/watch?v=2olsGf6JIkU",
       thumbnail: "http://img.youtube.com/vi/2olsGf6JIkU/0.jpg",
        duration: 3466,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0121",
         meeting: "cppcon",
         edition: "2018",
           title: "C++ in Elvenland",
        speakers: [
                     "Serge Guelton"
                  ],
           video: "https://youtube.com/watch?v=CVg7CYVV3KI",
       thumbnail: "http://img.youtube.com/vi/CVg7CYVV3KI/0.jpg",
        duration: 3536,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0122",
         meeting: "cppcon",
         edition: "2018",
           title: "Modern C++ in Embedded Systems - The Saga Continues",
        speakers: [
                     "Michael Caisse"
                  ],
           video: "https://youtube.com/watch?v=LfRLQ7IChtg",
       thumbnail: "http://img.youtube.com/vi/LfRLQ7IChtg/0.jpg",
        duration: 4144,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0123",
         meeting: "cppcon",
         edition: "2018",
           title: "Using Compile-time Code Generation to build an LLVM IR Pattern Matcher",
        speakers: [
                     "Pablo Halpern"
                  ],
           video: "https://youtube.com/watch?v=DUEkxJ9YxMY",
       thumbnail: "http://img.youtube.com/vi/DUEkxJ9YxMY/0.jpg",
        duration: 3620,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0124",
         meeting: "cppcon",
         edition: "2018",
           title: "Accelerating Applications on a GPU with CUDA C++",
        speakers: [
                     "Michael Gopshtein"
                  ],
           video: "https://youtube.com/watch?v=HIJTRrm9nzY",
       thumbnail: "http://img.youtube.com/vi/HIJTRrm9nzY/0.jpg",
        duration: 3252,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0125",
         meeting: "cppcon",
         edition: "2018",
           title: "Parsing C++",
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
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0126",
         meeting: "cppcon",
         edition: "2018",
           title: "Cross-platform C++ development is challenging - let tools help!",
        speakers: [
                     "Marc Goodner"
                  ],
           video: "https://youtube.com/watch?v=wxQwlVgaH4o",
       thumbnail: "http://img.youtube.com/vi/wxQwlVgaH4o/0.jpg",
        duration: 3133,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0127",
         meeting: "cppcon",
         edition: "2018",
           title: "C++ Audio Meetup",
        speakers: [
                     "Ed Davies",
                     "Timur Doumler"
                  ],
           video: "https://youtube.com/watch?v=boPEO2auJj4",
       thumbnail: "http://img.youtube.com/vi/boPEO2auJj4/0.jpg",
        duration: 3823,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0128",
         meeting: "cppcon",
         edition: "2018",
           title: "Optimizing Code Speed and Space with Build Time Switches",
        speakers: [
                     "Brett Searles",
                     "Chandler Carruth",
                     "Ian Bearman",
                     "Michael Wong",
                     "Xiang Fan"
                  ],
           video: "https://youtube.com/watch?v=FsrC6PI2TBg",
       thumbnail: "http://img.youtube.com/vi/FsrC6PI2TBg/0.jpg",
        duration: 5576,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0129",
         meeting: "cppcon",
         edition: "2018",
           title: "Cpp.Chat - Live Episode! Interview with Nicolai Josuttis.",
        speakers: [
                     "Jon Kalb",
                     "Nicolai Josuttis",
                     "Phil Nash"
                  ],
           video: "https://youtube.com/watch?v=9-_TLTdLGtc",
       thumbnail: "http://img.youtube.com/vi/9-_TLTdLGtc/0.jpg",
        duration: 5404,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0130",
         meeting: "cppcon",
         edition: "2018",
           title: "Mock Interviews",
        speakers: [
                     "Simon Brand"
                  ],
           video: "https://youtube.com/watch?v=J4A2B9eexiw",
       thumbnail: "http://img.youtube.com/vi/J4A2B9eexiw/0.jpg",
        duration: 3173,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0131",
         meeting: "cppcon",
         edition: "2018",
           title: "Build Systems: a Simple Solution to a Complicated Problem",
        speakers: [
                     "Peter Bindels"
                  ],
           video: "https://youtube.com/watch?v=mWOmkwv8N_U",
       thumbnail: "http://img.youtube.com/vi/mWOmkwv8N_U/0.jpg",
        duration: 2942,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0132",
         meeting: "cppcon",
         edition: "2018",
           title: "Inside Visual C++' Parallel Algorithms",
        speakers: [
                     "Billy O'Neal"
                  ],
           video: "https://youtube.com/watch?v=nOpwhTbulmk",
       thumbnail: "http://img.youtube.com/vi/nOpwhTbulmk/0.jpg",
        duration: 3712,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0133",
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
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0134",
         meeting: "cppcon",
         edition: "2018",
           title: "Writing Standard Library Compliant Data Structures and Algorithms",
        speakers: [
                     "Marc Gregoire"
                  ],
           video: "https://youtube.com/watch?v=fChDijocVec",
       thumbnail: "http://img.youtube.com/vi/fChDijocVec/0.jpg",
        duration: 3692,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0135",
         meeting: "cppcon",
         edition: "2018",
           title: "Concepts As She Is Spoke",
        speakers: [
                     "Arthur O'Dwyer"
                  ],
           video: "https://youtube.com/watch?v=CXn02MPkn8Y",
       thumbnail: "http://img.youtube.com/vi/CXn02MPkn8Y/0.jpg",
        duration: 3990,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0136",
         meeting: "cppcon",
         edition: "2018",
           title: "Better Tools in Your Clang Toolbox: Extending clang-tidy With Your Custom Checks",
        speakers: [
                     "Victor Ciura"
                  ],
           video: "https://youtube.com/watch?v=4X_fZkl7kkU",
       thumbnail: "http://img.youtube.com/vi/4X_fZkl7kkU/0.jpg",
        duration: 3641,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0137",
         meeting: "cppcon",
         edition: "2018",
           title: "OOP Is Dead, Long Live Data-oriented Design",
        speakers: [
                     "Stoyan Nikolov"
                  ],
           video: "https://youtube.com/watch?v=yy8jQgmhbAU",
       thumbnail: "http://img.youtube.com/vi/yy8jQgmhbAU/0.jpg",
        duration: 3646,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0138",
         meeting: "cppcon",
         edition: "2018",
           title: "Thoughts on a More Powerful and Simpler C++ (5 of N)",
        speakers: [
                     "Herb Sutter"
                  ],
           video: "https://youtube.com/watch?v=80BZxujhY38",
       thumbnail: "http://img.youtube.com/vi/80BZxujhY38/0.jpg",
        duration: 5949,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0139",
         meeting: "cppcon",
         edition: "2018",
           title: "Machine Learning with C++ BoF",
        speakers: [
                     "Peter Goldsborough"
                  ],
           video: "https://youtube.com/watch?v=auRPXMMHJzc",
       thumbnail: "http://img.youtube.com/vi/auRPXMMHJzc/0.jpg",
        duration: 253,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0140",
         meeting: "cppcon",
         edition: "2018",
           title: "Trainers Panel II",
        speakers: [
                     "Dan Saks",
                     "Jason Turner",
                     "Jon Kalb",
                     "Rainer Grimm"
                  ],
           video: "https://youtube.com/watch?v=uQyT-5iWUow",
       thumbnail: "http://img.youtube.com/vi/uQyT-5iWUow/0.jpg",
        duration: 3688,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0141",
         meeting: "cppcon",
         edition: "2018",
           title: "Software Security",
        speakers: [
                     "Eva Conti",
                     "Matt Miller",
                     "Matthew Butler",
                     "Michael Wong",
                     "Patricia Aas"
                  ],
           video: "https://youtube.com/watch?v=i0m0FBD-McY",
       thumbnail: "http://img.youtube.com/vi/i0m0FBD-McY/0.jpg",
        duration: 3750,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0142",
         meeting: "cppcon",
         edition: "2018",
           title: "What do you mean 'thread-safe'?",
        speakers: [
                     "Geoffrey Romer"
                  ],
           video: "https://youtube.com/watch?v=s5PCh_FaMfM",
       thumbnail: "http://img.youtube.com/vi/s5PCh_FaMfM/0.jpg",
        duration: 3223,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0143",
         meeting: "cppcon",
         edition: "2018",
           title: "From Metaprogramming Tricks to Elegance: Custom Overload Sets and Inline SFINAE for Truly Generic Interfaces",
        speakers: [
                     "Vincent Reverdy"
                  ],
           video: "https://youtube.com/watch?v=WBTNCYT20f0",
       thumbnail: "http://img.youtube.com/vi/WBTNCYT20f0/0.jpg",
        duration: 3319,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0144",
         meeting: "cppcon",
         edition: "2018",
           title: "Building a C++ Reflection System in One Weekend Using Clang and LLVM",
        speakers: [
                     "Arvid Gerstmann"
                  ],
           video: "https://youtube.com/watch?v=DUiUBt-fqEY",
       thumbnail: "http://img.youtube.com/vi/DUiUBt-fqEY/0.jpg",
        duration: 2767,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0145",
         meeting: "cppcon",
         edition: "2018",
           title: "Design for Performance: Practical Experience",
        speakers: [
                     "Fedor Pikus"
                  ],
           video: "https://youtube.com/watch?v=m25p3EtBua4",
       thumbnail: "http://img.youtube.com/vi/m25p3EtBua4/0.jpg",
        duration: 3819,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0146",
         meeting: "cppcon",
         edition: "2018",
           title: "Early Modern C++: How to Handle a C++03 Codebase in $CURRENT_YEAR",
        speakers: [
                     "Mathieu Ropert"
                  ],
           video: "https://youtube.com/watch?v=76uHxUi6L5g",
       thumbnail: "http://img.youtube.com/vi/76uHxUi6L5g/0.jpg",
        duration: 2892,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0147",
         meeting: "cppcon",
         edition: "2018",
           title: "Signed integers are two's complement",
        speakers: [
                     "JF Bastien"
                  ],
           video: "https://youtube.com/watch?v=JhUxIVf1qok",
       thumbnail: "http://img.youtube.com/vi/JhUxIVf1qok/0.jpg",
        duration: 3621,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0148",
         meeting: "cppcon",
         edition: "2018",
           title: "Implementing the C++ Core Guidelines' Lifetime Safety Profile in Clang",
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
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0149",
         meeting: "cppcon",
         edition: "2018",
           title: "C++ Cryptozoology - A Compendium of Cryptic Characters",
        speakers: [
                     "Adi Shavit"
                  ],
           video: "https://youtube.com/watch?v=f-O8RTdcKeY",
       thumbnail: "http://img.youtube.com/vi/f-O8RTdcKeY/0.jpg",
        duration: 1805,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0150",
         meeting: "cppcon",
         edition: "2018",
           title: "Let's Intercept OpenGL Function Calls...for Logging!",
        speakers: [
                     "Mike Shah"
                  ],
           video: "https://youtube.com/watch?v=DMNFb5ycpNY",
       thumbnail: "http://img.youtube.com/vi/DMNFb5ycpNY/0.jpg",
        duration: 1771,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0151",
         meeting: "cppcon",
         edition: "2018",
           title: "Effective replacement of dynamic polymorphism with std::variant",
        speakers: [
                     "Mateusz Pusz"
                  ],
           video: "https://youtube.com/watch?v=gKbORJtnVu8",
       thumbnail: "http://img.youtube.com/vi/gKbORJtnVu8/0.jpg",
        duration: 1739,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0152",
         meeting: "cppcon",
         edition: "2018",
           title: "Better C++ using Machine Learning on Large Projects",
        speakers: [
                     "Mathieu Nayrolles",
                     "Nicolas Fleury"
                  ],
           video: "https://youtube.com/watch?v=QDvic0QNtOY",
       thumbnail: "http://img.youtube.com/vi/QDvic0QNtOY/0.jpg",
        duration: 2090,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0153",
         meeting: "cppcon",
         edition: "2018",
           title: "ConcurrencyCheck - Static Analyzer for Concurrency Issues in Modern C++",
        speakers: [
                     "Anna Gringauze"
                  ],
           video: "https://youtube.com/watch?v=p5iwbuAFpUo",
       thumbnail: "http://img.youtube.com/vi/p5iwbuAFpUo/0.jpg",
        duration: 1444,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0154",
         meeting: "cppcon",
         edition: "2018",
           title: "Co- and Contra-: Adding a Little Variance",
        speakers: [
                     "Michal Dominiak"
                  ],
           video: "https://youtube.com/watch?v=nlxA7CWfy78",
       thumbnail: "http://img.youtube.com/vi/nlxA7CWfy78/0.jpg",
        duration: 1859,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0155",
         meeting: "cppcon",
         edition: "2018",
           title: "Scaling Financial Transaction using 0MQ and JSON",
        speakers: [
                     "Kevin Carpenter"
                  ],
           video: "https://youtube.com/watch?v=XLSckGMyzbs",
       thumbnail: "http://img.youtube.com/vi/XLSckGMyzbs/0.jpg",
        duration: 2272,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0156",
         meeting: "cppcon",
         edition: "2018",
           title: "Interactive C++ Compilation (REPL) Done in a Tiny and Embeddable Way",
        speakers: [
                     "Viktor Kirilov"
                  ],
           video: "https://youtube.com/watch?v=UEuA0yuw_O0",
       thumbnail: "http://img.youtube.com/vi/UEuA0yuw_O0/0.jpg",
        duration: 1829,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0157",
         meeting: "cppcon",
         edition: "2018",
           title: "Dealing with aliasing using contracts",
        speakers: [
                     "Gabor Horvath"
                  ],
           video: "https://youtube.com/watch?v=mWK0ZO8xOoY",
       thumbnail: "http://img.youtube.com/vi/mWK0ZO8xOoY/0.jpg",
        duration: 2236,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0158",
         meeting: "cppcon",
         edition: "2018",
           title: "C++ Everywhere with WebAssembly",
        speakers: [
                     "Damien Buhl"
                  ],
           video: "https://youtube.com/watch?v=QPJPS-Jjb-g",
       thumbnail: "http://img.youtube.com/vi/QPJPS-Jjb-g/0.jpg",
        duration: 1911,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0159",
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
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0160",
         meeting: "cppcon",
         edition: "2018",
           title: "Liberating the Debugging Experience with the GDB Python API",
        speakers: [
                     "Jeff Trull"
                  ],
           video: "https://youtube.com/watch?v=ck_jCH_G7pA",
       thumbnail: "http://img.youtube.com/vi/ck_jCH_G7pA/0.jpg",
        duration: 1749,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0162",
         meeting: "cppcon",
         edition: "2018",
           title: "Compute More in Less Time Using C++ Simd Wrapper Libraries",
        speakers: [
                     "Jefferson Amstutz"
                  ],
           video: "https://youtube.com/watch?v=8khWb-Bhhvs",
       thumbnail: "http://img.youtube.com/vi/8khWb-Bhhvs/0.jpg",
        duration: 3803,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0163",
         meeting: "cppcon",
         edition: "2018",
           title: "Development strategies: You've written a library - now what?",
        speakers: [
                     "Marshall Clow"
                  ],
           video: "https://youtube.com/watch?v=bfWxNoyRrXs",
       thumbnail: "http://img.youtube.com/vi/bfWxNoyRrXs/0.jpg",
        duration: 4620,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0164",
         meeting: "cppcon",
         edition: "2018",
           title: "Rapid Prototyping of Graphics Shaders in Modern C++",
        speakers: [
                     "Valentin Galea"
                  ],
           video: "https://youtube.com/watch?v=8FoAxasNssA",
       thumbnail: "http://img.youtube.com/vi/8FoAxasNssA/0.jpg",
        duration: 2940,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0165",
         meeting: "cppcon",
         edition: "2018",
           title: "Class Template Argument Deduction for Everyone",
        speakers: [
                     "Stephan T. Lavavej"
                  ],
           video: "https://youtube.com/watch?v=-H-ut6j1BYU",
       thumbnail: "http://img.youtube.com/vi/-H-ut6j1BYU/0.jpg",
        duration: 3641,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0166",
         meeting: "cppcon",
         edition: "2018",
           title: "Concepts in 60: Everything you need to know and nothing you don't",
        speakers: [
                     "Andrew Sutton"
                  ],
           video: "https://youtube.com/watch?v=ZeU6OPaGxwM",
       thumbnail: "http://img.youtube.com/vi/ZeU6OPaGxwM/0.jpg",
        duration: 4266,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0167",
         meeting: "cppcon",
         edition: "2018",
           title: "Initialization, Shutdown, and constexpr",
        speakers: [
                     "Greg Falcon"
                  ],
           video: "https://youtube.com/watch?v=6ZOygaUjzjQ",
       thumbnail: "http://img.youtube.com/vi/6ZOygaUjzjQ/0.jpg",
        duration: 3669,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0168",
         meeting: "cppcon",
         edition: "2018",
           title: "CppCon 2019 Kick-off Meeting",
        speakers: [
                     "Bob Steagall"
                  ],
           video: "https://youtube.com/watch?v=S7gGtYqtNNo",
       thumbnail: "http://img.youtube.com/vi/S7gGtYqtNNo/0.jpg",
        duration: 3689,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0170",
         meeting: "cppcon",
         edition: "2018",
           title: "Creating the Complete Build Package",
        speakers: [
                     "Boris Kolpackov",
                     "Brett Searles",
                     "Manuel Klimek",
                     "Paddy McDonald",
                     "Robert Schumacher",
                     "Titus Winters"
                  ],
           video: "https://youtube.com/watch?v=xTdeZ4MxbKo",
       thumbnail: "http://img.youtube.com/vi/xTdeZ4MxbKo/0.jpg",
        duration: 3712,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0171",
         meeting: "cppcon",
         edition: "2018",
           title: "Cpp.Chat - Live Episode! Interview with Herb Sutter.",
        speakers: [
                     "Herb Sutter",
                     "Jon Kalb",
                     "Phil Nash"
                  ],
           video: "https://youtube.com/watch?v=6lurOCdaj0Y",
       thumbnail: "http://img.youtube.com/vi/6lurOCdaj0Y/0.jpg",
        duration: 4883,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0172",
         meeting: "cppcon",
         edition: "2018",
           title: "Run-Time Polymorphism BoF",
        speakers: [
                     "Norman Birkett"
                  ],
           video: "https://youtube.com/watch?v=gVGtNFg4ay0",
       thumbnail: "http://img.youtube.com/vi/gVGtNFg4ay0/0.jpg",
        duration: 4084,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0173",
         meeting: "cppcon",
         edition: "2018",
           title: "Emacs BoF",
        speakers: [
                     "Jeff Trull"
                  ],
           video: "https://youtube.com/watch?v=ck_jCH_G7pA",
       thumbnail: "http://img.youtube.com/vi/ck_jCH_G7pA/0.jpg",
        duration: 1749,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0174",
         meeting: "cppcon",
         edition: "2018",
           title: "Bringing C++ 17 Parallel Algorithms to a standard library near you",
        speakers: [
                     "Thomas Rodgers"
                  ],
           video: "https://youtube.com/watch?v=-KT8gaojHUU",
       thumbnail: "http://img.youtube.com/vi/-KT8gaojHUU/0.jpg",
        duration: 1846,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0175",
         meeting: "cppcon",
         edition: "2018",
           title: "Interfaces matter: High Performance and Heap Allocated Containers",
        speakers: [
                     "John Woolverton"
                  ],
           video: "https://youtube.com/watch?v=PG_sbSZL06U",
       thumbnail: "http://img.youtube.com/vi/PG_sbSZL06U/0.jpg",
        duration: 2148,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0176",
         meeting: "cppcon",
         edition: "2018",
           title: "Applied Best Practices",
        speakers: [
                     "Jason Turner"
                  ],
           video: "https://youtube.com/watch?v=DHOlsEd0eDE",
       thumbnail: "http://img.youtube.com/vi/DHOlsEd0eDE/0.jpg",
        duration: 3798,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0177",
         meeting: "cppcon",
         edition: "2018",
           title: "Class template argument deduction in C++17",
        speakers: [
                     "Timur Doumler"
                  ],
           video: "https://youtube.com/watch?v=UDs90b0yjjQ",
       thumbnail: "http://img.youtube.com/vi/UDs90b0yjjQ/0.jpg",
        duration: 3610,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0178",
         meeting: "cppcon",
         edition: "2018",
           title: "C++ Modules and Large-Scale Development",
        speakers: [
                     "John Lakos"
                  ],
           video: "https://youtube.com/watch?v=K_fTl_hIEGY",
       thumbnail: "http://img.youtube.com/vi/K_fTl_hIEGY/0.jpg",
        duration: 3542,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0179",
         meeting: "cppcon",
         edition: "2018",
           title: "Feather: A Modern C++ Web Development Framework",
        speakers: [
                     "Yu Qi"
                  ],
           video: "https://youtube.com/watch?v=DoXXCZJVNeo",
       thumbnail: "http://img.youtube.com/vi/DoXXCZJVNeo/0.jpg",
        duration: 1862,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0180",
         meeting: "cppcon",
         edition: "2018",
           title: "Concurrency Challenges of Interrupt Service Routines",
        speakers: [
                     "Odin Holmes"
                  ],
           video: "https://youtube.com/watch?v=gcRdG7dGMOw",
       thumbnail: "http://img.youtube.com/vi/gcRdG7dGMOw/0.jpg",
        duration: 3663,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0181",
         meeting: "cppcon",
         edition: "2018",
           title: "The Bits Between the Bits: How We Get to main()",
        speakers: [
                     "Matt Godbolt"
                  ],
           video: "https://youtube.com/watch?v=dOfucXtyEsU",
       thumbnail: "http://img.youtube.com/vi/dOfucXtyEsU/0.jpg",
        duration: 3813,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0182",
         meeting: "cppcon",
         edition: "2018",
           title: "Better Code: Human Interface",
        speakers: [
                     "Sean Parent"
                  ],
           video: "https://youtube.com/watch?v=0WlJEz2wb8Y",
       thumbnail: "http://img.youtube.com/vi/0WlJEz2wb8Y/0.jpg",
        duration: 3520,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0183",
         meeting: "cppcon",
         edition: "2018",
           title: "Moving Faster: Everyday efficiency in modern C++",
        speakers: [
                     "Alan Talbot"
                  ],
           video: "https://youtube.com/watch?v=EovBkh9wDnM",
       thumbnail: "http://img.youtube.com/vi/EovBkh9wDnM/0.jpg",
        duration: 3582,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0184",
         meeting: "cppcon",
         edition: "2018",
           title: "Scripting at the Speed of Thought: Lua and C++ with sol3",
        speakers: [
                     "JeanHeyd Meneide"
                  ],
           video: "https://youtube.com/watch?v=xQAmGBfKnas",
       thumbnail: "http://img.youtube.com/vi/xQAmGBfKnas/0.jpg",
        duration: 3637,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0185",
         meeting: "cppcon",
         edition: "2018",
           title: "Large-Scale Changes at Google: Lessons Learned From Five Years of Mass Migrations",
        speakers: [
                     "Hyrum Wright"
                  ],
           video: "https://youtube.com/watch?v=TrC6ROeV4GI",
       thumbnail: "http://img.youtube.com/vi/TrC6ROeV4GI/0.jpg",
        duration: 3616,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0187",
         meeting: "cppcon",
         edition: "2018",
           title: "CppCon 2019 Planning Committee Work Session",
        speakers: [
                     "Bob Steagall"
                  ],
           video: "https://youtube.com/watch?v=kYVxGyido9g",
       thumbnail: "http://img.youtube.com/vi/kYVxGyido9g/0.jpg",
        duration: 3674,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0189",
         meeting: "cppcon",
         edition: "2018",
           title: "Easy to Use, Hard to Misuse: Declarative Style in C++",
        speakers: [
                     "Ben Deane"
                  ],
           video: "https://youtube.com/watch?v=I52uPJSoAT4",
       thumbnail: "http://img.youtube.com/vi/I52uPJSoAT4/0.jpg",
        duration: 3666,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0190",
         meeting: "cppcon",
         edition: "2018",
           title: "Standard Library Compatibility Guidelines",
        speakers: [
                     "Titus Winters"
                  ],
           video: "https://youtube.com/watch?v=BWvSSsKCiAw",
       thumbnail: "http://img.youtube.com/vi/BWvSSsKCiAw/0.jpg",
        duration: 3646,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0191",
         meeting: "cppcon",
         edition: "2018",
           title: "The Salami Method for Cross Platform Development",
        speakers: [
                     "Adi Shavit"
                  ],
           video: "https://youtube.com/watch?v=ZSpGNiUvXVI",
       thumbnail: "http://img.youtube.com/vi/ZSpGNiUvXVI/0.jpg",
        duration: 3616,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0192",
         meeting: "cppcon",
         edition: "2018",
           title: "Clangd: architecture of a scalable C++ language server",
        speakers: [
                     "Ilya Biryukov"
                  ],
           video: "https://youtube.com/watch?v=5HIyAXj1YNQ",
       thumbnail: "http://img.youtube.com/vi/5HIyAXj1YNQ/0.jpg",
        duration: 3148,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0193",
         meeting: "cppcon",
         edition: "2018",
           title: "The Most Valuable Values",
        speakers: [
                     "Juan Pedro Bolivar Puente"
                  ],
           video: "https://youtube.com/watch?v=_oBx_NbLghY",
       thumbnail: "http://img.youtube.com/vi/_oBx_NbLghY/0.jpg",
        duration: 3532,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0194",
         meeting: "cppcon",
         edition: "2018",
           title: "Get rich quick! Using Boost.Beast WebSockets and Networking TS",
        speakers: [
                     "Vinnie Falco"
                  ],
           video: "https://youtube.com/watch?v=7FQwAjELMek",
       thumbnail: "http://img.youtube.com/vi/7FQwAjELMek/0.jpg",
        duration: 3644,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0195",
         meeting: "cppcon",
         edition: "2018",
           title: "Spectre: Secrets, Side-Channels, Sandboxes, and Security",
        speakers: [
                     "Chandler Carruth"
                  ],
           video: "https://youtube.com/watch?v=_f7O3IfIR2k",
       thumbnail: "http://img.youtube.com/vi/_f7O3IfIR2k/0.jpg",
        duration: 5255,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0196",
         meeting: "cppcon",
         edition: "2018",
           title: "Academic BoF",
        speakers: [
                     "Andrew Sutton",
                     "Bryce Adelstein Lelbach"
                  ],
           video: "https://youtube.com/watch?v=FJIn1YhPJJc",
       thumbnail: "http://img.youtube.com/vi/FJIn1YhPJJc/0.jpg",
        duration: 3374,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0197",
         meeting: "cppcon",
         edition: "2018",
           title: "Accelerated TDD: For More Productive C++",
        speakers: [
                     "Phil Nash"
                  ],
           video: "https://youtube.com/watch?v=N2gTxeIHMP0",
       thumbnail: "http://img.youtube.com/vi/N2gTxeIHMP0/0.jpg",
        duration: 3708,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0198",
         meeting: "cppcon",
         edition: "2018",
           title: "C++ Best Practices",
        speakers: [
                     "Jason Turner"
                  ],
           video: "https://youtube.com/watch?v=DHOlsEd0eDE",
       thumbnail: "http://img.youtube.com/vi/DHOlsEd0eDE/0.jpg",
        duration: 3798,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0199",
         meeting: "cppcon",
         edition: "2018",
           title: "Debugging and Profiling C++ Code on Linux",
        speakers: [
                     "David Faure"
                  ],
           video: "https://youtube.com/watch?v=HOR4LiS4uMI",
       thumbnail: "http://img.youtube.com/vi/HOR4LiS4uMI/0.jpg",
        duration: 1819,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0200",
         meeting: "cppcon",
         edition: "2018",
           title: "Essential C++ Design",
        speakers: [
                     "Klaus Iglberger"
                  ],
           video: "https://youtube.com/watch?v=Ntraj80qN2k",
       thumbnail: "http://img.youtube.com/vi/Ntraj80qN2k/0.jpg",
        duration: 3801,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0201",
         meeting: "cppcon",
         edition: "2018",
           title: "Generic Programming 2.0 with Concepts and Ranges",
        speakers: [
                     "Christopher Di Bella"
                  ],
           video: "https://youtube.com/watch?v=3AkPd9Nt2Aw",
       thumbnail: "http://img.youtube.com/vi/3AkPd9Nt2Aw/0.jpg",
        duration: 3521,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0202",
         meeting: "cppcon",
         edition: "2018",
           title: "Leveraging Modern C++ for Embedded Systems",
        speakers: [
                     "Ben Saks",
                     "Dan Saks"
                  ],
           video: "https://youtube.com/watch?v=3VtGCPIoBfs",
       thumbnail: "http://img.youtube.com/vi/3VtGCPIoBfs/0.jpg",
        duration: 4686,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0203",
         meeting: "cppcon",
         edition: "2018",
           title: "Parallel Programming with Modern C++: from CPU to GPU",
        speakers: [
                     "Gordon Brown",
                     "Michael Wong"
                  ],
           video: "https://youtube.com/watch?v=miqZS6aS9K0",
       thumbnail: "http://img.youtube.com/vi/miqZS6aS9K0/0.jpg",
        duration: 3685,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#cppcon-2018-0204",
         meeting: "cppcon",
         edition: "2018",
           title: "The Standard Library from Scratch",
        speakers: [
                     "Arthur O'Dwyer"
                  ],
           video: "https://youtube.com/watch?v=tbUCHifyT24",
       thumbnail: "http://img.youtube.com/vi/tbUCHifyT24/0.jpg",
        duration: 2956,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#c++now-2019-0001",
         meeting: "c++now",
         edition: "2019",
           title: "General Conference Welcome",
        speakers: [
                     "Jon Kalb"
                  ],
           video: "https://youtube.com/watch?v=U_AFw3FliBE",
       thumbnail: "http://img.youtube.com/vi/U_AFw3FliBE/0.jpg",
        duration: 2149,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#c++now-2019-0003",
         meeting: "c++now",
         edition: "2019",
           title: "C++ Constants",
        speakers: [
                     "Daveed Vandevoorde"
                  ],
           video: "https://youtube.com/watch?v=m9tcmTjGeho",
       thumbnail: "http://img.youtube.com/vi/m9tcmTjGeho/0.jpg",
        duration: 5182,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#c++now-2019-0004",
         meeting: "c++now",
         edition: "2019",
           title: "Beyond C++17 (Part 2 of N)",
        speakers: [
                     "Mateusz Pusz"
                  ],
           video: "https://youtube.com/watch?v=XjUmU3q1XsA",
       thumbnail: "http://img.youtube.com/vi/XjUmU3q1XsA/0.jpg",
        duration: 5523,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#c++now-2019-0005",
         meeting: "c++now",
         edition: "2019",
           title: "Matchine: Pattern Matching for Open Sum Types",
        speakers: [
                     "Andre Bergner"
                  ],
           video: "https://youtube.com/watch?v=vISLulrbEM8",
       thumbnail: "http://img.youtube.com/vi/vISLulrbEM8/0.jpg",
        duration: 5573,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#c++now-2019-0006",
         meeting: "c++now",
         edition: "2019",
           title: "Property-Based Declarative Containers",
        speakers: [
                     "Charley Bay"
                  ],
           video: "https://youtube.com/watch?v=ftm___mS0ck",
       thumbnail: "http://img.youtube.com/vi/ftm___mS0ck/0.jpg",
        duration: 5112,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#c++now-2019-0007",
         meeting: "c++now",
         edition: "2019",
           title: "A Multithreaded, Transaction-Based Read/Write Locking Strategy for Containers",
        speakers: [
                     "Bob Steagall"
                  ],
           video: "https://youtube.com/watch?v=oZg0gxA8__o",
       thumbnail: "http://img.youtube.com/vi/oZg0gxA8__o/0.jpg",
        duration: 5644,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#c++now-2019-0008",
         meeting: "c++now",
         edition: "2019",
           title: "How I learned to Stop Worrying and Love the C++ Type System",
        speakers: [
                     "Peter Sommerlad"
                  ],
           video: "https://youtube.com/watch?v=U0DyF4J4beo",
       thumbnail: "http://img.youtube.com/vi/U0DyF4J4beo/0.jpg",
        duration: 5612,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#c++now-2019-0009",
         meeting: "c++now",
         edition: "2019",
           title: "Value Proposition: Allocator-Aware (AA) Software",
        speakers: [
                     "John Lakos"
                  ],
           video: "https://youtube.com/watch?v=dDR93TfacHc",
       thumbnail: "http://img.youtube.com/vi/dDR93TfacHc/0.jpg",
        duration: 6142,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#c++now-2019-0010",
         meeting: "c++now",
         edition: "2019",
           title: "Dependency Injection - a 25-dollar term for a 5-cent concept",
        speakers: [
                     "Kris Jusiak"
                  ],
           video: "https://youtube.com/watch?v=yVogS4NbL6U",
       thumbnail: "http://img.youtube.com/vi/yVogS4NbL6U/0.jpg",
        duration: 6019,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#c++now-2019-0011",
         meeting: "c++now",
         edition: "2019",
           title: "Embedded Domain Specific Languages for Embedded Bare Metal Projects",
        speakers: [
                     "Michael Caisse"
                  ],
           video: "https://youtube.com/watch?v=OkeRijjmoh8",
       thumbnail: "http://img.youtube.com/vi/OkeRijjmoh8/0.jpg",
        duration: 5337,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#c++now-2019-0012",
         meeting: "c++now",
         edition: "2019",
           title: "test_resource: the pmr detective",
        speakers: [
                     "Attila Feher"
                  ],
           video: "https://youtube.com/watch?v=48oAZqlyx_g",
       thumbnail: "http://img.youtube.com/vi/48oAZqlyx_g/0.jpg",
        duration: 5368,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#c++now-2019-0013",
         meeting: "c++now",
         edition: "2019",
           title: "Compile Time Regular Expressions with Deterministic Finite Automaton",
        speakers: [
                     "Hana Dusikova"
                  ],
           video: "https://youtube.com/watch?v=IO3MO450WX4",
       thumbnail: "http://img.youtube.com/vi/IO3MO450WX4/0.jpg",
        duration: 5582,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#c++now-2019-0014",
         meeting: "c++now",
         edition: "2019",
           title: "Linear Algebra for the Standard C++ Library",
        speakers: [
                     "Bob Steagall"
                  ],
           video: "https://youtube.com/watch?v=CslK9tu9ssA",
       thumbnail: "http://img.youtube.com/vi/CslK9tu9ssA/0.jpg",
        duration: 5570,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#c++now-2019-0015",
         meeting: "c++now",
         edition: "2019",
           title: "Implementing Physical Units Library for C++",
        speakers: [
                     "Mateusz Pusz"
                  ],
           video: "https://youtube.com/watch?v=wKchCktZPHU",
       thumbnail: "http://img.youtube.com/vi/wKchCktZPHU/0.jpg",
        duration: 5146,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#c++now-2019-0016",
         meeting: "c++now",
         edition: "2019",
           title: "Sane Modern Special Member Functions",
        speakers: [
                     "Peter Sommerlad"
                  ],
           video: "https://youtube.com/watch?v=wq9NaZfQKJU",
       thumbnail: "http://img.youtube.com/vi/wq9NaZfQKJU/0.jpg",
        duration: 5699,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#c++now-2019-0017",
         meeting: "c++now",
         edition: "2019",
           title: "Rise of the State Machines",
        speakers: [
                     "Kris Jusiak"
                  ],
           video: "https://youtube.com/watch?v=Zb6xcd2as6o",
       thumbnail: "http://img.youtube.com/vi/Zb6xcd2as6o/0.jpg",
        duration: 5711,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#c++now-2019-0018",
         meeting: "c++now",
         edition: "2019",
           title: "Better CTAD for C++20",
        speakers: [
                     "Timur Doumler"
                  ],
           video: "https://youtube.com/watch?v=7LPQWqAZZqs",
       thumbnail: "http://img.youtube.com/vi/7LPQWqAZZqs/0.jpg",
        duration: 5318,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#c++now-2019-0019",
         meeting: "c++now",
         edition: "2019",
           title: "The Truth of a Procedure",
        speakers: [
                     "Lisa Lippincott"
                  ],
           video: "https://youtube.com/watch?v=DfNJR0wYRK4",
       thumbnail: "http://img.youtube.com/vi/DfNJR0wYRK4/0.jpg",
        duration: 5751,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#c++now-2019-0020",
         meeting: "c++now",
         edition: "2019",
           title: "C++: Engineers Wanted, Programmers not so Much",
        speakers: [
                     "David Sankel"
                  ],
           video: "https://youtube.com/watch?v=eRHLuuFMtx4",
       thumbnail: "http://img.youtube.com/vi/eRHLuuFMtx4/0.jpg",
        duration: 5546,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#c++now-2019-0021",
         meeting: "c++now",
         edition: "2019",
           title: "Tacit DSL All the Things",
        speakers: [
                     "Odin Holmes"
                  ],
           video: "https://youtube.com/watch?v=J0jwUEyrvQM",
       thumbnail: "http://img.youtube.com/vi/J0jwUEyrvQM/0.jpg",
        duration: 5389,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#c++now-2019-0022",
         meeting: "c++now",
         edition: "2019",
           title: "The C++20 Standard Library - Beyond Ranges",
        speakers: [
                     "Jeff Garland"
                  ],
           video: "https://youtube.com/watch?v=hXCP8Qb-NNE",
       thumbnail: "http://img.youtube.com/vi/hXCP8Qb-NNE/0.jpg",
        duration: 5510,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#c++now-2019-0023",
         meeting: "c++now",
         edition: "2019",
           title: "C++Now and CppCon, the View From Inside",
        speakers: [
                     "Robin Kuzmin"
                  ],
           video: "https://youtube.com/watch?v=ondHeigfZN0",
       thumbnail: "http://img.youtube.com/vi/ondHeigfZN0/0.jpg",
        duration: 3292,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#c++now-2019-0024",
         meeting: "c++now",
         edition: "2019",
           title: "The C++ Reflection TS",
        speakers: [
                     "David Sankel"
                  ],
           video: "https://youtube.com/watch?v=VMuML6vLSus",
       thumbnail: "http://img.youtube.com/vi/VMuML6vLSus/0.jpg",
        duration: 4662,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#c++now-2019-0025",
         meeting: "c++now",
         edition: "2019",
           title: "A generic binary tree: why grow your own?",
        speakers: [
                     "Jeremy Murphy"
                  ],
           video: "https://youtube.com/watch?v=e-cRWFiGb8E",
       thumbnail: "http://img.youtube.com/vi/e-cRWFiGb8E/0.jpg",
        duration: 5564,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#c++now-2019-0026",
         meeting: "c++now",
         edition: "2019",
           title: "Audio in standard C++",
        speakers: [
                     "Timur Doumler"
                  ],
           video: "https://youtube.com/watch?v=jNSiZqSQis4",
       thumbnail: "http://img.youtube.com/vi/jNSiZqSQis4/0.jpg",
        duration: 5571,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#c++now-2019-0027",
         meeting: "c++now",
         edition: "2019",
           title: "Clang Automated Refactoring for everyone with clangmetatool",
        speakers: [
                     "Daniel Ruoso"
                  ],
           video: "https://youtube.com/watch?v=vYl6mrEzn1E",
       thumbnail: "http://img.youtube.com/vi/vYl6mrEzn1E/0.jpg",
        duration: 5052,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#c++now-2019-0028",
         meeting: "c++now",
         edition: "2019",
           title: "Hey C, This Is What Performance Looks like (Manually Generating Optimal Assembly at Compile Time)",
        speakers: [
                     "Odin Holmes"
                  ],
           video: "https://youtube.com/watch?v=CNw6Cz8Cb68",
       thumbnail: "http://img.youtube.com/vi/CNw6Cz8Cb68/0.jpg",
        duration: 4735,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#c++now-2019-0029",
         meeting: "c++now",
         edition: "2019",
           title: "Practical Interfaces for Practical Functions",
        speakers: [
                     "Lisa Lippincott"
                  ],
           video: "https://youtube.com/watch?v=4KmUG6BOXs8",
       thumbnail: "http://img.youtube.com/vi/4KmUG6BOXs8/0.jpg",
        duration: 5756,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#c++now-2019-0030",
         meeting: "c++now",
         edition: "2019",
           title: "Using C++20 Ranges Effectively",
        speakers: [
                     "Jeff Garland"
                  ],
           video: "https://youtube.com/watch?v=VmWS-9idT3s",
       thumbnail: "http://img.youtube.com/vi/VmWS-9idT3s/0.jpg",
        duration: 5656,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#c++now-2019-0031",
         meeting: "c++now",
         edition: "2019",
           title: "Higher-order functions and `function_ref`",
        speakers: [
                     "Vittorio Romeo"
                  ],
           video: "https://youtube.com/watch?v=5V74RPUEu5s",
       thumbnail: "http://img.youtube.com/vi/5V74RPUEu5s/0.jpg",
        duration: 5734,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#c++now-2019-0032",
         meeting: "c++now",
         edition: "2019",
           title: "Parametric Expressions: A Proposed Language Feature",
        speakers: [
                     "Jason Rice"
                  ],
           video: "https://youtube.com/watch?v=KfWzi3boBxM",
       thumbnail: "http://img.youtube.com/vi/KfWzi3boBxM/0.jpg",
        duration: 5378,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#c++now-2019-0033",
         meeting: "c++now",
         edition: "2019",
           title: "Threat Hunting",
        speakers: [
                     "Matthew Butler"
                  ],
           video: "https://youtube.com/watch?v=pgEc__9Cltc",
       thumbnail: "http://img.youtube.com/vi/pgEc__9Cltc/0.jpg",
        duration: 4958,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#c++now-2019-0034",
         meeting: "c++now",
         edition: "2019",
           title: "C++20 in Breadth (not depth!)",
        speakers: [
                     "Alisdair Meredith"
                  ],
           video: "https://youtube.com/watch?v=tczJe5YGHuc",
       thumbnail: "http://img.youtube.com/vi/tczJe5YGHuc/0.jpg",
        duration: 5515,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#c++now-2019-0035",
         meeting: "c++now",
         edition: "2019",
           title: "If You Can't Open It, You Don't Own It",
        speakers: [
                     "Matthew Butler"
                  ],
           video: "https://youtube.com/watch?v=oqV3HNezHcY",
       thumbnail: "http://img.youtube.com/vi/oqV3HNezHcY/0.jpg",
        duration: 3562,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#c++now-2019-0036",
         meeting: "c++now",
         edition: "2019",
           title: "Trivially Relocatable",
        speakers: [
                     "Arthur O'Dwyer"
                  ],
           video: "https://youtube.com/watch?v=SGdfPextuAU",
       thumbnail: "http://img.youtube.com/vi/SGdfPextuAU/0.jpg",
        duration: 5280,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#c++now-2019-0037",
         meeting: "c++now",
         edition: "2019",
           title: "Experiences in Teaching Modern C++ to Beginners",
        speakers: [
                     "Ryan Dougherty"
                  ],
           video: "https://youtube.com/watch?v=GV1r7uJkPH4",
       thumbnail: "http://img.youtube.com/vi/GV1r7uJkPH4/0.jpg",
        duration: 2823,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#c++now-2019-0038",
         meeting: "c++now",
         edition: "2019",
           title: "Algorithm Intuition",
        speakers: [
                     "Conor Hoekstra"
                  ],
           video: "https://youtube.com/watch?v=48gV1SNm3WA",
       thumbnail: "http://img.youtube.com/vi/48gV1SNm3WA/0.jpg",
        duration: 5338,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#c++now-2019-0039",
         meeting: "c++now",
         edition: "2019",
           title: "The Impact of Compilers, O/Ses and Mitigations for Spectre & Meltdown upon a Low-Latency Trading System.",
        speakers: [
                     "Jason McGuiness"
                  ],
           video: "https://youtube.com/watch?v=5OusNvZfoHk",
       thumbnail: "http://img.youtube.com/vi/5OusNvZfoHk/0.jpg",
        duration: 3523,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#c++now-2019-0040",
         meeting: "c++now",
         edition: "2019",
           title: "The ABI challenge",
        speakers: [
                     "Arvid Norberg"
                  ],
           video: "https://youtube.com/watch?v=ncyQAjTyPwU",
       thumbnail: "http://img.youtube.com/vi/ncyQAjTyPwU/0.jpg",
        duration: 2116,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#c++now-2019-0041",
         meeting: "c++now",
         edition: "2019",
           title: "Identifying Monoids: Exploiting Compositional Structure in Code",
        speakers: [
                     "Ben Deane"
                  ],
           video: "https://youtube.com/watch?v=INnattuluiM",
       thumbnail: "http://img.youtube.com/vi/INnattuluiM/0.jpg",
        duration: 5254,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#c++now-2019-0042",
         meeting: "c++now",
         edition: "2019",
           title: "Pattern Matching: Match Me If You Can",
        speakers: [
                     "Michael Park"
                  ],
           video: "https://youtube.com/watch?v=nOwUzFYt0NQ",
       thumbnail: "http://img.youtube.com/vi/nOwUzFYt0NQ/0.jpg",
        duration: 5365,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#c++now-2019-0043",
         meeting: "c++now",
         edition: "2019",
           title: "The Ongoing Saga of ISO-C++ Executors",
        speakers: [
                     "David Hollman"
                  ],
           video: "https://youtube.com/watch?v=iYMfYdO0_OU",
       thumbnail: "http://img.youtube.com/vi/iYMfYdO0_OU/0.jpg",
        duration: 5596,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#c++now-2019-0044",
         meeting: "c++now",
         edition: "2019",
           title: "An Alternate Smart Pointer Hierarchy",
        speakers: [
                     "Matthew Fleming"
                  ],
           video: "https://youtube.com/watch?v=Hs0CA4vIcvk",
       thumbnail: "http://img.youtube.com/vi/Hs0CA4vIcvk/0.jpg",
        duration: 4047,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#c++now-2019-0045",
         meeting: "c++now",
         edition: "2019",
           title: "Points of Order",
        speakers: [
                     "Gasper Azman"
                  ],
           video: "https://youtube.com/watch?v=WbW8A5QXn5I",
       thumbnail: "http://img.youtube.com/vi/WbW8A5QXn5I/0.jpg",
        duration: 5455,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#c++now-2019-0046",
         meeting: "c++now",
         edition: "2019",
           title: "The View from a C++ Standard Library Implementor",
        speakers: [
                     "Marshall Clow"
                  ],
           video: "https://youtube.com/watch?v=JRRN30TFxg0",
       thumbnail: "http://img.youtube.com/vi/JRRN30TFxg0/0.jpg",
        duration: 5265,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#c++now-2019-0048",
         meeting: "c++now",
         edition: "2019",
           title: "C++Now 2020 Planning Session",
        speakers: [
                     "Bryce Adelstein Lelbach",
                     "Jon Kalb"
                  ],
           video: "https://youtube.com/watch?v=zoMZAV6FEbc",
       thumbnail: "http://img.youtube.com/vi/zoMZAV6FEbc/0.jpg",
        duration: 3841,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#c++now-2019-0049",
         meeting: "c++now",
         edition: "2019",
           title: "Taking the Plunge Towards CMake in Boost",
        speakers: [
                     "Paul Fultz II"
                  ],
           video: "https://youtube.com/watch?v=kjtIP5mDvT0",
       thumbnail: "http://img.youtube.com/vi/kjtIP5mDvT0/0.jpg",
        duration: 5619,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#c++now-2019-0050",
         meeting: "c++now",
         edition: "2019",
           title: "The Many Variants of std::variant",
        speakers: [
                     "Nevin Liber"
                  ],
           video: "https://youtube.com/watch?v=JUxhwf7gYLg",
       thumbnail: "http://img.youtube.com/vi/JUxhwf7gYLg/0.jpg",
        duration: 5282,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#c++now-2019-0051",
         meeting: "c++now",
         edition: "2019",
           title: "The Rough Road Towards Upgrading to C++ Modules",
        speakers: [
                     "Richard Szalay"
                  ],
           video: "https://youtube.com/watch?v=XJxQs8qgn-c",
       thumbnail: "http://img.youtube.com/vi/XJxQs8qgn-c/0.jpg",
        duration: 5448,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#c++now-2019-0052",
         meeting: "c++now",
         edition: "2019",
           title: "The Plan for Tomorrow: Extension Points in C++ Applications",
        speakers: [
                     "JeanHeyd Meneide"
                  ],
           video: "https://youtube.com/watch?v=aZNhSOIvv1Q",
       thumbnail: "http://img.youtube.com/vi/aZNhSOIvv1Q/0.jpg",
        duration: 5272,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#c++now-2019-0053",
         meeting: "c++now",
         edition: "2019",
           title: "C++ Development with Visual Studio Code",
        speakers: [
                     "Tara Raj"
                  ],
           video: "https://youtube.com/watch?v=knghWKWQmxg",
       thumbnail: "http://img.youtube.com/vi/knghWKWQmxg/0.jpg",
        duration: 3500,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   },
   {
      identifier: "#c++now-2019-0054",
         meeting: "c++now",
         edition: "2019",
           title: "Exceptions Demystified",
        speakers: [
                     "Andreas Weis"
                  ],
           video: "https://youtube.com/watch?v=kO0KVB-XIeE",
       thumbnail: "http://img.youtube.com/vi/kO0KVB-XIeE/0.jpg",
        duration: 5506,
            tags: [
                     "c++",
                     "conference",
                     "live"
                  ],
           level: 0,
        language: "english"
   }
]

