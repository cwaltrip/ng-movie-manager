'use strict';

/**
 * @ngdoc directive
 * @name movieCollectionApp.directive:MovielistPanel
 * @description
 * # MovielistPanel
 */
angular.module('movieCollectionApp')
  .directive('MovielistPanel', function ($location, $modal, MovielistService) {
    return {
      templateUrl: 'views/templates/movielist-panel.html',
      restrict: 'E',
      scope: {},
      link: function(scope, element, attrs) {
        // Init variables
        $scope.movie = {};
        var addMovieModal = $modal({
        	scope: $scope,
        	templateUrl: 'view/templates/addmovie-modal.html',
        	show: false
        });

        // Get a handle to the model in this scope
        $scope.movielist = MovielistService.query();

        // Show the modal window
        $scope.showModal = function() {
        	addMovieModal.$promise.then(addMovieModal.show);
        };

        // Create a new movie from modal fields
        $scope.createMovie = function() {
        	MovielistService.save($scope.movie);
        	addMovieModal.hide();
        	$scope.movie = {};
        };

        // Delete selected movie, redirect home
        $scope.deleteMovie = function(movie) {
        	MovielistService.remove(movie);
        	$location.path('/');
        };

      }
    };
  });
