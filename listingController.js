angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
    $scope.addListing = function() {
	var listingAdd = new Object();
	listingAdd.code = this.code.toUpperCase();
	listingAdd.name = this.name;
	listingAdd.coordinates = ('{"latitude":' + this.latitude + ',"longitude":' + this.longitude + '}');
	listingAdd.address = this.address;
	Listings.push(listingAdd);
};
    $scope.deleteListing = function(index) {
	Listings.splice(index,1);
};
    $scope.showDetails = function(index) {
	var details = Listings[index];
	$scope.detailedInfo = details;
};
  }
]);