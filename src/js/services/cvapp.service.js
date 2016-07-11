(function () {
    'use strict';
    angular
        .module('cvJson', [])
        .factory('GetHomeFactory', GetHomeService)
        .factory('GetSocialFactory', GetSocialService);

    GetHomeService.$injector = ['$resource'];
    GetSocialService.$injector = ['$resource'];

    // Datos basicos
    function GetHomeService($resource) {
        return $resource('cv.json');
    }
    // Redes sociales
    function GetSocialService($resource) {
        return $resource('cv.json');
    }
})();