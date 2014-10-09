'use strict';

/**
 * @ngdoc function
 * @name mobileProtoApp.controller:CarouselCtrl
 * @description
 * # MainCtrl
 * Controller of the mobileProtoApp
 */
angular.module('mobileProtoApp')
  .controller('CarouselCtrl', ['$scope','Carousel',
   function ($scope, Carousel) {
    $scope.carouselDeals = Carousel.query();

  }]);