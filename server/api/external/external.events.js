/**
 * Thing model events
 */

'use strict';

import {EventEmitter} from 'events';
import External from './external.model';
var ExternalEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
ExternalEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  External.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    ExternalEvents.emit(event + ':' + doc._id, doc);
    ExternalEvents.emit(event, doc);
  }
}

export default ExternalEvents;
