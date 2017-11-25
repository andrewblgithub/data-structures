var BinarySearchTree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.left = null;
  newTree.right = null;
  newTree.size = 1;
  newTree.balance = 0;
    
  newTree.insert = function(value) {
    var newTreeInsert = BinarySearchTree(value);
    var checkInsert = function (node) {
      if (value < node.value) {
        if (node.left === null) {
          node.left = newTreeInsert;
          if (node.right === null) {
            node.balance--;
          }
        } else {
          node.balance--;
          node.left.balance--;
          if (node.balance > 1 || node.balance < -1) {
            node._rebalance();
            if (node.left === null) {
              node.left = newTreeInsert;
            } else {
              checkInsert(node.left);            
            }
          } else {
            checkInsert(node.left);
          }
        }
      }
      if (value > node.value) {
        if (node.right === null) {
          node.right = newTreeInsert;
          if (node.left === null) {
            node.balance++;
            node.right.balance++;
          }
        } else {
          node.balance++;
          if (node.balance > 1 || node.balance < -1) {
            node._rebalance();
            if (node.right === null) {
              node.right = newTreeInsert;
            } else {
              checkInsert(node.right);            
            }
          }
          checkInsert(node.right);
        }
      }
    };
    checkInsert(this);
    this.size++;
  };

  newTree._rebalance = function() {
    var root = this;
    if (root.balance === -2) {
      if (root.left.balance === -1) {
        root._rotateRight();
      } else if (root.left.balance === 1) {
        root.left._rotateLeft();
        root._rotateRight();
      }
    } else if (root.balance > 1) {
      if (root.right.balance === 1) {

      } else if (root.right.balance === -1) {

      }
    }
  };

  newTree._rotateLeft = function() {
  };

  newTree._rotateRight = function() {
    var root = Object.assign({}, this);
    root.left = null;
    var leftChild = this.left;
    leftChild.right = root;
    Object.assign(this, leftChild);
    this.balance++;
    this.right.balance += 2;
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

binarySearchTree = BinarySearchTree(5);
binarySearchTree.insert(4);
binarySearchTree.insert(3);
console.log(binarySearchTree.balance);
binarySearchTree.insert(2);
// binarySearchTree.insert(1);

/*
 * Complexity: What is the time complexity of the above functions?
 * insert - O(n)
 * contains - O(n)
 * depthFirstLog - O(n)
 * breadthFirstLog - O(n)
 */