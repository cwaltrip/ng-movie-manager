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
        // console.log('MovielistService.loadMovies invoked - loaded:');
    	var movielist = {
    		movies: localStorage['MovieCollectionApp.movies'] ? 
    			JSON.parse(localStorage['MovieCollectionApp.movies']) : [],
    		nextId: localStorage['MovieCollectionApp.nextId'] ? 
    			parseInt(localStorage['MovieCollectionApp.nextId']) : 0
    	};
        // Fix corrupted nextId (remove after development)
        if (isNaN(movielist.nextId)) {
            console.log('nextId corrected from NaN to 0');
            movielist.nextId = 0;
        }
        // console.log(JSON.stringify(movielist.movies));
        // console.log(movielist.nextId);
    	return movielist;
    };

    // Save movie list to LocalStorage
    var saveMovies = function() {
        // console.log('MovielistService.saveMovies invoked - saved:');
    	localStorage['MovieCollectionApp.movies'] = JSON.stringify(MovieList.movies);
    	localStorage['MovieCollectionApp.nextId'] = MovieList.nextId;
        // console.log(JSON.stringify(MovieList.movies));
        // console.log(MovieList.nextId);
    };

    // Helper to find a movie with a given ID (uses lodash.js)
    var findById = function(movieId) {
        // console.log('MovielistService.findById invoked');
    	return _.find(MovieList.movies, function(movie) {
    		return movie.id === parseInt(movieId);
    	});
    };

    var sortByTitle = function(movies) {
        // console.log('MovielistService.sortTitles invoked');
        return _.sortBy(movies, function(o) { return o.title; });
    };

    // Return all movies, or find a movie by the given ID
    this.query = function(movieId) {
        // console.log('MovielistService.query invoked');
    	if (movieId) {
    		return findById(movieId);
    	} else {
    		// return MovieList.movies;
            return sortByTitle(MovieList.movies);
    	}
    };

    // Save a new movie to the MovieList model
    this.save = function(movie) {
        // console.log('MovielistService.save invoked');
        movie.id = MovieList.nextId++;
        // console.log('movie.id = ' + movie.id);
    	MovieList.movies.push(movie);
    	saveMovies();
    };

    // Remove a given movie from the MovieList model (uses lodash.js)
    this.remove = function(movie) {
        // console.log('MovielistService.remove invoked on movie.id: ' + movie.id);
    	_.remove(MovieList.movies, function(aMovie) {
    		return aMovie.id === movie.id;
    	});
    	saveMovies();
    };

    // Initialize the MovieList
    var MovieList = loadMovies();

  });
