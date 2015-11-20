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
    } else {
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

  var searchTree = function(node) {
    if (node.value === value) {
      result = true;
    } else {
      if (node.value > value) {
        if (node.left !== null ) {
          searchTree(node.left)
        } 
      }
      if (node.value < value) {
        if (node.right !== null) {
          searchTree(node.right)
        }
      }
    }
  }
  
  searchTree(this);
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

/*
 * Complexity: What is the time complexity of the above functions?
 */
