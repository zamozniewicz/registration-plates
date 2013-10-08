'use strict';

angular.module('platesApp', ['platesApp.filters', 'platesApp.services', 'platesApp.directives']).config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', { templateUrl: 'partials/list.html', controller: PlatesListCtrl });
    $routeProvider.otherwise({ redirectTo: '/' });
}]);
