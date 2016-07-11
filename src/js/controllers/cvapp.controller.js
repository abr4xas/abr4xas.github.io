/**
* Controlador de la aplicación
*/

(function () {
    'use strict';
    angular
        .module('cvapp')
        .controller('homeCtrl', Home)
        .controller('socialCtrl', Social);

    Home.$inject = ['GetHomeFactory'];
    Social.$inject = ['GetSocialFactory'];


    // Datos basicos
    function Home(GetHomeFactory) {
        var vm = this;
        vm.dataHome = [];
        vm.loading = true;
        execute();
        function execute() {
            return new GetHome();
        }
        function GetHome() {
            return GetHomeFactory.get(function (data) {
                vm.dataHome = data.basics;
                vm.dataHome;
                vm.loading = false;
            }, function (e) {
                vm.loading = false;
            });
        }
    }
    // Redes sociales
    function Social(GetSocialFactory) {
        var vm = this;
        vm.dataSocial = [];
        execute();
        function execute() {
            return new GetSocial();
        }
        function GetSocial() {
            return GetSocialFactory.get(function (data) {
                vm.dataSocial = data.basics;
                vm.dataSocial;

                console.log(vm.dataSocial.profiles);

            }, function (e) {
                // TODO
            });
        }
    }
})();