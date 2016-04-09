'use strict'

var express = require('express');
var auth = require('../../auth/auth.service');
var controller = require('./sweets.controller');

var router = express.Router();


router.get('/', controller.all);
router.get('/:number', controller.show);
router.post('/', controller.create);
router.put('/:number', controller.update);
router.patch('/:number', controller.update);
router.delete('/:number', controller.destroy);


module.exports = router;
