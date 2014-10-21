'use strict';

/**
 * @ngdoc function
 * @name mobileProtoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mobileProtoApp
 */
angular.module('mobileProtoApp')
  .controller('ModulesCtrl', function ($scope) {
    $scope.popularLimit = 10;
    $scope.locationEnabled = false;
    $scope.nearbyLimit = 4;
  });
