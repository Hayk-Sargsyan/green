'use strict';

var Sweet  = require('../sweets/sweets.model');
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








exports.all = function(req, res) {
  return res.status(200).json([{id:"1"},{id: "2"},{id: "3"}]);
};


// Gets a single Thing from the DB
export function show(req, res) {
  return Sweet.find({"number": req.params.number}).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

exports.create = function(req, res) {
  return res.status(200).json({
    aac: "yeheee POSTED!!! "
  });
};	

exports.update = function(req, res) {
	console.log("ready to update created ");
	console.log(req.params.number);
	    

    // return res.status(200).json({
    //     aac: "yeheee POSTED!!! "
    // });
};


