// add song form w/ song-form.html
app.controller("SongFormCtrl", 
  ["$scope", 
  "$firebaseArray",
  "$http",
  
  function($scope, $firebaseArray, $http) {

//variables	
  $scope.songs = [];
  $scope.theSongs = "";
  $scope.songSearchText = {name: "", artist: "", album: ""};
  $scope.newSongName ="";
  $scope.newSongArtist ="";
  $scope.newSongAlbum = "";

  $scope.userSongSearch = "";
  $scope.userArtistSearch = "";

  $scope.searchSong = function(){
    console.log("$scope.userSongSearch", $scope.userSongSearch);
    $http.get('http://musicbrainz.org/ws/2/recording?query=' + $scope.userSongSearch + '?fmt=json').
    then(function(data) {///search?q=Goosinator&type=beer
      console.log(data);
      $scope.songtitles="";
    });
  };

  $scope.searchArtist = function(){
    console.log("$scope.userArtistSearch", $scope.userArtistSearch);
    $http.get('http://developer.echonest.com/api/v4/artist/search?api_key=B1HNDPJGNYE8IUD1M&format=json&title=' + $scope.userArtistSearch).
    then(function(data) {///search?q=Goosinator&type=beer
      console.log(data);

    });
  };

  // add new items to the array

  $scope.addSong = function() {
    var ref = new Firebase("https://radiant-fire-6211.firebaseio.com/songs");
    // create a synchronized array
    var songs = $firebaseArray(ref);

    songs.$add({
        name: $scope.newSongName, 
        artist: $scope.newSongArtist, 
        album: $scope.newSongAlbum, 
        rating: ""
    }).then(function() {
          console.log("success");
    });
  };
}]);