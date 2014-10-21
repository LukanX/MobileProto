'use strict';

/**
 * @ngdoc function
 * @name mobileProtoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mobileProtoApp
 */
angular.module('mobileProtoApp')
  .controller('ContextualCtrl', function ($scope) {
    $scope.popularLimit = 4;
    $scope.nearbyLimit = 4;
    $scope.whereShopping = 'o';
    $scope.isShoppingQueryHidden = false;
    $scope.showNearby = true;
  });
