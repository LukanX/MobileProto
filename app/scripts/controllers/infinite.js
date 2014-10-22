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
    $scope.locationEnabled = true;
    $scope.infiniteLimit = 10;
    $scope.nearbyLimit = 4;
    $scope.incrementLimit = function(){
    	var last = $scope.infiniteLimit;
 			$scope.infiniteLimit = last + 4;
    };
  }]);