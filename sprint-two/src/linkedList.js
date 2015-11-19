var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = Node(value);
    if (list.tail !== null) {
      list.tail.next = node;
    }
    list.tail = node;
    if (list.head === null){
      list.head = node;
    }

  };

  list.removeHead = function() {
    var prevHead = list.head;
    
    if (list.head.next ===null){
      list.head = null;
      list.tail = null;
    } else {
      list.head = list.head.next;
    }

    return prevHead.value;
  };

  list.contains = function(target) {
    var current = list.head;
    var result = false;

    while (current !== null){
      if (current.value === target){
        result = true;
        break;
      }
      current = current.next;
    }
    return result;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
