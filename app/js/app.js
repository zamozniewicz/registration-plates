'use strict';

// Declare app level module which depends on filters, and services

angular.module('platesApp', ['platesApp.filters', 'platesApp.services', 'platesApp.directives']).config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', { templateUrl: 'partials/list.html', controller: PlatesListCtrl });
    $routeProvider.otherwise({ redirectTo: '/' });
}]);
