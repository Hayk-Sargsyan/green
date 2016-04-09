// 'use strict'

// var mongoose = require('mongoose');
// mongoose.Promise = require('bluebird');
// var Schema = mongoose.Schema;

// var UserSchema = new Schema({
//   numbe: String,
//   name: String,
//   price: Number,
//   count: Number
// });


'use strict';

import mongoose from 'mongoose';
mongoose.Promise = require('bluebird');
import {Schema} from 'mongoose';

var SweetSchema = new mongoose.Schema({
  numbe: String,
  name: String,
  price: Number,
  count: Number
});

export default mongoose.model('Sweet', SweetSchema);
