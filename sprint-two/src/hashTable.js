

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  if(this._storage.get(index) !== undefined){
    var arr = this._storage.get(index)
    var collision = true;
    for (var i = 0; i < arr.length; i++){
      if(arr[i][0] === k){
        arr[i][1] = v;
        collision = false;
      }
    } 
    if (collision === true){
      arr.push([k,v]);
    }
  } 
  else {
    var arr = [];
    arr.push([k,v]);
    this._storage.set(index, arr);  
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var arr = this._storage.get(index);

  for (var i = 0; i < arr.length; i++){
    if (arr[i][0] === k){
      return arr[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.each( function(value, i, collection) {
    if (index === i){
      var arr = collection[i];
      var removed;
      for (var j = 0; j < arr.length; j++){
        if (arr[j][0] === k){
          removed = j;
        }
      }
      collection[i] = arr.slice(0, removed).concat(arr.slice(removed+1));
    }  
  });
};



/*
 * Complexity: What is the time complexity of the above functions?
 n= length of the array | c = number tuples
 insert: O(1), if no collision, O(c) if collision
 retrieve: O(1) if c == 1, o(c) if more than one tuple
 remove: O(n*c)
 */
