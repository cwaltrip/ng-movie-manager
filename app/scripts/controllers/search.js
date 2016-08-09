'use strict';

/**
 * @ngdoc function
 * @name movieCollectionApp.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the movieCollectionApp
 */
angular.module('movieCollectionApp')
  .controller('SearchCtrl', 
  	function ($scope, $location, MovielistService) {

  	// Initialize variables
  	$scope.searchlist = {};
  	$scope.showResults = false;

  	// Find all movies with fields containing a given value
    $scope.findMovies = function(value) {
  		$scope.searchlist = MovielistService.search(value);
  	 	console.log($scope.searchlist);
  		$scope.showResults = true;
  		$location.path('search');
    };

    // Go to the selected movie
    $scope.gotoMovie = function(movieId) {
        $location.path('movie/' + movieId);
    };

    // Delete selected movie
    $scope.deleteMovie = function(movie) {
    	MovielistService.remove(movie);
    	$location.path('search');
    };

  });
