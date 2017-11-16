var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(queueMethods);
  obj.storage = {};
  obj.front = 0;
  obj.rear = 0;
  return obj;
};

var queueMethods = {
	enqueue: function(value) {
		this.storage[this.rear++] = value;
	},
	dequeue: function() {
		if (this.rear - this.front > 0) {
			var done = this.storage[this.front];
			delete this.storage[this.front++]
			return done;
		}
	},
	size: function() {
		return this.rear - this.front;
	}
}