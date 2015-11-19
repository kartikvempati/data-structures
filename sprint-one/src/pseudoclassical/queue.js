var Queue = function() {
  this.queueSize = 0;
  this.storage = {};
};

var queueMethods = {};

Queue.prototype.size = function() {
  return this.queueSize;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.queueSize] = value;
  this.queueSize++;
};

Queue.prototype.dequeue = function() {
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