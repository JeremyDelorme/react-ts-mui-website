interface Movie {
    title: string;
    year: string;
    director: string;
    country: string;
    shortDescription: string;
    genre: string;
    posterImage: string;
}

const movies: Movie[] = [
    {
        title: "Melancholia",
        year: "2011",
        director: "Lars von Trier",
        country: "Denmark",
        shortDescription: "As a planet named Melancholia approaches Earth, two sisters grapple with their strained relationship while the world faces an impending collision.",
        genre: "Drama",
        posterImage: "/movies/melancholia.jpg",
    },
    {
        title: "Pulp Fiction",
        year: "1994",
        director: "Quentin Tarantino",
        country: "United States",
        shortDescription: "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
        genre: "Crime",
        posterImage: "/movies/pulp_fiction.jpg",
    },
    {
        title: "Planète Sauvage",
        year: "1973",
        director: "René Laloux",
        country: "France",
        shortDescription: "In a distant future, humans are kept as pets by a race of blue giants. One human, Terr, seeks freedom and rebellion against his captors.",
        genre: "Animation",
        posterImage: "/movies/planete_sauvage.jpg",
    },
    {
        title: "The Shining",
        year: "1980",
        director: "Stanley Kubrick",
        country: "United States",
        shortDescription: "A family heads to an isolated hotel for the winter, where an evil and supernatural presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future.",
        genre: "Horror",
        posterImage: "/movies/the_shining.jpg",
    },
    {
        title: "The Nightmare Before Christmas",
        year: "1993",
        director: "Henry Selick",
        country: "United States",
        shortDescription: "Jack Skellington, the king of Halloween Town, discovers Christmas Town but doesn't quite understand the concept.",
        genre: "Animation",
        posterImage: "/movies/nightmare_before_christmas.jpg",
    },
    {
        title: "Kirikou and the Sorceress",
        year: "1998",
        director: "Michel Ocelot, Raymond Burlet",
        country: "France, Belgium",
        shortDescription: "Kirikou, a small boy, goes on a journey to free his village from the evil sorceress Karaba.",
        genre: "Animation",
        posterImage: "/movies/kirikou.jpg",
    },
    {
        title: "Brazil",
        year: "1985",
        director: "Terry Gilliam",
        country: "United Kingdom",
        shortDescription: "A bureaucrat, in a retro-future world, tries to correct an administrative error and becomes an enemy of the state.",
        genre: "Science Fiction",
        posterImage: "/movies/brazil.jpg",
    },
    {
        title: "Moonrise Kingdom",
        year: "2012",
        director: "Wes Anderson",
        country: "United States",
        shortDescription: "A pair of young lovers flee their New England town, causing a local search party to fan out to find them.",
        genre: "Comedy",
        posterImage: "/movies/moonrise_kingdom.jpg",
    },
    {
        title: "The Big Lebowski",
        year: "1998",
        director: "Joel Coen, Ethan Coen",
        country: "United States",
        shortDescription: "Jeff The Dude Lebowski, mistaken for a millionaire of the same name, seeks restitution for his ruined rug and enlists his bowling buddies to help get it.",
        genre: "Comedy",
        posterImage: "/movies/big_lebowski.jpg",
    },
    {
        title: "No Country for Old Men",
        year: "2007",
        director: "Joel Coen, Ethan Coen",
        country: "United States",
        shortDescription: "Violence and mayhem ensue after a hunter stumbles upon a drug deal gone wrong and more than two million dollars in cash near the Rio Grande.",
        genre: "Crime",
        posterImage: "/movies/no_country_for_old_men.jpg",
    },
    {
        title: "Solaris",
        year: "1972",
        director: "Andrei Tarkovsky",
        country: "Soviet Union",
        shortDescription: "A psychologist is sent to a station orbiting a distant planet in order to discover what has caused the crew to go insane.",
        genre: "Science Fiction",
        posterImage: "/movies/solaris.jpg",
    },
    {
        title: "The Tree of Life",
        year: "2011",
        director: "Terrence Malick",
        country: "United States",
        shortDescription: "The story of a family in Waco, Texas in 1956. The eldest son witnesses the loss of innocence and struggles with his parents' conflicting teachings.",
        genre: "Drama",
        posterImage: "/movies/tree_of_life.jpg",
    },
    {
        title: "The Lion King",
        year: "1994",
        director: "Roger Allers, Rob Minkoff",
        country: "United States",
        shortDescription: "Lion cub and future king Simba searches for his identity. His eagerness to please others and penchant for testing his boundaries sometimes gets him into trouble.",
        genre: "Animation",
        posterImage: "/movies/lion_king.jpg",
    },
    {
        title: "Wings of Desire",
        year: "1987",
        director: "Wim Wenders",
        country: "Germany, France",
        shortDescription: "An angel tires of overseeing human activity and wishes to become human when he falls in love with a mortal.",
        genre: "Fantasy",
        posterImage: "/movies/wings_of_desire.jpg",
    },
    // Add other movies with poster images here...
];

export default movies;
