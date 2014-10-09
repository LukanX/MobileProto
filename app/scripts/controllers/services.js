'use strict';

var mobileProtoServices = angular.module('mobileProtoServices', ['ngResource']);

mobileProtoServices.factory('Carousel', ['$resource',
  function($resource){
    return $resource('json/carousel.json', {}, {
      query: {method:'GET', isArray:true}
    });
  }]);