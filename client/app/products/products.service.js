'use strict';

angular.module('meanshopApp')
  .factory('Products', function ($resource) {
    return $resource('/api/products/:id', null, {
      'update': { method: 'PUT'}
    });
  });
