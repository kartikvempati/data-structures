var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = {};
  newQueue.queueSize = 0;
  newQueue.storage = {};
  extend(newQueue, queueMethods);
  return newQueue;
};

var extend = function(to, from){
  for (var key in from){
    to[key] = from[key];
  }
};

var queueMethods = {};

queueMethods.size = function() {
  return this.queueSize;
};

queueMethods.enqueue = function(value) {
  this.storage[this.queueSize] = value;
  this.queueSize++;
};

queueMethods.dequeue = function() {
  var dequeued = this.storage[0];
  delete this.storage[0];

  for (var i = 1; i <= this.queueSize - 1; i++) {
    this.storage[i-1] = this.storage[i];
  } 
  
  delete this.storage[this.queueSize - 1];
  if (this.queueSize > 0 ) {
    this.queueSize--;
  }
  return dequeued;
};
