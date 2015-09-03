// star rating system - not currently working
define(['directives/directives'], function(directives) {
  directives.directive('songStarRating', function () {
	  return {
	    restrict: 'A',
	    link: function (scope, elem, attrs) {
	      console.log("Recognized the fundoo-rating directive usage");
	    }
	  };
	});
});