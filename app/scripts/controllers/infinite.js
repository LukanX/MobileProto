'use strict';

/**
 * @ngdoc function
 * @name mobileProtoApp.controller:CarouselCtrl
 * @description
 * # MainCtrl
 * Controller of the mobileProtoApp
 */
angular.module('mobileProtoApp')
  .controller('InfiniteCtrl', ['$scope','Infinite',
   function ($scope, Infinite) {
    $scope.infinite = Infinite.query();
  }]);