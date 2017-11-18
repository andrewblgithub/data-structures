var BinarySearchTree = function(value) {
    var newTree = {};
    newTree.value = value;
    newTree.left = null;
    newTree.right = null;
    
    newTree.insert = function(value) {
      var newTree = BinarySearchTree(value);
      function checkInsert(node) {
        if (node.value > value) {
          if (node.left === null) {
            node.left = newTree;
          }
          checkInsert(node.left);
        }
        if (node.value < value) {
          if (node.right === null) {
            node.right = newTree;
          }
          checkInsert(node.right)
        }
      }
      checkInsert(this);
    }
    
    newTree.contains = function(value) {
      var found = false;
      function checkContains(node) {
        if (node.value === value) {
          found = true;
        } else if (node.value > value && node.left !== null) {
          checkContains(node.left);
        } else if (node.value < value && node.right !== null) {
          checkContains(node.right);
        }
      }
      checkContains(this);
      return found;
    }
    
    newTree.depthFirstLog = function(cb) {
      function depthFirst(node) {
        console.log(node.value)
        cb(node.value);
        if (node.left !== null) {
          depthFirst(node.left);
        }
        if (node.right !== null) {
          depthFirst(node.right);
        }
      }
      depthFirst(this);
    }
    return newTree;
};

var test = BinarySearchTree(12);
test.insert(7);
test.insert(9);
test.insert(4);
var array = [];
var func = function(value) { array.push(value); };
test.depthFirstLog(func)
console.log(array)

/*
 * Complexity: What is the time complexity of the above functions?
 * insert - O(n)
 * contains - O(n)
 * depthFirstLog - O(n)
 */
