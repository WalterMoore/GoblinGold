
var request_data = {
	url: 'http://localhost:1234/search?term=food&location=San+Francisco',
	method: 'GET'
}


module GoblinGold{
	export class RestaurantService{
		static $inject =["$http", "LocateService"];
		constructor(private $http, private LocateService){
			
		}
		//Call to Yelp API for restaurant data based on location
		listRestaurants(){
			$.ajax({
				url: request_data.url,
				type: request_data.method,
			}).done(function(data) {
				console.log(data);
			})
		}
	}
	angular
		.module("GoblinGold")
		.service("RestaurantService", RestaurantService);
}