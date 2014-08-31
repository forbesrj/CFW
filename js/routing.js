/**
 * Created by Ryan on 8/29/2014.
 */
var app = angular.module('cfwModule', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/about', {templateUrl:'partials/about.html'})
        .when('/media', {templateUrl:'partials/media.html'})
        .when('/press', {templateUrl:'partials/press.html'})
        .when('/social', {templateUrl:'partials/social.html'})
        .when('/schedule', {templateUrl:'partials/schedule.html'})
        .when('/talent', {templateUrl:'partials/talent.html'})
        .otherwise({redirectTo: '/', templateUrl:'partials/home.html'})
}]);