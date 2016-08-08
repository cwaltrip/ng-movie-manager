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
      .otherwise({
        redirectTo: '/'
      });
  });
