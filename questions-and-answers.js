// Este archivo contiene las preguntas y respuestas para el juego de trivia. Cada pregunta tiene un conjunto de respuestas posibles y una respuesta correcta.
// El export permite que estas preguntas y respuestas puedan ser importadas en otros archivos, como el main.js, para ser utilizadas en el juego.
// La clave es el nombre de la categoría, y el valor es un array de objetos, donde cada objeto representa una pregunta con sus respuestas y la respuesta correcta.
// Dejar en minúsculas las claves para facilitar la comparación de texto.


export const questionsAndAnswers = {
"capitales":[ 
    {"pregunta": "¿Cuál es la capital de Canadá?", 
    "respuestas":[
        "Toronto",
        "Vancouver",
        "Ottawa",
        "Montreal"
    ],
    "respuestaCorrecta": "Ottawa"
    },

    {"pregunta": "¿Qué capital europea está atravesada por el río Danubio?", 
    "respuestas":[
        "Praga",
        "Budapest",
        "Viena",
        "Bratislava"
    ],
    "respuestaCorrecta": "Budapest"
    },

    {"pregunta": "¿Cuál es la capital de Australia?", 
    "respuestas":[
        "Sidney",
        "Melbourne",
        "Perth",
        "Canberra"
    ],
    "respuestaCorrecta": "Canberra"
    },

    {"pregunta": "¿Qué capital africana se encuentra a mayor altitud?", 
    "respuestas":[
        "Addis Abeba",
        "Nairobi",
        "La Paz",
        "Kigali"
    ],
    "respuestaCorrecta": "La Paz"
    },
    {
    "pregunta": "¿Cuál es la capital de Perú?",
    "respuestas": [
        "Quito",
        "Lima", 
        "Brasilia",
        "Perú"
    ],
    "respuestaCorrecta": "Lima"
  },
  {
    "pregunta": "¿Cuál es la capital de Nueva Zelanda?",
    "respuestas": [
        "Auckland",
        "Christchurch",
        "Wellington",
        "Hamilton"],
    "respuestaCorrecta": "Wellington"
  },
  {
    "pregunta": "¿Cuál es la capital de Marruecos?",
    "respuestas": [
        "Casablanca",
        "Marrakech", 
        "Rabat", 
        "Fez"],
    "respuestaCorrecta": "Rabat"
  },
  {
    "pregunta": "¿Cuál es la capital de Suiza?",
    "respuestas": ["Zúrich", "Ginebra", "Berna", "Basilea"],
    "respuestaCorrecta": "Berna"
  },
  {
    "pregunta": "¿Cuál es la capital de Filipinas?",
    "respuestas": ["Cebú", "Manila", "Davao", "Quezon City"],
    "respuestaCorrecta": "Manila"
  },
  {
    "pregunta": "¿Cuál es la capital de Turquía?",
    "respuestas": ["Estambul", "Ankara", "Esmirna", "Bursa"],
    "respuestaCorrecta": "Ankara"
  }
],

"historia":[
    {"pregunta": "¿En qué año comenzó la Segunda Guerra Mundial?", 
    "respuestas":[
        "1939",
        "1940",
        "1941",
        "1942"
    ],
    "respuestaCorrecta": "1939"
    },

    {"pregunta": "¿Quién fue el primer presidente de los Estados Unidos?", 
    "respuestas":[
        "Abraham Lincoln",
        "George Washington",
        "Thomas Jefferson",
        "John Adams"
    ],
    "respuestaCorrecta": "George Washington"
    },

    {"pregunta": "¿Qué imperio construyó el Coliseo de Roma?", 
    "respuestas":[
        "Imperio Otomano",
        "Imperio Carthaginés",
        "Imperio Romano",
        "Imperio Bizantino"
    ],
    "respuestaCorrecta": "Imperio Romano"
    },

    {"pregunta": "¿Qué revolución tuvo como símbolo la toma de la Bastilla?", 
    "respuestas":[
        "Revolución Industrial",
        "Revolución Francesa",
        "Revolución Americana",
        "Revolución Rusa"
    ],
    "respuestaCorrecta": "Revolución Francesa"
    },
    {
    "pregunta": "¿En qué año cayó el Muro de Berlín?",
    "respuestas": ["1987", "1988", "1989", "1991"],
    "respuestaCorrecta": "1989"
  },
  {
    "pregunta": "¿Quién lideró la Revolución Rusa de 1917?",
    "respuestas": ["Stalin", "Lenin", "Trotsky", "Kerensky"],
    "respuestaCorrecta": "Lenin"
  },
  {
    "pregunta": "¿Qué tratado puso fin oficialmente a la Primera Guerra Mundial?",
    "respuestas": ["Tratado de París", "Tratado de Versalles", "Tratado de Tordesillas", "Tratado de Viena"],
    "respuestaCorrecta": "Tratado de Versalles"
  },
  {
    "pregunta": "¿Qué civilización construyó Machu Picchu?",
    "respuestas": ["Azteca", "Maya", "Inca", "Olmeca"],
    "respuestaCorrecta": "Inca"
  },
  {
    "pregunta": "¿En qué año llegó Cristóbal Colón a América?",
    "respuestas": ["1492", "1488", "1500", "1519"],
    "respuestaCorrecta": "1492"
  },
  {
    "pregunta": "¿Quién fue conocido como el Libertador de América?",
    "respuestas": ["José de San Martín", "Simón Bolívar", "Bernardo O'Higgins", "Antonio José de Sucre"],
    "respuestaCorrecta": "Simón Bolívar"
  },
],

"videojuegos":[
    {"pregunta": "¿Cuál de estos juegos pertenece a la saga Souls?", 
    "respuestas":[
        "The Witcher 3",
        "Dark Souls",
        "Skyrim",
        "Dragon Age"
    ],
    "respuestaCorrecta": "Dark Souls"
    },

    {"pregunta": "¿En qué videojuego aparece el personaje Link?", 
    "respuestas":[
        "The Legend of Zelda",
        "Final Fantasy",
        "Uncharted 4",
        "Assassin's Creed"
    ],
    "respuestaCorrecta": "The Legend of Zelda"
    },

    {"pregunta": "¿Qué empresa desarrolló Minecraft originalmente?", 
    "respuestas":[
        "Epic Games",
        "Riot Games",
        "Mojang",
        "Valve"
    ],
    "respuestaCorrecta": "Mojang"
    },

    {"pregunta": "¿Cuál de estos juegos es un battle royale?", 
    "respuestas":[
        "League of Legends",
        "Rocket League",
        "Counter-Strike: Global Offensive",
        "Fortnite"
    ],
    "respuestaCorrecta": "Fortnite"
    },
    {
    "pregunta": "¿Qué empresa desarrolló originalmente la saga Dark Souls?",
    "respuestas": ["Capcom", "FromSoftware", "Square Enix", "Bandai Namco"],
    "respuestaCorrecta": "FromSoftware"
  },
  {
    "pregunta": "¿En qué año se lanzó Minecraft oficialmente (versión 1.0)?",
    "respuestas": ["2009", "2010", "2011", "2012"],
    "respuestaCorrecta": "2011"
  },
  {
    "pregunta": "¿Qué consola introdujo el control con sensor de movimiento Wii Remote?",
    "respuestas": ["PlayStation 3", "Xbox 360", "Nintendo Wii", "Nintendo GameCube"],
    "respuestaCorrecta": "Nintendo Wii"
  },
  {
    "pregunta": "¿Cuál es el protagonista de Red Dead Redemption 2?",
    "respuestas": ["John Marston", "Arthur Morgan", "Dutch van der Linde", "Micah Bell"],
    "respuestaCorrecta": "Arthur Morgan"
  },
  {
    "pregunta": "¿Qué juego popularizó el modo battle royale en 2017?",
    "respuestas": ["Fortnite", "PUBG", "Apex Legends", "Warzone"],
    "respuestaCorrecta": "PUBG"
  },
  {
    "pregunta": "¿Qué compañía creó la saga The Witcher en videojuegos?",
    "respuestas": ["Ubisoft", "CD Projekt Red", "Bethesda", "BioWare"],
    "respuestaCorrecta": "CD Projekt Red"
  },
],

"entretenimiento":[
    {"pregunta": "¿Qué serie tiene como protagonista a Walter White?", 
    "respuestas":[
        "Better Call Saul",
        "Narcos",
        "Breaking Bad",
        "The Sopranos"
    ],
    "respuestaCorrecta": "Breaking Bad"
    },

    {"pregunta": "¿Quién interpretó a Jack en Titanic (1997)?", 
    "respuestas":[
        "Leonardo DiCaprio",
        "Brad Pitt",
        "Johnny Depp",
        "Tom Hanks"
    ],
    "respuestaCorrecta": "Leonardo DiCaprio"
    },

    {"pregunta": "¿Qué película ganó el Oscar a Mejor Película en 2020?", 
    "respuestas":[
        "Parasite",
        "1917",
        "Joker",
        "Once Upon a Time in Hollywood"
    ],
    "respuestaCorrecta": "Parasite"
    },

    {"pregunta": "¿Qué franquicia incluye la frase “Que la Fuerza te acompañe”", 
    "respuestas":[
        "Superman",
        "Batman",
        "Terminator",
        "Star Wars"
    ],
    "respuestaCorrecta": "Star Wars"
    },
    {
    "pregunta": "¿Qué director dirigió la trilogía original de El Señor de los Anillos?",
    "respuestas": ["James Cameron", "Christopher Nolan", "Peter Jackson", "Steven Spielberg"],
    "respuestaCorrecta": "Peter Jackson"
  },
  {
    "pregunta": "¿Qué serie está basada en los libros de George R. R. Martin?",
    "respuestas": ["The Witcher", "Game of Thrones", "Vikings", "The Crown"],
    "respuestaCorrecta": "Game of Thrones"
  },
  {
    "pregunta": "¿Qué película ganó el Oscar a Mejor Película en 1994?",
    "respuestas": ["Pulp Fiction", "Forrest Gump", "The Shawshank Redemption", "Braveheart"],
    "respuestaCorrecta": "Forrest Gump"
  },
  {
    "pregunta": "¿Quién interpretó al Joker en The Dark Knight (2008)?",
    "respuestas": ["Joaquin Phoenix", "Jared Leto", "Heath Ledger", "Jack Nicholson"],
    "respuestaCorrecta": "Heath Ledger"
  },
  {
    "pregunta": "¿Qué banda lanzó el álbum 'The Dark Side of the Moon'?",
    "respuestas": ["The Beatles", "Pink Floyd", "Led Zeppelin", "Queen"],
    "respuestaCorrecta": "Pink Floyd"
  },
  {
    "pregunta": "¿Qué plataforma produjo la serie Stranger Things?",
    "respuestas": ["HBO", "Netflix", "Amazon Prime", "Disney+"],
    "respuestaCorrecta": "Netflix"
  },
],

"deportes":[
    {"pregunta": "¿En qué país se originó el tenis moderno?", 
    "respuestas":[
        "Inglaterra",
        "Francia",
        "Estados Unidos",
        "Australia"
    ],
    "respuestaCorrecta": "Inglaterra"
    },

    {"pregunta": "¿En qué deporte se compite por el Tour de Francia?", 
    "respuestas":[
        "Ciclismo",
        "Rally Dakar",
        "Tenis",
        "Rugby"
    ],
    "respuestaCorrecta": "Ciclismo"
    },

    {"pregunta": "¿Qué país ganó el Mundial de Fútbol 2014?", 
    "respuestas":[
        "Argentina",
        "Brasil",
        "Alemania",
        "Francia"
    ],
    "respuestaCorrecta": "Alemania"
    },

    {"pregunta": "¿En qué deporte se destacó Michael Jordan?", 
    "respuestas":[
        "Fútbol",
        "Tenis",
        "Rugby",
        "Básquetbol"
    ],
    "respuestaCorrecta": "Básquetbol"
    },
    {
    "pregunta": "¿Cuántos Grand Slams componen el calendario oficial del tenis?",
    "respuestas": ["3", "4", "5", "6"],
    "respuestaCorrecta": "4"
  },
  {
    "pregunta": "¿Qué país ha ganado más Copas del Mundo de fútbol masculino?",
    "respuestas": ["Alemania", "Italia", "Brasil", "Argentina"],
    "respuestaCorrecta": "Brasil"
  },
  {
    "pregunta": "¿En qué deporte compite la NBA?",
    "respuestas": ["Béisbol", "Básquetbol", "Fútbol americano", "Hockey"],
    "respuestaCorrecta": "Básquetbol"
  },
  {
    "pregunta": "¿Cuántos sets se necesitan para ganar un partido de tenis masculino en Grand Slam?",
    "respuestas": ["2", "3", "4", "5"],
    "respuestaCorrecta": "3"
  },
  {
    "pregunta": "¿Qué piloto argentino fue cinco veces campeón mundial de Fórmula 1?",
    "respuestas": ["Carlos Reutemann", "Juan Manuel Fangio", "José Froilán González", "Esteban Tuero"],
    "respuestaCorrecta": "Juan Manuel Fangio"
  },
  {
    "pregunta": "¿En qué deporte se utiliza el término 'scrum'?",
    "respuestas": ["Hockey", "Rugby", "Fútbol americano", "Waterpolo"],
    "respuestaCorrecta": "Rugby"
  }
]
}

