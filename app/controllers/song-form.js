// add song form w/ song-form.html
define(['app'], function (app) {
  app.controller("SongFormCtrl", 
  ["$scope", 
  "$firebaseArray",
  
    function($scope, $firebaseArray) {

  //variables	
    $scope.songs = [];
    $scope.theSongs = "";
    $scope.songSearchText = {name: "", artist: "", album: ""};
    $scope.newSongName ="";
    $scope.newSongArtist ="";
    $scope.newSongAlbum = "";

    

  // console.log(simple_storage.addList("garbage", { a: 1, b: 2}));


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
    }
  ]);
});