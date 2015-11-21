var DoublyLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;


  list.addToTail = function(value){
    var node = Node(value);
    //node.prev = list.tail;
    if (list.tail !== null) {
      list.tail.next = node;
      node.prev = list.tail;
    }
    list.tail = node;
    if(list.head === null){
      list.head = node;
    }
  };

  list.removeHead = function(){
    var removedHead = list.head;

    if (list.head.next === null){
      list.head = null;
      list.tail = null;
    } else {
      list.head = list.head.next;
    }

    return removedHead.value;
  };

  list.contains = function(target){
    var current = list.head;
    var result = false;

    while(current !== null) {
      if (current.value === target){
        result = true;
      }
      current = current.next
    }
    return result;
  };

  return list;
}
/*
 * Complexity: What is the time complexity of the above functions?
 addToTail: O(1)
 removeHead: O(1)
 contains: O(n)
 */

 var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.prev = null;

  return node;
};