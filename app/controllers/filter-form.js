// Artist/Album Menu Buttons

app.controller('filterForm', function($scope, $q, $log) {
 
// artist/album menu variables 
  $scope.status = {
    isopen: false
  };

// song display/delete/add variables
  $scope.inputField = "";
	$scope.songSearchText =  "";
	$scope.theSongs = "";
	$scope.newSongs = {
		name: "",
		artist: "",
		album: "",
	};

// rating variables
	$scope.songs = [];
	$scope.rate = 0;
	$scope.max = 5;
	$scope.isReadonly = false;

// Artist/Album Menu
  $scope.toggled = function(open) {
    $log.log('Dropdown is now: ', open);
  };

  $scope.toggleDropdown = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.status.isopen = !$scope.status.isopen;
  };

// Attempt at rating system

	  $scope.hoveringOver = function(value) {
	    $scope.overStar = value;
	    $scope.percent = 100 * (value / $scope.max);
	  };

	  $scope.ratingStates = [
	    {stateOn: 'glyphicon-ok-sign', stateOff: 'glyphicon-ok-circle'},
	    {stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty'},
	    {stateOn: 'glyphicon-heart', stateOff: 'glyphicon-ban-circle'},
	    {stateOn: 'glyphicon-heart'},
	    {stateOff: 'glyphicon-off'}
	  ];


	// deletes from list
	$scope.removeSong = function(key) {
		var songIndex = $scope.songs.indexOf(key);
		if (songIndex >= 0) {
			$scope.songs.splice(songIndex, 1);
		}
	};
	// adds to list
	$scope.addSong = function() {
		$scope.songs.unshift({
			name: $scope.newSongs.name, 
			artist: $scope.newSongs.artist, 
			album: $scope.newSongs.album,
			rating: 0
		});
		
		$scope.newSongs = "";
	};

// Populate songs to menu list

  function getSongList(location) {

		return $q (function(resolve, reject){

			$.ajax({
				url: location
			})
			.done(function(response){
				resolve(response.songs);
			})
			.fail(function(xhr, status, error){
				reject(error);
			});
		});
	}	

	// set function to variable before executing promise

  var songListOne = getSongList("./json/mix.json");

		songListOne

			.then(function(promiseData){
				$scope.songs = promiseData;
			},function(error){
				console.log("error", error);
			});
});