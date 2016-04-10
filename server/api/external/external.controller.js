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


exports.update = function(req, res) {
	console.log(req.params.number);
  var query = {number: req.params.number};
  
  Sweet.find(query).exec().then(function(data){
    if ( data.length && data[0].count > 0 ) {
      data[0].count--;
      Sweet.findOneAndUpdate(query, data[0], {upsert:true}, function(err, doc){
        if (err) return res.send(500, { error: err });
        return res.send("succesfully decreased!!!");
      });
    } else {
      return res.send(404, { error: "There is not enought " + req.body.name + " sweet" });
    }
  });
};


