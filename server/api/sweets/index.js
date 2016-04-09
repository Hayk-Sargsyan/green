'use strict'

var express = require('express');
var auth = require('../../auth/auth.service');
var controller = require('./sweets.controller');

var router = express.Router();

router.get('/', controller.all);
router.post('/', controller.create);

module.exports = router;
