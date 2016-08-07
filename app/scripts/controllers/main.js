'use strict';

/**
 * @ngdoc function
 * @name movieCollectionApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the movieCollectionApp
 */
angular.module('movieCollectionApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
