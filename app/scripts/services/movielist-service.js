'use strict';

/**
 * @ngdoc service
 * @name movieCollectionApp.MovielistService
 * @description
 * # MovielistService
 * Service in the movieCollectionApp.
 */
angular.module('movieCollectionApp')
  .service('MovielistService', function MovielistService() {
  	
  	// Load movie list from LocalStorage
    var loadMovies = function() {
    	var movielist = {
    		movies: localStorage['MovieCollectionApp.movies'] ? 
    			JSON.parse(localStorage['MovieCollectionApp.movies']) : [],
    		nextId: localStorage['MovieCollectionApp.nextId'] ? 
    			parseInt(localStorage['']) : 0
    	};
    	return movielist;
    };

    // Save movie list to LocalStorage
    var saveMovies = function() {
    	localStorage['MovieCollectionApp.movies'] = JSON.stringify(MovieList.movies);
    	localStorage['MovieCollectionApp.nextId'] = MovieList.nextId;
    };

    // Helper to find a movie with a given ID (uses lodash.js)
    var findById = function(movieId) {
    	return _.find(MovieList.movies, function(movie) {
    		return movie.id === parseInt(movieId);
    	});
    };

    // Return all movies, or find a movie by the given ID
    this.query = function(movieId) {
    	if (movieId) {
    		return findById(movieId);
    	} else {
    		return MovieList.movies;
    	}
    };

    // Save a new movie to the MovieList model
    this.save = function(movie) {
    	movie.id = MovieList.nextId++;
    	MovieList.movies.push(movie);
    	saveMovies();
    };

    // Remove a given movie from the MovieList model (uses lodash.js)
    this.remove = function(movie) {
    	_.remove(MovieList.movies, function(aMovie) {
    		return aMovie.id === movie.id;
    	});
    	saveMovies();
    };

    // Initialize the MovieList
    var MovieList = loadMovies();

  });
