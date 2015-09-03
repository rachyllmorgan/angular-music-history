// The app/app.js file defines AngularJS app
define(['angular', 'angularRoute'], function (angular, angularRoute) {
    var app = angular.module('MusicApp', ['ui.bootstrap', 'ngRoute', 'firebase']);
    	
      app.config(['$routeProvider',
      function($routeProvider) {
       $routeProvider
         .when('/', {
           templateUrl: 'partials/song-list.html',
           controller: 'SongCtrl'
           // controllerUrl: 'controllers/display-songs'
         })
         .when('/songs/new', {
           templateUrl: 'partials/song-form.html',
           controller: 'SongFormCtrl'
           // controllerUrl: 'controllers/song-form'
         })
         .when('/songs/:songId', {
         templateUrl: 'partials/song-detail-list.html',
         controller: 'SongDetailCtrl'
         // controllerUrl: 'controller/song-detail'
         })
         .otherwise({
           redirectTo: '/'
         });
      }
    ]);
});


// Angular Only project

//var app = angular.module("MusicApp", ['ui.bootstrap', 'ngRoute', 'firebase']);

// 	app.config(['$routeProvider',
// 	  function($routeProvider) {
// 	    $routeProvider
// 	      .when('/', {
// 	        templateUrl: 'partials/song-list.html',
// 	        controller: 'SongCtrl'
// 	      })
// 	      .when('/songs/new', {
// 	        templateUrl: 'partials/song-form.html',
// 	        controller: 'SongFormCtrl'
// 	      })
// 				.when('/songs/:songId', {
// 				templateUrl: 'partials/song-detail-list.html',
// 				controller: 'SongDetailCtrl'
// 				})
// 	      .otherwise({
// 	        redirectTo: '/'
// 	      });
// 	  }
// 	]);