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
  .controller('ProductEditCtrl', function($scope, $state, $stateParams, Products, Upload, $timeout) {
    $scope.product = Products.get({id: $stateParams.id});
    $scope.editProduct = function(product) {
      Products.update({id: $scope.product._id}, $scope.product, function(value) {
		$state.go('viewProduct', {id: value._id});
	  },
	  errorHandler($scope));
    }

	$scope.upload = uploadHandler($scope, Upload, $timeout);
  })
  ;

var errorHandler = function ($scope) {
  return function error(httpResponse) {
    $scope.errors = httpResponse;
  };
};

var uploadHandler = function ($scope, Upload, $timeout) {
  return function(file) {
	if (file && !file.$error) {
	  $scope.file = file;
	  file.upload = Upload.upload({
		url: '/api/products/' + $scope.product._id + '/upload',
		file: file
	  });

	  file.upload.then(function (response) {
    		$timeout(function() {
    		  file.result = response.data;
    		});
  	  },
      function(response) {
  	    if (response.status > 0) {
  		  console.log(response.status + ': ' + response.data);
  		  errorHandler($scope)(response.status + ': ' + response.data);
  		}
	  });

	  file.upload.progress(function (evt) {
		file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
	  });
	}
}};
