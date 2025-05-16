'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function () {

  // todo: test case for navigating to details page
  it('should automatically redirect to /home when location hash/fragment is empty', function () {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/projects");
  });

  it('should render details page', function(){
    browser.get('index.html#!/projects/0');
    expect(element.all(by.css('.project__tools')).first().getText()).
      toMatch(/AngularJS/); // first tool used
  });

  describe('projects', function () {

    beforeEach(function () {
      browser.get('index.html#!/projects');
    });

    it('should render home when user navigates to /home', function () {
      expect(element.all(by.css('.project-item')).first().getText()).
        toMatch(/Project Portfolio/);
    });

    it('should filter the project list as a user types into the search box', function () {
      var projectList = element.all(by.repeater('project in $ctrl.projects'));
      var query = element(by.model('$ctrl.query'));

      expect(projectList.count()).toBe(3);

      query.sendKeys('ActiveMQ');
      expect(projectList.count()).toBe(1);

      query.clear();
      query.sendKeys('Project');
      expect(projectList.count()).toBe(2);
    });

  });

});
