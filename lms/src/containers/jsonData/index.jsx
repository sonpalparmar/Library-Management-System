const data = [
    {
      "SR_NO": 1,
      "TITLE": "Sammy Keyes and the Art of Deception",
      "AUTHORS": "Wendelin Van Draanen",
      "SUBJECT": "Juvenile Fiction",
      "YEAR": 2009
    },
    {
      "SR_NO": 2,
      "TITLE": "Bring Your Own Devices (BYOD) Survival Guide",
      "AUTHORS": "Jessica Keyes",
      "SUBJECT": "Business & Economics",
      "YEAR": 2016
    },
    {
      "SR_NO": 3,
      "TITLE": "Enterprise 2.0",
      "AUTHORS": "Jessica Keyes",
      "SUBJECT": "Business & Economics",
      "YEAR": 2016
    },
    {
      "SR_NO": 4,
      "TITLE": "The CIO's Guide to Oracle Products and Solutions",
      "AUTHORS": "Jessica Keyes",
      "SUBJECT": "Business & Economics",
      "YEAR": 2014
    },
    {
      "SR_NO": 5,
      "TITLE": "Implementing the IT Balanced Scorecard",
      "AUTHORS": "Jessica Keyes",
      "SUBJECT": "Computers",
      "YEAR": 2016
    },
    {
      "SR_NO": 6,
      "TITLE": "Implementing the Project Management Balanced Scorecard",
      "AUTHORS": "Jessica Keyes",
      "SUBJECT": "Business & Economics",
      "YEAR": 2010
    },
    {
      "SR_NO": 7,
      "TITLE": "Social Software Engineering",
      "AUTHORS": "Jessica Keyes",
      "SUBJECT": "Computers",
      "YEAR": 2016
    },
    {
      "SR_NO": 8,
      "TITLE": "Classes on Modern Poets and the Art of Poetry",
      "AUTHORS": "James Dickey', 'Donald J. Greiner",
      "SUBJECT": "Biography & Autobiography",
      "YEAR": 2004
    },
    {
      "SR_NO": 9,
      "TITLE": "Retelling the Nicaraguan Revolution as a Dionysian Ritual",
      "AUTHORS": "Martina Handler",
      "SUBJECT": "History",
      "YEAR": 1905
    },
    {
      "SR_NO": 10,
      "TITLE": "Flowers for Algernon",
      "AUTHORS": "BookCaps Study Guides Staff",
      "SUBJECT": "Biography & Autobiography",
      "YEAR": 1905
    },
    {
      "SR_NO": 11,
      "TITLE": "Handbook of Applied Developmental Science",
      "AUTHORS": "Richard M. Lerner', 'Francine Jacobs', 'Donald Wertlieb",
      "SUBJECT": "Psychology",
      "YEAR": 1905
    },
    {
      "SR_NO": 12,
      "TITLE": "Wade Keyes' introductory lecture to the Montgomery Law School",
      "AUTHORS": "David I. Durham', 'Wade Keyes', 'Paul M. Pruitt",
      "SUBJECT": "Law",
      "YEAR": 1905
    },
    {
      "SR_NO": 13,
      "TITLE": "Dental Science in a New Age",
      "AUTHORS": "Ruth Roy Harris",
      "SUBJECT": "Dentistry",
      "YEAR": 1905
    },
    {
      "SR_NO": 14,
      "TITLE": "A Study Guide for Daniel Keyes's Flowers for Algernon",
      "AUTHORS": "Gale, Cengage Learning",
      "SUBJECT": "Literary Criticism",
      "YEAR": 2015
    },
    {
      "SR_NO": 15,
      "TITLE": "Domain-based Parallelism and Problem Decomposition Methods in Computational Science and Engineering",
      "AUTHORS": "David E. Keyes', 'Yousef Saad', 'Donald G. Truhlar",
      "SUBJECT": "Mathematical optimization",
      "YEAR": 1995
    },
    {
      "SR_NO": 16,
      "TITLE": "Implementing the IT Balanced Scorecard",
      "AUTHORS": "Jessica Keyes",
      "SUBJECT": "Computers",
      "YEAR": 2016
    },
    {
      "SR_NO": 17,
      "TITLE": "Technology Trendlines",
      "AUTHORS": "Jessica Keyes",
      "SUBJECT": "Business & Economics",
      "YEAR": 1995
    },
    {
      "SR_NO": 18,
      "TITLE": "Technical Paper - Bureau of Mines",
      "AUTHORS": "United States. Bureau of Mines",
      "SUBJECT": "Mineral industries",
      "YEAR": 1905
    },
    {
      "SR_NO": 19,
      "TITLE": "The Corporate Directory of US Public Companies 1995",
      "AUTHORS": "Elizabeth Walsh",
      "SUBJECT": "Business & Economics",
      "YEAR": 2016
    },
    {
      "SR_NO": 20,
      "TITLE": "ACSA Annual Directory",
      "AUTHORS": "Association of Collegiate Schools of Architecture",
      "SUBJECT": "Architecture",
      "YEAR": 1905
    },
    {
      "SR_NO": 21,
      "TITLE": "World War II: the Encyclopedia of the War Years, 1941-1945",
      "AUTHORS": "Norman Polmar', 'Thomas B. Allen",
      "SUBJECT": "History",
      "YEAR": 2012
    },
    {
      "SR_NO": 22,
      "TITLE": "Bulletin - New Mexico Bureau of Mines & Mineral Resources",
      "AUTHORS": "New Mexico. Bureau of Mines and Mineral Resources",
      "SUBJECT": "Geology",
      "YEAR": 1905
    },
    {
      "SR_NO": 23,
      "TITLE": "American Predator",
      "AUTHORS": "Maureen Callahan",
      "SUBJECT": "True Crime",
      "YEAR": 2019
    },
    {
      "SR_NO": 24,
      "TITLE": "Business Organizations, Keyed to Soderquist",
      "AUTHORS": "Casenotes",
      "SUBJECT": "Business & Economics",
      "YEAR": 2006
    },
    {
      "SR_NO": 25,
      "TITLE": "Next-Generation Biofuels",
      "AUTHORS": "William T. Coyle",
      "SUBJECT": "Alcohol as fuel",
      "YEAR": 2010
    },
    {
      "SR_NO": 26,
      "TITLE": "Casenote Legal Briefs for Business Organizations, Keyed to Smiddy and Cunningham",
      "AUTHORS": "Casenote Legal Briefs",
      "SUBJECT": "Law",
      "YEAR": 2011
    },
    {
      "SR_NO": 27,
      "TITLE": "No Oath Sworn",
      "AUTHORS": "Phil Geusz",
      "SUBJECT": "Fiction",
      "YEAR": 2012
    },
    {
      "SR_NO": 28,
      "TITLE": "Southern Writers",
      "AUTHORS": "Joseph M. Flora', 'Amber Vogel",
      "SUBJECT": "Reference",
      "YEAR": 2006
    },
    {
      "SR_NO": 29,
      "TITLE": "Therapist's Guide to Positive Psychological Interventions",
      "AUTHORS": "Jeana L. Magyar-Moe",
      "SUBJECT": "Psychology",
      "YEAR": 2009
    },
    {
      "SR_NO": 30,
      "TITLE": "A Handbook for the Study of Mental Health",
      "AUTHORS": "Teresa L. Scheid', 'Eric R. Wright",
      "SUBJECT": "Medical",
      "YEAR": 2017
    },
    {
      "SR_NO": 31,
      "TITLE": "Foundations of Professional Psychology",
      "AUTHORS": "Timothy P Melchert",
      "SUBJECT": "Psychology",
      "YEAR": 2011
    },
    {
      "SR_NO": 32,
      "TITLE": "Implementing the IT Balanced Scorecard",
      "AUTHORS": "Jessica Keyes",
      "SUBJECT": "Computers",
      "YEAR": 2016
    },
    {
      "SR_NO": 33,
      "TITLE": "Brain Mystery Light and Dark",
      "AUTHORS": "Charles Don Keyes",
      "SUBJECT": "Philosophy",
      "YEAR": 2006
    },
    {
      "SR_NO": 34,
      "TITLE": "The Courage to Write",
      "AUTHORS": "Ralph Keyes",
      "SUBJECT": "Language Arts & Disciplines",
      "YEAR": 2003
    },
    {
      "SR_NO": 35,
      "TITLE": "Epidemiology Matters",
      "AUTHORS": "Katherine M. Keyes', 'Sandro Galea",
      "SUBJECT": "Medical",
      "YEAR": 2014
    },
    {
      "SR_NO": 36,
      "TITLE": "Thermodynamic Functions of Gases: Ammonia, carbon dioxide and carbon monoxide",
      "AUTHORS": "F. Din",
      "SUBJECT": "Gases",
      "YEAR": 1905
    },
    {
      "SR_NO": 37,
      "TITLE": "Data Modeling Essentials",
      "AUTHORS": "Graeme Simsion', 'Graham Witt",
      "SUBJECT": "Computers",
      "YEAR": 2004
    },
    {
      "SR_NO": 38,
      "TITLE": "CliffsNotes on Keyes' Flowers For Algernon",
      "AUTHORS": "Janet Clark",
      "SUBJECT": "Literary Criticism",
      "YEAR": 2001
    },
    {
      "SR_NO": 39,
      "TITLE": "The Infernal City: An Elder Scrolls Novel",
      "AUTHORS": "Greg Keyes",
      "SUBJECT": "Fiction",
      "YEAR": 2009
    },
    {
      "SR_NO": 40,
      "TITLE": "Sushi for Beginners",
      "AUTHORS": "Marian Keyes",
      "SUBJECT": "Fiction",
      "YEAR": 2009
    },
    {
      "SR_NO": 41,
      "TITLE": "Angels",
      "AUTHORS": "Marian Keyes",
      "SUBJECT": "Fiction",
      "YEAR": 2009
    },
    {
      "SR_NO": 42,
      "TITLE": "Science Fiction and Fantasy Literature",
      "AUTHORS": "R. Reginald', 'Douglas Menville', 'Mary A. Burgess",
      "SUBJECT": "Reference",
      "YEAR": 2010
    },
    {
      "SR_NO": 43,
      "TITLE": "Independence Day: Crucible",
      "AUTHORS": "Greg Keyes",
      "SUBJECT": "Fiction",
      "YEAR": 2016
    },
    {
      "SR_NO": 44,
      "TITLE": "The Mammoth Encyclopedia of Science Fiction",
      "AUTHORS": "George Mann",
      "SUBJECT": "Fiction",
      "YEAR": 2012
    },
    {
      "SR_NO": 45,
      "TITLE": "The Mystery of Mercy Close",
      "AUTHORS": "Marian Keyes",
      "SUBJECT": "Fiction",
      "YEAR": 2013
    },
    {
      "SR_NO": 46,
      "TITLE": "The New Orleans of Fiction",
      "AUTHORS": "James A. Kaser",
      "SUBJECT": "Literary Criticism",
      "YEAR": 2014
    },
    {
      "SR_NO": 47,
      "TITLE": "Lord of Souls",
      "AUTHORS": "J. Gregory Keyes",
      "SUBJECT": "Fiction",
      "YEAR": 1905
    },
    {
      "SR_NO": 48,
      "TITLE": "The Routledge Handbook of Stylistics",
      "AUTHORS": "Michael Burke",
      "SUBJECT": "Language Arts & Disciplines",
      "YEAR": 2017
    },
    {
      "SR_NO": 49,
      "TITLE": "The Liberation Trilogy Box Set",
      "AUTHORS": "Rick Atkinson",
      "SUBJECT": "History",
      "YEAR": 2013
    },
    {
      "SR_NO": 50,
      "TITLE": "Legacy Discovered",
      "AUTHORS": "Kerry Reis",
      "SUBJECT": "Fiction",
      "YEAR": 2010
    },
    {
      "SR_NO": 51,
      "TITLE": "Masterplots II, Short Story Series, Supplement",
      "AUTHORS": "Frank N. Magill",
      "SUBJECT": "Juvenile Fiction",
      "YEAR": 1905
    },
    {
      "SR_NO": 52,
      "TITLE": "Elisha Jones House and Shed",
      "AUTHORS": "James J. Lee (III.)', 'Historic Architecture Program (United States. National Park Service. Northeast Region)",
      "SUBJECT": "Historic buildings",
      "YEAR": 1905
    },
    {
      "SR_NO": 53,
      "TITLE": "An Unpredictable Gospel",
      "AUTHORS": "Jay Riley Case",
      "SUBJECT": "Religion",
      "YEAR": 2012
    },
    {
      "SR_NO": 54,
      "TITLE": "Masterplots II.",
      "AUTHORS": "Charles Edward May",
      "SUBJECT": "Study Aids",
      "YEAR": 2010
    },
    {
      "SR_NO": 55,
      "TITLE": "Flowers for Algernon",
      "AUTHORS": "BookCaps Study Guides Staff",
      "SUBJECT": "Biography & Autobiography",
      "YEAR": 1905
    },
    {
      "SR_NO": 56,
      "TITLE": "The Encyclopedia of Superheroes on Film and Television, 2d ed.",
      "AUTHORS": "John Kenneth Muir",
      "SUBJECT": "Performing Arts",
      "YEAR": 2004
    },
    {
      "SR_NO": 57,
      "TITLE": "Flowers for Algernon",
      "AUTHORS": "Patrice Cassedy",
      "SUBJECT": "Juvenile Nonfiction",
      "YEAR": 2010
    },
    {
      "SR_NO": 58,
      "TITLE": "CliffsNotes on Keyes' Flowers For Algernon",
      "AUTHORS": "Janet Clark",
      "SUBJECT": "Literary Criticism",
      "YEAR": 2001
    },
    {
      "SR_NO": 59,
      "TITLE": "Sammy Keyes and the Kiss Goodbye",
      "AUTHORS": "Wendelin Van Draanen",
      "SUBJECT": "Juvenile Fiction",
      "YEAR": 2014
    },
    {
      "SR_NO": 60,
      "TITLE": "Sammy Keyes and the Psycho Kitty Queen",
      "AUTHORS": "Wendelin Van Draanen",
      "SUBJECT": "Juvenile Fiction",
      "YEAR": 2008
    },
    {
      "SR_NO": 61,
      "TITLE": "Sammy Keyes and the Art of Deception",
      "AUTHORS": "Wendelin Van Draanen",
      "SUBJECT": "Juvenile Fiction",
      "YEAR": 2009
    },
    {
      "SR_NO": 62,
      "TITLE": "Sammy Keyes and the Search for Snake Eyes",
      "AUTHORS": "Wendelin Van Draanen",
      "SUBJECT": "Juvenile Fiction",
      "YEAR": 2008
    },
    {
      "SR_NO": 63,
      "TITLE": "Caii Spectrum Or Dr. Keyes's Charge Against Dr. M -- [i.e. Dr. Richard Mead]",
      "AUTHORS": "John Caius (Spirit)",
      "SUBJECT": "Communicable diseases",
      "YEAR": 1904
    },
    {
      "SR_NO": 64,
      "TITLE": "Chicano School Failure and Success",
      "AUTHORS": "Richard R. Valencia",
      "SUBJECT": "Education",
      "YEAR": 1905
    },
    {
      "SR_NO": 65,
      "TITLE": "The Politics of Hispanic Education",
      "AUTHORS": "Kenneth J. Meier', 'Joseph Stewart",
      "SUBJECT": "Education",
      "YEAR": 1991
    },
    {
      "SR_NO": 66,
      "TITLE": "Linguistic Diversity and National Unity",
      "AUTHORS": "William A. Smalley",
      "SUBJECT": "Foreign Language Study",
      "YEAR": 1994
    },
    {
      "SR_NO": 67,
      "TITLE": "Synergic Integration of Formal and Informal E-Learning Environments for Adult Lifelong Learners",
      "AUTHORS": "Leone, Sabrina",
      "SUBJECT": "Education",
      "YEAR": 2013
    },
    {
      "SR_NO": 68,
      "TITLE": "Race and Education, 1954-2007",
      "AUTHORS": "Raymond Wolters",
      "SUBJECT": "Education",
      "YEAR": 1905
    },
    {
      "SR_NO": 69,
      "TITLE": "Wade Keyes' introductory lecture to the Montgomery Law School",
      "AUTHORS": "David I. Durham', 'Wade Keyes', 'Paul M. Pruitt",
      "SUBJECT": "Law",
      "YEAR": 1905
    },
    {
      "SR_NO": 70,
      "TITLE": "Education and the Cult of Efficiency",
      "AUTHORS": "Raymond E. Callahan",
      "SUBJECT": "Education",
      "YEAR": 1964
    },
    {
      "SR_NO": 71,
      "TITLE": "Readings on Equal Education",
      "AUTHORS": "Abbas Tashakkori', 'Salvador Hector Ochoa",
      "SUBJECT": "Socially handicapped children",
      "YEAR": 1905
    },
    {
      "SR_NO": 72,
      "TITLE": "American Predator",
      "AUTHORS": "Maureen Callahan",
      "SUBJECT": "True Crime",
      "YEAR": 2019
    },
    {
      "SR_NO": 73,
      "TITLE": "Kill Rommel!",
      "AUTHORS": "Gavin Mortimer",
      "SUBJECT": "History",
      "YEAR": 2014
    },
    {
      "SR_NO": 74,
      "TITLE": "Murder in Hollywood",
      "AUTHORS": "Charles Higham",
      "SUBJECT": "Biography & Autobiography",
      "YEAR": 2006
    },
    {
      "SR_NO": 75,
      "TITLE": "Wisconsin magazine of history",
      "AUTHORS": "State Historical Society of Wisconsin",
      "SUBJECT": "Wisconsin",
      "YEAR": 1905
    },
    {
      "SR_NO": 76,
      "TITLE": "New Evidence on School Desegregation",
      "AUTHORS": "Finis Welch",
      "SUBJECT": "African Americans",
      "YEAR": 1905
    },
    {
      "SR_NO": 77,
      "TITLE": "Brunswick",
      "AUTHORS": "Sharon Martin Zankel",
      "SUBJECT": "History",
      "YEAR": 1998
    },
    {
      "SR_NO": 78,
      "TITLE": "Downstage Dead",
      "AUTHORS": "Bruce Barber",
      "SUBJECT": "Actors",
      "YEAR": 2007
    },
    {
      "SR_NO": 79,
      "TITLE": "School as Community",
      "AUTHORS": "Gail Furman",
      "SUBJECT": "Education",
      "YEAR": 2012
    },
    {
      "SR_NO": 80,
      "TITLE": "Euphemania",
      "AUTHORS": "Ralph Keyes",
      "SUBJECT": "Language Arts & Disciplines",
      "YEAR": 2010
    },
    {
      "SR_NO": 81,
      "TITLE": "Complex Justice",
      "AUTHORS": "Joshua M. Dunn",
      "SUBJECT": "Political Science",
      "YEAR": 2012
    },
    {
      "SR_NO": 82,
      "TITLE": "Five Miles Away, A World Apart",
      "AUTHORS": "James E. Ryan",
      "SUBJECT": "Education",
      "YEAR": 2010
    },
    {
      "SR_NO": 83,
      "TITLE": "Learning Disabilities",
      "AUTHORS": "William M. Cruickshank', 'William C. Morse', 'Jeannie Johns",
      "SUBJECT": "Education",
      "YEAR": 1980
    },
    {
      "SR_NO": 84,
      "TITLE": "California's Charter Schools",
      "AUTHORS": "California. Bureau of State Audits",
      "SUBJECT": "Charter schools",
      "YEAR": 1905
    },
    {
      "SR_NO": 85,
      "TITLE": "America in Black and White",
      "AUTHORS": "Stephan Thernstrom', 'Abigail Thernstrom",
      "SUBJECT": "Social Science",
      "YEAR": 2009
    },
    {
      "SR_NO": 86,
      "TITLE": "Fifth International Symposium on Domain Decomposition Methods for Partial Differential Equations",
      "AUTHORS": "David E. Keyes",
      "SUBJECT": "Mathematics",
      "YEAR": 1992
    },
    {
      "SR_NO": 87,
      "TITLE": "A University of Tradition",
      "AUTHORS": "Purdue Reamer Club",
      "SUBJECT": "Education",
      "YEAR": 2010
    },
    {
      "SR_NO": 88,
      "TITLE": "Biology of the Uterus",
      "AUTHORS": "W. Jollie', 'R.M. Wynn",
      "SUBJECT": "Medical",
      "YEAR": 2013
    },
    {
      "SR_NO": 89,
      "TITLE": "Prophets of Agroforestry",
      "AUTHORS": "Richard K. Reed",
      "SUBJECT": "History",
      "YEAR": 2014
    },
    {
      "SR_NO": 90,
      "TITLE": "Periodontal Disease, Assessing the Effectiveness and Costs of the Keyes Technique",
      "AUTHORS": "Richard M. Scheffler",
      "SUBJECT": "Medical instruments and apparatus",
      "YEAR": 1905
    },
    {
      "SR_NO": 91,
      "TITLE": "Advances in Experimental Medicine and Biology",
      "AUTHORS": "Constance Kies",
      "SUBJECT": "Biology",
      "YEAR": 1905
    },
    {
      "SR_NO": 92,
      "TITLE": "Biology and Pathology of the Oocyte",
      "AUTHORS": "Alan O. Trounson', 'Roger G. Gosden",
      "SUBJECT": "Medical",
      "YEAR": 2003
    },
    {
      "SR_NO": 93,
      "TITLE": "Human Biology",
      "AUTHORS": "Sara Stinson', 'Barry Bogin', \"Dennis H. O'Rourke\"]",
      "SUBJECT": "Social Science",
      "YEAR": 2012
    },
    {
      "SR_NO": 94,
      "TITLE": "Quarterly Report",
      "AUTHORS": "Northwest and Alaska Fisheries Center (U.S.)",
      "SUBJECT": "Fisheries",
      "YEAR": 1905
    },
    {
      "SR_NO": 95,
      "TITLE": "The Anatomy of Hope",
      "AUTHORS": "Jerome Groopman",
      "SUBJECT": "Health & Fitness",
      "YEAR": 2003
    },
    {
      "SR_NO": 96,
      "TITLE": "The Journal of the American Medical Association",
      "AUTHORS": "American Medical Association",
      "SUBJECT": "American Medical Association",
      "YEAR": 1905
    },
    {
      "SR_NO": 97,
      "TITLE": "Bioethical and Evolutionary Approaches to Medicine and the Law",
      "AUTHORS": "W. Noel Keyes",
      "SUBJECT": "Medical",
      "YEAR": 1905
    },
    {
      "SR_NO": 98,
      "TITLE": "Official Gazette of the United States Patent Office",
      "AUTHORS": "United States. Patent Office",
      "SUBJECT": "Patents",
      "YEAR": 1905
    },
    {
      "SR_NO": 99,
      "TITLE": "Directory ... American College of Physicians",
      "AUTHORS": "American College of Physicians",
      "SUBJECT": "Medicine",
      "YEAR": 1905
    },
    {
      "SR_NO": 100,
      "TITLE": "The Azusa Street Mission and Revival",
      "AUTHORS": "Cecil M. Robeck",
      "SUBJECT": "History",
      "YEAR": 2006
    },
    {
      "SR_NO": 101,
      "TITLE": "Directory",
      "AUTHORS": "American College of Physicians",
      "SUBJECT": "Medicine",
      "YEAR": 1905
    },
    {
      "SR_NO": 102,
      "TITLE": "Sport, the Third Millennium",
      "AUTHORS": "Fernand Landry', 'Marc Landry', 'Magdeleine YerlÃ¨s', 'International Olympic Committee",
      "SUBJECT": "Mass media and sports",
      "YEAR": 1905
    },
    {
      "SR_NO": 103,
      "TITLE": "Casenote Legal Briefs for Sports Law, Keyed to Weiler, Roberts, Abrams, and Ross",
      "AUTHORS": "Casenote Legal Briefs",
      "SUBJECT": "Law",
      "YEAR": 2011
    },
    {
      "SR_NO": 104,
      "TITLE": "Women, Sport, and Physical Activity",
      "AUTHORS": "Helen Lenskyj",
      "SUBJECT": "Feminist criticism",
      "YEAR": 1905
    },
    {
      "SR_NO": 105,
      "TITLE": "A Concise history of sport in Canada",
      "AUTHORS": "Don Morrow",
      "SUBJECT": "History",
      "YEAR": 1989
    },
    {
      "SR_NO": 106,
      "TITLE": "Biography and Genealogy Master Index 2003",
      "AUTHORS": "Kathy Nemeh",
      "SUBJECT": "Reference",
      "YEAR": 2010
    },
    {
      "SR_NO": 107,
      "TITLE": "Sams Teach Yourself Perl in 21 Days",
      "AUTHORS": "Laura Lemay', 'Rafe Colburn', 'Richard Colburn",
      "SUBJECT": "Computers",
      "YEAR": 1905
    },
    {
      "SR_NO": 108,
      "TITLE": "Sammy Keyes and the Psycho Kitty Queen",
      "AUTHORS": "Wendelin Van Draanen",
      "SUBJECT": "Juvenile Fiction",
      "YEAR": 2008
    },
    {
      "SR_NO": 109,
      "TITLE": "Casenote Legal Briefs for Taxation, Keyed to Freeland, Lathrope, and Stephens",
      "AUTHORS": "Casenote Legal Briefs",
      "SUBJECT": "Law",
      "YEAR": 2013
    },
    {
      "SR_NO": 110,
      "TITLE": "The Mystery of Sex",
      "AUTHORS": "Elizabeth Keyes",
      "SUBJECT": "Love",
      "YEAR": 1905
    },
    {
      "SR_NO": 111,
      "TITLE": "Delirium",
      "AUTHORS": "Nancy L. Cohen",
      "SUBJECT": "Political Science",
      "YEAR": 2012
    },
    {
      "SR_NO": 112,
      "TITLE": "American Movie Critics",
      "AUTHORS": "Phillip Lopate",
      "SUBJECT": "Performing Arts",
      "YEAR": 1905
    },
    {
      "SR_NO": 113,
      "TITLE": "The International Encyclopedia of Sexuality: Spain to the United States",
      "AUTHORS": "Robert T. Francoeur",
      "SUBJECT": "Psychology",
      "YEAR": 1905
    },
    {
      "SR_NO": 114,
      "TITLE": "CliffsNotes on Keyes' Flowers For Algernon",
      "AUTHORS": "Janet Clark",
      "SUBJECT": "Literary Criticism",
      "YEAR": 2001
    },
    {
      "SR_NO": 115,
      "TITLE": "Family Law, Keyed to Ellman, Kurtz, & Barlett",
      "AUTHORS": "Casenotes",
      "SUBJECT": "Law",
      "YEAR": 2005
    },
    {
      "SR_NO": 116,
      "TITLE": "Casenote Legal Briefs for Property Keyed to Dukeminier, Krier, Alexander, Schill, Strahilevitz",
      "AUTHORS": "Casenote Legal Briefs",
      "SUBJECT": "Law",
      "YEAR": 2017
    },
    {
      "SR_NO": 117,
      "TITLE": "Family Law, Keyed to Krause, Elrod, Garrison & Oldham",
      "AUTHORS": "Casenotes",
      "SUBJECT": "Law",
      "YEAR": 2004
    },
    {
      "SR_NO": 118,
      "TITLE": "Family Law, Keyed to Weisberg and Appleton's",
      "AUTHORS": "Casenotes', 'Casenote Legal Briefs",
      "SUBJECT": "Law",
      "YEAR": 2010
    },
    {
      "SR_NO": 119,
      "TITLE": "Brain Mystery Light and Dark",
      "AUTHORS": "Charles Don Keyes",
      "SUBJECT": "Philosophy",
      "YEAR": 2006
    },
    {
      "SR_NO": 120,
      "TITLE": "The Tryals and Condemnation of Robert Charnock, Edward King, and Thomas Keyes, for the Horrid and Execrable Conspiracy to Assassinate His Sacred Majesty K. William, in Order to a French Invasion of this Kingdom",
      "AUTHORS": "Robert Charnock",
      "SUBJECT": "Lancashire Plot, 1689-1694",
      "YEAR": 1904
    },
    {
      "SR_NO": 121,
      "TITLE": "Adult Development and Aging",
      "AUTHORS": "John C. Cavanaugh', 'Fredda Blanchard-Fields",
      "SUBJECT": "Psychology",
      "YEAR": 2010
    },
    {
      "SR_NO": 122,
      "TITLE": "Saved by Cake",
      "AUTHORS": "Marian Keyes",
      "SUBJECT": "Cooking",
      "YEAR": 2013
    },
    {
      "SR_NO": 123,
      "TITLE": "Science and the Riddle of Consciousness",
      "AUTHORS": "Jeffrey Foss",
      "SUBJECT": "Computers",
      "YEAR": 2000
    },
    {
      "SR_NO": 124,
      "TITLE": "Sammy Keyes and the Art of Deception",
      "AUTHORS": "Wendelin Van Draanen",
      "SUBJECT": "Juvenile Fiction",
      "YEAR": 2009
    },
    {
      "SR_NO": 125,
      "TITLE": "Sammy Keyes and the Search for Snake Eyes",
      "AUTHORS": "Wendelin Van Draanen",
      "SUBJECT": "Juvenile Fiction",
      "YEAR": 2008
    },
    {
      "SR_NO": 126,
      "TITLE": "Environmental Law, Keyed to Plater, Abrams, Goldfarb, Graham, Heinzerling & Wirth",
      "AUTHORS": "Casenotes",
      "SUBJECT": "Law",
      "YEAR": 1905
    },
    {
      "SR_NO": 127,
      "TITLE": "Handbook of Midlife Development",
      "AUTHORS": "Margie E. Lachman",
      "SUBJECT": "Psychology",
      "YEAR": 2002
    },
    {
      "SR_NO": 128,
      "TITLE": "Textbook of Operative Dentistry",
      "AUTHORS": "Nisha Garg', 'Amit Garg",
      "SUBJECT": "Medical",
      "YEAR": 2010
    },
    {
      "SR_NO": 129,
      "TITLE": "Legacy Discovered",
      "AUTHORS": "Kerry Reis",
      "SUBJECT": "Fiction",
      "YEAR": 2010
    },
    {
      "SR_NO": 130,
      "TITLE": "Parasitic Orobanchaceae",
      "AUTHORS": "Daniel M. Joel', 'Jonathan Gressel', 'Lytton J. Musselman",
      "SUBJECT": "Science",
      "YEAR": 2013
    },
    {
      "SR_NO": 131,
      "TITLE": "Strategies and Saints",
      "AUTHORS": "Langley Carleton Keyes",
      "SUBJECT": "Social Science",
      "YEAR": 1992
    },
    {
      "SR_NO": 132,
      "TITLE": "The Handbook of Life-Span Development, Volume 1",
      "AUTHORS": "Richard M. Lerner', 'Willis F. Overton",
      "SUBJECT": "Psychology",
      "YEAR": 2010
    },
    {
      "SR_NO": 133,
      "TITLE": "Journal of the Iowa Archeological Society",
      "AUTHORS": "Iowa Archeological Society",
      "SUBJECT": "Indians of North America",
      "YEAR": 1905
    },
    {
      "SR_NO": 134,
      "TITLE": "Oxford English-Arabic Dictionary, Al-Muhit, 1996",
      "AUTHORS": "Dr. Mohamad Badawi",
      "SUBJECT": "Reference",
      "YEAR": 1996
    },
    {
      "SR_NO": 135,
      "TITLE": "Al-Muhit-English-Arabic Oxford Study Dictionary, Dr. Mohamad Badawi, 1996",
      "AUTHORS": "Academia Internatinal Publication",
      "SUBJECT": "Reference",
      "YEAR": 1996
    },
    {
      "SR_NO": 136,
      "TITLE": "English-Arabic Oxford-Duden Pictorial Dictionary, 2003",
      "AUTHORS": "Oxford University Press",
      "SUBJECT": "Reference",
      "YEAR": 2003
    },
    {
      "SR_NO": 137,
      "TITLE": "Get Rommel",
      "AUTHORS": "Michael Asher",
      "SUBJECT": "History",
      "YEAR": 2011
    },
    {
      "SR_NO": 138,
      "TITLE": "Mastering Arabic 1",
      "AUTHORS": "Jane Wightwick', 'Mahmoud Gaafar",
      "SUBJECT": "Foreign Language Study",
      "YEAR": 2007
    },
    {
      "SR_NO": 139,
      "TITLE": "Arabic Musical Scales",
      "AUTHORS": "Cameron Powers",
      "SUBJECT": "Music",
      "YEAR": 1905
    },
    {
      "SR_NO": 140,
      "TITLE": "Advanced standard Arabic through authentic texts and audiovisual materials: Audiovisual materials",
      "AUTHORS": "Raji M. Rammuny",
      "SUBJECT": "Foreign Language Study",
      "YEAR": 1905
    },
    {
      "SR_NO": 141,
      "TITLE": "Ø§Ù„Ù„ØºØ© Ø§Ù„Ø¹Ø±Ø¨ÙŠØ© Ù„Ù„Ù…Ø±Ø§Ø­Ù„ Ø§Ù„Ù…ØªÙ‚Ø¯Ù…Ø© Ù…Ù† Ø®Ù„Ø§Ù„ Ù†ØµÙˆØµ ÙˆÙ…ÙˆØ§Ø¯ Ø³Ù…Ø¹ÙŠØ© Ø¨ØµØ±ÙŠØ© Ø£ØµÙŠÙ„Ø©",
      "AUTHORS": "Raji M. Rammuny",
      "SUBJECT": "Foreign Language Study",
      "YEAR": 1905
    },
    {
      "SR_NO": 142,
      "TITLE": "Geoffrey Keyes",
      "AUTHORS": "Elizabeth Keyes",
      "SUBJECT": "History",
      "YEAR": 1905
    },
    {
      "SR_NO": 143,
      "TITLE": "ØµØºØ± Ø¹Ù‚Ù„Ùƒ",
      "AUTHORS": "Ù…Ø¹ØªØ² Ù…Ø´Ø¹Ù„",
      "SUBJECT": "Body, Mind & Spirit",
      "YEAR": 2019
    },
    {
      "SR_NO": 144,
      "TITLE": "Ø¯Ø¹ Ø§Ù„Ù‚Ù„Ù‚ ÙˆØ§Ø¨Ø¯Ø£ Ø§Ù„Ø­ÙŠØ§Ø©",
      "AUTHORS": "Ø¯ÙŠÙ„ ÙƒØ§Ø±Ù†ÙŠØ¬ÙŠ",
      "SUBJECT": "Psychology",
      "YEAR": 2019
    },
    {
      "SR_NO": 145,
      "TITLE": "ÙƒÙŠÙ Ø£ØµØ¨Ø­ÙˆØ§ Ø¹Ø¸Ù…Ø§Ø¡",
      "AUTHORS": "Ø³Ø¹Ø¯ Ø³Ø¹ÙˆØ¯ Ø§Ù„ÙƒØ±ÙŠØ¨Ø§Ù†ÙŠ",
      "SUBJECT": "Self-Help",
      "YEAR": 2015
    },
    {
      "SR_NO": 146,
      "TITLE": "Ù¡Ù Ù¡ Ø·Ø±ÙŠÙ‚Ø© Ø¨Ø³ÙŠØ·Ø© Ù„ØªÙƒÙˆÙ† Ù†Ø§Ø¬Ø­Ù‹Ø§ Ù…Ø¹ Ù†ÙØ³Ùƒ",
      "AUTHORS": "Donna Watson",
      "SUBJECT": "Self-Help",
      "YEAR": 2014
    },
    {
      "SR_NO": 147,
      "TITLE": "Ø§Ù„Ø«Ù‚Ø© Ø¨Ø§Ù„Ù†ÙØ³ ÙˆØªØ·ÙˆÙŠØ± Ø§Ù„Ø°Ø§Øª",
      "AUTHORS": "Ø£Ø³Ø§Ù…Ø© Ø´Ø§Ù‡ÙŠÙ†",
      "SUBJECT": "Psychology",
      "YEAR": 2018
    },
    {
      "SR_NO": 148,
      "TITLE": "ÙÙ† ÙˆØ£Ø³Ø±Ø§Ø± Ø§ØªØ®Ø§Ø° Ø§Ù„Ù‚Ø±Ø§Ø±",
      "AUTHORS": "Ø¯. Ø¥Ø¨Ø±Ø§Ù‡ÙŠÙ… Ø§Ù„ÙÙ‚ÙŠ",
      "SUBJECT": "Self-Help",
      "YEAR": 2017
    },
    {
      "SR_NO": 149,
      "TITLE": "Ø¯Ø±Ø§Ø³Ø§Øª Ø³ÙŠÙƒÙ„ÙˆØ¬ÙŠØ©",
      "AUTHORS": "Ø³Ù„Ø§Ù…Ø© Ù…ÙˆØ³Ù‰/-/-",
      "SUBJECT": "Literary Collections",
      "YEAR": 2012
    },
    {
      "SR_NO": 150,
      "TITLE": "Ù‚ÙˆØ© Ø§Ù„ØªØ­ÙƒÙ… ÙÙŠ Ø§Ù„Ø°Ø§Øª",
      "AUTHORS": "Ø¯. Ø¥Ø¨Ø±Ø§Ù‡ÙŠÙ… Ø§Ù„ÙÙ‚ÙŠ', 'Ø§Ø¨Ø±Ø§Ù‡ÙŠÙ… Ø§Ù„ÙÙ‚Ù‰",
      "SUBJECT": "Self-Help",
      "YEAR": 2017
    },
    {
      "SR_NO": 151,
      "TITLE": "Advances in Chemical Physics",
      "AUTHORS": "Ilya Prigogine', 'Stuart A. Rice",
      "SUBJECT": "Science",
      "YEAR": 2009
    },
    {
      "SR_NO": 152,
      "TITLE": "Advances in Imaging and Electron Physics",
      "AUTHORS": "Peter W. Hawkes",
      "SUBJECT": "Technology & Engineering",
      "YEAR": 2011
    },
    {
      "SR_NO": 153,
      "TITLE": "The physics of VLSI systems",
      "AUTHORS": "Robert W. Keyes",
      "SUBJECT": "Computers",
      "YEAR": 1905
    },
    {
      "SR_NO": 154,
      "TITLE": "American men & women of science",
      "AUTHORS": "Jaques Cattell Press', 'R.R. Bowker Company",
      "SUBJECT": "Biography & Autobiography",
      "YEAR": 1977
    },
    {
      "SR_NO": 155,
      "TITLE": "The Complete Guide to Blender Graphics",
      "AUTHORS": "John M. Blain",
      "SUBJECT": "Computers",
      "YEAR": 2019
    },
    {
      "SR_NO": 156,
      "TITLE": "The world of learning, 2001",
      "AUTHORS": "51st Ed",
      "SUBJECT": "Education",
      "YEAR": 2000
    },
    {
      "SR_NO": 157,
      "TITLE": "The Europa world of learning",
      "AUTHORS": "Driss Fatih",
      "SUBJECT": "Education",
      "YEAR": 1905
    },
    {
      "SR_NO": 158,
      "TITLE": "A Survey of American Chemistry",
      "AUTHORS": "National Research Council (U.S.). Division of Chemistry and Chemical Technology",
      "SUBJECT": "Chemistry",
      "YEAR": 1905
    },
    {
      "SR_NO": 159,
      "TITLE": "Annual Report for Fiscal Year ...",
      "AUTHORS": "National Science Foundation (U.S.)",
      "SUBJECT": "Research",
      "YEAR": 1905
    },
    {
      "SR_NO": 160,
      "TITLE": "Biographical Memoirs",
      "AUTHORS": "National Academy of Sciences', 'Office of the Home Secretary",
      "SUBJECT": "Biography & Autobiography",
      "YEAR": 1998
    },
    {
      "SR_NO": 161,
      "TITLE": "Organic Chemistry, Volume One",
      "AUTHORS": "Frank C. Whitmore",
      "SUBJECT": "Science",
      "YEAR": 2012
    },
    {
      "SR_NO": 162,
      "TITLE": "Imperfect Chemistry",
      "AUTHORS": "Mary Frame",
      "SUBJECT": "Fiction",
      "YEAR": 2014
    },
    {
      "SR_NO": 163,
      "TITLE": "Sammy Keyes and the Psycho Kitty Queen",
      "AUTHORS": "Wendelin Van Draanen",
      "SUBJECT": "Juvenile Fiction",
      "YEAR": 2008
    },
    {
      "SR_NO": 164,
      "TITLE": "Commencement[programme]",
      "AUTHORS": "University of California, Berkeley",
      "SUBJECT": "Dissertations, Academic",
      "YEAR": 1905
    },
    {
      "SR_NO": 165,
      "TITLE": "Academic Press Dictionary of Science and Technology",
      "AUTHORS": "Christopher G. Morris', 'Academic Press",
      "SUBJECT": "Computers",
      "YEAR": 1905
    },
    {
      "SR_NO": 166,
      "TITLE": "The Quality Management Sourcebook",
      "AUTHORS": "Christine Avery', 'Diane Zabel",
      "SUBJECT": "Business & Economics",
      "YEAR": 2002
    },
    {
      "SR_NO": 167,
      "TITLE": "Software Engineering Handbook",
      "AUTHORS": "Jessica Keyes",
      "SUBJECT": "Computers",
      "YEAR": 2002
    },
    {
      "SR_NO": 168,
      "TITLE": "A Survey of American Chemistry",
      "AUTHORS": "National Research Council (U.S.). Division of Chemistry and Chemical Technology",
      "SUBJECT": "Chemistry",
      "YEAR": 1905
    },
    {
      "SR_NO": 169,
      "TITLE": "Handbook of Social Indicators and Quality of Life Research",
      "AUTHORS": "Kenneth C. Land', 'Alex C. Michalos', 'M. Joseph Sirgy",
      "SUBJECT": "Social Science",
      "YEAR": 2011
    },
    {
      "SR_NO": 170,
      "TITLE": "The Woman Who Stole My Life",
      "AUTHORS": "Marian Keyes",
      "SUBJECT": "Fiction",
      "YEAR": 2014
    },
    {
      "SR_NO": 171,
      "TITLE": "The life of Elisha Williams Keyes",
      "AUTHORS": "Richard Watson Hantke",
      "SUBJECT": "Biography & Autobiography",
      "YEAR": 1905
    },
    {
      "SR_NO": 172,
      "TITLE": "Stevie Wonder's Songs in the Key of Life",
      "AUTHORS": "Zeth Lundy",
      "SUBJECT": "Music",
      "YEAR": 2007
    },
    {
      "SR_NO": 173,
      "TITLE": "Key Notes of Health and a Century of Life",
      "AUTHORS": "Charles Winfield Scott",
      "SUBJECT": "Hygiene",
      "YEAR": 1905
    },
    {
      "SR_NO": 174,
      "TITLE": "Growing Through Life's Challenges",
      "AUTHORS": "James Reapsome', 'Martha Reapsome",
      "SUBJECT": "Religion",
      "YEAR": 2009
    },
    {
      "SR_NO": 175,
      "TITLE": "Handbook of Adolescent Psychology, Individual Bases of Adolescent Development",
      "AUTHORS": "Richard M. Lerner', 'Laurence Steinberg, PhD",
      "SUBJECT": "Psychology",
      "YEAR": 1905
    },
    {
      "SR_NO": 176,
      "TITLE": "A Critical Dictionary of English Literature and British and American Authors, Living and Deceased",
      "AUTHORS": "Samuel Austin Allibone",
      "SUBJECT": "American literature",
      "YEAR": 1905
    },
    {
      "SR_NO": 177,
      "TITLE": "The Post-Truth Era",
      "AUTHORS": "Ralph Keyes",
      "SUBJECT": "Social Science",
      "YEAR": 2004
    },
    {
      "SR_NO": 178,
      "TITLE": "The early life of Robert M. La Follette, 1855-1884",
      "AUTHORS": "David Paul Thelen",
      "SUBJECT": "History",
      "YEAR": 1905
    },
    {
      "SR_NO": 179,
      "TITLE": "Academic Press Dictionary of Science and Technology",
      "AUTHORS": "Christopher G. Morris', 'Academic Press",
      "SUBJECT": "Computers",
      "YEAR": 1905
    },
    {
      "SR_NO": 180,
      "TITLE": "Data Science on the Google Cloud Platform",
      "AUTHORS": "Valliappa Lakshmanan",
      "SUBJECT": "Computers",
      "YEAR": 2017
    },
    {
      "SR_NO": 181,
      "TITLE": "The Oxford Handbook of Research Strategies for Clinical Psychology",
      "AUTHORS": "Jonathan S. Comer', 'Philip C. Kendall",
      "SUBJECT": "Psychology",
      "YEAR": 2013
    },
    {
      "SR_NO": 182,
      "TITLE": "Data Science and Knowledge Engineering for Sensing Decision Support",
      "AUTHORS": "Jun Liu', 'Jie Lu', 'Yang Xu', 'Luis Martinez', 'Etienne E Kerre",
      "SUBJECT": "Computers",
      "YEAR": 2018
    },
    {
      "SR_NO": 183,
      "TITLE": "Business data processing",
      "AUTHORS": "Elias M. Awad",
      "SUBJECT": "Computers",
      "YEAR": 1974
    },
    {
      "SR_NO": 184,
      "TITLE": "Cryptographic Hardware and Embedded Systems â€“ CHES 2008",
      "AUTHORS": "Elisabeth Oswald",
      "SUBJECT": "Computers",
      "YEAR": 2008
    },
    {
      "SR_NO": 185,
      "TITLE": "The Biblical Basis for Modern Science",
      "AUTHORS": "Dr. Henry M. Morris",
      "SUBJECT": "Religion",
      "YEAR": 2002
    },
    {
      "SR_NO": 186,
      "TITLE": "Carpentry and joinery",
      "AUTHORS": "Pearson Education",
      "SUBJECT": "Carpentry",
      "YEAR": 1905
    },
    {
      "SR_NO": 187,
      "TITLE": "Retail Crime, Security, and Loss Prevention",
      "AUTHORS": "Charles A. Sennewald', 'John H. Christman",
      "SUBJECT": "Social Science",
      "YEAR": 2011
    },
    {
      "SR_NO": 188,
      "TITLE": "Symposium on Electronics Maintenance",
      "AUTHORS": "United States. Office of the Assistant Secretary of Defense (Research and Development) ADVISORY PANEL ON PERSONNEL AND TRAINING RESEARCH",
      "SUBJECT": "Electronic apparatus and appliances",
      "YEAR": 1905
    },
    {
      "SR_NO": 189,
      "TITLE": "Selected Areas in Cryptography -- SAC 2013",
      "AUTHORS": "Tanja Lange', 'Kristin Lauter', 'Petr LisonÄ›k",
      "SUBJECT": "Computers",
      "YEAR": 2014
    },
    {
      "SR_NO": 190,
      "TITLE": "Modern Concepts of Security",
      "AUTHORS": "James Ohwofasa Akpeninor",
      "SUBJECT": "Philosophy",
      "YEAR": 2012
    },
    {
      "SR_NO": 191,
      "TITLE": "Building Security Standards",
      "AUTHORS": "Donald R. Hughes', 'Gary R. Cooper', \"California. Attorney General's Building Security Commission\"]",
      "SUBJECT": "Burglary protection",
      "YEAR": 1905
    },
    {
      "SR_NO": 192,
      "TITLE": "Fifty Years' Observations of Men and Events, Civil and Military",
      "AUTHORS": "Erasmus Darwin Keyes",
      "SUBJECT": "Fair Oaks (Henrico County, Va.), Battle of, 1862",
      "YEAR": 1905
    },
    {
      "SR_NO": 193,
      "TITLE": "Emanuel Law Outlines for Civil Procedure, Keyed to Yeazell",
      "AUTHORS": "John T. Cross",
      "SUBJECT": "Law",
      "YEAR": 2016
    },
    {
      "SR_NO": 194,
      "TITLE": "Civil Procedure",
      "AUTHORS": "Casenotes', 'Casenote Legal Briefs",
      "SUBJECT": "Law",
      "YEAR": 2010
    },
    {
      "SR_NO": 195,
      "TITLE": "Casenote Legal Briefs for Civil Procedure, Keyed to Friedenthal, Miller, Sexton, and Hershkoff",
      "AUTHORS": "Casenote Legal Briefs",
      "SUBJECT": "Law",
      "YEAR": 2018
    },
    {
      "SR_NO": 196,
      "TITLE": "Casenote Legal Briefs for Civil Procedure Keyed to Hazard, Tait, Fletcher and Bundy",
      "AUTHORS": "Casenote Legal Briefs",
      "SUBJECT": "Law",
      "YEAR": 2010
    },
    {
      "SR_NO": 197,
      "TITLE": "Casenote Legal Briefs for Civil Procedure Keyed to Subrin, Minow, Brodin, Main, and Lahav",
      "AUTHORS": "Casenote Legal Briefs",
      "SUBJECT": "Law",
      "YEAR": 2016
    },
    {
      "SR_NO": 198,
      "TITLE": "Casenote Legal Briefs for Civil Procedure, Keyed to Yeazell and Schwartz",
      "AUTHORS": "Casenote Legal Briefs",
      "SUBJECT": "Law",
      "YEAR": 2019
    },
    {
      "SR_NO": 199,
      "TITLE": "Proceedings of the Second International Conference on Computing in Civil Engineering, 5-9 June 1985, Hangzhou, China",
      "AUTHORS": "Zhao",
      "SUBJECT": "Technology & Engineering",
      "YEAR": 1905
    },
    {
      "SR_NO": 200,
      "TITLE": "A Bibliography of Florida: 1881-1899",
      "AUTHORS": "James Albert Servies', 'Lana D. Servies",
      "SUBJECT": "Catalogs, Union",
      "YEAR": 1905
    },
    {
      "SR_NO": 201,
      "TITLE": "Library of Congress Subject Headings",
      "AUTHORS": "Library of Congress. Cataloging Policy and Support Office",
      "SUBJECT": "Subject headings, Library of Congress",
      "YEAR": 1905
    },
    {
      "SR_NO": 202,
      "TITLE": "Rap Music and Street Consciousness",
      "AUTHORS": "Cheryl Lynette Keyes",
      "SUBJECT": "Music",
      "YEAR": 1905
    },
    {
      "SR_NO": 203,
      "TITLE": "That's the Joint!",
      "AUTHORS": "Murray Forman', 'Mark Anthony Neal",
      "SUBJECT": "Music",
      "YEAR": 2010
    },
    {
      "SR_NO": 204,
      "TITLE": "Sammy Keyes and the Kiss Goodbye",
      "AUTHORS": "Wendelin Van Draanen",
      "SUBJECT": "Juvenile Fiction",
      "YEAR": 2014
    },
    {
      "SR_NO": 205,
      "TITLE": "Tales From Boilermaker Country: A Collection of the Greatest Stories Ever Told",
      "AUTHORS": "Doug Griffiths",
      "SUBJECT": "Music",
      "YEAR": 2012
    },
    {
      "SR_NO": 206,
      "TITLE": "War Football",
      "AUTHORS": "Chris Serb",
      "SUBJECT": "Sports & Recreation",
      "YEAR": 2019
    },
    {
      "SR_NO": 207,
      "TITLE": "African Americans in Sports",
      "AUTHORS": "David K. Wiggins",
      "SUBJECT": "History",
      "YEAR": 2015
    },
    {
      "SR_NO": 208,
      "TITLE": "Black Champions of the Gridiron",
      "AUTHORS": "Andrew Sturgeon Young",
      "SUBJECT": "Football",
      "YEAR": 1905
    },
    {
      "SR_NO": 209,
      "TITLE": "Football's Most Wanted",
      "AUTHORS": "Floyd Conner",
      "SUBJECT": "Sports & Recreation",
      "YEAR": 1905
    },
    {
      "SR_NO": 210,
      "TITLE": "The USA TODAY College Football Encyclopedia 2008-2009",
      "AUTHORS": "Bob Boyles', 'Paul Guido",
      "SUBJECT": "Biography & Autobiography",
      "YEAR": 2008
    },
    {
      "SR_NO": 211,
      "TITLE": "ESPN college football encyclopedia",
      "AUTHORS": "Michael MacCambridge', 'ESPN (Television network)",
      "SUBJECT": "Reference",
      "YEAR": 2005
    },
    {
      "SR_NO": 212,
      "TITLE": "Casenote Legal Briefs for Sports Law, Keyed to Weiler, Roberts, Abrams, and Ross",
      "AUTHORS": "Casenote Legal Briefs",
      "SUBJECT": "Law",
      "YEAR": 2011
    },
    {
      "SR_NO": 213,
      "TITLE": "Casenote Legal Briefs for Taxation, Keyed to Freeland, Lathrope, and Stephens",
      "AUTHORS": "Casenote Legal Briefs",
      "SUBJECT": "Law",
      "YEAR": 2013
    },
    {
      "SR_NO": 214,
      "TITLE": "Casenote Legal Briefs for Torts, Keyed to Goldberg Sebok and Ziprusky",
      "AUTHORS": "Casenote Legal Briefs",
      "SUBJECT": "Law",
      "YEAR": 2016
    },
    {
      "SR_NO": 215,
      "TITLE": "Casenote Legal Briefs for Contracts, Keyed to Calamari, Periilo, Bender, and Brown",
      "AUTHORS": "Casenote Legal Briefs",
      "SUBJECT": "Law",
      "YEAR": 2011
    },
    {
      "SR_NO": 216,
      "TITLE": "Contracts",
      "AUTHORS": "Aspen Publishers",
      "SUBJECT": "Law",
      "YEAR": 2007
    },
    {
      "SR_NO": 217,
      "TITLE": "Higher Education Exchange 78/79",
      "AUTHORS": "Janet A. Mitchell",
      "SUBJECT": "Universities and colleges",
      "YEAR": 1905
    },
    {
      "SR_NO": 218,
      "TITLE": "A Multiple-continuous Offense for High School Basketball",
      "AUTHORS": "James Cathcart', 'Jim Cathcart",
      "SUBJECT": "Basketball",
      "YEAR": 1905
    },
    {
      "SR_NO": 219,
      "TITLE": "Century of American Savings Banks",
      "AUTHORS": "James Hilton Manning",
      "SUBJECT": "Savings banks",
      "YEAR": 1905
    },
    {
      "SR_NO": 220,
      "TITLE": "Best books on the stock market",
      "AUTHORS": "Sheldon Zerden",
      "SUBJECT": "Business & Economics",
      "YEAR": 1905
    },
    {
      "SR_NO": 221,
      "TITLE": "Cracks in My Foundation",
      "AUTHORS": "Marian Keyes",
      "SUBJECT": "Fiction",
      "YEAR": 2009
    },
    {
      "SR_NO": 222,
      "TITLE": "Corporate Giving Directory",
      "AUTHORS": "Verne Thompson",
      "SUBJECT": "Business & Economics",
      "YEAR": 2010
    },
    {
      "SR_NO": 223,
      "TITLE": "Text Processing in Python",
      "AUTHORS": "David Mertz",
      "SUBJECT": "Computers",
      "YEAR": 1905
    },
    {
      "SR_NO": 224,
      "TITLE": "Python in a Nutshell",
      "AUTHORS": "Alex Martelli",
      "SUBJECT": "Computers",
      "YEAR": 2006
    },
    {
      "SR_NO": 225,
      "TITLE": "Programming Python",
      "AUTHORS": "Mark Lutz",
      "SUBJECT": "Computers",
      "YEAR": 2010
    },
    {
      "SR_NO": 226,
      "TITLE": "Mastering Python for Networking and Security",
      "AUTHORS": "JosÃ© Manuel Ortega",
      "SUBJECT": "Computers",
      "YEAR": 2018
    },
    {
      "SR_NO": 227,
      "TITLE": "SAS Viya",
      "AUTHORS": "Kevin D. Smith', 'Xiangxiang Meng",
      "SUBJECT": "Computers",
      "YEAR": 2018
    },
    {
      "SR_NO": 228,
      "TITLE": "Python Essential Reference",
      "AUTHORS": "David Beazley",
      "SUBJECT": "Computers",
      "YEAR": 2009
    },
    {
      "SR_NO": 229,
      "TITLE": "Python Programming for Arduino",
      "AUTHORS": "Pratik Desai",
      "SUBJECT": "Computers",
      "YEAR": 2015
    },
    {
      "SR_NO": 230,
      "TITLE": "Effective Python",
      "AUTHORS": "Brett Slatkin",
      "SUBJECT": "Computers",
      "YEAR": 2015
    },
    {
      "SR_NO": 231,
      "TITLE": "Programming with Python",
      "AUTHORS": "Tim Altom",
      "SUBJECT": "Computers",
      "YEAR": 1905
    },
    {
      "SR_NO": 232,
      "TITLE": "Game Programming with Python, Lua, and Ruby",
      "AUTHORS": "Tom Gutschmidt",
      "SUBJECT": "Computers",
      "YEAR": 1905
    },
    {
      "SR_NO": 233,
      "TITLE": "Python Web Scraping Cookbook",
      "AUTHORS": "Michael Heydt",
      "SUBJECT": "Computers",
      "YEAR": 2018
    },
    {
      "SR_NO": 234,
      "TITLE": "Topics in Cryptology â€“ CT-RSA 2018",
      "AUTHORS": "Nigel P. Smart",
      "SUBJECT": "Computers",
      "YEAR": 2018
    },
    {
      "SR_NO": 235,
      "TITLE": "Python All-in-One For Dummies",
      "AUTHORS": "John Shovic', 'Alan Simpson",
      "SUBJECT": "Computers",
      "YEAR": 2019
    },
    {
      "SR_NO": 236,
      "TITLE": "Understanding the Interactive Digital Media Marketplace: Frameworks, Platforms, Communities and Issues",
      "AUTHORS": "Sharma, Ravi S.",
      "SUBJECT": "Computers",
      "YEAR": 2011
    },
    {
      "SR_NO": 237,
      "TITLE": "Enterprise 2.0",
      "AUTHORS": "Jessica Keyes",
      "SUBJECT": "Business & Economics",
      "YEAR": 2016
    },
    {
      "SR_NO": 238,
      "TITLE": "Academic Press Dictionary of Science and Technology",
      "AUTHORS": "Christopher G. Morris', 'Academic Press",
      "SUBJECT": "Computers",
      "YEAR": 1905
    },
    {
      "SR_NO": 239,
      "TITLE": "Programming Amazon Web Services",
      "AUTHORS": "James Murty",
      "SUBJECT": "Computers",
      "YEAR": 2008
    },
    {
      "SR_NO": 240,
      "TITLE": "Structured Programming with COBOL Examples",
      "AUTHORS": "Earl H. Parsons",
      "SUBJECT": "Computers",
      "YEAR": 2002
    },
    {
      "SR_NO": 241,
      "TITLE": "Planning a library building: the major steps",
      "AUTHORS": "American Library Association. Buildings Committee",
      "SUBJECT": "Architecture",
      "YEAR": 1905
    },
    {
      "SR_NO": 242,
      "TITLE": "Concurrent Programming on Windows",
      "AUTHORS": "Joe Duffy",
      "SUBJECT": "Computers",
      "YEAR": 2008
    },
    {
      "SR_NO": 243,
      "TITLE": "Modula-2 Programming",
      "AUTHORS": "B. J. Holmes",
      "SUBJECT": "Computers",
      "YEAR": 1905
    },
    {
      "SR_NO": 244,
      "TITLE": "Dictionary of Acronyms and Technical Abbreviations",
      "AUTHORS": "J. Vlietstra",
      "SUBJECT": "Computers",
      "YEAR": 2001
    },
    {
      "SR_NO": 245,
      "TITLE": "MOS databook",
      "AUTHORS": "National Semiconductor Corporation",
      "SUBJECT": "Technology & Engineering",
      "YEAR": 1905
    },
    {
      "SR_NO": 246,
      "TITLE": "Michigan Education Directory and Buyer's Guide",
      "AUTHORS": "Henry Romaine Pattengill",
      "SUBJECT": "Education",
      "YEAR": 1905
    },
    {
      "SR_NO": 247,
      "TITLE": "Solar Heating and Cooling Demonstration Act of 1974, Oversight Hearings",
      "AUTHORS": "Fusion Advisory Panel (U.S.)",
      "SUBJECT": "Solar air conditioning",
      "YEAR": 1905
    },
    {
      "SR_NO": 248,
      "TITLE": "Solar Heating and Cooling Demonstration Act of 1974, Oversight Hearings",
      "AUTHORS": "United States. Congress. House. Committee on Science and Technology. Subcommittee on Energy Research, Development, and Demonstration",
      "SUBJECT": "Solar air conditioning",
      "YEAR": 1905
    },
    {
      "SR_NO": 249,
      "TITLE": "Solar Home Heating and Cooling Demonstration Act",
      "AUTHORS": "United States. Congress. Senate. Committee on Banking, Housing, and Urban Affairs. Subcommittee on Housing and Urban Affairs",
      "SUBJECT": "Energy conservation",
      "YEAR": 1905
    },
    {
      "SR_NO": 250,
      "TITLE": "Consumer Handbook of Solar Energy for the United States and Canada",
      "AUTHORS": "John H. Keyes",
      "SUBJECT": "Solar energy",
      "YEAR": 1979
    },
    {
      "SR_NO": 251,
      "TITLE": "Disposal of brine by solar evaporation",
      "AUTHORS": "Conrad G. Keyes', 'United States. Office of Saline Water', 'New Mexico State University",
      "SUBJECT": "Technology & Engineering",
      "YEAR": 1905
    },
    {
      "SR_NO": 252,
      "TITLE": "Solar Energy in Developing Countries",
      "AUTHORS": "A. Eggers-Lura",
      "SUBJECT": "Developing countries",
      "YEAR": 2010
    },
    {
      "SR_NO": 253,
      "TITLE": "The Nature of Symbiotic Stars",
      "AUTHORS": "M. Friedjung', 'Roberto Viotti",
      "SUBJECT": "Science",
      "YEAR": 2012
    },
    {
      "SR_NO": 254,
      "TITLE": "Mineral Resources of Southwestern Oregon",
      "AUTHORS": "Joseph Silas Diller",
      "SUBJECT": "Geology",
      "YEAR": 1905
    },
    {
      "SR_NO": 255,
      "TITLE": "A Life of Barbara Stanwyck",
      "AUTHORS": "Victoria Wilson",
      "SUBJECT": "Biography & Autobiography",
      "YEAR": 2013
    },
    {
      "SR_NO": 256,
      "TITLE": "From the Dreadnought to Scapa Flow",
      "AUTHORS": "Arthur J Marder",
      "SUBJECT": "History",
      "YEAR": 2014
    },
    {
      "SR_NO": 257,
      "TITLE": "Sammy Keyes and the Art of Deception",
      "AUTHORS": "Wendelin Van Draanen",
      "SUBJECT": "Juvenile Fiction",
      "YEAR": 2009
    },
    {
      "SR_NO": 258,
      "TITLE": "Leonard Maltin's movie encyclopedia",
      "AUTHORS": "Leonard Maltin', 'Spencer Green', 'Luke Sader",
      "SUBJECT": "Biography & Autobiography",
      "YEAR": 1994
    },
    {
      "SR_NO": 259,
      "TITLE": "From the Dreadnought to Scapa Flow: Victory and aftermath",
      "AUTHORS": "Arthur Jacob Marder",
      "SUBJECT": "Great Britain",
      "YEAR": 1905
    },
    {
      "SR_NO": 260,
      "TITLE": "Black Champions of the Gridiron",
      "AUTHORS": "Andrew Sturgeon Young",
      "SUBJECT": "Football",
      "YEAR": 1905
    },
    {
      "SR_NO": 261,
      "TITLE": "Sammy Keyes and the Search for Snake Eyes",
      "AUTHORS": "Wendelin Van Draanen",
      "SUBJECT": "Juvenile Fiction",
      "YEAR": 2008
    },
    {
      "SR_NO": 262,
      "TITLE": "Indian Gaming Regulatory Act",
      "AUTHORS": "United States. Congress. Senate. Committee on Indian Affairs (1993- )",
      "SUBJECT": "Gambling on Indian reservations",
      "YEAR": 1905
    },
    {
      "SR_NO": 263,
      "TITLE": "The Eisenhowers",
      "AUTHORS": "Steve Neal",
      "SUBJECT": "Biography & Autobiography",
      "YEAR": 1905
    },
    {
      "SR_NO": 264,
      "TITLE": "Sammy Keyes and the Art of Deception",
      "AUTHORS": "Wendelin Van Draanen",
      "SUBJECT": "Juvenile Fiction",
      "YEAR": 2009
    },
    {
      "SR_NO": 265,
      "TITLE": "Sammy Keyes and the Psycho Kitty Queen",
      "AUTHORS": "Wendelin Van Draanen",
      "SUBJECT": "Juvenile Fiction",
      "YEAR": 2008
    },
    {
      "SR_NO": 266,
      "TITLE": "Sammy Keyes and the Sisters of Mercy",
      "AUTHORS": "Wendelin Van Draanen",
      "SUBJECT": "Juvenile Fiction",
      "YEAR": 2008
    },
    {
      "SR_NO": 267,
      "TITLE": "Enterprise 2.0",
      "AUTHORS": "Jessica Keyes",
      "SUBJECT": "Business & Economics",
      "YEAR": 2016
    },
    {
      "SR_NO": 268,
      "TITLE": "Sammy Keyes and the Wedding Crasher",
      "AUTHORS": "Wendelin Van Draanen",
      "SUBJECT": "Juvenile Fiction",
      "YEAR": 2010
    },
    {
      "SR_NO": 269,
      "TITLE": "The Keyes of the Kingdom of Heaven",
      "AUTHORS": "John Cotton",
      "SUBJECT": "Congregational churches",
      "YEAR": 1905
    },
    {
      "SR_NO": 270,
      "TITLE": "Who's who Among Students in American Universities and Colleges",
      "AUTHORS": "Henry Pettus Randall",
      "SUBJECT": "Students",
      "YEAR": 1905
    },
    {
      "SR_NO": 271,
      "TITLE": "Smart Phone and Next Generation Mobile Computing",
      "AUTHORS": "Pei Zheng', 'Lionel Ni",
      "SUBJECT": "Computers",
      "YEAR": 2010
    },
    {
      "SR_NO": 272,
      "TITLE": "Smartphones",
      "AUTHORS": "Mohammad Ilyas', 'Syed A. Ahson",
      "SUBJECT": "Technology & Engineering",
      "YEAR": 1905
    },
    {
      "SR_NO": 273,
      "TITLE": "Casenote Legal Briefs for Criminal Procedure Keyed to Dressler and Thomas",
      "AUTHORS": "Casenote Legal Briefs",
      "SUBJECT": "Law",
      "YEAR": 2017
    },
    {
      "SR_NO": 274,
      "TITLE": "The Complete Book of Locks and Locksmithing, Seventh Edition",
      "AUTHORS": "Bill Phillips",
      "SUBJECT": "Technology & Engineering",
      "YEAR": 2016
    },
    {
      "SR_NO": 275,
      "TITLE": "Casenote Legal Briefs for Contracts, Keyed to Knapp, Crystal, and Prince",
      "AUTHORS": "Casenote Legal Briefs",
      "SUBJECT": "Law",
      "YEAR": 2019
    },
    {
      "SR_NO": 276,
      "TITLE": "Sammy Keyes and the Art of Deception",
      "AUTHORS": "Wendelin Van Draanen",
      "SUBJECT": "Juvenile Fiction",
      "YEAR": 2009
    },
    {
      "SR_NO": 277,
      "TITLE": "Sammy Keyes and the Search for Snake Eyes",
      "AUTHORS": "Wendelin Van Draanen",
      "SUBJECT": "Juvenile Fiction",
      "YEAR": 2008
    },
    {
      "SR_NO": 278,
      "TITLE": "Politics in Pacific Asia",
      "AUTHORS": "X. Huang', 'Jason Young",
      "SUBJECT": "Political Science",
      "YEAR": 2016
    },
    {
      "SR_NO": 279,
      "TITLE": "Music, Education, and Religion",
      "AUTHORS": "Alexis Anja Kallio', 'Philip Alperson', 'Heidi Westerlund",
      "SUBJECT": "Music",
      "YEAR": 2019
    },
    {
      "SR_NO": 280,
      "TITLE": "Religious Commodifications in Asia",
      "AUTHORS": "Pattana Kitiarsa",
      "SUBJECT": "Religion",
      "YEAR": 2007
    },
    {
      "SR_NO": 281,
      "TITLE": "The Riddle of Barack Obama",
      "AUTHORS": "Avner Falk",
      "SUBJECT": "Biography & Autobiography",
      "YEAR": 1905
    },
    {
      "SR_NO": 282,
      "TITLE": "Asian Visions of Authority",
      "AUTHORS": "Joint Committee on Southeast Asia",
      "SUBJECT": "Religion",
      "YEAR": 1905
    },
    {
      "SR_NO": 283,
      "TITLE": "Arguing About Religion",
      "AUTHORS": "Kevin Timpe",
      "SUBJECT": "Religion",
      "YEAR": 2009
    },
    {
      "SR_NO": 284,
      "TITLE": "Readings in philosophy of religion",
      "AUTHORS": "Andrew Eshleman",
      "SUBJECT": "Philosophy",
      "YEAR": 2008
    },
    {
      "SR_NO": 285,
      "TITLE": "Religion, Ethnicity and Modernity in Southeast Asia",
      "AUTHORS": "Myung-Seok Oh",
      "SUBJECT": "Asia, Southeastern",
      "YEAR": 1905
    },
    {
      "SR_NO": 286,
      "TITLE": "Directory of departments and programs of religious studies in North America",
      "AUTHORS": "David G. Truemper', 'Council of Societies for the Study of Religion",
      "SUBJECT": "Religion",
      "YEAR": 1905
    },
    {
      "SR_NO": 287,
      "TITLE": "Blasphemy",
      "AUTHORS": "Alan Dershowitz",
      "SUBJECT": "Political Science",
      "YEAR": 2007
    },
    {
      "SR_NO": 288,
      "TITLE": "Whose God Rules?",
      "AUTHORS": "N. Walker', 'E. Greenlee",
      "SUBJECT": "Social Science",
      "YEAR": 2011
    },
    {
      "SR_NO": 289,
      "TITLE": "Atheism and Arithmetic, Or, Mathematical Law in Nature",
      "AUTHORS": "Horace Lorenzo Hastings",
      "SUBJECT": "God",
      "YEAR": 1905
    },
    {
      "SR_NO": 290,
      "TITLE": "Atheism And The Case Against Christ",
      "AUTHORS": "Matthew S. Mccormick",
      "SUBJECT": "Religion",
      "YEAR": 2012
    },
    {
      "SR_NO": 291,
      "TITLE": "America Declares Independence",
      "AUTHORS": "Alan Dershowitz",
      "SUBJECT": "History",
      "YEAR": 2003
    },
    {
      "SR_NO": 292,
      "TITLE": "Gods Arrow Against Atheists",
      "AUTHORS": "Henry Smith",
      "SUBJECT": "Christianity and atheism",
      "YEAR": 1904
    },
    {
      "SR_NO": 293,
      "TITLE": "Gods Arrow Againste Atheists",
      "AUTHORS": "Henry Smith",
      "SUBJECT": "Apologetics",
      "YEAR": 1904
    },
    {
      "SR_NO": 294,
      "TITLE": "Brain Mystery Light and Dark",
      "AUTHORS": "Charles Don Keyes",
      "SUBJECT": "Philosophy",
      "YEAR": 2006
    },
    {
      "SR_NO": 295,
      "TITLE": "101 Proofs that the Bible is True, an Answer to Atheism",
      "AUTHORS": "Charles Orville Benham",
      "SUBJECT": "Bible",
      "YEAR": 1905
    },
    {
      "SR_NO": 296,
      "TITLE": "Get Rommel",
      "AUTHORS": "Michael Asher",
      "SUBJECT": "History",
      "YEAR": 2011
    },
    {
      "SR_NO": 297,
      "TITLE": "Sammy Keyes and the Wedding Crasher",
      "AUTHORS": "Wendelin Van Draanen",
      "SUBJECT": "Juvenile Fiction",
      "YEAR": 2010
    },
    {
      "SR_NO": 298,
      "TITLE": "The Bloody Man",
      "AUTHORS": "Bevan Amberhill",
      "SUBJECT": "Fiction",
      "YEAR": 1905
    },
    {
      "SR_NO": 299,
      "TITLE": "1000 Helpful Hints & Valuable Suggestions for Book-keepers and Business Men",
      "AUTHORS": "Book-keeper publishing co., Detroit",
      "SUBJECT": "Bookkeeping",
      "YEAR": 1905
    },
    {
      "SR_NO": 300,
      "TITLE": "Devonshire Scream",
      "AUTHORS": "Laura Childs",
      "SUBJECT": "Fiction",
      "YEAR": 2016
    },
    {
      "SR_NO": 301,
      "TITLE": "Gaywyck",
      "AUTHORS": "Vincent Virga",
      "SUBJECT": "Fiction",
      "YEAR": 1905
    },
    {
      "SR_NO": 302,
      "TITLE": "Decisions and Orders of the National Labor Relations Board",
      "AUTHORS": "United States. National Labor Relations Board",
      "SUBJECT": "Labor laws and legislation",
      "YEAR": 1905
    },
    {
      "SR_NO": 303,
      "TITLE": "Food Shortages: Sugar",
      "AUTHORS": "United States. Congress. House. Special Committee to Investigate Food Shortages",
      "SUBJECT": "Meat industry and trade",
      "YEAR": 1905
    },
    {
      "SR_NO": 304,
      "TITLE": "Food Shortages",
      "AUTHORS": "United States. Congress. House. Special Committee to Investigate Food Shortages",
      "SUBJECT": "Meat industry and trade",
      "YEAR": 1905
    },
    {
      "SR_NO": 305,
      "TITLE": "Annual Report of the Dairy and Food Commissioner of Wisconsin",
      "AUTHORS": "Wisconsin Dairy and Food Commission",
      "SUBJECT": "Dairy products",
      "YEAR": 1905
    },
    {
      "SR_NO": 306,
      "TITLE": "Food in the Movies, 2d ed.",
      "AUTHORS": "Steve Zimmerman",
      "SUBJECT": "Performing Arts",
      "YEAR": 2010
    },
    {
      "SR_NO": 307,
      "TITLE": "Sammy Keyes and the Hotel Thief",
      "AUTHORS": "Wendelin Van Draanen",
      "SUBJECT": "Juvenile Fiction",
      "YEAR": 2003
    },
    {
      "SR_NO": 308,
      "TITLE": "Child Psychopathology",
      "AUTHORS": "Jeffrey Haugaard",
      "SUBJECT": "Psychology",
      "YEAR": 2007
    },
    {
      "SR_NO": 309,
      "TITLE": "Directory of Historic House Museums in the United States",
      "AUTHORS": "Patricia Chambers Walker', 'Thomas Graham",
      "SUBJECT": "History",
      "YEAR": 1905
    },
    {
      "SR_NO": 310,
      "TITLE": "American Furniture in the Metropolitan Museum of Art",
      "AUTHORS": "Frances Gruber Safford', 'Metropolitan Museum of Art (New York, N.Y.)",
      "SUBJECT": "Furniture",
      "YEAR": 1905
    },
    {
      "SR_NO": 311,
      "TITLE": "Catalog of Copyright Entries. Third Series",
      "AUTHORS": "Library of Congress. Copyright Office",
      "SUBJECT": "Copyright",
      "YEAR": 1905
    },
    {
      "SR_NO": 312,
      "TITLE": "American furniture 1997",
      "AUTHORS": "Luke Beckerdite",
      "SUBJECT": "Antiques & Collectibles",
      "YEAR": 1905
    },
    {
      "SR_NO": 313,
      "TITLE": "The Jamestown Furniture Industry",
      "AUTHORS": "Clarence Carlson",
      "SUBJECT": "History",
      "YEAR": 2014
    },
    {
      "SR_NO": 314,
      "TITLE": "New Orleans. Ediz. inglese",
      "AUTHORS": "Rosanna Cirigliano",
      "SUBJECT": "Travel",
      "YEAR": 1989
    },
    {
      "SR_NO": 315,
      "TITLE": "Advances in Information Security and Assurance",
      "AUTHORS": "James (Jong Hyuk) Park', 'Hsiao-Hwa Chen', 'Mohammed Atiquzzaman', 'Changhoon Lee', 'Sang-Soo Yeo",
      "SUBJECT": "Computers",
      "YEAR": 2009
    },
    {
      "SR_NO": 316,
      "TITLE": "The Complete Guide to Physical Security",
      "AUTHORS": "Paul R. Baker', 'Daniel J. Benny",
      "SUBJECT": "Business & Economics",
      "YEAR": 2016
    },
    {
      "SR_NO": 317,
      "TITLE": "Enterprise 2.0",
      "AUTHORS": "Jessica Keyes",
      "SUBJECT": "Business & Economics",
      "YEAR": 2016
    },
    {
      "SR_NO": 318,
      "TITLE": "The Official (ISC)2 Guide to the SSCP CBK",
      "AUTHORS": "Adam Gordon', 'Steven Hernandez",
      "SUBJECT": "Computers",
      "YEAR": 2016
    },
    {
      "SR_NO": 319,
      "TITLE": "NET Security and Cryptography",
      "AUTHORS": "Peter Thorsteinson', 'G. Gnana Arun Ganesh",
      "SUBJECT": "Computers",
      "YEAR": 1905
    },
    {
      "SR_NO": 320,
      "TITLE": "Maximum Windows 2000 Security",
      "AUTHORS": "Anonymous', 'Mark Burnett', 'Chris Amaris', 'Chris Doyle', 'L. J. Locher', 'Rand Morimoto",
      "SUBJECT": "Computers",
      "YEAR": 1905
    },
    {
      "SR_NO": 321,
      "TITLE": "Information Security and Cryptology - ICISC 2011",
      "AUTHORS": "Howon Kim",
      "SUBJECT": "Computers",
      "YEAR": 2012
    },
    {
      "SR_NO": 322,
      "TITLE": "Engineering Information Security",
      "AUTHORS": "Stuart Jacobs",
      "SUBJECT": "Technology & Engineering",
      "YEAR": 2011
    },
    {
      "SR_NO": 323,
      "TITLE": "The Complete Book of Home, Site and Office Security",
      "AUTHORS": "Bill Phillips",
      "SUBJECT": "Architecture",
      "YEAR": 1905
    },
    {
      "SR_NO": 324,
      "TITLE": "High-Rise Security and Fire Life Safety",
      "AUTHORS": "Geoff Craighead",
      "SUBJECT": "Business & Economics",
      "YEAR": 2003
    },
    {
      "SR_NO": 325,
      "TITLE": "Analyzing the Hospital Life Safety Survey",
      "AUTHORS": "Brad Keyes",
      "SUBJECT": "Medical",
      "YEAR": 2011
    },
    {
      "SR_NO": 326,
      "TITLE": "Halo: The Cole Protocol",
      "AUTHORS": "Eric Nylund', 'Tobias S. Buckell",
      "SUBJECT": "Fiction",
      "YEAR": 2011
    },
    {
      "SR_NO": 327,
      "TITLE": "Role Development in Professional Nursing Practice",
      "AUTHORS": "Kathleen Masters",
      "SUBJECT": "Medical",
      "YEAR": 2015
    },
    {
      "SR_NO": 328,
      "TITLE": "A Question of Identity",
      "AUTHORS": "Susan Hill",
      "SUBJECT": "Fiction",
      "YEAR": 2012
    },
    {
      "SR_NO": 329,
      "TITLE": "Business Law, Principles and Practices",
      "AUTHORS": "Arnold J. Goldman', 'William D. Sigismond",
      "SUBJECT": "Business law",
      "YEAR": 1905
    },
    {
      "SR_NO": 330,
      "TITLE": "Chameleon Christianity",
      "AUTHORS": "Dick Keyes",
      "SUBJECT": "Religion",
      "YEAR": 2014
    },
    {
      "SR_NO": 331,
      "TITLE": "Sammy Keyes and the Kiss Goodbye",
      "AUTHORS": "Wendelin Van Draanen",
      "SUBJECT": "Juvenile Fiction",
      "YEAR": 2014
    },
    {
      "SR_NO": 332,
      "TITLE": "Stolen Away",
      "AUTHORS": "Michael Newton",
      "SUBJECT": "True Crime",
      "YEAR": 1905
    },
    {
      "SR_NO": 333,
      "TITLE": "Billy Wilder, Movie-Maker",
      "AUTHORS": "Karen McNally",
      "SUBJECT": "Performing Arts",
      "YEAR": 2014
    },
    {
      "SR_NO": 334,
      "TITLE": "The Astrology of Film",
      "AUTHORS": "Bill Streett', 'Jeffrey Kishner",
      "SUBJECT": "Biography & Autobiography",
      "YEAR": 1905
    },
    {
      "SR_NO": 335,
      "TITLE": "Soulsville, U.S.A.: The Story of Stax Records",
      "AUTHORS": "Rob Bowman",
      "SUBJECT": "Music",
      "YEAR": 2011
    },
    {
      "SR_NO": 336,
      "TITLE": "Three Classic Thrillers 3-Book Bundle",
      "AUTHORS": "John Grisham",
      "SUBJECT": "Fiction",
      "YEAR": 2011
    },
    {
      "SR_NO": 337,
      "TITLE": "American Movie Critics",
      "AUTHORS": "Phillip Lopate",
      "SUBJECT": "Performing Arts",
      "YEAR": 1905
    },
    {
      "SR_NO": 338,
      "TITLE": "Sammy Keyes and the Kiss Goodbye",
      "AUTHORS": "Wendelin Van Draanen",
      "SUBJECT": "Juvenile Fiction",
      "YEAR": 2014
    },
    {
      "SR_NO": 339,
      "TITLE": "Fisher, Churchill and the Dardanelles",
      "AUTHORS": "Geoffrey Penn",
      "SUBJECT": "Biography & Autobiography",
      "YEAR": 1905
    },
    {
      "SR_NO": 340,
      "TITLE": "Self-government, the American Theme",
      "AUTHORS": "Will Morrisey",
      "SUBJECT": "History",
      "YEAR": 1905
    },
    {
      "SR_NO": 341,
      "TITLE": "Literary Readings of Billy Wilder",
      "AUTHORS": "Georges-Claude Guilbert",
      "SUBJECT": "Performing Arts",
      "YEAR": 2009
    },
    {
      "SR_NO": 342,
      "TITLE": "Love Inspired Suspense December 2014 - Box Set 1 of 2",
      "AUTHORS": "Shirlee McCoy', 'Sharon Dunn', 'Alison Stone",
      "SUBJECT": "Fiction",
      "YEAR": 2014
    },
    {
      "SR_NO": 343,
      "TITLE": "L.A. Rex",
      "AUTHORS": "Will Beall",
      "SUBJECT": "Fiction",
      "YEAR": 2007
    },
    {
      "SR_NO": 344,
      "TITLE": "Cold Case Justice",
      "AUTHORS": "Sharon Dunn",
      "SUBJECT": "Fiction",
      "YEAR": 2014
    },
    {
      "SR_NO": 345,
      "TITLE": "Sammy Keyes and the Art of Deception",
      "AUTHORS": "Wendelin Van Draanen",
      "SUBJECT": "Juvenile Fiction",
      "YEAR": 2009
    },
    {
      "SR_NO": 346,
      "TITLE": "Sammy Keyes and the Wedding Crasher",
      "AUTHORS": "Wendelin Van Draanen",
      "SUBJECT": "Juvenile Fiction",
      "YEAR": 1905
    },
    {
      "SR_NO": 347,
      "TITLE": "Sammy Keyes and the Night of Skulls",
      "AUTHORS": "Wendelin Van Draanen",
      "SUBJECT": "Juvenile Fiction",
      "YEAR": 2011
    },
    {
      "SR_NO": 348,
      "TITLE": "Sammy Keyes and the Search for Snake Eyes",
      "AUTHORS": "Wendelin Van Draanen",
      "SUBJECT": "Juvenile Fiction",
      "YEAR": 1905
    },
    {
      "SR_NO": 349,
      "TITLE": "Mastering Windows XP Home Edition",
      "AUTHORS": "Hart-Davis",
      "SUBJECT": "Computers",
      "YEAR": 2006
    },
    {
      "SR_NO": 350,
      "TITLE": "Special Edition Using Filemaker 8",
      "AUTHORS": "Steve Lane', 'Scott Love', 'Bob Bowers",
      "SUBJECT": "Computers",
      "YEAR": 1905
    },
    {
      "SR_NO": 351,
      "TITLE": "Knowledge-Based Intelligent Information and Engineering Systems",
      "AUTHORS": "Bruno Apolloni",
      "SUBJECT": "Computers",
      "YEAR": 2007
    },
    {
      "SR_NO": 352,
      "TITLE": "Alan Simpson's Windows Vista Bible",
      "AUTHORS": "Alan Simpson', 'Bradley L. Jones",
      "SUBJECT": "Computers",
      "YEAR": 2007
    },
    {
      "SR_NO": 353,
      "TITLE": "How to Do Everything with Windows Vista",
      "AUTHORS": "Curt Simmons",
      "SUBJECT": "Computers",
      "YEAR": 2007
    },
    {
      "SR_NO": 354,
      "TITLE": "MICROPROCESSORS, PC HARDWARE AND INTERFACING",
      "AUTHORS": "N. MATHIVANAN",
      "SUBJECT": "Computers",
      "YEAR": 2003
    },
    {
      "SR_NO": 355,
      "TITLE": "Asset Protection through Security Awareness",
      "AUTHORS": "Tyler Justin Speed",
      "SUBJECT": "Business & Economics",
      "YEAR": 2016
    },
    {
      "SR_NO": 356,
      "TITLE": "Al-Muhit-English-Arabic Oxford Study Dictionary, Dr. Mohamad Badawi, 1996",
      "AUTHORS": "Academia Internatinal Publication",
      "SUBJECT": "Reference",
      "YEAR": 1996
    },
    {
      "SR_NO": 357,
      "TITLE": "Oxford English-Arabic Dictionary, Al-Muhit, 1996",
      "AUTHORS": "Dr. Mohamad Badawi",
      "SUBJECT": "Reference",
      "YEAR": 1996
    },
    {
      "SR_NO": 358,
      "TITLE": "Iraqi Constitutional Studies",
      "AUTHORS": "DePaul University. International Human Rights Law Institute",
      "SUBJECT": "Civil rights",
      "YEAR": 1905
    },
    {
      "SR_NO": 359,
      "TITLE": "Ø§Ù„Ø­Ø¨ ÙˆØ§Ù„Ø¬Ù…Ø§Ù„ Ø¹Ù†Ø¯ Ø§Ù„Ø¹Ø±Ø¨",
      "AUTHORS": "Ø£Ø­Ù…Ø¯ ØªÙŠÙ…ÙˆØ± Ø¨Ø§Ø´Ø§",
      "SUBJECT": "Literary Criticism",
      "YEAR": 2015
    },
    {
      "SR_NO": 360,
      "TITLE": "Ø§Ù„Ù„Ø¤Ù„Ø¤Ø©",
      "AUTHORS": "Ø¬ÙˆÙ† Ø´ØªØ§ÙŠÙ†Ø¨Ùƒ",
      "SUBJECT": "Fiction",
      "YEAR": 2018
    },
    {
      "SR_NO": 361,
      "TITLE": "Mudhakarat talib",
      "AUTHORS": "Jeff Kinney",
      "SUBJECT": "Diaries",
      "YEAR": 1905
    },
    {
      "SR_NO": 362,
      "TITLE": "Ø§Ù„Ø·Ø§Ø¦ÙØ©ØŒ Ø§Ù„Ø·Ø§Ø¦ÙÙŠØ©ØŒ Ø§Ù„Ø·ÙˆØ§Ø¦Ù Ø§Ù„Ù…ØªØ®ÙŠÙ„Ø©",
      "AUTHORS": "Ø¹Ø²Ù…ÙŠ Ø¨Ø´Ø§Ø±Ø©",
      "SUBJECT": "Religion",
      "YEAR": 2018
    },
    {
      "SR_NO": 363,
      "TITLE": "Iraqi Constitutional Studies",
      "AUTHORS": "DePaul University. International Human Rights Law Institute",
      "SUBJECT": "Civil rights",
      "YEAR": 1905
    },
    {
      "SR_NO": 364,
      "TITLE": "Ø§Ù„Ø·Ø§Ø¦ÙØ©ØŒ Ø§Ù„Ø·Ø§Ø¦ÙÙŠØ©ØŒ Ø§Ù„Ø·ÙˆØ§Ø¦Ù Ø§Ù„Ù…ØªØ®ÙŠÙ„Ø©",
      "AUTHORS": "Ø¹Ø²Ù…ÙŠ Ø¨Ø´Ø§Ø±Ø©",
      "SUBJECT": "Religion",
      "YEAR": 2018
    },
    {
      "SR_NO": 365,
      "TITLE": "Ù…ÙˆØ³ÙˆØ¹Ø© ØªØ§Ø±ÙŠØ® Ø§Ù„Ø£Ø¯ÙŠØ§Ù†",
      "AUTHORS": "ÙØ±Ø§Ø³ Ø§Ù„Ø³ÙˆØ§Ø­",
      "SUBJECT": "Religion",
      "YEAR": 2017
    },
    {
      "SR_NO": 366,
      "TITLE": "Ù…ØµØ§Ø¯Ø± ØªØ·ÙˆÙŠØ± ØªØ¹Ù„ÙŠÙ… Ø§Ù„Ø±ÙŠØ§Ø¶ÙŠØ§Øª",
      "AUTHORS": "Ù…ÙŠØ±ÙØª Ù…Ø­Ù…ÙˆØ¯ Ù…Ø­Ù…Ø¯",
      "SUBJECT": "Education",
      "YEAR": 2015
    },
    {
      "SR_NO": 367,
      "TITLE": "Ù‚Ø¶ÙŠØ© Ø§Ù„Ø´Ø¹Ø± Ø§Ù„Ø¬Ø§Ù‡Ù„Ù‰ ÙÙ‰ ÙƒØªØ§Ø¨ Ø§Ø¨Ù† Ø³Ù„Ø§Ù…",
      "AUTHORS": "Maá¸¥mÅ«d Muá¸¥ammad ShÄkir",
      "SUBJECT": "Literary Criticism",
      "YEAR": 1905
    },
    {
      "SR_NO": 368,
      "TITLE": "Iraqi Constitutional Studies",
      "AUTHORS": "DePaul University. International Human Rights Law Institute",
      "SUBJECT": "Civil rights",
      "YEAR": 1905
    },
    {
      "SR_NO": 369,
      "TITLE": "Ø±ÙˆØ§ÙŠØ© : Ø§Ù„Ø¨Ø­Ø« Ø¹Ù† Ø§Ù„Ø¬Ø°ÙˆØ±",
      "AUTHORS": "Ù…Ø¤Ù…Ù†Ø© Ø£Ø¨Ùˆ ØµØ§Ù„Ø­",
      "SUBJECT": "Fiction",
      "YEAR": 2006
    },
    {
      "SR_NO": 370,
      "TITLE": "Ø³ÙŠØ±Ù‡ Ø§Ù…ÙŠÙ† Ø§Ù„Ù…Ø¤Ù…Ù†ÙŠÙ† Ø¹Ù…Ø± Ø¨Ù† Ø§Ù„Ø®Ø·Ø§Ø¨ Ø´Ø®ØµÙŠØªÙ‡ ÙˆØ¹ØµØ±Ù‡",
      "AUTHORS": "ØµÙ„Ø§Ø¨ÙŠØŒ Ø¹Ù„ÙŠ Ù…Ø­Ù…Ø¯ Ù…Ø­Ù…Ø¯ØŒ",
      "SUBJECT": "Caliphs",
      "YEAR": 1905
    },
    {
      "SR_NO": 371,
      "TITLE": "Ù…Ù† Ø¬Ù…Ø§Ù„ÙŠØ§Øª Ø§Ù„ØªØµÙˆÙŠØ± ÙÙŠ Ø§Ù„Ù‚Ø±Ø¢Ù† Ø§Ù„ÙƒØ±ÙŠÙ…",
      "AUTHORS": "Ù…Ø­Ù…Ø¯ Ù‚Ø·Ø¨ Ø¹Ø¨Ø¯ Ø§Ù„Ø¹Ø§Ù„",
      "SUBJECT": "RELIGION",
      "YEAR": 2018
    },
    {
      "SR_NO": 372,
      "TITLE": "Ù…ÙˆØ³ÙˆØ¹Ø© ØªØ§Ø±ÙŠØ® Ø§Ù„Ø£Ø¯ÙŠØ§Ù†",
      "AUTHORS": "ÙØ±Ø§Ø³ Ø§Ù„Ø³ÙˆØ§Ø­",
      "SUBJECT": "Religion",
      "YEAR": 2017
    },
    {
      "SR_NO": 373,
      "TITLE": "Ø§Ù„Ø·Ø§Ø¦ÙØ©ØŒ Ø§Ù„Ø·Ø§Ø¦ÙÙŠØ©ØŒ Ø§Ù„Ø·ÙˆØ§Ø¦Ù Ø§Ù„Ù…ØªØ®ÙŠÙ„Ø©",
      "AUTHORS": "Ø¹Ø²Ù…ÙŠ Ø¨Ø´Ø§Ø±Ø©",
      "SUBJECT": "Religion",
      "YEAR": 2018
    },
    {
      "SR_NO": 374,
      "TITLE": "Ø§Ù„Ø§Ø³ØªØ¨Ø¯Ø§Ø¯ Ù…Ù† Ø§Ù„Ø®Ù„Ø§ÙØ© Ù„Ù„Ø±Ø¦Ø§Ø³Ø©",
      "AUTHORS": "Ø¹Ø¨Ø¯ Ø§Ù„Ø¹Ø²ÙŠØ²ØŒ Ù…Ø­Ø³Ù†",
      "SUBJECT": "History",
      "YEAR": 1905
    },
    {
      "SR_NO": 375,
      "TITLE": "Finance and Development, December 2013",
      "AUTHORS": "International Monetary Fund. External Relations Dept.",
      "SUBJECT": "Business & Economics",
      "YEAR": 2014
    },
    {
      "SR_NO": 376,
      "TITLE": "The Minds of Billy Milligan",
      "AUTHORS": "Daniel Keyes",
      "SUBJECT": "Psychology",
      "YEAR": 1905
    },
    {
      "SR_NO": 377,
      "TITLE": "Stand By Me",
      "AUTHORS": "[\"Sheila O'Flanagan\"]",
      "SUBJECT": "Fiction",
      "YEAR": 2010
    },
    {
      "SR_NO": 378,
      "TITLE": "Ø®Ù…Ø³Ø© Ø¹Ù‚ÙˆÙ„ Ù„Ø§Ù”Ø¬Ù„ Ø§Ù„Ù…Ø³ØªÙ‚Ø¨Ù„",
      "AUTHORS": "Howard Gardner",
      "SUBJECT": "Philosophy",
      "YEAR": 2008
    },
    {
      "SR_NO": 379,
      "TITLE": "You Can Heal Your Life",
      "AUTHORS": "Louise L. Hay",
      "SUBJECT": "Health & Fitness",
      "YEAR": 2010
    },
    {
      "SR_NO": 380,
      "TITLE": "The E-Myth Revisited (Limadha tafshal muâ€™dham al-sharikat al-saghira?)",
      "AUTHORS": "Michael E. Gerber",
      "SUBJECT": "Business & Economics",
      "YEAR": 2016
    },
    {
      "SR_NO": 381,
      "TITLE": "Ù‚ÙˆØ§Ø¹Ø¯ Ø§Ù„Ù„ØºØ© Ø§Ù„Ø¥Ù†ÙƒÙ„ÙŠØ²ÙŠØ©",
      "AUTHORS": "Ù…Ø­Ù…Ø¯ Ø£Ø­Ù…Ø¯",
      "SUBJECT": "Foreign Language Study",
      "YEAR": 2011
    },
    {
      "SR_NO": 382,
      "TITLE": "â€Ù„ØºØ© Ø§Ù„Ø¹Ø±Ø¨ÙŠØ© Ù„Ù„Ø´Ø¦ÙˆÙ† Ø§Ù„ØªØ¬Ø§Ø±ÙŠØ© : Ø§Ù„Ù…Ø±Ø­Ù„Ø© Ø§Ù„Ù…ØªÙ‚Ø¯Ù…Ø©",
      "AUTHORS": "Raji M. Rammuny",
      "SUBJECT": "Business & Economics",
      "YEAR": 1905
    },
    {
      "SR_NO": 383,
      "TITLE": "Ø§Ù„Ù„ØºØ© Ø§Ù„Ø¹Ø±Ø¨ÙŠØ© Ù„Ù„Ù…Ø±Ø§Ø­Ù„ Ø§Ù„Ù…ØªÙ‚Ø¯Ù…Ø© Ù…Ù† Ø®Ù„Ø§Ù„ Ù†ØµÙˆØµ ÙˆÙ…ÙˆØ§Ø¯ Ø³Ù…Ø¹ÙŠØ© Ø¨ØµØ±ÙŠØ© Ø£ØµÙŠÙ„Ø©",
      "AUTHORS": "Raji M. Rammuny",
      "SUBJECT": "Foreign Language Study",
      "YEAR": 1905
    },
    {
      "SR_NO": 384,
      "TITLE": "Al-Muhit-English-Arabic Oxford Study Dictionary, Dr. Mohamad Badawi, 1996",
      "AUTHORS": "Academia Internatinal Publication",
      "SUBJECT": "Reference",
      "YEAR": 1996
    },
    {
      "SR_NO": 385,
      "TITLE": "Oxford English-Arabic Dictionary, Al-Muhit, 1996",
      "AUTHORS": "Dr. Mohamad Badawi",
      "SUBJECT": "Reference",
      "YEAR": 1996
    },
    {
      "SR_NO": 386,
      "TITLE": "Ø¯Ø§Ø¦Ø±Ø© Ø§Ù„Ù…Ø¹Ø§Ø±Ù",
      "AUTHORS": "FuÊ¼Äd AfrÄm BustÄnÄ«",
      "SUBJECT": "Encyclopedias and dictionaries, Arabic",
      "YEAR": 1905
    },
    {
      "SR_NO": 387,
      "TITLE": "Happiness Key",
      "AUTHORS": "Emilie Richards",
      "SUBJECT": "Fiction",
      "YEAR": 2010
    },
    {
      "SR_NO": 388,
      "TITLE": "Three Prescriptions for Happiness",
      "AUTHORS": "Ken Keyes, Jr.",
      "SUBJECT": "Self-Help",
      "YEAR": 2010
    },
    {
      "SR_NO": 389,
      "TITLE": "Handbook of Research Methods and Applications in Happiness and Quality of Life",
      "AUTHORS": "Luigino Bruni', 'Pier Luigi Porta",
      "SUBJECT": "Business & Economics",
      "YEAR": 2016
    },
    {
      "SR_NO": 390,
      "TITLE": "Discovering the Secrets of Happiness",
      "AUTHORS": "Ken Keyes",
      "SUBJECT": "Psychology",
      "YEAR": 1905
    },
    {
      "SR_NO": 391,
      "TITLE": "The Routledge Handbook of Positive Communication",
      "AUTHORS": "JosÃ© Antonio MuÃ±iz VelÃ¡zquez', 'Cristina M. Pulido",
      "SUBJECT": "Language Arts & Disciplines",
      "YEAR": 2018
    },
    {
      "SR_NO": 392,
      "TITLE": "How to make your life work, or, Why aren't you happy?",
      "AUTHORS": "Ken Keyes', 'Tolly Burkan",
      "SUBJECT": "Self-Help",
      "YEAR": 1905
    },
    {
      "SR_NO": 393,
      "TITLE": "Person to Person",
      "AUTHORS": "Sharon L. Hanna",
      "SUBJECT": "Psychology",
      "YEAR": 2002
    },
    {
      "SR_NO": 394,
      "TITLE": "Small Press Record of Books in Print",
      "AUTHORS": "Len Fulton",
      "SUBJECT": "Books",
      "YEAR": 1905
    },
    {
      "SR_NO": 395,
      "TITLE": "Hearing on H.R. 1231, the Davis-Bacon Reform Bill of 1993",
      "AUTHORS": "United States', 'United States. Congress. House. Committee on Education and Labor. Subcommittee on Labor Standards, Occupational Health, and Safety",
      "SUBJECT": "Digital images",
      "YEAR": 1905
    },
    {
      "SR_NO": 396,
      "TITLE": "Naval War College Review",
      "AUTHORS": "Naval War College (U.S.)",
      "SUBJECT": "International relations",
      "YEAR": 1905
    },
    {
      "SR_NO": 397,
      "TITLE": "The life of Elisha Williams Keyes",
      "AUTHORS": "Richard Watson Hantke",
      "SUBJECT": "Biography & Autobiography",
      "YEAR": 1905
    },
    {
      "SR_NO": 398,
      "TITLE": "International Record of Medicine and General Practice Clinics",
      "AUTHORS": "Edward Swift Dunster', 'Frank Pierce Foster', 'James Bradbridge Hunter', 'Charles Eucharist de Medicis Sajous', 'Gregory Stragnell', 'Henry J. Klaunberg', 'FÃ©lix MartÃ­-IbÃ¡Ã±ez",
      "SUBJECT": "Medicine",
      "YEAR": 1905
    },
    {
      "SR_NO": 399,
      "TITLE": "The Mechanical Engineer's Pocket-book",
      "AUTHORS": "William Kent",
      "SUBJECT": "Engineering",
      "YEAR": 1905
    },
    {
      "SR_NO": 400,
      "TITLE": "Milton and This Pendant World",
      "AUTHORS": "George W. Whiting",
      "SUBJECT": "Literary Criticism",
      "YEAR": 2014
    },
    {
      "SR_NO": 401,
      "TITLE": "General McClellan's Peninsula Campaign",
      "AUTHORS": "Hiram Ketchum",
      "SUBJECT": "Campaign literature",
      "YEAR": 1905
    },
    {
      "SR_NO": 402,
      "TITLE": "Journal of the Military Service Institution of the United States",
      "AUTHORS": "Military Service Institution of the United States",
      "SUBJECT": "Military art and science",
      "YEAR": 1905
    },
    {
      "SR_NO": 403,
      "TITLE": "The War of the Rebellion",
      "AUTHORS": "United States. War Department",
      "SUBJECT": "Confederate States of America",
      "YEAR": 1905
    },
    {
      "SR_NO": 404,
      "TITLE": "Fifty Years' Observations of Men and Events, Civil and Military",
      "AUTHORS": "Erasmus Darwin Keyes",
      "SUBJECT": "Fair Oaks (Henrico County, Va.), Battle of, 1862",
      "YEAR": 1905
    },
    {
      "SR_NO": 405,
      "TITLE": "Fifty Years' Observation of Men and Events, Civil and Military",
      "AUTHORS": "Erasmus Darwin Keyes",
      "SUBJECT": "Pacific Coast Indians, Wars with, 1847-1865",
      "YEAR": 1905
    },
    {
      "SR_NO": 406,
      "TITLE": "Report of Major-General B. McClellan",
      "AUTHORS": "George Brinton McClellan",
      "SUBJECT": "Maryland Campaign, 1862",
      "YEAR": 1905
    },
    {
      "SR_NO": 407,
      "TITLE": "All for the Union",
      "AUTHORS": "Elisha Hunt Rhodes",
      "SUBJECT": "History",
      "YEAR": 2010
    },
    {
      "SR_NO": 408,
      "TITLE": "The Keyed Bugle",
      "AUTHORS": "Ralph Thomas Dudgeon",
      "SUBJECT": "Music",
      "YEAR": 1905
    },
    {
      "SR_NO": 409,
      "TITLE": "Network-Aware Security for Group Communications",
      "AUTHORS": "Yan Sun', 'Wade Trappe', 'K. J. Ray Liu",
      "SUBJECT": "Technology & Engineering",
      "YEAR": 2007
    },
    {
      "SR_NO": 410,
      "TITLE": "Bluescreen Compositing",
      "AUTHORS": "John Jackman",
      "SUBJECT": "Performing Arts",
      "YEAR": 2007
    },
    {
      "SR_NO": 411,
      "TITLE": "Advances in Computing and Communications, Part IV",
      "AUTHORS": "Ajith Abraham', 'Jaime Lloret Mauri', 'John Buford', 'Junichi Suzuki', 'Sabu M. Thampi",
      "SUBJECT": "Computers",
      "YEAR": 2011
    },
    {
      "SR_NO": 412,
      "TITLE": "Basic Blueprint Reading and Sketching",
      "AUTHORS": "Thomas P. Olivo', 'C. Thomas Olivo",
      "SUBJECT": "Technology & Engineering",
      "YEAR": 1905
    },
    {
      "SR_NO": 413,
      "TITLE": "Basic TV Technology",
      "AUTHORS": "Robert L Hartwig",
      "SUBJECT": "Performing Arts",
      "YEAR": 2012
    },
    {
      "SR_NO": 414,
      "TITLE": "The Gamification of Work",
      "AUTHORS": "Emmanuelle Savignac",
      "SUBJECT": "Business & Economics",
      "YEAR": 2017
    },
    {
      "SR_NO": 415,
      "TITLE": "NS Basic Programming for Palm OS",
      "AUTHORS": "Michael J. Verive",
      "SUBJECT": "BASIC (Computer program language)",
      "YEAR": 1905
    },
    {
      "SR_NO": 416,
      "TITLE": "Commerce, Justice, Science, and Related Agencies Appropriations for 2014",
      "AUTHORS": "United States. Congress. House. Committee on Appropriations. Subcommittee on Commerce, Justice, Science, and Related Agencies",
      "SUBJECT": "Administrative agencies",
      "YEAR": 1905
    },
    {
      "SR_NO": 417,
      "TITLE": "Directory of Environmental Life Scientists: Ohio River Valley region",
      "AUTHORS": "Institute of Ecology",
      "SUBJECT": "Biologists",
      "YEAR": 1905
    },
    {
      "SR_NO": 418,
      "TITLE": "Current Policies and Practices in European Social Anthropology Education",
      "AUTHORS": "Drackle Dorle', 'Dorle DracklÃ©', 'Iain R. Edgar', 'Thomas K. Schippers",
      "SUBJECT": "Education",
      "YEAR": 1905
    },
    {
      "SR_NO": 419,
      "TITLE": "Human Development in the Indian Context",
      "AUTHORS": "Margaret Khalakdina",
      "SUBJECT": "Business & Economics",
      "YEAR": 2008
    },
    {
      "SR_NO": 420,
      "TITLE": "Key Debates in Anthropology",
      "AUTHORS": "Tim Ingold",
      "SUBJECT": "Social Science",
      "YEAR": 2003
    },
    {
      "SR_NO": 421,
      "TITLE": "Social Adaptation to Food Stress",
      "AUTHORS": "Paul E. Minnis",
      "SUBJECT": "Social Science",
      "YEAR": 1985
    },
    {
      "SR_NO": 422,
      "TITLE": "Karma",
      "AUTHORS": "Charles F. Keyes', 'E. Valentine Daniel",
      "SUBJECT": "Religion",
      "YEAR": 1983
    },
    {
      "SR_NO": 423,
      "TITLE": "Anthropological Practice",
      "AUTHORS": "Judith Okely",
      "SUBJECT": "Social Science",
      "YEAR": 2013
    },
    {
      "SR_NO": 424,
      "TITLE": "Cultural Differences, the Nation State, and Rethinking Ethnicity Theory",
      "AUTHORS": "Charles F. Keyes",
      "SUBJECT": "Indigenous peoples",
      "YEAR": 1905
    },
    {
      "SR_NO": 425,
      "TITLE": "Current Policies and Practices in European Social Anthropology Education",
      "AUTHORS": "Drackle Edgar",
      "SUBJECT": "Education",
      "YEAR": 1905
    },
    {
      "SR_NO": 426,
      "TITLE": "Applications of Anthropology",
      "AUTHORS": "Sarah Pink",
      "SUBJECT": "Social Science",
      "YEAR": 2005
    },
    {
      "SR_NO": 427,
      "TITLE": "Southeast Asian Research Tools: Thailand",
      "AUTHORS": "University of Hawaii at Manoa. Southeast Asian Studies Program",
      "SUBJECT": "Reference books",
      "YEAR": 1905
    },
    {
      "SR_NO": 428,
      "TITLE": "Adams' New Musical Dictionary of Fifteen Thousand Technical Words, Phrases, Abbreviations, Initials, and Signs Employed in Musical and Rhythmical Art and Science, in Nearly Fifty Ancient and Modern Languages",
      "AUTHORS": "John Stowell Adams",
      "SUBJECT": "Music",
      "YEAR": 1905
    },
    {
      "SR_NO": 429,
      "TITLE": "Technical Research Note",
      "AUTHORS": "United States. Dept. of the Army",
      "SUBJECT": "Military research",
      "YEAR": 1905
    },
    {
      "SR_NO": 430,
      "TITLE": "Sammy Keyes and the Art of Deception",
      "AUTHORS": "Wendelin Van Draanen",
      "SUBJECT": "Juvenile Fiction",
      "YEAR": 2009
    },
    {
      "SR_NO": 431,
      "TITLE": "Sammy Keyes and the Search for Snake Eyes",
      "AUTHORS": "Wendelin Van Draanen",
      "SUBJECT": "Juvenile Fiction",
      "YEAR": 2008
    },
    {
      "SR_NO": 432,
      "TITLE": "ACSA Annual Directory",
      "AUTHORS": "Association of Collegiate Schools of Architecture",
      "SUBJECT": "Architecture",
      "YEAR": 1905
    },
    {
      "SR_NO": 433,
      "TITLE": "The Play of Daniel Keyes' Flowers for Algernon",
      "AUTHORS": "Bert Coules', 'Daniel Keyes",
      "SUBJECT": "English drama",
      "YEAR": 1905
    },
    {
      "SR_NO": 434,
      "TITLE": "The Southern Frontier 1670-1732",
      "AUTHORS": "Verner Crane",
      "SUBJECT": "History",
      "YEAR": 1905
    },
    {
      "SR_NO": 435,
      "TITLE": "Spanish Peaks Wilderness Area",
      "AUTHORS": "United States. Congress. Senate. Committee on Interior and Insular Affairs. Subcommittee on Public Lands",
      "SUBJECT": "Spanish Peaks Wilderness (Colo.)",
      "YEAR": 1905
    },
    {
      "SR_NO": 436,
      "TITLE": "Journal of the Iowa Archeological Society",
      "AUTHORS": "Iowa Archeological Society",
      "SUBJECT": "Indians of North America",
      "YEAR": 1905
    },
    {
      "SR_NO": 437,
      "TITLE": "World war in Spain",
      "AUTHORS": "Arthur Frederic Loveday",
      "SUBJECT": "History",
      "YEAR": 1905
    },
    {
      "SR_NO": 438,
      "TITLE": "The Southern Frontier, 1670-1732",
      "AUTHORS": "Verner Winslow Crane",
      "SUBJECT": "British",
      "YEAR": 1905
    },
    {
      "SR_NO": 439,
      "TITLE": "Biographical Memoirs",
      "AUTHORS": "National Academy of Sciences', 'Office of the Home Secretary",
      "SUBJECT": "Biography & Autobiography",
      "YEAR": 1998
    },
    {
      "SR_NO": 440,
      "TITLE": "Journal of the Executive Proceedings of the Senate of the United States of America",
      "AUTHORS": "United States. Congress. Senate",
      "SUBJECT": "Legislative journals",
      "YEAR": 1905
    },
    {
      "SR_NO": 441,
      "TITLE": "Journal of the Executive Proceedings of the Senate",
      "AUTHORS": "United States. Congress. Senate",
      "SUBJECT": "Legislation",
      "YEAR": 1905
    },
    {
      "SR_NO": 442,
      "TITLE": "All this is Louisiana",
      "AUTHORS": "Frances Parkinson Keyes",
      "SUBJECT": "Louisiana",
      "YEAR": 1905
    },
    {
      "SR_NO": 443,
      "TITLE": "Southern Writers",
      "AUTHORS": "Joseph M. Flora', 'Amber Vogel",
      "SUBJECT": "Reference",
      "YEAR": 2006
    },
    {
      "SR_NO": 444,
      "TITLE": "The Career of David Noble",
      "AUTHORS": "Frances Parkinson Keyes",
      "SUBJECT": "Fiction in English",
      "YEAR": 1905
    },
    {
      "SR_NO": 445,
      "TITLE": "Apple parers",
      "AUTHORS": "Don Thornton",
      "SUBJECT": "Antiques & Collectibles",
      "YEAR": 2010
    },
    {
      "SR_NO": 446,
      "TITLE": "Holstein-Friesian Herd-book",
      "AUTHORS": "Holstein-Friesian Association of America",
      "SUBJECT": "Cattle",
      "YEAR": 1905
    },
    {
      "SR_NO": 447,
      "TITLE": "The Canadian Record of Performance for Purebred Dairy Cattle",
      "AUTHORS": "Canada. Dept. of Agriculture. Production Service",
      "SUBJECT": "Cattle",
      "YEAR": 1905
    },
    {
      "SR_NO": 448,
      "TITLE": "Holstein-Friesian Herd-book, Containing a Record of All Holstein-Friesian Cattle ...",
      "AUTHORS": "Holstein-Friesian Association of America",
      "SUBJECT": "Cattle",
      "YEAR": 1905
    },
    {
      "SR_NO": 449,
      "TITLE": "Holstein-Friesian Herd Book",
      "AUTHORS": "Holstein-Friesian Association of Canada",
      "SUBJECT": "Cattle",
      "YEAR": 1905
    },
    {
      "SR_NO": 450,
      "TITLE": "The Azusa Street Mission and Revival",
      "AUTHORS": "Cecil M. Robeck",
      "SUBJECT": "History",
      "YEAR": 2006
    },
    {
      "SR_NO": 451,
      "TITLE": "Sammy Keyes and the Search for Snake Eyes",
      "AUTHORS": "Wendelin Van Draanen",
      "SUBJECT": "Juvenile Fiction",
      "YEAR": 2008
    },
    {
      "SR_NO": 452,
      "TITLE": "Apple TV Portable Genius",
      "AUTHORS": "Guy Hart-Davis",
      "SUBJECT": "Computers",
      "YEAR": 2012
    },
    {
      "SR_NO": 453,
      "TITLE": "Advances in Cryptology â€“ EUROCRYPT 2001",
      "AUTHORS": "Birgit Pfitzmann",
      "SUBJECT": "Computers",
      "YEAR": 2003
    },
    {
      "SR_NO": 454,
      "TITLE": "AFHRL-TR.",
      "AUTHORS": "Air Force Human Resources Laboratory",
      "SUBJECT": "Aeronautics, Military",
      "YEAR": 1905
    },
    {
      "SR_NO": 455,
      "TITLE": "Huffed Masculinity. The Female Threat in Cain's \"Double Indemnity\"",
      "AUTHORS": "Stephan Riedl",
      "SUBJECT": "Literary Criticism",
      "YEAR": 2017
    },
    {
      "SR_NO": 456,
      "TITLE": "Teaching Students with Mental Retardation",
      "AUTHORS": "Deanna J. Sands",
      "SUBJECT": "Education",
      "YEAR": 1905
    },
    {
      "SR_NO": 457,
      "TITLE": "Human Motivation and Interpersonal Relationships",
      "AUTHORS": "Netta Weinstein",
      "SUBJECT": "Psychology",
      "YEAR": 2014
    },
    {
      "SR_NO": 458,
      "TITLE": "How Mentally Handicapped Children Learn Under Classroom Conditions: Brief screening instruments for evaluating the academic skills and personal adjustment of educable mentally handicapped children",
      "AUTHORS": "Chicago (Ill.). Board of Education",
      "SUBJECT": "Children with mental disabilities",
      "YEAR": 1905
    },
    {
      "SR_NO": 459,
      "TITLE": "The life of Elisha Williams Keyes",
      "AUTHORS": "Richard Watson Hantke",
      "SUBJECT": "Biography & Autobiography",
      "YEAR": 1905
    },
    {
      "SR_NO": 460,
      "TITLE": "Capitol Threat",
      "AUTHORS": "William Bernhardt",
      "SUBJECT": "Fiction",
      "YEAR": 2007
    },
    {
      "SR_NO": 461,
      "TITLE": "Outrageous fortune",
      "AUTHORS": "Roger Keyes",
      "SUBJECT": "Biography & Autobiography",
      "YEAR": 1984
    },
    {
      "SR_NO": 462,
      "TITLE": "Film Noir",
      "AUTHORS": "Alain Silver', 'James Ursini",
      "SUBJECT": "Art",
      "YEAR": 1905
    },
    {
      "SR_NO": 463,
      "TITLE": "History of an idea",
      "AUTHORS": "Allan Michael Hoffman",
      "SUBJECT": "Education",
      "YEAR": 1981
    },
    {
      "SR_NO": 464,
      "TITLE": "Assignment to catastrophe",
      "AUTHORS": "Sir Edward Louis Spears (bart.)",
      "SUBJECT": "History",
      "YEAR": 1905
    },
    {
      "SR_NO": 465,
      "TITLE": "Assignment to catastrophe",
      "AUTHORS": "Sir Edward Spears",
      "SUBJECT": "History",
      "YEAR": 1905
    },
    {
      "SR_NO": 466,
      "TITLE": "Henry Wilson and the Coming of the Civil War",
      "AUTHORS": "John L. Myers",
      "SUBJECT": "Biography & Autobiography",
      "YEAR": 2005
    },
    {
      "SR_NO": 467,
      "TITLE": "The University Geological Survey of Kansas",
      "AUTHORS": "Kansas Geological Survey",
      "SUBJECT": "Coal",
      "YEAR": 1905
    },
    {
      "SR_NO": 468,
      "TITLE": "State Geological Survey of Kansas",
      "AUTHORS": "Kansas Geological Survey",
      "SUBJECT": "Geology",
      "YEAR": 1905
    },
    {
      "SR_NO": 469,
      "TITLE": "Reports on the University Geological Survey of Kansas",
      "AUTHORS": "Kansas Geological Survey",
      "SUBJECT": "Geology",
      "YEAR": 1905
    },
    {
      "SR_NO": 470,
      "TITLE": "Special Report on Coal",
      "AUTHORS": "Erasmus Haworth",
      "SUBJECT": "Coal",
      "YEAR": 1905
    },
    {
      "SR_NO": 471,
      "TITLE": "State Geological Survey of Kansas. [Reports]",
      "AUTHORS": "Kansas Geological Survey",
      "SUBJECT": "Geology",
      "YEAR": 1905
    },
    {
      "SR_NO": 472,
      "TITLE": "Language Planning Processes",
      "AUTHORS": "Rubin Jernudd",
      "SUBJECT": "Language Arts & Disciplines",
      "YEAR": 1905
    },
    {
      "SR_NO": 473,
      "TITLE": "The life of Elisha Williams Keyes",
      "AUTHORS": "Richard Watson Hantke",
      "SUBJECT": "Biography & Autobiography",
      "YEAR": 1905
    },
    {
      "SR_NO": 474,
      "TITLE": "Sexual Symmetry",
      "AUTHORS": "David Konstan",
      "SUBJECT": "History",
      "YEAR": 2014
    },
    {
      "SR_NO": 475,
      "TITLE": "Beginning Blender",
      "AUTHORS": "Lance Flavell",
      "SUBJECT": "Computers",
      "YEAR": 2010
    },
    {
      "SR_NO": 476,
      "TITLE": "Molecular Symmetry and Spectroscopy",
      "AUTHORS": "Philip R. Bunker', 'Per Jensen",
      "SUBJECT": "Molecular spectra",
      "YEAR": 1905
    },
    {
      "SR_NO": 477,
      "TITLE": "Proceedings of the ... Midwest Symposium on Circuits and Systems",
      "AUTHORS": "IEEE Circuits and Systems Society",
      "SUBJECT": "Electrical engineering",
      "YEAR": 1905
    },
    {
      "SR_NO": 478,
      "TITLE": "Acta Numerica 1994:",
      "AUTHORS": "Arieh Iserles",
      "SUBJECT": "Mathematics",
      "YEAR": 1994
    },
    {
      "SR_NO": 479,
      "TITLE": "Grief Counseling and Grief Therapy, Fifth Edition",
      "AUTHORS": "J. William Worden, PhD, ABPP",
      "SUBJECT": "Social Science",
      "YEAR": 2018
    },
    {
      "SR_NO": 480,
      "TITLE": "Advanced Practice Nursing in the Care of Older Adults",
      "AUTHORS": "Laruie Kennedy-Malone', 'Lori Martin-Plank', 'Evelyn Duffy",
      "SUBJECT": "Medical",
      "YEAR": 2018
    },
    {
      "SR_NO": 481,
      "TITLE": "Small Treasons",
      "AUTHORS": "Mark Powell",
      "SUBJECT": "Fiction",
      "YEAR": 2017
    },
    {
      "SR_NO": 482,
      "TITLE": "Sammy Keyes and the Power of Justice Jack",
      "AUTHORS": "Wendelin Van Draanen",
      "SUBJECT": "Juvenile Fiction",
      "YEAR": 2012
    },
    {
      "SR_NO": 483,
      "TITLE": "Sammy Keyes and the Psycho Kitty Queen",
      "AUTHORS": "Wendelin Van Draanen",
      "SUBJECT": "Juvenile Fiction",
      "YEAR": 2008
    },
    {
      "SR_NO": 484,
      "TITLE": "Sammy Keyes and the Search for Snake Eyes",
      "AUTHORS": "Wendelin Van Draanen",
      "SUBJECT": "Juvenile Fiction",
      "YEAR": 2008
    },
    {
      "SR_NO": 485,
      "TITLE": "Angels",
      "AUTHORS": "Marian Keyes",
      "SUBJECT": "Fiction",
      "YEAR": 2005
    },
    {
      "SR_NO": 486,
      "TITLE": "Arranging Grief",
      "AUTHORS": "Dana Luciano",
      "SUBJECT": "Literary Criticism",
      "YEAR": 2007
    },
    {
      "SR_NO": 487,
      "TITLE": "Principles and Practice of Grief Counseling",
      "AUTHORS": "Howard R. Winokuer, PhD', 'Darcy L. Harris, PhD, FT",
      "SUBJECT": "Social Science",
      "YEAR": 2012
    },
    {
      "SR_NO": 488,
      "TITLE": "Charles Henry Keyes",
      "AUTHORS": "Fenton Keyes",
      "SUBJECT": "College presidents",
      "YEAR": 1905
    },
    {
      "SR_NO": 489,
      "TITLE": "Transforming Engagement, Happiness and Well-Being",
      "AUTHORS": "William Scott-Jackson', 'Andrew Mayo",
      "SUBJECT": "Business & Economics",
      "YEAR": 2017
    },
    {
      "SR_NO": 490,
      "TITLE": "The Army of the Potomac: Birth of command, November 1860-September 1861",
      "AUTHORS": "Russel Harrison Beatie",
      "SUBJECT": "History",
      "YEAR": 1905
    },
    {
      "SR_NO": 491,
      "TITLE": "The Army of the Potomac",
      "AUTHORS": "Russell H. Beatie",
      "SUBJECT": "History",
      "YEAR": 1905
    },
    {
      "SR_NO": 492,
      "TITLE": "Sammy Keyes and the Hollywood Mummy",
      "AUTHORS": "Wendelin Van Draanen",
      "SUBJECT": "Juvenile Fiction",
      "YEAR": 2009
    },
    {
      "SR_NO": 493,
      "TITLE": "Sammy Keyes and the Kiss Goodbye",
      "AUTHORS": "Wendelin Van Draanen",
      "SUBJECT": "Juvenile Fiction",
      "YEAR": 2014
    },
    {
      "SR_NO": 494,
      "TITLE": "Sammy Keyes and the Art of Deception",
      "AUTHORS": "Wendelin Van Draanen",
      "SUBJECT": "Juvenile Fiction",
      "YEAR": 2009
    },
    {
      "SR_NO": 495,
      "TITLE": "Beauty and Sadness",
      "AUTHORS": "Yasunari Kawabata",
      "SUBJECT": "Fiction",
      "YEAR": 2013
    },
    {
      "SR_NO": 496,
      "TITLE": "Sushi for Beginners",
      "AUTHORS": "Marian Keyes",
      "SUBJECT": "Fiction",
      "YEAR": 2005
    },
    {
      "SR_NO": 497,
      "TITLE": "The Hope and the Sadness",
      "AUTHORS": "SiobhÃ¡n Lankford",
      "SUBJECT": "Cork (Ireland : County)",
      "YEAR": 1905
    },
    {
      "SR_NO": 498,
      "TITLE": "Stabilizing the Prices of Certain Agricultural Products",
      "AUTHORS": "United States. Congress. Senate. Committee on Agriculture and Forestry",
      "SUBJECT": "Agricultural prices",
      "YEAR": 1905
    },
    {
      "SR_NO": 499,
      "TITLE": "Translocal Geographies",
      "AUTHORS": "Katherine Brickell', 'Ayona Datta",
      "SUBJECT": "Social Science",
      "YEAR": 1905
    },
    {
      "SR_NO": 500,
      "TITLE": "Report of the Auditor of the State of South Dakota, for the Fiscal Year Ending ...",
      "AUTHORS": "[\"South Dakota. Auditor's Office\"]",
      "SUBJECT": "Finance",
      "YEAR": 1905
    },
    {
      "SR_NO": 501,
      "TITLE": "Governor's Budget",
      "AUTHORS": "California. Governor",
      "SUBJECT": "Budget",
      "YEAR": 1905
    },
    {
      "SR_NO": 502,
      "TITLE": "Budget Submitted to the California Legislature",
      "AUTHORS": "California. Governor",
      "SUBJECT": "Budget",
      "YEAR": 1905
    },
    {
      "SR_NO": 503,
      "TITLE": "International Monetary Fund Annual Report 2007",
      "AUTHORS": "International Monetary Fund",
      "SUBJECT": "Business & Economics",
      "YEAR": 2007
    },
    {
      "SR_NO": 504,
      "TITLE": "Genetics of Psychological Well-Being",
      "AUTHORS": "Michael Pluess",
      "SUBJECT": "Psychology",
      "YEAR": 2015
    },
    {
      "SR_NO": 505,
      "TITLE": "Encyclopedia of Genetics",
      "AUTHORS": "Eric C.R. Reeve",
      "SUBJECT": "Reference",
      "YEAR": 2014
    },
    {
      "SR_NO": 506,
      "TITLE": "Compendium of Problems in Genetics",
      "AUTHORS": "John Kuspira', 'Ramesh Bhambhani",
      "SUBJECT": "Science",
      "YEAR": 1905
    },
    {
      "SR_NO": 507,
      "TITLE": "Studies in the Genetics of Drosophila",
      "AUTHORS": "John Thomas Patterson",
      "SUBJECT": "Drosophila",
      "YEAR": 1905
    },
    {
      "SR_NO": 508,
      "TITLE": "Bioethical and Evolutionary Approaches to Medicine and the Law",
      "AUTHORS": "W. Noel Keyes",
      "SUBJECT": "Medical",
      "YEAR": 1905
    },
    {
      "SR_NO": 509,
      "TITLE": "Sammy Keyes and the Psycho Kitty Queen",
      "AUTHORS": "Wendelin Van Draanen",
      "SUBJECT": "Juvenile Fiction",
      "YEAR": 2008
    },
    {
      "SR_NO": 510,
      "TITLE": "Cardiovascular Genetics and Genomics in Clinical Practice",
      "AUTHORS": "Donna K. Arnett, PhD', 'Sanjiv J. Shah, MD",
      "SUBJECT": "Medical",
      "YEAR": 2014
    },
    {
      "SR_NO": 511,
      "TITLE": "Reproductive Genetics, Gender and the Body",
      "AUTHORS": "Elizabeth Ettorre",
      "SUBJECT": "Medical",
      "YEAR": 2013
    },
    {
      "SR_NO": 512,
      "TITLE": "Molecular Genetics of Sex Determination",
      "AUTHORS": "Stephen S. Wachtel",
      "SUBJECT": "Medical",
      "YEAR": 1905
    },
    {
      "SR_NO": 513,
      "TITLE": "Bibliography of North American Geology, 1933 and 1934",
      "AUTHORS": "Emma Mertins Thom",
      "SUBJECT": "Geology",
      "YEAR": 1905
    },
    {
      "SR_NO": 514,
      "TITLE": "Contributions to Economic Geology (short Papers and Preliminary Reports, 1925",
      "AUTHORS": "Gerald Francis Loughlin",
      "SUBJECT": "Antimony",
      "YEAR": 1905
    },
    {
      "SR_NO": 515,
      "TITLE": "Invisible Master",
      "AUTHORS": "Leo Lyon Zagami",
      "SUBJECT": "Body, Mind & Spirit",
      "YEAR": 2018
    },
    {
      "SR_NO": 516,
      "TITLE": "Enochian Magic for Beginners",
      "AUTHORS": "Donald Tyson",
      "SUBJECT": "Body, Mind & Spirit",
      "YEAR": 2002
    },
    {
      "SR_NO": 517,
      "TITLE": "The Mexican American and the Law",
      "AUTHORS": "Carlos E. Cortes",
      "SUBJECT": "Social Science",
      "YEAR": 1905
    },
    {
      "SR_NO": 518,
      "TITLE": "Justice for Salcido",
      "AUTHORS": "S. Guy Endore', 'Civil Rights Congress of Los Angeles",
      "SUBJECT": "Mexican Americans",
      "YEAR": 1905
    },
    {
      "SR_NO": 519,
      "TITLE": "Annual",
      "AUTHORS": "United Fresh Fruit and Vegetable Association",
      "SUBJECT": "Fruit trade",
      "YEAR": 1905
    },
    {
      "SR_NO": 520,
      "TITLE": "Merit and the Millennium",
      "AUTHORS": "Anthony R. Walker",
      "SUBJECT": "Lahu (Asian people)",
      "YEAR": 1905
    },
    {
      "SR_NO": 521,
      "TITLE": "Man of the Mist",
      "AUTHORS": "Elizabeth Mayne",
      "SUBJECT": "Fiction",
      "YEAR": 2011
    },
    {
      "SR_NO": 522,
      "TITLE": "A Historical Guide to Henry David Thoreau",
      "AUTHORS": "William E. Cain",
      "SUBJECT": "Literary Criticism",
      "YEAR": 2000
    },
    {
      "SR_NO": 523,
      "TITLE": "Soul to soul",
      "AUTHORS": "Mary Keyes Burgess",
      "SUBJECT": "Cooking",
      "YEAR": 1976
    },
    {
      "SR_NO": 524,
      "TITLE": "Sammy Keyes and the Night of Skulls",
      "AUTHORS": "Wendelin Van Draanen",
      "SUBJECT": "Juvenile Fiction",
      "YEAR": 2011
    },
    {
      "SR_NO": 525,
      "TITLE": "The Science of the Soul in Colonial New England",
      "AUTHORS": "Sarah Rivett",
      "SUBJECT": "History",
      "YEAR": 2012
    },
    {
      "SR_NO": 526,
      "TITLE": "The Keyes of the Kingdom of Heaven",
      "AUTHORS": "John Cotton",
      "SUBJECT": "Congregational churches",
      "YEAR": 1905
    },
    {
      "SR_NO": 527,
      "TITLE": "Sammy Keyes and the Kiss Goodbye",
      "AUTHORS": "Wendelin Van Draanen",
      "SUBJECT": "Juvenile Fiction",
      "YEAR": 2014
    },
    {
      "SR_NO": 528,
      "TITLE": "Kahlil Gibran",
      "AUTHORS": "Jean Gibran', 'Kahlil Gibran",
      "SUBJECT": "Biography & Autobiography",
      "YEAR": 1905
    },
    {
      "SR_NO": 529,
      "TITLE": "How to Teach Meditation to Children",
      "AUTHORS": "David Fontana', 'Ingrid Slack",
      "SUBJECT": "Body, Mind & Spirit",
      "YEAR": 2017
    },
    {
      "SR_NO": 530,
      "TITLE": "Human Rights in Thailand",
      "AUTHORS": "Don F. Selby",
      "SUBJECT": "Political Science",
      "YEAR": 2018
    },
    {
      "SR_NO": 531,
      "TITLE": "Thailand's International Meditation Centers",
      "AUTHORS": "Brooke Schedneck",
      "SUBJECT": "Social Science",
      "YEAR": 2015
    },
    {
      "SR_NO": 532,
      "TITLE": "Collected poems",
      "AUTHORS": "Sidney Keyes', 'Michael Leverson Meyer",
      "SUBJECT": "Poetry",
      "YEAR": 1905
    },
    {
      "SR_NO": 533,
      "TITLE": "Astral Travel",
      "AUTHORS": "Gavin Frost', 'Yvonne Frost",
      "SUBJECT": "Astral projection",
      "YEAR": 1905
    },
    {
      "SR_NO": 534,
      "TITLE": "Making Fields of Merit",
      "AUTHORS": "Monica Lindberg Falk",
      "SUBJECT": "History",
      "YEAR": 1905
    },
    {
      "SR_NO": 535,
      "TITLE": "Meditation For Dummies",
      "AUTHORS": "Stephan Bodian",
      "SUBJECT": "Body, Mind & Spirit",
      "YEAR": 2011
    },
    {
      "SR_NO": 536,
      "TITLE": "A meditation upon the Lord's prayer, written by the kings maiestie for the benefit of all his subjects, especially of such as follow the court",
      "AUTHORS": "James I (king of Gt. Britain.)",
      "SUBJECT": "[\"Lord's prayer\"]",
      "YEAR": 1904
    },
    {
      "SR_NO": 537,
      "TITLE": "Letters on Occult Meditation",
      "AUTHORS": "Alice Bailey",
      "SUBJECT": "Meditation",
      "YEAR": 1905
    },
    {
      "SR_NO": 538,
      "TITLE": "Yoga and Science in Pain Care",
      "AUTHORS": "Neil Pearson', 'Shelly Prosko', 'Marlysa Sullivan",
      "SUBJECT": "Health & Fitness",
      "YEAR": 2019
    },
    {
      "SR_NO": 539,
      "TITLE": "Anatomy of Hatha Yoga",
      "AUTHORS": "David Coulter",
      "SUBJECT": "Hatha yoga",
      "YEAR": 1905
    },
    {
      "SR_NO": 540,
      "TITLE": "Sammy Keyes and the Search for Snake Eyes",
      "AUTHORS": "Wendelin Van Draanen",
      "SUBJECT": "Juvenile Fiction",
      "YEAR": 2008
    },
    {
      "SR_NO": 541,
      "TITLE": "Sammy Keyes and the Art of Deception",
      "AUTHORS": "Wendelin Van Draanen",
      "SUBJECT": "Juvenile Fiction",
      "YEAR": 2009
    },
    {
      "SR_NO": 542,
      "TITLE": "Sammy Keyes and the Psycho Kitty Queen",
      "AUTHORS": "Wendelin Van Draanen",
      "SUBJECT": "Juvenile Fiction",
      "YEAR": 2008
    },
    {
      "SR_NO": 543,
      "TITLE": "Building a Dune Buggy - The Essential Manual",
      "AUTHORS": "Paul Shakespeare",
      "SUBJECT": "Transportation",
      "YEAR": 2006
    },
    {
      "SR_NO": 544,
      "TITLE": "The Color Correction Handbook",
      "AUTHORS": "Alexis Van Hurkman",
      "SUBJECT": "Computers",
      "YEAR": 2010
    },
    {
      "SR_NO": 545,
      "TITLE": "The Art and Science of Digital Compositing",
      "AUTHORS": "Ron Brinkmann",
      "SUBJECT": "Computers",
      "YEAR": 2008
    },
    {
      "SR_NO": 546,
      "TITLE": "Helium Production at the Bureau of Mines Keyes, Okla., Plant",
      "AUTHORS": "W. M. Deaton', 'Robert D. Haynes",
      "SUBJECT": "Helium",
      "YEAR": 1905
    },
    {
      "SR_NO": 547,
      "TITLE": "Decisions and Orders of the National Labor Relations Board",
      "AUTHORS": "United States. National Labor Relations Board",
      "SUBJECT": "Labor laws and legislation",
      "YEAR": 1905
    },
    {
      "SR_NO": 548,
      "TITLE": "Sammy Keyes and the Psycho Kitty Queen",
      "AUTHORS": "Wendelin Van Draanen",
      "SUBJECT": "Juvenile Fiction",
      "YEAR": 2008
    },
    {
      "SR_NO": 549,
      "TITLE": "Sammy Keyes and the Search for Snake Eyes",
      "AUTHORS": "Wendelin Van Draanen",
      "SUBJECT": "Juvenile Fiction",
      "YEAR": 2008
    },
    {
      "SR_NO": 550,
      "TITLE": "Sammy Keyes and the Search for Snake Eyes",
      "AUTHORS": "Wendelin Van Draanen",
      "SUBJECT": "Juvenile Fiction",
      "YEAR": 2008
    },
    {
      "SR_NO": 551,
      "TITLE": "Journal",
      "AUTHORS": "East India Association (London, England)",
      "SUBJECT": "India",
      "YEAR": 1905
    },
    {
      "SR_NO": 552,
      "TITLE": "Index of Patents Issued from the United States Patent Office",
      "AUTHORS": "United States. Patent Office",
      "SUBJECT": "Patents",
      "YEAR": 1905
    },
    {
      "SR_NO": 553,
      "TITLE": "Documents of the Assembly of the State of New York",
      "AUTHORS": "New York (State). Legislature. Assembly",
      "SUBJECT": "Government publications",
      "YEAR": 1905
    },
    {
      "SR_NO": 554,
      "TITLE": "Documents of the Senate of the State of New York",
      "AUTHORS": "New York (State). Legislature. Senate",
      "SUBJECT": "New York (State)",
      "YEAR": 1905
    },
    {
      "SR_NO": 555,
      "TITLE": "Flowers for Algernon: A Novel by Daniel Keyes (Trivia-On-Books)",
      "AUTHORS": "Trivion Books",
      "SUBJECT": "Study Aids",
      "YEAR": 2016
    },
    {
      "SR_NO": 556,
      "TITLE": "The Reporterâ€™s Notebook",
      "AUTHORS": "Dennis Bloodworth",
      "SUBJECT": "Travel",
      "YEAR": 2010
    },
    {
      "SR_NO": 557,
      "TITLE": "Directory of Foreign Manufacturers in the United States",
      "AUTHORS": "Jeffrey S Arpan', 'David A Ricks",
      "SUBJECT": "Technology & Engineering",
      "YEAR": 1994
    },
    {
      "SR_NO": 558,
      "TITLE": "Directory of American Firms Operating in Foreign Countries",
      "AUTHORS": "Juvenal LondoÃ±o Angel",
      "SUBJECT": "Corporations, American",
      "YEAR": 1905
    },
    {
      "SR_NO": 559,
      "TITLE": "Let's Draw Manga",
      "AUTHORS": "Makoto Nakajima', 'Big Mouth Factory",
      "SUBJECT": "Art",
      "YEAR": 1905
    },
    {
      "SR_NO": 560,
      "TITLE": "Manga",
      "AUTHORS": "Toni Johnson-Woods",
      "SUBJECT": "Literary Criticism",
      "YEAR": 2010
    },
    {
      "SR_NO": 561,
      "TITLE": "Comics, Manga, and Graphic Novels",
      "AUTHORS": "Robert S. Petersen",
      "SUBJECT": "Comics & Graphic Novels",
      "YEAR": 1905
    },
    {
      "SR_NO": 562,
      "TITLE": "Manga for the Beginner Shoujo",
      "AUTHORS": "Christopher Hart",
      "SUBJECT": "Art",
      "YEAR": 2011
    },
    {
      "SR_NO": 563,
      "TITLE": "The Mineral Resources of New Mexico",
      "AUTHORS": "Fayette Alexander Jones",
      "SUBJECT": "Mines and mineral resources",
      "YEAR": 1905
    },
    {
      "SR_NO": 564,
      "TITLE": "Watching Anime, Reading Manga",
      "AUTHORS": "Fred Patten",
      "SUBJECT": "Performing Arts",
      "YEAR": 1905
    },
    {
      "SR_NO": 565,
      "TITLE": "Manga from the Floating World",
      "AUTHORS": "Adam L. Kern",
      "SUBJECT": "Design",
      "YEAR": 1905
    },
    {
      "SR_NO": 566,
      "TITLE": "Global Children, Global Media",
      "AUTHORS": "D. Buckingham', 'Liesbeth de Block",
      "SUBJECT": "Social Science",
      "YEAR": 2007
    },
    {
      "SR_NO": 567,
      "TITLE": "Ideas que pegan",
      "AUTHORS": "Chip Heath', 'Dan Heath",
      "SUBJECT": "Business & Economics",
      "YEAR": 2011
    },
    {
      "SR_NO": 568,
      "TITLE": "Cyber Ireland",
      "AUTHORS": "C. Lynch",
      "SUBJECT": "Social Science",
      "YEAR": 2014
    },
    {
      "SR_NO": 569,
      "TITLE": "Creating High-quality Classroom Assignments",
      "AUTHORS": "Lindsay Clare Matsumura",
      "SUBJECT": "Education",
      "YEAR": 1905
    },
    {
      "SR_NO": 570,
      "TITLE": "Made to Stick",
      "AUTHORS": "Chip Heath', 'Dan Heath",
      "SUBJECT": "Business & Economics",
      "YEAR": 2007
    },
    {
      "SR_NO": 571,
      "TITLE": "The Shining Wall",
      "AUTHORS": "Melissa Ferguson",
      "SUBJECT": "Fiction",
      "YEAR": 2019
    },
    {
      "SR_NO": 572,
      "TITLE": "Programming Android",
      "AUTHORS": "Zigurd Mednieks', 'Laird Dornin', 'G. Blake Meike', 'Masumi Nakamura",
      "SUBJECT": "Computers",
      "YEAR": 2011
    },
    {
      "SR_NO": 573,
      "TITLE": "Raspberry Pi Android Projects",
      "AUTHORS": "Gokhan Kurt",
      "SUBJECT": "Computers",
      "YEAR": 2015
    },
    {
      "SR_NO": 574,
      "TITLE": "How to Build an Android",
      "AUTHORS": "David F. Dufty",
      "SUBJECT": "Technology & Engineering",
      "YEAR": 2012
    },
    {
      "SR_NO": 575,
      "TITLE": "Unlocking Android",
      "AUTHORS": "W. Frank Ableson', 'Charlie E. Collins', 'Robi Sen",
      "SUBJECT": "Computers",
      "YEAR": 1905
    },
    {
      "SR_NO": 576,
      "TITLE": "Stranger in a Strange Land",
      "AUTHORS": "Robert A. Heinlein",
      "SUBJECT": "Fiction",
      "YEAR": 1987
    },
    {
      "SR_NO": 577,
      "TITLE": "Red-haired android",
      "AUTHORS": "Jeremy Reed",
      "SUBJECT": "Poetry",
      "YEAR": 1992
    },
    {
      "SR_NO": 578,
      "TITLE": "Enterprise 2.0",
      "AUTHORS": "Jessica Keyes",
      "SUBJECT": "Business & Economics",
      "YEAR": 2016
    },
    {
      "SR_NO": 579,
      "TITLE": "Almost Human",
      "AUTHORS": "William F. Nolan",
      "SUBJECT": "Androids",
      "YEAR": 1905
    },
    {
      "SR_NO": 580,
      "TITLE": "Flowers for Algernon",
      "AUTHORS": "Daniel Keyes",
      "SUBJECT": "Fiction",
      "YEAR": 2005
    },
    {
      "SR_NO": 581,
      "TITLE": "iPhone: The Missing Manual",
      "AUTHORS": "David Pogue",
      "SUBJECT": "Computers",
      "YEAR": 2008
    },
    {
      "SR_NO": 582,
      "TITLE": "Beginning iPhone Development",
      "AUTHORS": "Jack Nutting', 'Fredrik Olsson', 'David Mark', 'Jeff LaMarche', 'Kim Topley",
      "SUBJECT": "Computers",
      "YEAR": 2014
    },
    {
      "SR_NO": 583,
      "TITLE": "Beginning iPhone Development with Swift",
      "AUTHORS": "Kim Topley', 'Fredrik Olsson', 'Jack Nutting', 'David Mark', 'Jeff LaMarche",
      "SUBJECT": "Computers",
      "YEAR": 2014
    },
    {
      "SR_NO": 584,
      "TITLE": "Beginning iPhone Development with Swift 3",
      "AUTHORS": "Molly Maskrey', 'Kim Topley', 'David Mark', 'Fredrik Olsson', 'JEFF LAMARCHE",
      "SUBJECT": "Computers",
      "YEAR": 2016
    },
    {
      "SR_NO": 585,
      "TITLE": "Beginning iPhone Development with Swift 4",
      "AUTHORS": "Molly K. Maskrey",
      "SUBJECT": "Computers",
      "YEAR": 2017
    },
    {
      "SR_NO": 586,
      "TITLE": "Beginning iPhone 4 Development",
      "AUTHORS": "David Mark', 'Jeff LaMarche', 'Jack Nutting",
      "SUBJECT": "Computers",
      "YEAR": 2011
    },
    {
      "SR_NO": 587,
      "TITLE": "iPhone Advanced Projects",
      "AUTHORS": "David Mark', 'Dylan Bruzenak', 'Joachim Bondo', 'Owen Goss', 'Peter Honeder', 'Ray Kiddy', 'Steve Finkelstein', 'Tom Harrington', 'Jonathan Saggau', 'Noel Llopis', 'Ben Smith', 'Joe Pezzillo', 'Florian Pflug', 'Roderick Smith",
      "SUBJECT": "Computers",
      "YEAR": 2010
    },
    {
      "SR_NO": 588,
      "TITLE": "IPhone Fully Loaded",
      "AUTHORS": "Andy Ihnatko",
      "SUBJECT": "Computers",
      "YEAR": 2008
    },
    {
      "SR_NO": 589,
      "TITLE": "The IPhone Book",
      "AUTHORS": "Scott Kelby', 'Terry White",
      "SUBJECT": "Computers",
      "YEAR": 1905
    },
    {
      "SR_NO": 590,
      "TITLE": "The Collector",
      "AUTHORS": "Scott Wittenburg",
      "SUBJECT": "Fiction",
      "YEAR": 2010
    },
    {
      "SR_NO": 591,
      "TITLE": "Android Mobile Computing Using Samsung Tablets and Smartphones Running Android 2.3",
      "AUTHORS": "Rene Djurup",
      "SUBJECT": "Computers",
      "YEAR": 2010
    },
    {
      "SR_NO": 592,
      "TITLE": "My Samsung Galaxy S5",
      "AUTHORS": "Steve Schwartz",
      "SUBJECT": "Computers",
      "YEAR": 2014
    },
    {
      "SR_NO": 593,
      "TITLE": "My Samsung Galaxy S 4",
      "AUTHORS": "Steve Schwartz",
      "SUBJECT": "Computers",
      "YEAR": 2013
    },
    {
      "SR_NO": 594,
      "TITLE": "My Samsung Galaxy Tab 4",
      "AUTHORS": "Eric Butow', 'Lonzell Watson",
      "SUBJECT": "Computers",
      "YEAR": 2014
    },
    {
      "SR_NO": 595,
      "TITLE": "How to Do Everything Samsung Galaxy Tab",
      "AUTHORS": "Guy Hart-Davis",
      "SUBJECT": "Computers",
      "YEAR": 2011
    },
    {
      "SR_NO": 596,
      "TITLE": "The PC and Gadget Help Desk",
      "AUTHORS": "Mark Edward Soper",
      "SUBJECT": "Computers",
      "YEAR": 2014
    },
    {
      "SR_NO": 597,
      "TITLE": "Android Tips and Tricks",
      "AUTHORS": "Guy Hart-Davis",
      "SUBJECT": "Computers",
      "YEAR": 2014
    },
    {
      "SR_NO": 598,
      "TITLE": "Teach Yourself VISUALLY Android Phones and Tablets",
      "AUTHORS": "Paul McFedries', 'Guy Hart-Davis",
      "SUBJECT": "Computers",
      "YEAR": 2013
    },
    {
      "SR_NO": 599,
      "TITLE": "The Healthy PC: Preventive Care, Home Remedies, and Green Computing, 2nd Edition",
      "AUTHORS": "Guy Hart-Davis",
      "SUBJECT": "Computers",
      "YEAR": 2011
    },
    {
      "SR_NO": 600,
      "TITLE": "Bullying in North American Schools",
      "AUTHORS": "Dorothy L. Espelage', 'Susan M. Swearer",
      "SUBJECT": "Education",
      "YEAR": 2010
    },
    {
      "SR_NO": 601,
      "TITLE": "Reports of the Treasurer and the County Commissioners",
      "AUTHORS": "Berkshire County (Mass.)",
      "SUBJECT": "Finance, Public",
      "YEAR": 1905
    },
    {
      "SR_NO": 602,
      "TITLE": "Wilson Library Bulletin",
      "AUTHORS": "Stanley Kunitz', 'Marie D. Loizeaux",
      "SUBJECT": "Libraries",
      "YEAR": 1905
    },
    {
      "SR_NO": 603,
      "TITLE": "Methods in Immunotoxicology",
      "AUTHORS": "Gary R. Burleson', 'Jack H. Dean', 'Albert E. Munson",
      "SUBJECT": "Medical",
      "YEAR": 1995
    },
    {
      "SR_NO": 604,
      "TITLE": "Journal of the Senate of Maine",
      "AUTHORS": "Maine. Legislature. Senate",
      "SUBJECT": "Maine",
      "YEAR": 1905
    },
    {
      "SR_NO": 605,
      "TITLE": "Criminology Goes to the Movies",
      "AUTHORS": "Nicole Rafter', 'Michelle Brown",
      "SUBJECT": "Law",
      "YEAR": 2011
    },
    {
      "SR_NO": 606,
      "TITLE": "Shades of Gray",
      "AUTHORS": "Daniel Veirs",
      "SUBJECT": "Fiction",
      "YEAR": 2014
    },
    {
      "SR_NO": 607,
      "TITLE": "Tyler Perry",
      "AUTHORS": "Janice D. Hamlet",
      "SUBJECT": "Performing Arts",
      "YEAR": 2019
    },
    {
      "SR_NO": 608,
      "TITLE": "Costume Design in the Movies",
      "AUTHORS": "Elizabeth Leese",
      "SUBJECT": "Antiques & Collectibles",
      "YEAR": 2012
    },
    {
      "SR_NO": 609,
      "TITLE": "CliffsNotes on Keyes' Flowers For Algernon",
      "AUTHORS": "Janet Clark",
      "SUBJECT": "Literary Criticism",
      "YEAR": 2001
    },
    {
      "SR_NO": 610,
      "TITLE": "Sammy Keyes and the Psycho Kitty Queen",
      "AUTHORS": "Wendelin Van Draanen",
      "SUBJECT": "Juvenile Fiction",
      "YEAR": 2008
    },
    {
      "SR_NO": 611,
      "TITLE": "The Play of Daniel Keyes' Flowers for Algernon",
      "AUTHORS": "Bert Coules', 'Daniel Keyes",
      "SUBJECT": "English drama",
      "YEAR": 1905
    },
    {
      "SR_NO": 612,
      "TITLE": "Godzilla: King of the Monsters - the Official Movie Novelisation",
      "AUTHORS": "Greg Keyes",
      "SUBJECT": "Fiction",
      "YEAR": 2019
    },
    {
      "SR_NO": 613,
      "TITLE": "Billy Wilder, American Film Realist",
      "AUTHORS": "Richard Armstrong",
      "SUBJECT": "Performing Arts",
      "YEAR": 2015
    },
    {
      "SR_NO": 614,
      "TITLE": "A Divided World",
      "AUTHORS": "Nick Smedley",
      "SUBJECT": "Performing Arts",
      "YEAR": 2011
    },
    {
      "SR_NO": 615,
      "TITLE": "Tyler Perry",
      "AUTHORS": "Janice D. Hamlet",
      "SUBJECT": "Performing Arts",
      "YEAR": 2019
    },
    {
      "SR_NO": 616,
      "TITLE": "Dark cinema",
      "AUTHORS": "Jon Tuska",
      "SUBJECT": "Language Arts & Disciplines",
      "YEAR": 1905
    },
    {
      "SR_NO": 617,
      "TITLE": "Magill's Cinema Annual",
      "AUTHORS": "Frank Northen Magill",
      "SUBJECT": "Performing Arts",
      "YEAR": 1986
    },
    {
      "SR_NO": 618,
      "TITLE": "Success in the Cinema MoneyMaking Movies",
      "AUTHORS": "John Howard Reid",
      "SUBJECT": "Performing Arts",
      "YEAR": 2006
    },
    {
      "SR_NO": 619,
      "TITLE": "Hollywood's dark cinema",
      "AUTHORS": "R. Barton Palmer",
      "SUBJECT": "Performing Arts",
      "YEAR": 1905
    },
    {
      "SR_NO": 620,
      "TITLE": "Cinema as Weather",
      "AUTHORS": "Kristi McKim",
      "SUBJECT": "Art",
      "YEAR": 1905
    },
    {
      "SR_NO": 621,
      "TITLE": "Science-fiction & Fantasy Cinema",
      "AUTHORS": "John Howard Reid",
      "SUBJECT": "Performing Arts",
      "YEAR": 2007
    },
    {
      "SR_NO": 622,
      "TITLE": "Cinema of Obsession",
      "AUTHORS": "Dominique Mainon', 'James Ursini",
      "SUBJECT": "Performing Arts",
      "YEAR": 1905
    },
    {
      "SR_NO": 623,
      "TITLE": "The Digital Hand",
      "AUTHORS": "James W. Cortada",
      "SUBJECT": "Business & Economics",
      "YEAR": 1905
    },
    {
      "SR_NO": 624,
      "TITLE": "X Internet",
      "AUTHORS": "Jessica Keyes",
      "SUBJECT": "Computers",
      "YEAR": 2007
    },
    {
      "SR_NO": 625,
      "TITLE": "Internet Management",
      "AUTHORS": "Jessica Keyes",
      "SUBJECT": "Computers",
      "YEAR": 1999
    },
    {
      "SR_NO": 626,
      "TITLE": "How to be a Successful Internet Consultant",
      "AUTHORS": "Jessica Keyes",
      "SUBJECT": "Business & Economics",
      "YEAR": 1997
    },
    {
      "SR_NO": 627,
      "TITLE": "Datacasting",
      "AUTHORS": "Jessica Keyes",
      "SUBJECT": "Computers",
      "YEAR": 1905
    },
    {
      "SR_NO": 628,
      "TITLE": "Security Technologies for the World Wide Web",
      "AUTHORS": "Rolf Oppliger",
      "SUBJECT": "Computers",
      "YEAR": 1905
    },
    {
      "SR_NO": 629,
      "TITLE": "Web Services",
      "AUTHORS": "Liang-Jie Zhang",
      "SUBJECT": "Computers",
      "YEAR": 2004
    },
    {
      "SR_NO": 630,
      "TITLE": "Going Global: An Information Sourcebook for Small and Medium-sized Businesses",
      "AUTHORS": "Susan C. Awe",
      "SUBJECT": "Language Arts & Disciplines",
      "YEAR": 2009
    },
    {
      "SR_NO": 631,
      "TITLE": "Enterprise 2.0",
      "AUTHORS": "Jessica Keyes",
      "SUBJECT": "Business & Economics",
      "YEAR": 2016
    },
    {
      "SR_NO": 632,
      "TITLE": "Quantum Roots",
      "AUTHORS": "Kyle Keyes",
      "SUBJECT": "Fiction",
      "YEAR": 2012
    },
    {
      "SR_NO": 633,
      "TITLE": "Foundations of Quantum Mechanics in the Light of New Technology",
      "AUTHORS": "Sadao Nakajima",
      "SUBJECT": "Science",
      "YEAR": 1905
    },
    {
      "SR_NO": 634,
      "TITLE": "Foundations of Quantum Mechanics in the Light of New Technology",
      "AUTHORS": "S Nakajima', 'Y Murayama', 'A Tonomura",
      "SUBJECT": "Science",
      "YEAR": 1997
    },
    {
      "SR_NO": 635,
      "TITLE": "Advances in Cryptology",
      "AUTHORS": "Alexandra Boldyreva",
      "SUBJECT": "Cryptography",
      "YEAR": 1905
    },
    {
      "SR_NO": 636,
      "TITLE": "Contracts",
      "AUTHORS": "Aspen Publishers",
      "SUBJECT": "Law",
      "YEAR": 2007
    },
    {
      "SR_NO": 637,
      "TITLE": "Casenote Legal Briefs for Contracts, Keyed to Crandall and Whaley",
      "AUTHORS": "Casenote Legal Briefs",
      "SUBJECT": "Law",
      "YEAR": 2012
    },
    {
      "SR_NO": 638,
      "TITLE": "Chaos in Classical and Quantum Mechanics",
      "AUTHORS": "Martin C. Gutzwiller",
      "SUBJECT": "Mathematics",
      "YEAR": 1991
    },
    {
      "SR_NO": 639,
      "TITLE": "Quantum Mechanics with Applications to Nanotechnology and Information Science",
      "AUTHORS": "Yehuda B. Band', 'Yshai Avishai",
      "SUBJECT": "Science",
      "YEAR": 2013
    },
    {
      "SR_NO": 640,
      "TITLE": "Quantum Electronics",
      "AUTHORS": "Pierre Grivet', 'N. Bloembergen",
      "SUBJECT": "Quantum electronics",
      "YEAR": 1905
    },
    {
      "SR_NO": 641,
      "TITLE": "A Survey of American Chemistry",
      "AUTHORS": "National Research Council (U.S.). Division of Chemistry and Chemical Technology",
      "SUBJECT": "Chemistry",
      "YEAR": 1905
    },
    {
      "SR_NO": 642,
      "TITLE": "Chemistry, key to better living",
      "AUTHORS": "American Chemical Society",
      "SUBJECT": "Science",
      "YEAR": 1905
    },
    {
      "SR_NO": 643,
      "TITLE": "Grants and Awards for the Fiscal Year Ended ...",
      "AUTHORS": "National Science Foundation (U.S.)",
      "SUBJECT": "Federal aid to research",
      "YEAR": 1905
    },
    {
      "SR_NO": 644,
      "TITLE": "Commencement[programme]",
      "AUTHORS": "University of California, Berkeley",
      "SUBJECT": "Dissertations, Academic",
      "YEAR": 1905
    },
    {
      "SR_NO": 645,
      "TITLE": "Molecular Modeling and Theory in Chemical Engineering",
      "AUTHORS": "James Wei', 'Morton M. Denn', 'John H. Seinfeld', 'Arup Chakraborty', 'Jackie Ying', 'Nicholas Peppas', 'George Stephanopoulos",
      "SUBJECT": "Technology & Engineering",
      "YEAR": 2001
    },
    {
      "SR_NO": 646,
      "TITLE": "Concepts of Chemical Engineering 4 Chemists",
      "AUTHORS": "Stefaan J. R. Simons",
      "SUBJECT": "Technology & Engineering",
      "YEAR": 1905
    },
    {
      "SR_NO": 647,
      "TITLE": "Sources of Engineering Information",
      "AUTHORS": "Blanche Harris Dalton",
      "SUBJECT": "Engineering",
      "YEAR": 1905
    },
    {
      "SR_NO": 648,
      "TITLE": "Annual Report of the Bureau of Animal Industry for the Year ...",
      "AUTHORS": "United States. Bureau of Animal Industry",
      "SUBJECT": "Animal industry",
      "YEAR": 1905
    },
    {
      "SR_NO": 649,
      "TITLE": "Queer Ecologies",
      "AUTHORS": "Catriona Mortimer-Sandilands', 'Bruce Erickson",
      "SUBJECT": "Philosophy",
      "YEAR": 2010
    },
    {
      "SR_NO": 650,
      "TITLE": "Nimble, Focused, Feisty",
      "AUTHORS": "Sara Roberts",
      "SUBJECT": "Business & Economics",
      "YEAR": 2016
    }
  ];

  export default data;