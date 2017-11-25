var BinarySearchTree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.left = null;
  newTree.right = null;
  newTree.size = 1;
  newTree.balance = 0;
    
  newTree.insert = function(value) {
    var newTree = BinarySearchTree(value);
    var checkInsert = function (node) {
      if (value < node.value) {
        if (node.left === null) {
          node.left = newTree;
          if (node.right === null) {
            node.balance--;
          }
        } else {
          node.balance--;
          if (Math.abs(node.balance) > 1) {
            node._rebalance();
          }
          checkInsert(node.left);
        }
      }
      if (value > node.value) {
        if (node.right === null) {
          node.right = newTree;
          if (node.left === null) {
            node.balance++;
          }
        } else {
          node.balance++;
          if (Math.abs(node.balance) > 1) {
            node._rebalance();
          }
          checkInsert(node.right);
        }
      }
    };
    checkInsert(this);
    this.size++;
  };

  newTree._rebalance = function() {
    console.log('balancing...');
  };
    
  newTree.contains = function(value) {
    var found = false;
    var checkContains = function (node) {
      if (node.value === value) {
        found = true;
      } else if (node.value > value && node.left !== null) {
        checkContains(node.left);
      } else if (node.value < value && node.right !== null) {
        checkContains(node.right);
      }
    };
    checkContains(this);
    return found;
  };
    
  newTree.depthFirstLog = function(cb) {
    var depthFirst = function (node) {
      cb(node.value);
      if (node.left !== null) {
        depthFirst(node.left);
      }
      if (node.right !== null) {
        depthFirst(node.right);
      }
    };
    depthFirst(this);
  };

  newTree.breadthFirstLog = function(cb) {
    var queue = [];
    queue.push(this);
    while (queue.length > 0) {
      if (queue[0]) {
        cb(queue[0].value);
      }
      if (queue[0].left !== null) {
        queue.push(queue[0].left);
      }
      if (queue[0].right !== null) {
        queue.push(queue[0].right);
      }
      queue.shift();
    }
  };

  return newTree;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * insert - O(n)
 * contains - O(n)
 * depthFirstLog - O(n)
 * breadthFirstLog - O(n)
 */