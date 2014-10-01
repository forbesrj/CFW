/**
 * Created by Ryan on 8/29/2014.
 */
var app = angular.module('cfwModule', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/about', {templateUrl:'partials/about.html'})
        .when('/media', {templateUrl:'partials/media.html'})
        .when('/press', {templateUrl:'partials/press.html'})
        .when('/partners', {templateUrl:'partials/partners.html'})
        .when('/designers', {templateUrl:'partials/designers.html'})
        .when('/social', {templateUrl:'partials/social.html'})
        .when('/events', {templateUrl:'partials/events.html'})
        .when('/talent', {templateUrl:'partials/talent.html'})
        .when('/videos', {templateUrl:'partials/videos.html'})
        .otherwise({redirectTo: '/', templateUrl:'partials/home.html'})
}]).directive('routeFade', function() {
    return {
        compile: function(elm) {
            $(elm).css('opacity', 0.1);
            return function(scope, elm, attrs) {
                $(elm).animate({ opacity : 1.0 }, 1000 );
            };
        }
    };
});
