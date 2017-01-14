'use strict';

angular.module('meanshopApp')
  .factory('Products', function () {
    var last_id = 3;

    var example_products = [
      {_id: 1, title: 'Inspiron 5720', price: 1234.5, quantity: 10, description: 'Inspiron 5720 is a good laptop.'},
      {_id: 2, title: 'MacBook Pro 2016', price: 1999.99, quantity: 5, description: 'MacBook Pro laptops are fancy but expensive.'},
      {_id: 3, title: 'HP Stream Cloudbook', price: 350, quantity: 10, description: 'Cloudbook and Chromebook laptops are like netbooks.'}
    ];

    // Public API here
    return {
      query: function() {
        return example_products;
      },

      get: function(params) {
        /*** use angular.forEach() ***/
        var result = {};
        angular.forEach(example_products, function(product) {
          if (product._id == params.id) {
            return this.product = product;
          }},
        result);

        return result.product;

        /*** old-school looping ***/
        // for(var i=0; i< example_products.length; i++) {
        //   if(example_products[i]._id == product.id)
        //     return example_products[i];
        // }
        // return null;
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
