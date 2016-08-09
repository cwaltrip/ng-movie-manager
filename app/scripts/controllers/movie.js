'use strict';

/**
 * @ngdoc function
 * @name movieCollectionApp.controller:MovieCtrl
 * @description
 * # MovieCtrl
 * Controller of the movieCollectionApp
 */
angular.module('movieCollectionApp')
  .controller('MovieCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
