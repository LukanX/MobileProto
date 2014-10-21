'use strict';

/**
 * @ngdoc function
 * @name mobileProtoApp.controller:CarouselCtrl
 * @description
 * # MainCtrl
 * Controller of the mobileProtoApp
 */
angular.module('mobileProtoApp')
  .controller('FavoritesCtrl', ['$scope','Favorites',
   function ($scope, Favorites) {
    $scope.favorites = Favorites.query();
  }]);