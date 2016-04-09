'use strict';

var Sweet  = require('./sweets.model');



import _ from 'lodash';

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function saveUpdates(updates) {
  return function(entity) {
    var updated = _.merge(entity, updates);
    return updated.save()
      .then(updated => {
        return updated;
      });
  };
}

function removeEntity(res) {
  return function(entity) {
    if (entity) {
      return entity.remove()
        .then(() => {
          res.status(204).end();
        });
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}








/**
 * Get list of users
 * restriction: 'admin'
 */
exports.all = function(req, res) {
  return res.status(200).json([
  	{"name": "sweet_1", "price": "100", "count": 9, "number": 123 },
  	{"name": "sweet_2", "price": "500", "count": 3, "number": 124 },
  	{"name": "sweet_3", "price": "50", "count": 32, "number": 125 },
  	{"name": "sweet_4", "price": "40", "count": 29, "number": 126 },
  	{"name": "sweet_5", "price": "700", "count": 79, "number": 127 },
  	{"name": "sweet_6", "price": "900", "count": 95, "number": 128 }
  ]);
};




// Creates a new Thing in the DB
export function create(req, res) {
  console.log("saving sweets", req);

  return Sweet.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}
