

var HashTable = function() {
  this._limit = 8;
  this._size = 0;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var tuples = this._storage.get(index);

  if (tuples !== undefined){ //if there is already something in tuples
    var needToOverwrite = false;
    
    for (var i = 0; i < tuples.length; i++) {
      if(tuples[i][0] === k){
        tuples[i][1] = v; //overwrite the current value
        needToOverwrite = true;
        break;
      }
    } 

    if (needToOverwrite === false) {
      tuples.push([k,v]); //push new array in case of key collision
      this._size++;
    }
  } else {  // we are not going to overwrite anything so we have to push a new array
    tuples = [];
    tuples.push([k,v]);
    this._storage.set(index, tuples);  
    this._size++;
  }

  if (this._size/this._limit > 0.75) {
    this.adjustSize(this._limit * 2);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var tuples = this._storage.get(index);
  var result;

  for (var i = 0; i < tuples.length; i++){
    if (tuples[i][0] === k){
      result = tuples[i][1];
      break;
    }
  }

  return result;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var tuples = this._storage.get(index);
  var removedKey;

  for (var i = 0; i < tuples.length; i++){
    if (tuples[i][0] === k){
      removedKey = i;
      this._size--;
      break;
    }
  }

  tuples.splice(removedKey, 1);

  if (this._size/this._limit < 0.25) {
    this.adjustSize(this._limit / 2);
  }
};

HashTable.prototype.adjustSize = function(newLimit){
  var prevStorage = this._storage;
  newLimit = Math.max(newLimit, 8);
  if (newLimit === this._limit)
    { return };

  this._limit = newLimit;
  this._storage = LimitedArray(this._limit);
  this._size = 0;
  var context = this;

  prevStorage.each(function(value, key){
    if(value){
      for (var i = 0; i<value.length; i++) {
        context.insert(value[i][0], value[i][1]); 
      }
    }
  });
};


/*
 * Complexity: What is the time complexity of the above functions?
 n= length of the array | c = number tuples
 insert: O(1), if no collision, O(c) if collision
 retrieve: O(1) if c == 1, o(c) if more than one tuple
 remove: O(n*c)
 numElements: O(n)
 */
