(function () {
    'use strict';
    angular
        .module('cvapp')
        .config(routes)
        .run(removerCache);

    // Inyectando dependencias.
    routes.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

    /**
     * @description gestiona las rutas de la aplicación.
     * @param $stateProvider
     * @param $urlRouterProvider
     */
    function routes($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('home', {
                url: '/',
                views: {
                    menu: {
                        controller: 'homeCtrl',
                        controllerAs: 'ctrl',
                        templateUrl: './templates/home/menu_tpl.html'
                    },
                    home: {
                        controller: 'homeCtrl',
                        controllerAs: 'ctrl',
                        templateUrl: './templates/home/home_tpl.html'
                    }
                }
            });
        $locationProvider.html5Mode(false);
    } // End routes

    // Inyectando dependencias.
    removerCache.$inject = ['$rootScope', '$templateCache'];
    /**
     * @description Remueve el cache al detectar que un cambio de ruta comienza.
     * @param $rootScope
     * @param $templateCache
     */
    function removerCache($rootScope, $templateCache) {
        $rootScope.$on('$routeChangeStart', function (event, next, current) {
            if (typeof (current) !== 'undefined') {
                $templateCache.remove(current.templateUrl);
            }
        });
    } // End removerCache

})();