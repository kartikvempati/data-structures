var Queue = function() {
  var newQueue = Object.create(queueMethods);
  newQueue.queueSize = 0;
  newQueue.storage = {};
  return newQueue;
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
  for (var i = 0; i <= this.queueSize - 1; i++) {
    this.storage[i-1] = this.storage[i];
  }
  delete this.storage[this.queueSize -1];
  if (this.queueSize > 0) {
    this.queueSize--;
  }
  return dequeued;
};