/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var User = require('../api/user/user.model');
var Product = require('../api/product/product.model');

User.find({}).removeAsync()
  .then(function() {
    User.createAsync({
      provider: 'local',
      name: 'Test User',
      email: 'test@test.com',
      password: 'test'
    }, {
      provider: 'local',
      role: 'admin',
      name: 'Admin',
      email: 'admin@admin.com',
      password: 'admin'
    })
    .then(function() {
      console.log('finished populating users');
    });
  });

Product.find({}).removeAsync()
  .then(function() {
    Product.createAsync({
      title: 'Inspiron 5720',
      imageUrl: '/assets/images/Dell_Inspiron_5720.jpg',
      price: 1234.99,
      stock: 250,
      description: 'Inspiron 5720 is a good laptop.'
    }, {
      title: 'MacBook Pro 2016',
      imageUrl: '/assets/images/macbook-pro-2016.jpg',
      price: 1999.99,
      stock: 100,
      description: 'MacBook Pro laptops are fancy but expensive.'
    }, {
      title: 'HP Stream Cloudbook',
      imageUrl: '/assets/images/hp-stream-3108-002.jpg',
      price: 349.99,
      stock: 50,
      description: 'Cloudbook and Chromebook laptops are like netbooks.'
    })
    .then(function() {
      console.log('finished populating products');
    });
  });
