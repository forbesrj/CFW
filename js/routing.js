/**
 * Created by Ryan on 8/29/2014.
 */
var app = angular.module('cfwModule', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/about', {templateUrl:'partials/about.html'})
        .when('/media', {templateUrl:'partials/media.html'})
        .otherwise({redirectTo: '/', templateUrl:'partials/home.html'})
}]);