'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
  title: { type: String, required: true, trim: true},
  price: { type: Number, required: true, min: 0},
  stock: { type: Number, default: 1},
  imageUrl: String,
  description: String
});

module.exports = mongoose.model('Product', ProductSchema);
