'use strict';

/* Directives */

angular.module('platesApp.directives', [])
	.directive('appVersion', ['version', function (version) {
		return function (scope, elm, attrs) {
			elm.text(version);
		};
	}]);
