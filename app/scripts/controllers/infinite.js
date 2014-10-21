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
   	var infiniteLimit = 10;
    $scope.infinite = Infinite.query();
    $scope.infiniteLimit = infiniteLimit;
    $scope.incrementLimit = function(){
    	var last = infiniteLimit;
 			$scope.infiniteLimit.push(last + 4);
    };
  }]);