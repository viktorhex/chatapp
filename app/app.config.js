'use strict';

angular.
  module('myApp').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/projects', {
          template: '<project-item-list></project-item-list>'
        })
        .when('/projects/:projectId', {
          template: '<project-item-details></project-item-details>'
        })
        .otherwise('/projects');
    }
  ]);
