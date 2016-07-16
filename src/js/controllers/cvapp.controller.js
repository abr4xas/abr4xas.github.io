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
                "summary": "A summary of Angel Cruz...",
                "location": {
                    "address": "2712 Broadway St",
                    "postalCode": "CA 94115",
                    "city": "San Francisco",
                    "countryCode": "US",
                    "region": "California"
                },
                "profiles": [
                    {
                        "network": "Twitter",
                        "url": "http://twitter.com/"
                    },
                    {
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
                    "company": "Company",
                    "position": "President",
                    "website": "http://company.com",
                    "startDate": "2013-01-01",
                    "endDate": "2014-01-01",
                    "summary": "Description...",
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
        console.log(vm.dataHome);
    }
})();