'use strict';

angular.
  module('core.project').
  factory('Project', ['$resource', '$filter',
    function ($resource, $filter) {
      var resource = $resource('assets/projects.json', {}, {
        query: {
          method: 'GET',
          isArray: true
        }
      });

      resource.findById = function (projectId) {
        return resource.query().$promise.then(function (projects) {
          return projects.find(function (project) {
            return project.id === projectId;
          }) || null; // Return the first matching project or null if not found
        });
      };

      return resource;
    }
  ]);
