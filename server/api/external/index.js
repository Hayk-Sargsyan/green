'use strict'

var express = require('express');
var controller = require('./external.controller');

var router = express.Router();

router.get('/:number', controller.show);
router.put('/:number', controller.update);
// router.('/:id', controller.update);
// router.delete('/:id', controller.destroy);


module.exports = router;
