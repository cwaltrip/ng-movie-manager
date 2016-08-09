'use strict';

/**
 * @ngdoc overview
 * @name movieCollectionApp
 * @description
 * # movieCollectionApp
 *
 * Main module of the application.
 */
angular
  .module('movieCollectionApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'mgcrea.ngStrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/main', {
        title: 'My Movie Collection',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        title: 'About | My Movie Collection',
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/search', {
        title: 'Search | My Movie Collection',
        templateUrl: 'views/search.html',
        controller: 'SearchCtrl'
      })
      .when('/movie/:movieId', {
        title: 'Movie | My Movie Collection',
        templateUrl: 'views/movie.html',
        controller: 'MovieCtrl'
      })
      .otherwise({
        redirectTo: '/main'
      });
  });
