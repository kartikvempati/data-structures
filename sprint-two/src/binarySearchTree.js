 


var BinarySearchTree = function(value) {
  var bin = Object.create(binarySearchTreePrototype);
  bin.left = null;
  bin.right = null;
  bin.value = value;
  bin.parent = null;
  return bin;
};

var binarySearchTreePrototype = {};

binarySearchTreePrototype.insert = function(value, node) {
  if (node === undefined){
    node = this;
  }

  if (value > node.value) {
    if (node.right === null){
      node.right = BinarySearchTree(value);
      node.right.parent = node;  
    } 
    else {
      node.insert(value, node.right);
    }
  }
  else {
    if (node.left === null){
      node.left = BinarySearchTree(value);  
      node.left.parent = node;
    } else {
      node.insert(value, node.left);
    }
  }
}

binarySearchTreePrototype.contains = function(value) {
  var result = false;

  this.binarySearch(function() {
    result = true;    
  }, value);

  return result;
}

binarySearchTreePrototype.depthFirstLog = function(callback) {
  if (this) {
    callback(this.value);
  }
  if (this.left) {
    this.left.depthFirstLog(callback);
  }
  if (this.right) {
    this.right.depthFirstLog(callback);
  }
}

binarySearchTreePrototype.depthFirstLogValue = function(callback) {
  if (this) {
    callback(this);
  }
  if (this.left) {
    this.left.depthFirstLogValue(callback);
  }
  if (this.right) {
    this.right.depthFirstLogValue(callback);
  }
}

binarySearchTreePrototype.breadthFirstLog = function(){
  var levels = {};

  this.depthFirstLogValue(function(value){
    var count = 0;
    var node = value;

    while (node.parent){
      count++;
      node = node.parent;
    }

    levels[value.value] = count;
  });

  console.log(levels);
}

binarySearchTreePrototype.otherChild = function() {
  if (this.value < this.parent.value){
    return this.parent.right;
  }
  if (this.value > this.parent.value){
    return this.parent.left;
  }
};

binarySearchTreePrototype.binarySearch = function(callback, value ){
  if (this) {
    if(this.value === value) {
      callback(this.value)
    }
    else if (this.value > value) {
      if (this.left) {
        this.left.binarySearch(callback,value);
      }
    }
    else if (this.value < value) {
      if (this.right) {
        this.right.binarySearch(callback,value);
      }
    }
  }
}


/*
 * Complexity: What is the time complexity of the above functions?
 insert: O(log n)
 contains: O(log  n)
 depthFirstLog O(n) 
 */
