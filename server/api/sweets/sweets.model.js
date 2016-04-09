 'use strict'

var mongoose = require('mongoose');

var SweetSchema = mongoose.Schema({
  number: String,
  name: String,
  price: Number,
  count: Number
});

module.exports = mongoose.model('Sweet', SweetSchema);
