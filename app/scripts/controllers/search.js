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

  	$scope.searchlist = {};
  	$scope.showResults = false;

    $scope.findMovies = function(value) {
  		$scope.searchlist = MovielistService.search(value);
  	 	console.log($scope.searchlist);
  		$scope.showResults = true;
  		$location.path('search');
    };

    $scope.gotoMovie = function(movieId) {
        $location.path('movie/' + movieId);
    };

  });
