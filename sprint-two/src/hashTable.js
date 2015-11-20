

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  if(this._storage.get(index) !== undefined){
    this._storage.get(index)[k] = v;
  } 
  else {
    var newObj = {};
    newObj[k] = v;
    this._storage.set(index, newObj);  
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(index)[k];
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.each( function(value, i, collection) {
    if (index === i){
      delete collection[i][k];
    }
  });
};



/*
 * Complexity: What is the time complexity of the above functions?
 insert: O(1)
 retrieve: O(1)
 remove: O(n)
 */