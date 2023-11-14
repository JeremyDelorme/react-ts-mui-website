
interface Movie {
    title: string;
    year: string;
    director: string;
    country: string;
    shortDescription: string;
    posterImage: string;
    genre: string;
}

const movies = [{
    title: "Clockwork Orange",
    year: "1971",
    director: "Stanley Kubrick",
    country: "United Kingdom",
    shortDescription: "In the dystopian near future, a delinquent named Alex leads a gang of thugs. After his arrest, he undergoes an experimental aversion therapy to cure his violent tendencies.",
    posterImage: "https://example.com/clockwork_orange_poster.jpg",
    genre: "Dystopian"
},
{
    title: "Melancholia",
    year: "2011",
    director: "Lars von Trier",
    country: "Denmark",
    shortDescription: "As a planet named Melancholia approaches Earth, two sisters grapple with their strained relationship while the world faces an impending collision.",
    posterImage: "https://example.com/melancholia_poster.jpg",
    genre: "Drama"
},
{
    title: "Dancer in the Dark",
    year: "2000",
    director: "Lars von Trier",
    country: "Denmark",
    shortDescription: "A Czech immigrant in the United States is slowly going blind but works tirelessly to secure a future for her son. She escapes into a world of musical daydreams.",
    posterImage: "https://example.com/dancer_in_the_dark_poster.jpg",
    genre: "Musical"
},
{
    title: "Pulp Fiction",
    year: "1994",
    director: "Quentin Tarantino",
    country: "United States",
    shortDescription: "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    posterImage: "https://example.com/pulp_fiction_poster.jpg",
    genre: "Crime"
},
{
    title: "Planète Sauvage",
    year: "1973",
    director: "René Laloux",
    country: "France",
    shortDescription: "In a distant future, humans are kept as pets by a race of blue giants. One human, Terr, seeks freedom and rebellion against his captors.",
    posterImage: "https://example.com/planete_sauvage_poster.jpg",
    genre: "Animation"
},
{
    title: "The Shining",
    year: "1980",
    director: "Stanley Kubrick",
    country: "United States",
    shortDescription: "A family heads to an isolated hotel for the winter, where an evil and supernatural presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future.",
    posterImage: "https://example.com/the_shining_poster.jpg",
    genre: "Horror"
},
{
    title: "2001: A Space Odyssey",
    year: "1968",
    director: "Stanley Kubrick",
    country: "United States",
    shortDescription: "Humanity finds a mysterious, obviously artificial object buried beneath the Lunar surface and, with the intelligent computer H.A.L. 9000, sets off on a quest.",
    posterImage: "https://example.com/2001_space_odyssey_poster.jpg",
    genre: "Science Fiction"
},
{
    title: "The Godfather",
    year: "1972",
    director: "Francis Ford Coppola",
    country: "United States",
    shortDescription: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    posterImage: "https://example.com/godfather_poster.jpg",
    genre: "Crime"
},
{
    title: "Scarface",
    year: "1983",
    director: "Brian De Palma",
    country: "United States",
    shortDescription: "In Miami, a determined Cuban immigrant takes over a drug cartel and succumbs to greed.",
    posterImage: "https://example.com/scarface_poster.jpg",
    genre: "Crime"
},
{
    title: "In the Mood for Love",
    year: "2000",
    director: "Wong Kar-wai",
    country: "Hong Kong",
    shortDescription: "Two neighbors form a strong connection after suspecting their spouses of infidelity. They develop a close but platonic bond as they both try to discover the truth.",
    posterImage: "https://example.com/in_the_mood_for_love_poster.jpg",
    genre: "Romance"
},
{
    title: "Wild at Heart",
    year: "1990",
    director: "David Lynch",
    country: "United States",
    shortDescription: "Young lovers Sailor and Lula run from the variety of weirdos that Lula's mom has hired to kill Sailor.",
    posterImage: "https://example.com/wild_at_heart_poster.jpg",
    genre: "Crime"
},
{
    title: "Mulholland Drive",
    year: "2001",
    director: "David Lynch",
    country: "United States",
    shortDescription: "After a car wreck on the winding Mulholland Drive renders a woman amnesiac, she and a perky Hollywood-hopeful search for clues and answers across Los Angeles in a twisting venture beyond dreams and reality.",
    posterImage: "https://example.com/mulholland_drive_poster.jpg",
    genre: "Mystery"
},
{
    title: "Trainspotting",
    year: "1996",
    director: "Danny Boyle",
    country: "United Kingdom",
    shortDescription: "Renton, deeply immersed in the Edinburgh drug scene, tries to clean up and get out, despite the allure of the drugs and influence of friends.",
    posterImage: "https://example.com/trainspotting_poster.jpg",
    genre: "Drama"
},
{
    title: "Annie Hall",
    year: "1977",
    director: "Woody Allen",
    country: "United States",
    shortDescription: "Neurotic New York comedian Alvy Singer falls in love with the ditsy Annie Hall.",
    posterImage: "https://example.com/annie_hall_poster.jpg",
    genre: "Comedy"
},
{
    title: "The Nightmare Before Christmas",
    year: "1993",
    director: "Henry Selick",
    country: "United States",
    shortDescription: "Jack Skellington, the king of Halloween Town, discovers Christmas Town but doesn't quite understand the concept.",
    posterImage: "https://example.com/nightmare_before_christmas_poster.jpg",
    genre: "Animation"
},
{
    title: "The Lion King",
    year: "1994",
    director: "Roger Allers, Rob Minkoff",
    country: "United States",
    shortDescription: "Lion cub and future king Simba searches for his identity. His eagerness to please others and penchant for testing his boundaries sometimes gets him into trouble.",
    posterImage: "https://example.com/lion_king_poster.jpg",
    genre: "Animation"
},
{
    title: "Kirikou and the Sorceress",
    year: "1998",
    director: "Michel Ocelot, Raymond Burlet",
    country: "France, Belgium",
    shortDescription: "Kirikou, a small boy, goes on a journey to free his village from the evil sorceress Karaba.",
    posterImage: "https://example.com/kirikou_poster.jpg",
    genre: "Animation"
},
{
    title: "Brazil",
    year: "1985",
    director: "Terry Gilliam",
    country: "United Kingdom",
    shortDescription: "A bureaucrat, in a retro-future world, tries to correct an administrative error and becomes an enemy of the state.",
    posterImage: "https://example.com/brazil_poster.jpg",
    genre: "Science Fiction"
},
{
    title: "12 Monkeys",
    year: "1995",
    director: "Terry Gilliam",
    country: "United States",
    shortDescription: "In a future world devastated by disease, a convict is sent back in time to gather information about the man-made virus that wiped out most of the human population on the planet.",
    posterImage: "https://example.com/12_monkeys_poster.jpg",
    genre: "Science Fiction"
},
{
    title: "Moonrise Kingdom",
    year: "2012",
    director: "Wes Anderson",
    country: "United States",
    shortDescription: "A pair of young lovers flee their New England town, causing a local search party to fan out to find them.",
    posterImage: "https://example.com/moonrise_kingdom_poster.jpg",
    genre: "Comedy"
},
{
    title: "Do the Right Thing",
    year: "1989",
    director: "Spike Lee",
    country: "United States",
    shortDescription: "On the hottest day of the year on a street in Brooklyn, everyone's hate and bigotry smolders and builds until it explodes into violence.",
    posterImage: "https://example.com/do_the_right_thing_poster.jpg",
    genre: "Drama"
},
{
    title: "Women on the Verge of a Nervous Breakdown",
    year: "1988",
    director: "Pedro Almodóvar",
    country: "Spain",
    shortDescription: "Pepa's lover, Iván, leaves her and she tries to contact him to find out why he's left. In the process, she encounters his wife, his son, his ex-lover, and his new lover.",
    posterImage: "https://example.com/women_on_the_verge_poster.jpg",
    genre: "Comedy"
},
{
    title: "Blade Runner",
    year: "1982",
    director: "Ridley Scott",
    country: "United States",
    shortDescription: "A blade runner must pursue and terminate four replicants who stole a ship in space, and have returned to Earth to find their creator.",
    posterImage: "https://example.com/blade_runner_poster.jpg",
    genre: "Science Fiction"
},
{
    title: "Nosferatu",
    year: "1922",
    director: "F.W. Murnau",
    country: "Germany",
    shortDescription: "Vampire Count Orlok expresses interest in a new residence and real estate agent Hutter's wife.",
    posterImage: "https://example.com/nosferatu_poster.jpg",
    genre: "Horror"
},
{
    title: "The Tree of Life",
    year: "2011",
    director: "Terrence Malick",
    country: "United States",
    shortDescription: "The story of a family in Waco, Texas in 1956. The eldest son witnesses the loss of innocence and struggles with his parents' conflicting teachings.",
    posterImage: "https://example.com/tree_of_life_poster.jpg",
    genre: "Drama"
},
{
    title: "The Big Lebowski",
    year: "1998",
    director: "Joel Coen, Ethan Coen",
    country: "United States",
    shortDescription: "Jeff The Dude Lebowski, mistaken for a millionaire of the same name, seeks restitution for his ruined rug and enlists his bowling buddies to help get it.",
    posterImage: "https://example.com/big_lebowski_poster.jpg",
    genre: "Comedy"
},
{
    title: "No Country for Old Men",
    year: "2007",
    director: "Joel Coen, Ethan Coen",
    country: "United States",
    shortDescription: "Violence and mayhem ensue after a hunter stumbles upon a drug deal gone wrong and more than two million dollars in cash near the Rio Grande.",
    posterImage: "https://example.com/no_country_poster.jpg",
    genre: "Crime"
},
{
    title: "Solaris",
    year: "1972",
    director: "Andrei Tarkovsky",
    country: "Soviet Union",
    shortDescription: "A psychologist is sent to a station orbiting a distant planet in order to discover what has caused the crew to go insane.",
    posterImage: "https://example.com/solaris_poster.jpg",
    genre: "Science Fiction"
},
{
    title: "Rosemary's Baby",
    year: "1968",
    director: "Roman Polanski",
    country: "United States",
    shortDescription: "A young couple moves into an apartment only to be surrounded by peculiar neighbors and occurrences. When the wife becomes mysteriously pregnant, paranoia over the safety of her unborn child begins controlling her life.",
    posterImage: "https://example.com/rosemarys_baby_poster.jpg",
    genre: "Horror"
},
{
    title: "Claire's Knee",
    year: "1970",
    genre: "Drama",
    director: "Eric Rohmer",
    country: "France",
    shortDescription: "Jérôme, a French diplomat, is on a visit to Lake Geneva and, in search of the ideal girl, he meets Laura, a newly appointed teacher from Paris, and falls in love.",
    posterImage: "https://example.com/claires_knee_poster.jpg"
},
{
    title: "Life is Beautiful",
    year: "1997",
    genre: "Comedy",
    director: "Roberto Benigni",
    country: "Italy",
    shortDescription: "A Jewish man has a wonderful romance with the help of his humor but must use that same quality to protect his son in a Nazi concentration camp.",
    posterImage: "https://example.com/life_is_beautiful_poster.jpg"
},
{
    title: "Wings of Desire",
    year: "1987",
    genre: "Fantasy",
    director: "Wim Wenders",
    country: "Germany, France",
    shortDescription: "An angel tires of overseeing human activity and wishes to become human when he falls in love with a mortal.",
    posterImage: "https://example.com/wings_of_desire_poster.jpg"
}
];

export default movies