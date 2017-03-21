namespace MyApp {

    angular.module("MyApp", []);

    class HomeController {
        public message = "Hello World!";
    }

    angular.module("MyApp").controller("homeController", HomeController);

}
