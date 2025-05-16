'use strict';

describe('projectItemList', function () {

  // Load the module that contains the `projectItemList` component before each test
  beforeEach(module('projectItemList'));

  // Test the controller
  describe('ProjectItemListController', function () {
    var $httpBackend, ctrl;

    beforeEach(inject(function ($componentController, _$httpBackend_) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('assets/projects.json')
        .respond([
          {
            name: 'AngularJS Demo',
            description: "description of angularjs demo work"
          },
          {
            name: 'Nextjs Demo',
            description: "description of Nextjs demo work"
          }
        ]);

      ctrl = $componentController('projectItemList');
    }));

    it('should create a `projects` property with 2 projects fetched with `$http`', function () {
      jasmine.addCustomEqualityTester(angular.equals);

      expect(ctrl.projects).toEqual([]);

      $httpBackend.flush();
      expect(ctrl.projects).toEqual([
        {
          name: 'AngularJS Demo',
          description: "description of angularjs demo work"
        },
        {
          name: 'Nextjs Demo',
          description: "description of Nextjs demo work"
        }
      ]);
    });

  });

});