describe('doublyLinkedList', function() {
  var doublyLinkedList;

  beforeEach(function() {
    doublyLinkedList = new DoublyLinkedList();
  });

  it ('should have a head and tail', function() {
    expect(doublyLinkedList).to.have.property("head");
    expect(doublyLinkedList).to.have.property("tail");
  });

  it('should have methods named "addToTail", "removeHead", and "contains"', function(){
    expect(doublyLinkedList.addToTail).to.be.a("function");
    expect(doublyLinkedList.removeHead).to.be.a("function");
    expect(doublyLinkedList.contains).to.be.a("function");
  });

  it('should designate a new tail when new nodes are added', function() {
    doublyLinkedList.addToTail(4);
    expect(doublyLinkedList.tail.value).to.equal(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.tail.value).to.equal(5);
  });

  it('should designate a new head when nodes are removed', function() {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.head.value).to.equal(4);
    doublyLinkedList.removeHead();
    expect(doublyLinkedList.head.value).to.equal(5);
  });

  it('should return the value of the removed head', function() {
    doublyLinkedList.addToTail(5);
    doublyLinkedList.addToTail(6);
    expect(doublyLinkedList.removeHead()).to.equal(5);
    expect(doublyLinkedList.removeHead()).to.equal(6);
  });

  it('should contain values that were added', function() {
    doublyLinkedList.addToTail(5);
    doublyLinkedList.addToTail(6);
    expect(doublyLinkedList.contains(5)).to.equal(true);
    expect(doublyLinkedList.contains(7)).to.equal(false);
  });

  it('should not contain values that were removed', function() {
    doublyLinkedList.addToTail(5);
    doublyLinkedList.addToTail(6);
    doublyLinkedList.removeHead();
    expect(doublyLinkedList.contains(5)).to.equal(false);
  });
});