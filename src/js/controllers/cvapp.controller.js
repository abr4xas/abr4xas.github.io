/**
* Controlador de la aplicación
*/

(function () {
    'use strict';
    angular
        .module('cvapp')
        .controller('homeCtrl', Home);

    Home.$inject = ['$stateParams'];


    // Datos basicos
    function Home($stateParams) {
        var vm = this;

        vm.dataHome = {
            "basics": {
                "name": "Angel Cruz",
                "label": "Frontend Developer",
                "picture": "http://2.gravatar.com/avatar/b5a93f6390e4bdb85a484d15b549d467",
                "email": "me@abr4xas.org",
                "phone": "(000) 000-0000",
                "website": "http://abr4xas.org",
                "summary": "Front End Web Developer, ágil y pro-activo con amplía experiencia en creación de sitios web óptimos. Entusiasta HTML5 y CSS3, actualmente en los caminos JavaScript (Angular JS, Node.JS). Estoy en continua formación para mejorar y ampliar los conocimientos que he obtenido durante tantos años en este medio. ",
                "location": {
                    "address": "2712 Broadway St",
                    "postalCode": "CA 94115",
                    "city": "San Francisco",
                    "countryCode": "US",
                    "region": "California"
                },
                "profiles": [
                    {
                        "username": "abr4xas",
                        "network": "Twitter",
                        "url": "http://twitter.com/abr4xas"
                    },
                    {
                        "username": "abr4xas",
                        "network": "Linkedin",
                        "url": "https://ve.linkedin.com/in/"
                    }
                ],
                "languages": [
                    {
                        "name": "English",
                        "level": "Native speaker"
                    }
                ]
            },
            "work": [
                {
                    "company": "Labmedia Latam",
                    "position": "Freelancer Frontend Developer",
                    "website": "http://company.com",
                    "startDate": "Jun 2016",
                    "endDate": "Present",
                    "summary": "Encargado del aspecto visual de las aplicaciones corporativas de la empresa y clientes.",
                    "highlights": [
                        "Started the company"
                    ]
                },
                {
                    "company": "B. H. technology, C. A.",
                    "position": "Frontend Developer",
                    "website": "http://company.com",
                    "startDate": "Ene 2016",
                    "endDate": "Jul 2016",
                    "summary": "Desarrollo de interfaz web. Utilizando herramientas como Bootstrap, Grunt, Gulp, SASS, Stylus, HTML5 y CSS3.",
                    "highlights": [
                        "Started the company"
                    ]
                },
                {
                    "company": "Womelish.com",
                    "position": "Freelance Frontend & WordPress Developer",
                    "website": "http://company.com",
                    "startDate": "May 2016",
                    "endDate": "May 2016",
                    "summary": "Freelance Frontend & WordPress Developer",
                    "highlights": [
                        "Started the company"
                    ]
                },
                {
                    "company": "Hoteles Hesperia Venezuela",
                    "position": "Freelance Front End Developer",
                    "website": "http://company.com",
                    "startDate": "Oct 2015",
                    "endDate": "Dic 2015",
                    "summary": "Responsable del diseño visual e interactivo de las aplicaciones web corporativas de la empresa",
                    "highlights": [
                        "Started the company"
                    ]
                }
            ],
            "volunteer": [
                {
                    "organization": "Organization",
                    "position": "Volunteer",
                    "website": "http://organization.com/",
                    "startDate": "2012-01-01",
                    "endDate": "2013-01-01",
                    "summary": "Description...",
                    "highlights": [
                        "Awarded 'Volunteer of the Month'"
                    ]
                }
            ],
            "awards": [
                {
                    "title": "Award",
                    "date": "2014-11-01",
                    "awarder": "Company",
                    "summary": "There is no spoon."
                }
            ],
            "publications": [
                {
                    "name": "Publication",
                    "publisher": "Company",
                    "releaseDate": "2014-10-01",
                    "website": "http://publication.com",
                    "summary": "Description..."
                }
            ],
            "skills": [
                {
                    "name": "Web Development",
                    "level": "Master",
                    "keywords": [
                        "HTML",
                        "CSS",
                        "Javascript",
                        "Angular JS",
                        "BootStrap"
                    ]
                }
            ],
            "interests": [
                {
                    "name": "Wildlife",
                    "keywords": [
                        "Ferrets",
                        "Unicorns"
                    ]
                }
            ]
        }
        //console.log(vm.dataHome);
    }
})();