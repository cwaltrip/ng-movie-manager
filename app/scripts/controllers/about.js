'use strict';

/**
 * @ngdoc function
 * @name movieCollectionApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the movieCollectionApp
 */
angular.module('movieCollectionApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
