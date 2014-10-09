'use strict';

/**
 * @ngdoc function
 * @name mobileProtoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mobileProtoApp
 */
angular.module('mobileProtoApp')
  .controller('HeaderCtrl', function ($scope) {

    $scope.toggleActive = function(){
    	$scope.check = $scope.check === false ? true: false;
    };
  });
