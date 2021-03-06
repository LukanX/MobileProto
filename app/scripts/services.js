'use strict';

var mobileProtoServices = angular.module('mobileProtoServices', ['ngResource']);

mobileProtoServices.factory('Carousel', ['$resource',
  function($resource){
    return $resource('json/carousel.json', {}, {
      query: {method:'GET', isArray:true}
    });
  }]);

mobileProtoServices.factory('Deals', ['$resource',
  function($resource){
    return $resource('json/deals.json', {}, {
      query: {method:'GET', isArray:true}
    });
  }]);

mobileProtoServices.factory('Favorites', ['$resource',
  function($resource){
    return $resource('json/brian2.json', {}, {
      query: {method:'GET', isArray:true}
    });
  }]);

mobileProtoServices.factory('Infinite', ['$resource',
  function($resource){
    return $resource('json/infinite.json', {}, {
      query: {method:'GET', isArray:true}
    });
  }]);