'use strict';

describe('Directive: MovielistPanel', function () {

  // load the directive's module
  beforeEach(module('movieCollectionApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<-movielist-panel></-movielist-panel>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the MovielistPanel directive');
  }));
});
