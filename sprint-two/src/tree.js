var Tree = function(value) {
  var newTree = Object.create(treeMethods);
  newTree.value = value;
  newTree.children = []
  newTree.parent = null;
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var node = Tree(value);
  node.parent = this;
  this.children.push(node);
};

treeMethods.contains = function(target) {
  var result = false;

  var traverseTree = function(node, target){
    if (node.value === target) {
      return true;
    } else {
      for (var i = 0; i < node.children.length; i++) {
        result = traverseTree(node.children[i], target);
      }
    }
    return result;
  };

  return traverseTree(this, target);
};

treeMethods.removeFromParent = function() {
  var orphan;
  for (var i=0; i< this.parent.children.length;  i++){
    if (this.parent.children[i].value === this.value){
      orphan = i;
    }
  }
  this.parent.children[orphan] = null;
  this.parent = null;
};

treeMethods.traverse = function(callback) {
  if (!!this.value){
    callback(this); 
  }

  for (var i = 0; i < this.children.length; i++){
    this.children[i].traverse(callback);
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 addChild: O(1)
 contains: O(n)
 */
