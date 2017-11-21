

// Instantiate a new graph
var Graph = function() {
  this.count = 0;
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var obj = {};
  obj.value = node;
  obj.edges = {};
  this[node] = obj;
  this.count++;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this[node] ? true : false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var connectedNode in this[node].edges) {
    delete this[connectedNode].edges[node];
  }
  delete this[node];
  this.count--;
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this[fromNode].edges[toNode] ? true : false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this[fromNode].edges[toNode] = this[toNode];
  this[toNode].edges[fromNode] = this[fromNode];
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this[fromNode].edges[toNode];
  delete this[toNode].edges[fromNode];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var node in this) {
    if (typeof this[node] === 'object') {
      cb(node);
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addNode - O(1)
 * contains - O(1)
 * removeNode - O(n)
 * hasEdge - O(1)
 * addEdge - O(1)
 * removeEdge - O(1)
 * forEachNode - O(n)
 * 
 */


