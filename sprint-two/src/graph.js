

// ------------------------
// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
};

var GraphNode = function(value) {
  this.edges = [];
  this.value = value;
}

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes[Object.keys(this.nodes).length] = new GraphNode(node);
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var key in this.nodes) {
    if (this.nodes[key].value === node) {
      return true;
    }
  }
  return false;
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var key in this.nodes) {
    if (this.nodes[key].value === node) {
      delete this.nodes[key]
    }
  }
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  for (var key in this.nodes) {
    if (this.nodes[key].value === fromNode) {
      for (var i = 0; i < this.nodes[key].edges.length; i++) {
        if (toNode === this.nodes[key].edges[i].value) {
          return true;
        }
      }
    }
  }
  return false;
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  for (var key in this.nodes) {
    if (this.nodes[key].value === fromNode) {
      var from = this.nodes[key];
    }
    if (this.nodes[key].value === toNode) {
      var to = this.nodes[key];
    }
  }

  if (to !== null && from !== null){
    from.edges.push(to);
    to.edges.push(from);
  }
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  for (var key in this.nodes) {
    if (this.nodes[key].value === fromNode) {
      var from = this.nodes[key];
      var fromKey;
      for (var i =0; i < from.edges.length; i++){
        if (from.edges[i].value === toNode){
          fromKey = i;
        }
      }
    }
    if (this.nodes[key].value === toNode) {
      var to = this.nodes[key];
      var toKey;
      for (var j =0; j < to.edges.length; j++){
        if (to.edges[j].value === fromNode){
          toKey = j;
        }
      }
    }
  }
  from.edges = from.edges.slice(0,fromKey).concat(from.edges.slice(fromKey+1));
  to.edges = to.edges.slice(0,toKey).concat(to.edges.slice(toKey+1));
  // delete from.edges[fromKey];
  // delete to.edges[toKey];
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.nodes) {
    cb(this.nodes[key].value);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


