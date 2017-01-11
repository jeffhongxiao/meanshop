'use strict';

angular.module('meanshopApp')
  .factory('Products', function () {
    // Service logic
    // ...

    // Public API here
    return [
      {_id: 1, title: 'Product 1', price: 123.45, quantity: 10, description: 'Description of Product 1'},
      {_id: 2, title: 'Product 2', price: 123.45, quantity: 5, description: 'Description of Product 2'}];
  });
