var app = angular.module("MusicApp", ['ui.bootstrap', 'ngRoute', 'firebase']);

	app.config(['$routeProvider',
	  function($routeProvider) {
	    $routeProvider
	      .when('/', {
	        templateUrl: 'partials/song-list.html',
	        controller: 'SongCtrl'
	      })
	      .when('/songs/new', {
	        templateUrl: 'partials/song-form.html',
	        controller: 'SongFormCtrl'
	      })
				.when('/songs/:songId', {
				templateUrl: 'partials/song-detail-list.html',
				controller: 'SongDetailCtrl'
				})
	      .otherwise({
	        redirectTo: '/'
	      });
	  }
  ]);