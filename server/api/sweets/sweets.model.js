'use strict'

var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  barcode: String,
  name: String,
  price: Number,
  count: Number
});
