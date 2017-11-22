var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list.length = 0;
  
  list.addToTail = function(value) {
    var newNode = Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.previous = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  };

  list.addToHead = function(value) {
    var newNode = Node(value);
    if(this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.previous = newNode;
      this.head = newNode;
    }
  };
  
  list.removeHead = function() {
    var removed = this.head.value;
    this.head = this.head.next;
    this.length--;
    return removed;
  };

  list.removeTail = function() {
    var removed = this.tail.value;
    this.tail = this.tail.previous;
    this.length--;
    return removed;
  };
  
  list.contains = function(target) {
    var temp = this.head;
    while (temp.value !== target) {
      if (temp.next === null) { 
        return false;
      }
      temp = temp.next;
    }
    return true;
  };
  
  return list;
};
  
var Node = function(value) {
  var node = {};
  
  node.value = value;
  node.next = null;
  node.previous = null;
  
  return node;
};
  
var newList = LinkedList();
newList.addToTail(4);
newList.addToTail(4);
newList.removeTail();
newList.addToHead(2);
  
console.log(newList.length);
  
/*
   * Complexity: What is the time complexity of the above functions?
   * addToTail - O(1)
   * removeHead - O(1)
   * contains - O(n)
   * addToHead - 
   * removeTail - 
   */
  