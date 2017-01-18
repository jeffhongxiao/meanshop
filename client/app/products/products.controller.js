'use strict';

angular.module('meanshopApp')
  .controller('ProductsCtrl', function ($scope, Products) {
    $scope.products = Products.query();
  })
  .controller('ProductViewCtrl', function($scope, $state, $stateParams, Products) {
    $scope.product = Products.get({id: $stateParams.id});

    $scope.deleteProduct = function() {
      Products.delete({id: $scope.product._id},
        function success() {
          $state.go('products');
        },
        errorHandler($scope));
    };
  })
  .controller('ProductNewCtrl', function($scope, $state, Products) {
    $scope.product = {};

    $scope.addProduct = function(product) {
      //Products.create($scope.product);
	  Products.save($scope.product, function(value) {
		$state.go('viewProduct', {id: value._id});
	  },
	  errorHandler($scope));
    };
  })
  .controller('ProductEditCtrl', function($scope, $state, $stateParams, Products) {
    $scope.product = Products.get({id: $stateParams.id});
    $scope.editProduct = function(product) {
      Products.update({id: $scope.product._id}, $scope.product, function(value) {
		$state.go('viewProduct', {id: value._id});
	  },
	  errorHandler($scope));
    }
  })
  ;

var errorHandler = function ($scope) {
  return function error(httpResponse) {
    $scope.errors = httpResponse;
  };
};
