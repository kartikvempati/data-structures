var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var newStack = {};
  newStack.sizeProp = 0;
  newStack.storage = {};
  extend(newStack, stackMethods);
  return newStack;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
}

var stackMethods = {};

stackMethods.size = function() {
  return this.sizeProp;
};

stackMethods.push = function(value) {
  this.storage[this.sizeProp] = value;
  this.sizeProp++;
};

stackMethods.pop = function() {
  var popped = this.storage[this.sizeProp - 1];
  delete this.storage[this.sizeProp - 1];
  if (this.sizeProp > 0 ){
    this.sizeProp--;
  }
  return popped;
}