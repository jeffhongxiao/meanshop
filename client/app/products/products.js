'use strict';

angular.module('meanshopApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('products', {
        url: '/products',
        templateUrl: 'app/products/templates/product-list.html',
        controller: 'ProductsCtrl'
      })
      .state('newProduct', {
        url: '/products/new',
        templateUrl: 'app/products/templates/product-new.html',
        controller: 'ProductNewCtrl',
      })
      .state('viewProduct', {
        url: '/products/:id',
        templateUrl: 'app/products/templates/product-view.html',
        controller: 'ProductViewCtrl'
      })
      // .state('deleteProduct') {
      //  // no need because it's a button in product-view and will be redirected to 'products'
      // }
      .state('editProduct', {
        url: '/products/:id/edit',
        templateUrl: 'app/products/templates/product-edit.html',
        controller: 'ProductEditCtrl'
      });
  });
