var Stack = function() {
  var someInstance = {};
  someInstance.storage = {};
  someInstance.count = 0;
  _.extend(someInstance, stackMethods);
  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.count++] = value;
  return this.count;
}

stackMethods.pop = function() {
  if (this.count > 0) {
    var popped = this.storage[--this.count];
    delete this.storage[this.count];
    return popped;
  }
}

stackMethods.size = function() {
  return this.count;
}

