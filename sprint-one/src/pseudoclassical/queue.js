var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.front = 0;
  this.rear = 0;
};

Queue.prototype.enqueue = function(value) {
	this.storage[this.rear++] = value;
}
Queue.prototype.dequeue = function() {
	if (this.rear - this.front > 0) {
		var done = this.storage[this.front];
		delete this.storage[this.front++]
		return done;
	}
}
Queue.prototype.size = function() {
	return this.rear - this.front;
}