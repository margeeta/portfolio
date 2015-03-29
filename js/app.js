(function() {
'use strict'
    var app = angular.module('portfolio', []);


app.controller('portfolioCtrl', function($scope, $http){
    $http.get('/js/projects.json').success(function(data) {
        $scope.projects = data;
});
})();
