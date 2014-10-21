'use strict';

angular.module('mobileProtoApp', [])
	.filter('sliceFilter',function(){
		return function(arr, start, end) {
    	return (arr || []).slice(start, end);
	  };
	});