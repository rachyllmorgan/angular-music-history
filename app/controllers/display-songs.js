// Display songs
define(['app', 'factories/simple-storage'],
  function(app) {
    app.controller('SongCtrl', 
  	["$scope", 
  	"$firebaseArray",
  	"$location",
  	"simple_storage", 
	
  	function($scope, $firebaseArray, $location, simple_storage) {

  		$scope.songs=[];

  	  var ref = new Firebase("https://radiant-fire-6211.firebaseio.com/songs");
    	// create a synchronized array
    	$scope.songs = $firebaseArray(ref);

      console.log("calling get_songs", $scope.songs);

    $scope.showSongDetail = function (song){
    	
    	$scope.songId = song.$id;
      console.log("$scope.songId", $scope.songId);
    	$scope.songId = $routeParams.songId;

    	$location.url('/songs/' + $scope.songId);

    	simple_storage.addStuff("SongId", song.$Id);

    };

  }]);
});

