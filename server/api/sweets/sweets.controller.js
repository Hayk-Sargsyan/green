'use strict';

var Sweets  = require('./sweets.model');


/**
 * Get list of users
 * restriction: 'admin'
 */
exports.all = function(req, res) {
  return res.status(200).json([
  	{"name": "sweet_1", "price": "100$", "count": 9, "number": 123 },
  	{"name": "sweet_2", "price": "500$", "count": 3, "number": 124 },
  	{"name": "sweet_3", "price": "50$", "count": 32, "number": 125 },
  	{"name": "sweet_4", "price": "40$", "count": 29, "number": 126 },
  	{"name": "sweet_5", "price": "700$", "count": 79, "number": 127 },
  	{"name": "sweet_6", "price": "900$", "count": 95, "number": 128 }
  ]);
};

// Creates a new Thing in the DB
export function create(req, res) {
	console.log("saving sweets");
	console.log(req.body);
	return Sweets.create(req.body)
	   .then(respondWithResult(res, 201))
	   .catch(handleError(res));
}