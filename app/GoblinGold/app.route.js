var GoblinGold;
(function (GoblinGold) {
    "use strict";
    routes.$inject = ["$routeProvider"];
    function routes($routeProvider) {
        $routeProvider
            .when("/", {
            templateUrl: "GoblinGold/views/home.html",
            controller: "HomeController",
            controllerAs: "home"
        });
    }
    angular
        .module("GoblinGold")
        .config(routes);
})(GoblinGold || (GoblinGold = {}));
