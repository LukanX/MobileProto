'use strict';

/**
 * @ngdoc function
 * @name mobileProtoApp.controller:CarouselCtrl
 * @description
 * # DealsCtrl
 * Controller of the mobileProtoApp
 */
angular.module('mobileProtoApp')
  .controller('DealsCtrl', ['$scope','Deals',
   function ($scope, Deals) {
    $scope.deals = Deals.query();
  }]);