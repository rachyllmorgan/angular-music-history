// Display songs
app.controller('SongCtrl', 
	["$scope", 
	"$firebaseArray",
	"$location",
	"simple-storage", 
  "$http",
	
	function($scope, $firebaseArray, $location, simple_storage, $http) {

		$scope.songs=[];

	 //  var ref = new Firebase("https://radiant-fire-6211.firebaseio.com/songs");
  // 		// create a synchronized array
  // 		$scope.songs = $firebaseArray(ref);

  // console.log("calling get_songs", $scope.songs);



  // $scope.search = function(){
  //   console.log("$scope.userInput", $scope.userInput);
    $http.get('http://freemusicarchive.org/api/get/{dataset}.{format}?api_key=').
    then(function(data) {///search?q=Goosinator&type=beer
      console.log(data);

    });

  $scope.showSongDetail = function (song){
  	
  	$scope.songId = song.$id;
    console.log("$scope.songId", $scope.songId);
  	$scope.songId = $routeParams.songId;

  	$location.url('/songs/' + $scope.songId);

  	simple_storage.addStuff("SongId", song.$Id);

  };

}]);

