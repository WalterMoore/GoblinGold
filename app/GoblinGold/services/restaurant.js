var request_data = {
    url: 'http://localhost:1234/search?term=food&location=San+Francisco',
    method: 'GET'
};
var GoblinGold;
(function (GoblinGold) {
    var RestaurantService = (function () {
        function RestaurantService($http, LocateService) {
            this.$http = $http;
            this.LocateService = LocateService;
        }
        RestaurantService.prototype.listRestaurants = function () {
            $.ajax({
                url: request_data.url,
                type: request_data.method,
            }).done(function (data) {
                console.log(data);
            });
        };
        RestaurantService.$inject = ["$http", "LocateService"];
        return RestaurantService;
    })();
    GoblinGold.RestaurantService = RestaurantService;
    angular
        .module("GoblinGold")
        .service("RestaurantService", RestaurantService);
})(GoblinGold || (GoblinGold = {}));
