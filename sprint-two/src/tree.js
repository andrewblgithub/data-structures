var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.size = 1;
  newTree.parent = null;
  newTree.children = [];
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newChild = Tree(value);
  newChild.parent = this;
  this.children.push(newChild);
  this.size++;
};

treeMethods.contains = function(target) {
  var passed = [];
  var checkNodes = function(node) {
    if (node.value === target) {
      passed.push(node);
    }
    for (var i = 0; i < node.children.length; i++) {
      checkNodes(node.children[i]);
    }
  };
  checkNodes(this);
  return passed.length > 0 ? true : false;
};

treeMethods.removeFromParent = function(target) {
  var checkNodesRFP = function(node) {
    if (node.value === target) {
      for (var i = 0; i < node.parent.children.length; i++) {
        if (node.parent.children[i].value === target) {
          node.parent.children.splice(i, 1);
        }
      }
      node.parent = null;
    }
    for (var i = 0; i < node.children.length; i++) {
      checkNodesRFP(node.children[i]);
    }
  };
  checkNodesRFP(this);
};

treeMethods.traverse = function(cb) {
  var traverseNodes = function(node) {
    cb(node.value);
    for (var i = 0; i < node.children.length; i++) {
      traverseNodes(node.children[i]);
    }
  };
  traverseNodes(this);
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addChild - O(1)
 * contains - O(n)
 * removeFromParent - 0(n)
 * traverse - O(n)
 */
