var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newChild = Tree(value);
  this.children.push(newChild);
};

treeMethods.contains = function(target) {
  var passed = [];
  function check(node) {
    if (node.value === target) {
      passed.push(node);
    }
    for (var i = 0; i < node.children.length; i++) {
      check(node.children[i]);
    }
  }
  check(this);
  return passed.length > 0 ? true : false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
