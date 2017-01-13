'use strict';

angular.module('meanshopApp')
  .factory('Products', function () {
    var last_id = 2;

    var example_products = [
      {_id: 1, title: 'Product 1', price: 123.45, quantity: 10, description: 'Description of Product 1'},
      {_id: 2, title: 'Product 2', price: 123.45, quantity: 5, description: 'Description of Product 2'}];

    // Public API here
    return {
      query: function() {
        return example_products;
      },

      get: function(param) {
        var result = {};
        angular.forEach(example_products, function(product) {
          if (product._id == params.id) {
            return this.product = product;
          }},
        result);

        return result.product;
      },

      delete: function(params) {
        angular.forEach(example_products, function(product, index) {
          if (product._id == params._id) {
            console.log(product, index);
            example_products.splice(index, 1);
            return;
          }
        });
      },

      create: function(product) {
        product.id = ++last_id;
        example_products.push(product);
      },

      update: function(product) {
        var item = this.get(product);
        if (!item) return false;

        item.title = product.title;
        item.price = product.price;
        item.quantity = product.quantity;
        item.description = product.description;
        return true;
      }
    };
  });
