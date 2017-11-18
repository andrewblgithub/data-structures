

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage[index] = this._storage[index] || [];
  var overwrite = false;
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket[i].pop();
      bucket[i].push(v);
      var overwrite = true;
    }
  }
  if (!overwrite) {
    bucket.push([k, v]);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage[index];
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      return bucket[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage[index];
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      removed = bucket[i];
      bucket.splice(i, 1);
      return removed;
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 * insert - amortized O(1)
 * retrieve - amortized O(1)
 * remove - amortized O(1)
 */


