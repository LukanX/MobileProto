'use strict';

/**
 * @ngdoc overview
 * @name mobileProtoApp
 * @description
 * # mobileProtoApp
 *
 * Main module of the application.
 */
angular
  .module('mobileProtoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'mobileProtoServices',
    'ngSanitize',
    'angular-carousel',
    'ngTouch',
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
