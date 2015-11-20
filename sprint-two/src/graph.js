

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

  this.forEachEdge(fromNode, function(edge){
    if (edge === toNode){
      result = true;
    }
  });

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
  var fromKey;
  var toKey;

  this.forEachEdge(fromNode, function(edge, key) {
    if (edge === toNode){
      fromKey = key;
    }
  });

  this.forEachEdge(toNode, function(edge, key) {
    if (edge === fromNode){
      toKey = key;
    }
  });

  delete this.nodes[fromNode][fromKey];
  delete this.nodes[toNode][toKey];
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.nodes) {
    cb(key);
  }
};

// ------------------------
// Pass in a callback which will be executed on each edge of the node.
Graph.prototype.forEachEdge = function(node, cb) {
  var edges = this.nodes[node];
  for (var i = 0; i < edges.length; i++) {
    cb(edges[i], i);
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


