'use strict';

describe('projectItemDetails', function () {

  // Load the module that contains the `projectItemList` component before each test
  beforeEach(module('projectItemDetails'));

  // Test the controller
  describe('ProjectItemDetailsController', function () {
    var $httpBackend, ctrl;

    beforeEach(inject(function ($componentController, _$httpBackend_, $routeParams) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('assets/projects.json')
        .respond([
          {
            "id": "0",
            "name": "Project Portfolio",
            "description": "This is an AngularJS demo, used to present my other projects/demos.",
            "tools": [
              "AngularJS",
              "Bootstrap",
              "MaterialJS"
            ],
            "image": "assets/images/project-portfolio.png"
          },
          {
            "id": "1",
            "name": "ActiveMQ Demo",
            "description": "This is a demo of ActiveMQ and Java",
            "tools": [
              "Java Messaging Service",
              "ActiveMQ"
            ]
          }
        ]);

      $routeParams.projectId = '0';

      ctrl = $componentController('projectItemDetails');
    }));

    it('should create a `project` property with 1 project fetched with `$http`', function () {
      jasmine.addCustomEqualityTester(angular.equals);

      expect(ctrl.project).toBeUndefined()

      $httpBackend.flush();
      expect(ctrl.project).toEqual({
        "id": "0",
        "name": "Project Portfolio",
        "description": "This is an AngularJS demo, used to present my other projects/demos.",
        "tools": [
          "AngularJS",
          "Bootstrap",
          "MaterialJS"
        ],
        "image": "assets/images/project-portfolio.png"
      });
    });

  });

});