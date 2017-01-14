'use strict';

angular.module('meanshopApp')
  .controller('MainCtrl', function($scope, $http, Products) {
    $scope.products = Products.query().slice(0, 2);
  });
