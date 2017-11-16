var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(stackMethods);
  obj.storage = {};
  obj.count = 0;
  return obj;
};

var stackMethods = {
	push: function(value) {
		return this.storage[this.count++] = value;
	},
	pop: function() {
		if (this.count > 0) {
			var popped = this.storage[--this.count];
			delete this.storage[this.count]
			return popped;
		}
	},
	size: function() {
		return this.count;
	}
}