'use strict';

var External  = require('./external.model');


/**
 * Get list of users
 * restriction: 'admin'
 */
exports.all = function(req, res) {
  return res.status(200).json({
    prod: [{id: "1"}, {id: "2"}, {id: "3"}]);
};

exports.create = function(req, res) {
	console.log("ededededed created ");
  return res.status(200).json({
    aac: "yeheee POSTED!!! "
  });
};

// function handleError(res, statusCode) {
//   statusCode = statusCode || 500;
//   return function(err) {
//     res.status(statusCode).send(err);
//   };
// }
