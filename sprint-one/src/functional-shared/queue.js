var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = {};
  newQueue.sizeProp = 0;
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
  return this.sizeProp;
};

queueMethods.enqueue = function(value) {
  this.storage[this.sizeProp] = value;
  this.sizeProp++;
};

queueMethods.dequeue = function() {
  var dequeued = this.storage[0];
  delete this.storage[0];
  
  for (var i = 1; i <= this.sizeProp - 1; i++) {
    this.storage[i-1] = this.storage[i];
  } 
  
  delete this.storage[this.sizeProp - 1];
  if (this.sizeProp > 0 ) {
    this.sizeProp--;
  }
  return dequeued;
};
