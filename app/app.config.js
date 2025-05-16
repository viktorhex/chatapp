'use strict';

angular.
  module('myApp').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/chat', {
          template: '<chat></chat>'
        })
        .otherwise('/chat');
    }
  ]);
