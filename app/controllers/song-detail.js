// displaying selected song
app.controller("SongDetailCtrl", 
  ["$scope", 
  "$routeParams",
  "$firebaseArray",
  "$q", 
  
  function($scope, $routeParams, $firebaseArray, $q) {

    $scope.selectedSong = {name:"test"};
    $scope.songId = $routeParams.songId;

    var ref = new Firebase("https://radiant-fire-6211.firebaseio.com/songs");
    $scope.songs = $firebaseArray(ref);

    $scope.songs.$loaded()
      .then(function() {
        $scope.selectedSong = $scope.songs.$getRecord($scope.songId);
      })
      .catch(function(error) {
        console.log("Error:", error);
      });
  }
]);