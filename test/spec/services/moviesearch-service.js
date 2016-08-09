'use strict';

describe('Service: MoviesearchService', function () {

  // load the service's module
  beforeEach(module('movieCollectionApp'));

  // instantiate service
  var MoviesearchService;
  beforeEach(inject(function (_MoviesearchService_) {
    MoviesearchService = _MoviesearchService_;
  }));

  it('should do something', function () {
    expect(!!MoviesearchService).toBe(true);
  });

});
