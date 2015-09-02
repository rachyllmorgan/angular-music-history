// Artist/Album Menu Buttons
app.controller('filterFormCtrl', 
  ["$scope", 
  "firebase",
  
  function($scope, firebase) {
 
// artist/album menu variables 
  $scope.status = {
    isopen: false
  };
  
  $scope.songs = [];
  $scope.songSearchText = {name: "", artist: "", album: ""};
  $scope.newSong = {name: "", artist: "", album: ""};

// Artist/Album Menu
  $scope.toggled = function(open) {
    $log.log('Dropdown is now: ', open);
  };

  $scope.toggleDropdown = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.status.isopen = !$scope.status.isopen;
  };

}]);