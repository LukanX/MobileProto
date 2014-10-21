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
        templateUrl: 'views/home.html',
        controller: 'MainCtrl'
      })
      .when('/design1',{
        templateUrl: 'views/modules.html',
        controller: 'ModulesCtrl'
      })
      .when('/design2',{
        templateUrl: 'views/infinite.html',
        controller: 'InfiniteCtrl'
      })
      .when('/design3',{
        templateUrl: 'views/contextual.html',
        controller: 'ContextualCtrl'
      })
      .when('/debug',{
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
