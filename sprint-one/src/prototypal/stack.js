var Stack = function() {
  var newStack = Object.create(stackMethods);
  newStack.stackSize = 0;
  newStack.storage = {};
  return newStack;
};

var stackMethods = {};

stackMethods.size = function() {
  return this.stackSize;
};

stackMethods.push = function(value) {
  this.storage[this.stackSize] = value;
  this.stackSize++;
};

stackMethods.pop = function() {
  var popped = this.storage[ this.stackSize - 1 ];
  delete this.storage[ this.stackSize - 1 ];
  if ( this.stackSize > 0 ) {
    this.stackSize--;
  }
  return popped;
};
