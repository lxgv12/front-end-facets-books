// JSON de ejemplo para usar en caso de fallo en la llamada a Axios
// Se incluye simplemente para que se pueda mostrar la aplicacion sin necesidad de hacer llamadas a la API
// La funcionalidad de la aplicacion se verá afectada, ya que no se podrá filtrar ni ordenar los datos

export const exampleData = {
    "employees": [
        {
            "id": "PJtyc5ABFkhh3p7v7XYS",
            "language": "Ingles",
            "format": "Ebook",
            "description": "JavaScript lies at the heart of almost every modern web application from social apps like Twitter to browser-based game frameworks like Phaser and Babylon. Though simple for beginners to pick up and play with JavaScript is a flexible complex language that you can use to build full-scale applications.",
            "published": "2018-12-04",
            "publisher": "No Starch Press",
            "isbn": "9781593279509",
            "title": "Eloquent JavaScript Third Edition",
            "author": "Marijn Haverbeke",
            "pages": 472
        },
        {
            "id": "b3d0c5ABhbHMfDY1TAHW",
            "language": "Ingles",
            "format": "Ebook",
            "description": "To get the most out of modern JavaScript you need learn the latest features of its parent specification ECMAScript 6 (ES6). This book provides a highly practical look at ES6 without getting lost in the specification or its implementation details.",
            "published": "2017-07-16",
            "publisher": "O Reilly Media",
            "isbn": "9781491943533",
            "title": "Practical Modern JavaScript",
            "author": "Nicolas Bevacqua",
            "pages": 334
        },
        {
            "id": "cHd0c5ABhbHMfDY1dwFY",
            "language": "Ingles",
            "format": "Ebook",
            "description": "ECMAScript 6 represents the biggest update to the core of JavaScript in the history of the language. In Understanding ECMAScript 6 expert developer Nicholas C. Zakas provides a complete guide to the object types syntax and other exciting changes that ECMAScript 6 brings to JavaScript.",
            "published": "2016-09-03",
            "publisher": "No Starch Press",
            "isbn": "9781593277574",
            "title": "Understanding ECMAScript 6",
            "author": "Nicholas C Zakas",
            "pages": 352
        },
        {
            "id": "cXd0c5ABhbHMfDY1pAEg",
            "language": "Ingles",
            "format": "Ebook",
            "description": "Like it or not JavaScript is everywhere these days -from browser to server to mobile- and now you too need to learn the language or dive deeper than you have. This concise book guides you into and through JavaScript written by a veteran programmer who once found himself in the same position.",
            "published": "2014-04-08",
            "publisher": "O'Reilly Media",
            "isbn": "9781449365035",
            "title": "Speaking JavaScript",
            "author": "Axel Rauschmayer",
            "pages": 460
        },
        {
            "id": "PZt0c5ABFkhh3p7vznaK",
            "language": "Ingles",
            "format": "Ebook",
            "description": "With Learning JavaScript Design Patterns you'll learn how to write beautiful structured and maintainable JavaScript by applying classical and modern design patterns to the language. If you want to keep your code efficient more manageable and up-to-date with the latest best practices this book is for you.",
            "published": "2012-08-30",
            "publisher": "O'Reilly Media",
            "isbn": "9781449331818",
            "title": "Learning JavaScript Design Patterns",
            "author": "Addy Osmani",
            "pages": 254
        }
    ],
    "aggs": {
        "formatValues": [
            {
                "key": "Ebook",
                "count": 8
            },
            {
                "key": "Físico",
                "count": 7
            }
        ],
        "PageValues": [
            {
                "key": "-150",
                "count": 2
            },
            {
                "key": "150-200",
                "count": 1
            },
            {
                "key": "200-",
                "count": 12
            }
        ],
        "languageValues": [
            {
                "key": "Ingles",
                "count": 8
            },
            {
                "key": "Español",
                "count": 7
            }
        ]
    }
};