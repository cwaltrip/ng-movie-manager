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
    
  	// Get a handle to the model in this scope
  	console.log('routeParams.movieId = ' + $routeParams.movieId);
    $scope.movie = MovielistService.query($routeParams.movieId);

  });
