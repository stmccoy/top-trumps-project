use top_trumps;
db.dropDatabase();

db.football.insertMany ([
    { 
        name: "Hernan Crespo",
        height: 184,
        caps: 20,
        goals: 10
    
    },
    { 
        name: "Francesco Totti",
        height: 180,
        caps: 24,
        goals: 5
    },
    { 
        name: "Luis Figo",
        height: 180,
        caps: 70,
        goals: 21
    }
]);

db.simpsons.insertMany ([
    { 
        name: "Principal Skinner",
        most_lovable: 74,
        smartest: 74,
        fattest: 64, 
        biggest_nerd: 80,
        greatest_anarchist: 48,
        walk_of_fame: 70
    },
    { 
        name: "Groundskeeper Willie",
        most_lovable: 62,
        smartest: 48,
        fattest: 70, 
        biggest_nerd: 66,
        greatest_anarchist: 80,
        walk_of_fame: 64
    },
    { 
        name: "Milhouse Van Houten",
        most_lovable: 78,
        smartest: 84,
        fattest: 74, 
        biggest_nerd: 88,
        greatest_anarchist: 68,
        walk_of_fame: 62
    },
    {
        name: "Santa's Little Helper",
        most_lovable: 96,
        smartest: 44,
        fattest: 42, 
        biggest_nerd: 60,
        greatest_anarchist: 50,
        walk_of_fame: 66
    },
    {
        name: "Krusty the Clown",
        most_lovable: 70,
        smartest: 86,
        fattest: 92, 
        biggest_nerd: 54,
        greatest_anarchist: 86,
        walk_of_fame: 78
    },
    {
        name: "Martin",
        most_lovable: 80,
        smartest: 80,
        fattest: 90, 
        biggest_nerd: 70,
        greatest_anarchist: 72,
        walk_of_fame: 52
    },
    {
        name: "Patty & Selma Bouvier",
        most_lovable: 50,
        smartest: 90,
        fattest: 86, 
        biggest_nerd: 50,
        greatest_anarchist: 92,
        walk_of_fame: 88
    },
    {
        name: "Sherri and Terri",
        most_lovable: 54,
        smartest: 82,
        fattest: 58, 
        biggest_nerd: 76,
        greatest_anarchist: 66,
        walk_of_fame: 58
    },
    {
        name: "Itchy & Scratchy",
        most_lovable: 72,
        smartest: 52,
        fattest: 60, 
        biggest_nerd: 56,
        greatest_anarchist: 84,
        walk_of_fame: 76
    },
    {
        name: "Maggie Simpson",
        most_lovable: 100,
        smartest: 540,
        fattest: 46, 
        biggest_nerd: 74,
        greatest_anarchist: 60,
        walk_of_fame: 92
    },
    {
        name: "Snowball II",
        most_lovable: 88,
        smartest: 42,
        fattest: 52, 
        biggest_nerd: 58,
        greatest_anarchist: 52,
        walk_of_fame: 56
    },
    {
        name: "Homer Simpson",
        most_lovable: 92,
        smartest: 76,
        fattest: 94, 
        biggest_nerd: 48,
        greatest_anarchist: 94,
        walk_of_fame: 98
    },
    {
        name: "Nelson Muntz",
        most_lovable: 32,
        smartest: 20,
        fattest: 67, 
        biggest_nerd: 89,
        greatest_anarchist: 56,
        walk_of_fame: 39
    },
    {
        name: "Apu Nahasapeemapetilon",
        most_lovable: 78,
        smartest: 96,
        fattest: 78, 
        biggest_nerd: 52,
        greatest_anarchist: 88,
        walk_of_fame: 68
    },
    {
        name: "Abraham 'Grampa' Simpson",
        most_lovable: 68,
        smartest: 56,
        fattest: 66, 
        biggest_nerd: 76,
        greatest_anarchist: 78,
        walk_of_fame: 86
    },
    {
        name: "C. Montgomery Burns",
        most_lovable: 48,
        smartest: 92,
        fattest: 40, 
        biggest_nerd: 78,
        greatest_anarchist: 90,
        walk_of_fame: 84
    },
    {
        name: "Moe Szyslak",
        most_lovable: 76,
        smartest: 72,
        fattest: 44, 
        biggest_nerd: 72,
        greatest_anarchist: 82,
        walk_of_fame: 82
    },
    {
        name: "Todd & Rod Flanders",
        most_lovable: 60,
        smartest: 68,
        fattest: 80, 
        biggest_nerd: 96,
        greatest_anarchist: 44,
        walk_of_fame: 48
    },
    {
        name: "Marge Simpson",
        most_lovable: 94,
        smartest: 94,
        fattest: 68, 
        biggest_nerd: 46,
        greatest_anarchist: 62,
        walk_of_fame: 90
    },
    {
        name: "Otto",
        most_lovable: 66,
        smartest: 58,
        fattest: 62, 
        biggest_nerd: 84,
        greatest_anarchist: 76,
        walk_of_fame: 60
    },
    {
        name: "Edna Krabappel",
        most_lovable: 48,
        smartest: 64,
        fattest: 56, 
        biggest_nerd: 62,
        greatest_anarchist: 60,
        walk_of_fame: 44
    },
    {
        name: "Barney Gumble",
        most_lovable: 86,
        smartest: 50,
        fattest: 96, 
        biggest_nerd: 86,
        greatest_anarchist: 74,
        walk_of_fame: 80
    },
    {
        name: "Lenny & Carl",
        most_lovable: 82,
        smartest: 60,
        fattest: 54, 
        biggest_nerd: 94,
        greatest_anarchist: 56,
        walk_of_fame: 54
    },
    {
        name: "Bart Simpson",
        most_lovable: 90,
        smartest: 72,
        fattest: 50, 
        biggest_nerd: 44,
        greatest_anarchist: 98,
        walk_of_fame: 96
    },
    {
        name: "Lisa Simpson",
        most_lovable: 98,
        smartest: 98,
        fattest: 48, 
        biggest_nerd: 42,
        greatest_anarchist: 96,
        walk_of_fame: 94
    },
    {
        name: "Sideshow Bob",
        most_lovable: 82,
        smartest: 62,
        fattest: 76, 
        biggest_nerd: 90,
        greatest_anarchist: 54,
        walk_of_fame: 40
    },
    {
        name: "Dr. Julius Hibbert",
        most_lovable: 58,
        smartest: 66,
        fattest: 88, 
        biggest_nerd: 64,
        greatest_anarchist: 64,
        walk_of_fame: 46
    },
    {
        name: "Chief Wiggum",
        most_lovable: 76,
        smartest: 40,
        fattest: 98, 
        biggest_nerd: 82,
        greatest_anarchist: 46,
        walk_of_fame: 72
    },
    {
        name: "Ned Flanders",
        most_lovable: 50,
        smartest: 88,
        fattest: 84, 
        biggest_nerd: 98,
        greatest_anarchist: 62,
        walk_of_fame: 74
    },
    {
        name: "Waylon Smithers",
        most_lovable: 56,
        smartest: 42,
        fattest: 83, 
        biggest_nerd: 92,
        greatest_anarchist: 58,
        walk_of_fame: 42
    },
]);