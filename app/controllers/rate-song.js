// Controller for rating songs
app.controller('rateSongCtrl', 
	["$scope", 

	function($scope) {

// rating variables
	$scope.songs = [];
	$scope.rate = 0;
	$scope.max = 5;
	$scope.isReadonly = false;

// Attempt at rating system

	  $scope.hoveringOver = function(value) {
	    $scope.overStar = value;
	    $scope.percent = 100 * (value / $scope.max);
	  };

	  $scope.ratingStates = [
	    {stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty'},
	    {stateOff: 'glyphicon-off'}
	  ];
}]);