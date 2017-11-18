var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  set.size = 0;
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage[item] = item;
  this.size++;
};

setPrototype.contains = function(item) {
  return this._storage[item] ? true : false;
};

setPrototype.remove = function(item) {
  delete this._storage[item];
  this.size--;
};

var newSet = Set();
newSet.add("asdjaks");
newSet.add('askjdaskd')

console.log(newSet.size)
/*
 * Complexity: What is the time complexity of the above functions?
 * add - O(1)
 * contains - O(1)
 * remove - O(1)
 */
