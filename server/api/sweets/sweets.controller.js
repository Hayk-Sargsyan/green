'use strict';

var Sweet  = require('./sweets.model');

var _  = require('lodash');


// Gets a list of Things
export function all(req, res) {
  return Sweet.find().exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single Thing from the DB
export function show(req, res) {
  return Sweet.find({"number": req.params.number}).exec()
    .then(function(result){
      if (result) {
        res.status(200).json(result[0]);  
      } else {
        res.status(404).end();
      }
    });
}

// Creates a new Thing in the DB
export function create(req, res) {
  console.log("saving sweets", req.body);
  return Sweet.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Updates an existing Thing in the DB
export function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  return Sweet.find({"number": req.params.number}).exec()
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a Thing from the DB
export function destroy(req, res) {
  console.log(req.params.number);
  return Sweet.find({"number": req.params.number}).exec()
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    // .catch(handleError(res));
}













function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      console.log()
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
    console.log("this is removed : " ,entity);
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

