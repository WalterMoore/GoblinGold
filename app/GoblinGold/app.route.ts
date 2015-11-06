module GoblinGold{
	"use strict";
	
	routes.$inject = ["$routeProvider"]
	
	function routes($routeProvider: ng.route.IRouteProvider) {
		$routeProvider
			.when("/", {
				templateUrl: "GoblinGold/views/home.html",
				controller: "HomeController",
				controllerAs: "home"
			})
	}
	
	angular
		.module("GoblinGold")
		.config(routes);
}