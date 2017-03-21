var MyApp;
(function (MyApp) {
    angular.module("MyApp", []);
    var HomeController = (function () {
        function HomeController() {
            this.message = "Hello World!";
        }
        return HomeController;
    }());
    angular.module("MyApp").controller("homeController", HomeController);
})(MyApp || (MyApp = {}));
