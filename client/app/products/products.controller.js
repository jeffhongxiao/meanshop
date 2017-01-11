'use strict';

angular.module('meanshopApp')
  .controller('ProductsCtrl', function ($scope, Products) {
    $scope.products = Products;
  });
