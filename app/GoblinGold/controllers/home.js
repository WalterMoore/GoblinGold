var GoblinGold;
(function (GoblinGold) {
    var HomeController = (function () {
        function HomeController(LocateService, RestaurantService) {
            this.LocateService = LocateService;
            this.RestaurantService = RestaurantService;
        }
        HomeController.prototype.findMe = function () {
            console.log("clicked");
            this.LocateService.currentLocation();
        };
        HomeController.prototype.findFood = function () {
            console.log("clacked");
            this.RestaurantService.listRestaurants();
        };
        HomeController.$inject = ["LocateService", "RestaurantService"];
        return HomeController;
    })();
    angular
        .module("GoblinGold")
        .controller("HomeController", HomeController);
})(GoblinGold || (GoblinGold = {}));
