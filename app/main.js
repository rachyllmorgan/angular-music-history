// the app/scripts/main.js file, which defines our RequireJS config
require.config({
  baseURL: 'app',
  paths: {
    'jquery': '../lib/bower_components/jquery/dist/jquery.min',
    'firebase': '../lib/bower_components/firebase/firebase',
    'lodash': '../lib/bower_components/lodash/lodash.min',
    'ng-lodash': '../lib/bower_components/ng-lodash/build/ng-lodash.min',
    'bootstrap': '../lib/bower_components/bootstrap/dist/js/bootstrap.min',
    'q': '../lib/bower_components/q/q',
    'es6': '../lib/bower_components/requirejs-babel/es6',
    'requirejs-babel': '../lib/bower_components/requirejs-babel/babel-5.8.22.min',
    'angular': '../lib/bower_components/angular/angular.min',
    'angularFire': '../lib/bower_components/angularfire/dist/angularfire.min',
    'ui-bootstrap': '../lib/bower_components/angular-bootstrap/ui-bootstrap.min',
    'angularRoute': '../lib/bower_components/angular-route/angular-route.min',
    'angularAMD': '../lib/bower_components/angularAMD/angularAMD.min',
    'angularMocks': '../lib/bower_components/angular-mocks/angular-mocks',
    'ngload': '../lib/bower_components/ng-load/ng-load',
    'app': 'app'
  },
  shim: {
    'angularAMD': ['angular'],
    'ui-bootstrap': ['angular'],
    'angular' : {'exports' : 'angular'},
    'angularRoute': ['angular'],
    'angularMocks': {
      deps:['angular'],
      'exports':'angular.mock'
      },
    'bootstrap': ['jquery'],
    'firebase': {
      exports: 'Firebase'
      },
    'app': ['angular','ui-bootstrap']
  },

  priority: [
    "angular"
    ],
});
require([
  'angular',
  'app'
  ], function(angular, app) {
    var $html = angular.element(document.getElementsByTagName('html')[0]);
    angular.element().ready(function() {
      // bootstrap the app manually
      angular.bootstrap(document, ['MusicApp']);
    });
  }
);