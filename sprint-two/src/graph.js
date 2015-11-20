

// ------------------------
// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes[node] = [];
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.nodes[node] !== undefined
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this.nodes[node];
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var result = false
  var edges = this.nodes[fromNode];
  for (var i = 0; i < edges.length; i++) {
    if (edges[i] === toNode) {
      result = true;
      break;
    }
  }
  return result;
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.nodes[fromNode].push(toNode);
  this.nodes[toNode].push(fromNode);
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var fromEdges = this.nodes[fromNode];
  var toEdges = this.nodes[toNode];
  var fromKey;
  var toKey;

  for (var i = 0; i < fromEdges.length; i++) {
    if (fromEdges[i] === toNode) {
      fromKey = i;
      break;
    }
  }

  for (var i = 0; i < toEdges.length; i++) {
    if (toEdges[i] === fromNode) {
      toKey = i;
      break;
    }
  }

  delete fromEdges[fromKey];
  delete toEdges[toKey];
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.nodes) {
    cb(key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 addNode: O(1)
 contains: O(1)
 remodeNode: O(1)
 hasEdge: O(n)
 removeEdge: O(n)
 */


