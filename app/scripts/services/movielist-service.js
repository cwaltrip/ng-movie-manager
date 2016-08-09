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
    			parseInt(localStorage['MovieCollectionApp.nextId']) : 0
    	};
        // Fix corrupted nextId (remove after development)
        if (isNaN(movielist.nextId)) {
            console.log('nextId corrected from NaN to 0');
            movielist.nextId = 0;
        }
    	return movielist;
    };

    // Save movie list to LocalStorage
    var saveMovies = function() {
    	localStorage['MovieCollectionApp.movies'] = JSON.stringify(MovieList.movies);
    	localStorage['MovieCollectionApp.nextId'] = MovieList.nextId;
    };

    // Helper to natural-sort movies by title
    var sortByTitle = function(movies) {
        return _.sortBy(movies, function(o) { return o.title; });
    };

    // Helper to find a movie with a given ID (uses lodash.js)
    var findById = function(movieId) {
    	return _.find(MovieList.movies, function(movie) {
    		return movie.id === parseInt(movieId);
    	});
    };

    // Helper to find a movie with a given ID (uses lodash.js)
    var findByValue = function(value) {
        // return _.find(MovieList.movies, function(movie) {
        //     return _.includes(Object.values(movie), value);
        // });
        return _.filter(MovieList.movies, function(movie) {
            return _.includes(movie, value);
        });
    };

    // Return all movies with a given field value, or return an empty set
    this.search = function(value) {
        if (value) {
            return findByValue(value);
        } else {
            return {};
        }
    };

    // Return a movie with the given ID, or return set of all movies
    this.query = function(movieId) {
    	if (movieId) {
    		return findById(movieId);
    	} else {
            return sortByTitle(MovieList.movies);
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
