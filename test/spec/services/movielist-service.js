'use strict';

describe('Service: MovielistService', function () {

  // load the service's module
  beforeEach(module('movieCollectionApp'));

  // instantiate service
  var MovielistService;
  beforeEach(inject(function (_MovielistService_) {
    MovielistService = _MovielistService_;
  }));

  it('should do something', function () {
    expect(!!MovielistService).toBe(true);
  });

});
