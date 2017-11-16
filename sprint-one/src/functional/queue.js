var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var front = 0;
  var rear = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[rear++] = value;
  };

  someInstance.dequeue = function() {
    if (rear - front > 0) {
      var dequeued = storage[front];
      delete storage[front++];
      return dequeued;
    }
  };

  someInstance.size = function() {
    return rear - front;
  };

  return someInstance;
};
