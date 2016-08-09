'use strict';

/**
 * @ngdoc service
 * @name movieCollectionApp.MoviesearchService
 * @description
 * # MoviesearchService
 * Service in the movieCollectionApp.
 */
angular.module('movieCollectionApp')
  .service('MoviesearchService', function MoviesearchService() {

  	// Get a handle to the model in this scope
    // var MovieList = MovielistService.query();

    // Helper to find a movie with a given ID (uses lodash.js)
    // this.findById = function(movieId) {
    // 	return _.find(MovieList.movies, function(movie) {
    // 		return movie.id === parseInt(movieId);
    // 	});
    // };

    // this.findAllbyValue = function(value) {
    	// console.log('MoviesearchService.findAllbyValue invoked with value: ' + value);
    	// var outerFilter = _.filter(MovieList.movies, function(movie) {
    	// 	return _.includes(movie, value);
    	// });
    	// return _.filter(MovieList.movies, function(movie) {
    	// 	return _.includes(movie, value);
    	// console.log(outerFilter);
    	// return outerFilter;
    // 	return MovieList.movies;
    // };

    // var sortByTitle = function(movies) {
    //     return _.sortBy(movies, function(o) { return o.title; });
    // };

  });
