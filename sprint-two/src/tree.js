var Tree = function(value) {
  var newTree = Object.create(treeMethods);
  newTree.value = value;
  newTree.children = []
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
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



/*
 * Complexity: What is the time complexity of the above functions?
 addChild: O(1)
 contains: O(n)
 */
