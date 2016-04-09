'use strict';

var Sweets  = require('../sweets/sweets.model');



exports.all = function(req, res) {
  return res.status(200).json([{id:"1"},{id: "2"},{id: "3"}]);
};

exports.getBySerialNumber = function(req, res) {
	console.log("ready to update created ");
	console.log(req.params.number);
	// Sweets.getBySerialNumber().then(function(res){
	// 	console.log("this is result from db");
	// 	console.log(res);
	// 	return res.status(200).json({
	//         aac: "yeheee POSTED!!! "
	//     });
	// });
};

exports.create = function(req, res) {
  return res.status(200).json({
    aac: "yeheee POSTED!!! "
  });
};

exports.update = function(req, res) {
	console.log("ready to update created ");
	console.log(req.params.number);
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
