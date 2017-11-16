var Queue = function() {
  var someInstance = {};
  someInstance.storage = {};
  someInstance.front = 0;
  someInstance.rear = 0;
  _.extend(someInstance, queueMethods)
  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.rear++] = value;
};

queueMethods.dequeue = function() {
  if (this.rear - this.front > 0) {
    var dequeued = this.storage[this.front];
    delete this.storage[this.front++];
    return dequeued;
  }
};

queueMethods.size = function() {
  return this.rear - this.front;
};


