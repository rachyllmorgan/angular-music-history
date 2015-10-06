// Display songs
app.controller('SongCtrl', 
	["$scope", 
	"$firebaseArray",
	"$location",
	"simple-storage", 
	
	function($scope, $firebaseArray, $location, simple_storage) {
	
	  var ref = new Firebase("https://radiant-fire-6211.firebaseio.com/songs");
  	$scope.songs = $firebaseArray(ref);

    console.log("$scope.songs", $scope.songs);

    $scope.showSongDetail = function (song){
    	
    	$scope.songId = song.$id;
      console.log("$scope.songId", $scope.songId);
    	$scope.songId = $routeParams.songId;

    	$location.url('/songs/' + $scope.songId);

    	simple_storage.addStuff("SongId", song.$Id);

    };
  }
]);

