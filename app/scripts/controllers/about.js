'use strict';

/**
 * @ngdoc function
 * @name mobileProtoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the mobileProtoApp
 */
angular.module('mobileProtoApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
