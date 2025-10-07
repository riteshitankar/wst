const books = [
  {
    "_id": 1,
    "book_name": "Season wall organization",
    "author_name": "Richard Lucas",
    "publication": "Garza, Adams and Barnett",
    "genre": "Sci-Fi",
    "total_pages": 650,
    "date_of_release": "19-05-1990",
    "origin_country": "Brazil"
  },
  {
    "_id": 2,
    "book_name": "Man name resource",
    "author_name": "Alexandra Brown",
    "publication": "West Group",
    "genre": "Non-Fiction",
    "total_pages": 205,
    "date_of_release": "17-08-2006",
    "origin_country": "India"
  },
  {
    "_id": 3,
    "book_name": "Yeah sure again resource",
    "author_name": "Sarah Castro",
    "publication": "Summers, Jones and Rodriguez",
    "genre": "Mystery",
    "total_pages": 846,
    "date_of_release": "05-09-2000",
    "origin_country": "UK"
  },
  {
    "_id": 4,
    "book_name": "Day high produce",
    "author_name": "Matthew Wood",
    "publication": "Hall-Martinez",
    "genre": "Non-Fiction",
    "total_pages": 208,
    "date_of_release": "30-07-1979",
    "origin_country": "Australia"
  },
  {
    "_id": 5,
    "book_name": "Table determine argue",
    "author_name": "Joshua Soto",
    "publication": "Mitchell, Wade and Brown",
    "genre": "Fiction",
    "total_pages": 428,
    "date_of_release": "27-07-1993",
    "origin_country": "USA"
  },
  {
    "_id": 6,
    "book_name": "Seem get",
    "author_name": "Katherine Gallagher",
    "publication": "Wheeler, Richardson and Ballard",
    "genre": "Fantasy",
    "total_pages": 193,
    "date_of_release": "25-07-2004",
    "origin_country": "Italy"
  },
  {
    "_id": 7,
    "book_name": "Not prepare leave",
    "author_name": "Danielle Murphy",
    "publication": "Warren-Horn",
    "genre": "Romance",
    "total_pages": 506,
    "date_of_release": "28-04-2002",
    "origin_country": "Canada"
  },
  {
    "_id": 8,
    "book_name": "Also cold process",
    "author_name": "Tiffany Murphy",
    "publication": "Reynolds-Vasquez",
    "genre": "Mystery",
    "total_pages": 132,
    "date_of_release": "06-07-1982",
    "origin_country": "USA"
  },
  {
    "_id": 9,
    "book_name": "Company from surface",
    "author_name": "Amanda Fisher",
    "publication": "Williams-Hernandez",
    "genre": "Sci-Fi",
    "total_pages": 906,
    "date_of_release": "24-07-2024",
    "origin_country": "USA"
  },
  {
    "_id": 10,
    "book_name": "Current",
    "author_name": "Anthony Gomez MD",
    "publication": "Walton-Everett",
    "genre": "Thriller",
    "total_pages": 786,
    "date_of_release": "05-06-1993",
    "origin_country": "Japan"
  },
  {
    "_id": 11,
    "book_name": "Every hot",
    "author_name": "Janice Smith",
    "publication": "Gentry Inc",
    "genre": "Horror",
    "total_pages": 770,
    "date_of_release": "24-05-1982",
    "origin_country": "France"
  },
  {
    "_id": 12,
    "book_name": "Mind son address",
    "author_name": "Crystal Braun",
    "publication": "Floyd-Mann",
    "genre": "Thriller",
    "total_pages": 647,
    "date_of_release": "30-10-1982",
    "origin_country": "Canada"
  },
  {
    "_id": 13,
    "book_name": "Between bank visit",
    "author_name": "Brian Pierce",
    "publication": "Alvarez-Greer",
    "genre": "History",
    "total_pages": 813,
    "date_of_release": "05-03-1980",
    "origin_country": "Australia"
  },
  {
    "_id": 14,
    "book_name": "A another",
    "author_name": "Dr. Terry Lloyd V",
    "publication": "Reed, Williams and Simmons",
    "genre": "Romance",
    "total_pages": 715,
    "date_of_release": "21-02-2007",
    "origin_country": "Brazil"
  },
  {
    "_id": 15,
    "book_name": "Tree conference leader",
    "author_name": "Alexandra Chang",
    "publication": "Bautista-Weaver",
    "genre": "Non-Fiction",
    "total_pages": 699,
    "date_of_release": "29-02-2000",
    "origin_country": "Italy"
  },
  {
    "_id": 16,
    "book_name": "Option fill",
    "author_name": "Beverly Pitts",
    "publication": "Hall, Brown and Kelley",
    "genre": "Fiction",
    "total_pages": 429,
    "date_of_release": "01-08-2008",
    "origin_country": "Japan"
  },
  {
    "_id": 17,
    "book_name": "Crime",
    "author_name": "Duane Hudson",
    "publication": "Jones, Flores and Holmes",
    "genre": "Non-Fiction",
    "total_pages": 991,
    "date_of_release": "17-11-2021",
    "origin_country": "Italy"
  },
  {
    "_id": 18,
    "book_name": "Company production",
    "author_name": "Stephen Davis",
    "publication": "Miller Ltd",
    "genre": "Horror",
    "total_pages": 998,
    "date_of_release": "06-07-1989",
    "origin_country": "UK"
  },
  {
    "_id": 19,
    "book_name": "Personal peace themselves",
    "author_name": "Adrian Harrington",
    "publication": "Smith and Sons",
    "genre": "Sci-Fi",
    "total_pages": 738,
    "date_of_release": "23-06-1978",
    "origin_country": "Italy"
  },
  {
    "_id": 20,
    "book_name": "Debate chair message",
    "author_name": "David Doyle",
    "publication": "Sutton, Wilson and Yang",
    "genre": "Mystery",
    "total_pages": 733,
    "date_of_release": "12-02-2018",
    "origin_country": "Germany"
  },
  {
    "_id": 21,
    "book_name": "Positive religious",
    "author_name": "Michael Watson",
    "publication": "Morgan Inc",
    "genre": "Thriller",
    "total_pages": 516,
    "date_of_release": "06-12-1999",
    "origin_country": "Japan"
  },
  {
    "_id": 22,
    "book_name": "Church",
    "author_name": "David Williams",
    "publication": "Smith Inc",
    "genre": "Non-Fiction",
    "total_pages": 550,
    "date_of_release": "23-06-2016",
    "origin_country": "Brazil"
  },
  {
    "_id": 23,
    "book_name": "Use rock",
    "author_name": "Dwayne Rivas",
    "publication": "Faulkner, Tran and Harvey",
    "genre": "Mystery",
    "total_pages": 546,
    "date_of_release": "17-12-1996",
    "origin_country": "Canada"
  },
  {
    "_id": 24,
    "book_name": "Beautiful phone resource",
    "author_name": "Nathaniel Stephens",
    "publication": "Brown Group",
    "genre": "Non-Fiction",
    "total_pages": 689,
    "date_of_release": "11-07-2007",
    "origin_country": "USA"
  },
  {
    "_id": 25,
    "book_name": "Lose treatment black",
    "author_name": "Paul Ali",
    "publication": "Kelly and Sons",
    "genre": "Non-Fiction",
    "total_pages": 320,
    "date_of_release": "22-05-2025",
    "origin_country": "Canada"
  },
  {
    "_id": 26,
    "book_name": "Admit peace process",
    "author_name": "Richard Newman",
    "publication": "Bailey Ltd",
    "genre": "History",
    "total_pages": 455,
    "date_of_release": "05-07-1979",
    "origin_country": "Germany"
  },
  {
    "_id": 27,
    "book_name": "Southern main commercial",
    "author_name": "Joseph Nguyen",
    "publication": "Torres Inc",
    "genre": "Thriller",
    "total_pages": 153,
    "date_of_release": "08-04-2015",
    "origin_country": "Australia"
  },
  {
    "_id": 28,
    "book_name": "Happen during",
    "author_name": "Taylor Kim",
    "publication": "Rangel, Sandoval and Knapp",
    "genre": "Sci-Fi",
    "total_pages": 514,
    "date_of_release": "13-01-2025",
    "origin_country": "Canada"
  },
  {
    "_id": 29,
    "book_name": "Rich upon",
    "author_name": "Mindy Hernandez",
    "publication": "Gallegos, Meyer and Smith",
    "genre": "Thriller",
    "total_pages": 734,
    "date_of_release": "11-11-2007",
    "origin_country": "UK"
  },
  {
    "_id": 30,
    "book_name": "Feeling property treat agent",
    "author_name": "Glenn Wolfe",
    "publication": "Wise LLC",
    "genre": "Biography",
    "total_pages": 963,
    "date_of_release": "06-01-2008",
    "origin_country": "USA"
  },
  {
    "_id": 31,
    "book_name": "Recent feeling quality whole",
    "author_name": "Martha Davis",
    "publication": "Hernandez, Perkins and Bradley",
    "genre": "Romance",
    "total_pages": 460,
    "date_of_release": "05-01-1999",
    "origin_country": "Brazil"
  },
  {
    "_id": 32,
    "book_name": "Morning again",
    "author_name": "Holly Matthews",
    "publication": "Lopez-Downs",
    "genre": "Fantasy",
    "total_pages": 456,
    "date_of_release": "18-07-1990",
    "origin_country": "Italy"
  },
  {
    "_id": 33,
    "book_name": "Brother strong",
    "author_name": "Alejandra Macdonald",
    "publication": "Wheeler Inc",
    "genre": "Biography",
    "total_pages": 233,
    "date_of_release": "05-10-2001",
    "origin_country": "Canada"
  },
  {
    "_id": 34,
    "book_name": "Bank season",
    "author_name": "Joel Hoffman",
    "publication": "King, Jones and Vance",
    "genre": "Thriller",
    "total_pages": 347,
    "date_of_release": "23-06-1985",
    "origin_country": "UK"
  },
  {
    "_id": 35,
    "book_name": "Reduce material",
    "author_name": "Casey Thompson",
    "publication": "Peterson Group",
    "genre": "History",
    "total_pages": 767,
    "date_of_release": "07-02-1992",
    "origin_country": "Germany"
  },
  {
    "_id": 36,
    "book_name": "Partner plan stop",
    "author_name": "James Clark",
    "publication": "Ramirez, Hunt and Snyder",
    "genre": "Fiction",
    "total_pages": 323,
    "date_of_release": "15-11-1978",
    "origin_country": "India"
  },
  {
    "_id": 37,
    "book_name": "Tough",
    "author_name": "Cameron Thomas",
    "publication": "Lewis, Anderson and Kaufman",
    "genre": "Horror",
    "total_pages": 119,
    "date_of_release": "10-03-2012",
    "origin_country": "Brazil"
  },
  {
    "_id": 38,
    "book_name": "Majority according",
    "author_name": "Mr. Benjamin Adams DVM",
    "publication": "Gonzalez-Scott",
    "genre": "Sci-Fi",
    "total_pages": 641,
    "date_of_release": "16-05-1985",
    "origin_country": "USA"
  },
  {
    "_id": 39,
    "book_name": "Evening marriage",
    "author_name": "Charles Romero",
    "publication": "Yates PLC",
    "genre": "Fiction",
    "total_pages": 230,
    "date_of_release": "08-04-2005",
    "origin_country": "France"
  },
  {
    "_id": 40,
    "book_name": "Admit owner",
    "author_name": "Debra Middleton",
    "publication": "Garcia, Bullock and Hayes",
    "genre": "Horror",
    "total_pages": 925,
    "date_of_release": "20-12-2006",
    "origin_country": "UK"
  },
  {
    "_id": 41,
    "book_name": "Degree able",
    "author_name": "Lisa Casey MD",
    "publication": "Lawrence, Sherman and Herrera",
    "genre": "Non-Fiction",
    "total_pages": 784,
    "date_of_release": "25-07-1985",
    "origin_country": "Canada"
  },
  {
    "_id": 42,
    "book_name": "My often choose",
    "author_name": "Dr. Bruce Copeland DDS",
    "publication": "Bradley-Miller",
    "genre": "Non-Fiction",
    "total_pages": 395,
    "date_of_release": "27-09-2005",
    "origin_country": "Brazil"
  },
  {
    "_id": 43,
    "book_name": "Picture threat compare",
    "author_name": "Heather Robinson",
    "publication": "Goodwin-Hughes",
    "genre": "Mystery",
    "total_pages": 325,
    "date_of_release": "22-05-1987",
    "origin_country": "Australia"
  },
  {
    "_id": 44,
    "book_name": "Always small",
    "author_name": "Cheyenne Saunders",
    "publication": "Chandler Ltd",
    "genre": "Thriller",
    "total_pages": 190,
    "date_of_release": "21-01-2011",
    "origin_country": "France"
  },
  {
    "_id": 45,
    "book_name": "Reveal section kid have",
    "author_name": "Joseph Wagner",
    "publication": "Holland and Sons",
    "genre": "Fiction",
    "total_pages": 251,
    "date_of_release": "12-06-1992",
    "origin_country": "India"
  },
  {
    "_id": 46,
    "book_name": "Sister later high",
    "author_name": "Michael Hayes",
    "publication": "Hill PLC",
    "genre": "Fiction",
    "total_pages": 617,
    "date_of_release": "10-10-1981",
    "origin_country": "Brazil"
  },
  {
    "_id": 47,
    "book_name": "However sure",
    "author_name": "Jason Dudley",
    "publication": "Thompson Group",
    "genre": "Fantasy",
    "total_pages": 777,
    "date_of_release": "10-03-1984",
    "origin_country": "Australia"
  },
  {
    "_id": 48,
    "book_name": "Phone air particularly",
    "author_name": "Jason Moss",
    "publication": "Wright, Lane and Gallegos",
    "genre": "Horror",
    "total_pages": 875,
    "date_of_release": "23-07-1993",
    "origin_country": "France"
  },
  {
    "_id": 49,
    "book_name": "Skill job",
    "author_name": "Mary Rogers",
    "publication": "Lambert, Peterson and Smith",
    "genre": "Sci-Fi",
    "total_pages": 694,
    "date_of_release": "04-04-1988",
    "origin_country": "Germany"
  },
  {
    "_id": 50,
    "book_name": "Skill morning idea",
    "author_name": "Stacy Byrd",
    "publication": "Miller LLC",
    "genre": "Fantasy",
    "total_pages": 259,
    "date_of_release": "09-12-1983",
    "origin_country": "Australia"
  },
  {
    "_id": 51,
    "book_name": "Bag arm",
    "author_name": "Andrew Brewer",
    "publication": "Everett Inc",
    "genre": "Romance",
    "total_pages": 146,
    "date_of_release": "02-10-2023",
    "origin_country": "Japan"
  },
  {
    "_id": 52,
    "book_name": "Fine to",
    "author_name": "Michael Peterson",
    "publication": "Quinn LLC",
    "genre": "Horror",
    "total_pages": 469,
    "date_of_release": "29-06-2010",
    "origin_country": "UK"
  },
  {
    "_id": 53,
    "book_name": "Audience",
    "author_name": "Robert Davis",
    "publication": "Clark Inc",
    "genre": "Romance",
    "total_pages": 973,
    "date_of_release": "19-11-2005",
    "origin_country": "Germany"
  },
  {
    "_id": 54,
    "book_name": "Hold bill five",
    "author_name": "Tina Roth",
    "publication": "Garcia-Mercado",
    "genre": "Thriller",
    "total_pages": 569,
    "date_of_release": "16-06-1980",
    "origin_country": "India"
  },
  {
    "_id": 55,
    "book_name": "Need yeah reveal student",
    "author_name": "Jessica Campbell",
    "publication": "Thomas-Terry",
    "genre": "Biography",
    "total_pages": 648,
    "date_of_release": "01-10-2001",
    "origin_country": "France"
  },
  {
    "_id": 56,
    "book_name": "Put produce",
    "author_name": "Kevin Knight",
    "publication": "Barnes Ltd",
    "genre": "Horror",
    "total_pages": 133,
    "date_of_release": "19-09-1979",
    "origin_country": "India"
  },
  {
    "_id": 57,
    "book_name": "Speech lot far",
    "author_name": "Gregory Walker",
    "publication": "Lane LLC",
    "genre": "Horror",
    "total_pages": 587,
    "date_of_release": "19-07-1977",
    "origin_country": "Germany"
  },
  {
    "_id": 58,
    "book_name": "Power candidate",
    "author_name": "Joshua Green",
    "publication": "Horton-Shelton",
    "genre": "Thriller",
    "total_pages": 322,
    "date_of_release": "16-01-2004",
    "origin_country": "Japan"
  },
  {
    "_id": 59,
    "book_name": "Authority budget conference indicate",
    "author_name": "Jasmine Forbes",
    "publication": "Moore PLC",
    "genre": "Fiction",
    "total_pages": 217,
    "date_of_release": "22-09-1990",
    "origin_country": "India"
  },
  {
    "_id": 60,
    "book_name": "Quickly key",
    "author_name": "Daniel Reed",
    "publication": "Johnson, Simpson and Evans",
    "genre": "Thriller",
    "total_pages": 806,
    "date_of_release": "26-05-2018",
    "origin_country": "UK"
  },
  {
    "_id": 61,
    "book_name": "Letter",
    "author_name": "Amber Schwartz",
    "publication": "Hernandez Inc",
    "genre": "Fantasy",
    "total_pages": 230,
    "date_of_release": "31-01-2005",
    "origin_country": "India"
  },
  {
    "_id": 62,
    "book_name": "Industry service",
    "author_name": "Frank Fisher",
    "publication": "Johnson, Lamb and Mcclure",
    "genre": "Mystery",
    "total_pages": 303,
    "date_of_release": "23-02-1985",
    "origin_country": "Japan"
  },
  {
    "_id": 63,
    "book_name": "Some although different standard",
    "author_name": "Ronald Ellis",
    "publication": "Short Inc",
    "genre": "Thriller",
    "total_pages": 316,
    "date_of_release": "26-11-1996",
    "origin_country": "Australia"
  },
  {
    "_id": 64,
    "book_name": "Item knowledge he",
    "author_name": "Jennifer Barajas",
    "publication": "Conley Group",
    "genre": "Mystery",
    "total_pages": 343,
    "date_of_release": "14-11-2019",
    "origin_country": "Brazil"
  },
  {
    "_id": 65,
    "book_name": "Once ball employee",
    "author_name": "Diamond Hall",
    "publication": "Campbell, Horn and Waters",
    "genre": "Fiction",
    "total_pages": 408,
    "date_of_release": "16-01-1979",
    "origin_country": "Canada"
  },
  {
    "_id": 66,
    "book_name": "Adult control",
    "author_name": "Jennifer Elliott",
    "publication": "Lester and Sons",
    "genre": "History",
    "total_pages": 376,
    "date_of_release": "10-10-1980",
    "origin_country": "Japan"
  },
  {
    "_id": 67,
    "book_name": "Meet feel",
    "author_name": "Joshua Sutton",
    "publication": "Hill-Sweeney",
    "genre": "Fiction",
    "total_pages": 503,
    "date_of_release": "12-02-2023",
    "origin_country": "Australia"
  },
  {
    "_id": 68,
    "book_name": "Early oil",
    "author_name": "Richard Arnold",
    "publication": "Franklin-Nichols",
    "genre": "Thriller",
    "total_pages": 975,
    "date_of_release": "19-10-2007",
    "origin_country": "India"
  },
  {
    "_id": 69,
    "book_name": "Dog stay anyone scene",
    "author_name": "Brent Ramirez",
    "publication": "Burton, Baker and Tate",
    "genre": "Romance",
    "total_pages": 888,
    "date_of_release": "01-10-2021",
    "origin_country": "Italy"
  },
  {
    "_id": 70,
    "book_name": "That soon play need",
    "author_name": "Ashley Willis",
    "publication": "Mejia Ltd",
    "genre": "Romance",
    "total_pages": 265,
    "date_of_release": "26-02-1979",
    "origin_country": "Italy"
  },
  {
    "_id": 71,
    "book_name": "Realize fine",
    "author_name": "Scott Weber",
    "publication": "Medina-Macdonald",
    "genre": "Fiction",
    "total_pages": 194,
    "date_of_release": "14-08-2021",
    "origin_country": "Brazil"
  },
  {
    "_id": 72,
    "book_name": "True hear",
    "author_name": "April Silva",
    "publication": "Pugh-Jenkins",
    "genre": "Fiction",
    "total_pages": 869,
    "date_of_release": "12-04-1994",
    "origin_country": "Brazil"
  },
  {
    "_id": 73,
    "book_name": "Particular leader",
    "author_name": "Deanna Schwartz",
    "publication": "Lucas-Melton",
    "genre": "Thriller",
    "total_pages": 874,
    "date_of_release": "10-10-2015",
    "origin_country": "Italy"
  },
  {
    "_id": 74,
    "book_name": "Talk red next nor",
    "author_name": "Christopher Khan",
    "publication": "Lambert-Browning",
    "genre": "Fantasy",
    "total_pages": 641,
    "date_of_release": "16-07-1985",
    "origin_country": "USA"
  },
  {
    "_id": 75,
    "book_name": "Land suggest seat",
    "author_name": "Dana Johnson",
    "publication": "Williams, Snow and Jackson",
    "genre": "Sci-Fi",
    "total_pages": 183,
    "date_of_release": "01-02-1995",
    "origin_country": "Brazil"
  },
  {
    "_id": 76,
    "book_name": "Choose own son",
    "author_name": "Leroy Coleman",
    "publication": "Brown, Bradley and Howard",
    "genre": "Mystery",
    "total_pages": 411,
    "date_of_release": "05-02-1979",
    "origin_country": "UK"
  },
  {
    "_id": 77,
    "book_name": "Factor participant top",
    "author_name": "Luis Gordon",
    "publication": "Fleming, Robinson and Christian",
    "genre": "Mystery",
    "total_pages": 452,
    "date_of_release": "05-02-2019",
    "origin_country": "Australia"
  },
  {
    "_id": 78,
    "book_name": "Nice human identify",
    "author_name": "Kristy Stewart",
    "publication": "Brown Inc",
    "genre": "Horror",
    "total_pages": 531,
    "date_of_release": "15-09-1976",
    "origin_country": "Canada"
  },
  {
    "_id": 79,
    "book_name": "Pay meeting shoulder course",
    "author_name": "Meghan Pearson",
    "publication": "Downs-Chung",
    "genre": "Thriller",
    "total_pages": 413,
    "date_of_release": "15-03-2016",
    "origin_country": "UK"
  },
  {
    "_id": 80,
    "book_name": "Hair Mrs scientist",
    "author_name": "Frank Martin",
    "publication": "Woods PLC",
    "genre": "Mystery",
    "total_pages": 516,
    "date_of_release": "19-09-1978",
    "origin_country": "France"
  },
  {
    "_id": 81,
    "book_name": "Run purpose lead",
    "author_name": "Christopher Rivera",
    "publication": "Mendoza Inc",
    "genre": "Mystery",
    "total_pages": 840,
    "date_of_release": "29-08-1981",
    "origin_country": "Germany"
  },
  {
    "_id": 82,
    "book_name": "Song memory forward",
    "author_name": "Elizabeth Mcclure",
    "publication": "Miranda-Cain",
    "genre": "Horror",
    "total_pages": 578,
    "date_of_release": "30-10-1983",
    "origin_country": "Brazil"
  },
  {
    "_id": 83,
    "book_name": "Describe success",
    "author_name": "Ann Melton",
    "publication": "Buckley, Gonzales and Patterson",
    "genre": "Thriller",
    "total_pages": 719,
    "date_of_release": "29-07-1991",
    "origin_country": "UK"
  },
  {
    "_id": 84,
    "book_name": "Try control under",
    "author_name": "Daniel Villa",
    "publication": "Clark, Edwards and Miles",
    "genre": "Thriller",
    "total_pages": 405,
    "date_of_release": "15-11-1997",
    "origin_country": "USA"
  },
  {
    "_id": 85,
    "book_name": "Market at",
    "author_name": "Nathan Garcia",
    "publication": "Clark LLC",
    "genre": "Sci-Fi",
    "total_pages": 448,
    "date_of_release": "23-08-1981",
    "origin_country": "Japan"
  },
  {
    "_id": 86,
    "book_name": "Least collection",
    "author_name": "Nichole Smith",
    "publication": "Davis Inc",
    "genre": "Fantasy",
    "total_pages": 954,
    "date_of_release": "13-04-2020",
    "origin_country": "Australia"
  },
  {
    "_id": 87,
    "book_name": "Wear because",
    "author_name": "Stephanie Robinson",
    "publication": "Schultz-Frederick",
    "genre": "Fantasy",
    "total_pages": 999,
    "date_of_release": "14-05-1987",
    "origin_country": "USA"
  },
  {
    "_id": 88,
    "book_name": "Crime their",
    "author_name": "Terri Davis",
    "publication": "Farrell, Johnson and Henderson",
    "genre": "Romance",
    "total_pages": 186,
    "date_of_release": "18-03-2022",
    "origin_country": "Brazil"
  },
  {
    "_id": 89,
    "book_name": "Option purpose",
    "author_name": "Ana Rice",
    "publication": "Nguyen-Obrien",
    "genre": "Sci-Fi",
    "total_pages": 835,
    "date_of_release": "25-07-1983",
    "origin_country": "Italy"
  },
  {
    "_id": 90,
    "book_name": "Player serious",
    "author_name": "Mackenzie House",
    "publication": "Parker, Herrera and Mann",
    "genre": "Sci-Fi",
    "total_pages": 600,
    "date_of_release": "25-01-1983",
    "origin_country": "Canada"
  },
  {
    "_id": 91,
    "book_name": "Economic consumer",
    "author_name": "Jesse Brady",
    "publication": "Nichols and Sons",
    "genre": "Biography",
    "total_pages": 756,
    "date_of_release": "19-03-1985",
    "origin_country": "Japan"
  },
  {
    "_id": 92,
    "book_name": "Future leg book",
    "author_name": "Russell Decker",
    "publication": "Ford and Sons",
    "genre": "Romance",
    "total_pages": 774,
    "date_of_release": "02-06-2018",
    "origin_country": "Brazil"
  },
  {
    "_id": 93,
    "book_name": "Card heavy dog",
    "author_name": "Tracy Schultz",
    "publication": "Bryan Inc",
    "genre": "Fantasy",
    "total_pages": 739,
    "date_of_release": "20-04-1985",
    "origin_country": "France"
  },
  {
    "_id": 94,
    "book_name": "Total score explain sister",
    "author_name": "Richard Jenkins II",
    "publication": "Thomas-Harvey",
    "genre": "Horror",
    "total_pages": 190,
    "date_of_release": "09-10-1977",
    "origin_country": "France"
  },
  {
    "_id": 95,
    "book_name": "Somebody dream wide",
    "author_name": "Darius Coleman",
    "publication": "Hammond, Drake and Young",
    "genre": "History",
    "total_pages": 208,
    "date_of_release": "24-01-2014",
    "origin_country": "Italy"
  },
  {
    "_id": 96,
    "book_name": "Move both he",
    "author_name": "Steven Campbell",
    "publication": "Kelly Inc",
    "genre": "Fiction",
    "total_pages": 237,
    "date_of_release": "14-11-1978",
    "origin_country": "Germany"
  },
  {
    "_id": 97,
    "book_name": "Tell information",
    "author_name": "Alexander Lewis",
    "publication": "Stewart-Johnson",
    "genre": "Horror",
    "total_pages": 831,
    "date_of_release": "13-11-2010",
    "origin_country": "India"
  },
  {
    "_id": 98,
    "book_name": "Life decide interesting",
    "author_name": "Marcus Brown",
    "publication": "Hahn, Huffman and Martin",
    "genre": "Fiction",
    "total_pages": 906,
    "date_of_release": "15-05-1982",
    "origin_country": "Canada"
  },
  {
    "_id": 99,
    "book_name": "Necessary minute idea",
    "author_name": "Austin Blake",
    "publication": "Miller, Webster and Clark",
    "genre": "Thriller",
    "total_pages": 595,
    "date_of_release": "15-04-1977",
    "origin_country": "Italy"
  },
  {
    "_id": 100,
    "book_name": "Minute heart",
    "author_name": "Adam Henry",
    "publication": "Jones, Diaz and Jimenez",
    "genre": "Romance",
    "total_pages": 345,
    "date_of_release": "21-07-1976",
    "origin_country": "UK"
  }
];

export default books;



// completed