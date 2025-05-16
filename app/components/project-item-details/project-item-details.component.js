'use strict';

angular.
  module('projectItemDetails').
  component('projectItemDetails', {
    templateUrl: 'components/project-item-details/project-item-details.template.html',
    controller: ['$routeParams', 'Project',
      function ProjectItemDetailsController($routeParams, Project) {
        const projectId = $routeParams.projectId;
        var self = this;
        Project.findById(projectId).then(function(project){
          self.project = project;
        })
      }
    ]
  });
