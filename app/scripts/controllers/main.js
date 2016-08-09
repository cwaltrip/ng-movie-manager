'use strict';

/**
 * @ngdoc function
 * @name movieCollectionApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the movieCollectionApp
 */
angular.module('movieCollectionApp')
  .controller('MainCtrl', 
    function ($scope, $location, $modal, $routeParams, MovielistService) {

    // Get a handle to the model in this scope
    $scope.movielist = MovielistService.query();
    
    // Init variables
    // $scope.currentMovie = $routeParams.movieId;
    $scope.movie = {};
    
    // Create the modal window
    var addMovieModal = $modal({
    	scope: $scope,
    	templateUrl: 'views/templates/addmovie-modal.html',
    	show: false
    });

    // Show the modal window
    $scope.showModal = function() {
    	addMovieModal.$promise.then(addMovieModal.show);
    };

    // Create a new movie from modal fields
    $scope.addMovie = function() {
        MovielistService.save($scope.movie);
        addMovieModal.hide();
        $scope.movie = {};
        $location.path('main/');
    };

    // Delete selected movie, redirect home
    $scope.deleteMovie = function(movie) {
    	MovielistService.remove(movie);
    	$location.path('main/');
    };
    
    // Go to the selected movie
    $scope.gotoMovie = function(movieId) {
        $location.path('movie/' + movieId);
    };

    $scope.getMovieCount = function() {
        if ($scope.movielist.length === 1) {
            return 'There is 1 movie in your collection.';
        } else {
            return 'There are ' + $scope.movielist.length +' movies in your collection.';
        }
    };
    
  });
