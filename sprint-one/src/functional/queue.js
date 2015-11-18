var Queue = function() {
  var someInstance = {};
  var queueSize = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[queueSize] = value;
    queueSize++;
  };

  someInstance.dequeue = function() {
    var dequeued = storage[0];
    delete storage[0];

    for (var i = 1; i <= queueSize - 1; i++) {
      storage[i-1] = storage[i];
    }
    delete storage[queueSize - 1];
    if (queueSize > 0) {
      queueSize--;
    }
    return dequeued;
  };

  someInstance.size = function() {
    return queueSize;
  };

  someInstance.storage = function() {
    return storage;
  };

  return someInstance;
};
