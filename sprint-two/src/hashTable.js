

var HashTable = function() {
  this._limit = 8;
  this._size = 0;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index) || [];  
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
    this._storage.set(index, bucket);    
    this._size++;
    if (this._size > this._limit * 0.75) {
      this._resize(2);
    }
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index) || [];  
  if (bucket) {
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        return bucket[i][1];
      }
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index) || [];
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      removed = bucket[i];
      bucket.splice(i, 1);
      this._size--;
      if (this._size < this._limit * 0.25) {
        this._resize(.5);
      }
      return removed;
    }
  }
};

HashTable.prototype._resize = function(multiplier) {
  var oldStorage = this._storage;
  this._limit = this._limit * multiplier;
  this._size = 0;
  this._storage = new LimitedArray(this._limit);
  // var that = this;
  oldStorage.each((bucket) => {
    if (!bucket) {return};
    bucket.forEach((tuple) => {
      this.insert(...tuple);
    });
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 * insert - amortized O(1)
 * retrieve - amortized O(1)
 * remove - amortized O(1)
 */


