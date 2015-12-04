'use strict';

/* Controllers */

angular.module('directives', [])

.directive('project', function() {
  return {
    templateUrl: 'partials/project.html'
  };

})
.directive('links', function() {
  return {
    templateUrl: 'partials/links.html'
  };
});


