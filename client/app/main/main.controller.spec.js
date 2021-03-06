'use strict';

describe('Controller: MainCtrl', function() {

  // load the controller's module
  beforeEach(module('meanshopApp'));
  beforeEach(module('stateMock'));
  beforeEach(module('socketMock'));

  var MainCtrl;
  var scope;
  var state;
  var $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function(_$httpBackend_, $controller, $rootScope, $state) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/api/products')
      .respond(['HTML5 Boilerplate', 'AngularJS', 'Karma', 'Express']);

    scope = $rootScope.$new();
    state = $state;
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of products to the scope', function() {
    $httpBackend.flush();
    expect(scope.products.length).to.equal(4);
  });
});
