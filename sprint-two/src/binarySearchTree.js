var BinarySearchTree = function(value) {
  var bin = Object.create(binarySearchTreePrototype);
  bin.left = null;
  bin.right = null;
  bin.value = value;
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
    } 
    else {
      node.insert(value, node.right);
    }
  }
  else {
    if (node.left === null){
      node.left = BinarySearchTree(value);  
    } else {
      node.insert(value, node.left);
    }
  }
}

binarySearchTreePrototype.contains = function(value) {
  var result = false;

  this.smartFind(function() {
    result = true;    
  }, value)

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

binarySearchTreePrototype.smartFind = function(callback, value ){
  if (this) {
    if(this.value === value) {
      callback(this.value)
    }
    else if (this.value > value) {
      if (this.left) {
        this.left.smartFind(callback,value);
      }
    }
    else if (this.value < value) {
      if (this.right) {
        this.right.smartFind(callback,value);
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
