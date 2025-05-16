'use strict';

// Register `projectItemList` component, along with its associated controller and template
angular.
  module('projectItemList').
  component('projectItemList', {
    templateUrl: 'components/project-item-list/project-item-list.template.html',
    controller: ['Project', '$location',
      function ProjectItemListController(Project, $location) {
        this.projects = Project.query();

        this.navigateToProject = function (id) {
          $location.path('/projects/' + id);
        }
      }
    ]
  });
