(function() {
'use strict'
    var app = angular.module('portfolio', []);

app.controller('portfolioCtrl', function($scope){
    $scope.projects = [
        {
        name: '2Thrive',
        image: '2thrive',
        tag: 'tag • tag • tag',
        description: 'string of text', },
        {
        name: 'Project Two',
        image: '2thrive',
        tag: 'tag',
        description: 'string of text', },
    ];
});
})();
