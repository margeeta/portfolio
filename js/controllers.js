'use strict';

/* Controllers */

var portfolioControllers = angular.module('portfolioControllers', []);

portfolioControllers.controller('portfolioCtrl', function($scope, $http){
    $scope.projects = [
        {
        name: 'Project One',
        image: '2thrive',
        tag: 'tag • tag • tag',
        description: 'string of text', },
        {
        name: 'Project Two',
        image: '2thrive',
        tag: 'tag • tag • tag',
        description: 'string of text', },
        {
        name: 'Project Three',
        image: '2thrive',
        tag: 'tag • tag • tag',
        description: 'string of text', },
        {
        name: 'Project Four',
        image: '2thrive',
        tag: 'tag • tag • tag',
        description: 'string of text', },
        {
        name: '2Thrive',
        image: '2thrive',
        tag: 'tag • tag • tag',
        description: 'string of text', },
        {
        name: '2Thrive',
        image: '2thrive',
        tag: 'tag • tag • tag',
        description: 'string of text', },
        {
        name: '2Thrive',
        image: '2thrive',
        tag: 'tag • tag • tag',
        description: 'string of text', },
        {
        name: '2Thrive',
        image: '2thrive',
        tag: 'tag • tag • tag',
        description: 'string of text', },
        {
        name: 'Project Two',
        image: '2thrive',
        tag: 'tag',
        description: 'string of text', }
];
$scope.links = [
            {name: "@margeeta", url: "http://www.twitter.com/margeeta"},
            {name: 'dribble', url: 'https://dribbble.com/ADOBEsweet'},
            {name: 'tumblr', url: 'http://loneliestunicorn.tumblr.com/'},
            {name: 'github', url: 'https://github.com/margeeta'}
    ];

});
