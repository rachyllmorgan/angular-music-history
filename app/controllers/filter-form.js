// Artist/Album Menu Buttons

app.controller('filterForm', function($scope, $q, $log) {
  $scope.status = {
    isopen: false
  };

  $scope.toggled = function(open) {
    $log.log('Dropdown is now: ', open);
  };

  $scope.toggleDropdown = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.status.isopen = !$scope.status.isopen;
  };

	$scope.inputField = "";
	$scope.songSearchText =  "";
	$scope.theSongs = "";
	$scope.newSongs = {
		name: "",
		artist: "",
		album: "",
	};
	$scope.songs = [];

	// deletes from list
	$scope.removeSong = function(key) {
		var songIndex = $scope.songs.indexOf(key);
		if (songIndex >= 0) {
			$scope.songs.splice(songIndex, 1);
		}
	};
	// adds to list
	$scope.addSong = function() {
		$scope.songs.push({
			name: $scope.newSongs.name, 
			artist: $scope.newSongs.artist, 
			album: $scope.newSongs.album
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