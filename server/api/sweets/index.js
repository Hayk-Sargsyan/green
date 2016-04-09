'use strict'

var express = require('express');
var auth = require('../../auth/auth.service');
var controller = require('./sweets.controller');

var router = new Router();

router.get('/', controller.all);

module.exports = router;
