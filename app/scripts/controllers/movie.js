'use strict';

/**
 * @ngdoc function
 * @name movieCollectionApp.controller:MovieCtrl
 * @description
 * # MovieCtrl
 * Controller of the movieCollectionApp
 */
angular.module('movieCollectionApp')
  .controller('MovieCtrl', function ($scope, $location, $routeParams, MovielistService) {
    
  	// Get the current movie's ID from the $route parameters
    $scope.movie = MovielistService.query($routeParams.movieId);

  });
