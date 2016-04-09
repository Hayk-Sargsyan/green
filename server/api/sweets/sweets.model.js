 'use strict'

import mongoose from 'mongoose';

var SweetSchema = mongoose.Schema({
  numbe: String,
  name: String,
  price: Number,
  count: Number
});

module.exports = mongoose.model('Sweet', SweetSchema);
