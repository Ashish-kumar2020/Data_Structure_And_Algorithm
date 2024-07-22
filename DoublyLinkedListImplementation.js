class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // convert array to Double Linked List
  convertToDLL(arr) {
    if (arr.length == 0) {
      this.head = null;
      this.prev = null;
      return;
    }
    this.head = new Node(arr[0]);
    this.prev = this.head;
    this.tail = this.head;
    for (let i = 1; i < arr.length; i++) {
      const tempNode = new Node(arr[i]);
      this.prev.next = tempNode;
      this.prev = tempNode;
      this.tail = tempNode;
    }
    return this.head;
  }

  // Delete Head
  deleteHead() {
    if (this.head == null || this.head.next == null) {
      return null;
    }
    this.prev = this.head;
    this.head = this.head.next;
    this.head.prev = null;
    this.prev.next = null;
    return this.head;
  }

  // Delete Tail
  deleteTail() {
    if (!this.tail) {
      // If the list is empty
      return;
    }
    if (this.head === this.tail) {
      // If there's only one node in the list
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
  }
  // print DLL
  printLinkedList() {
    let currNode = this.head;
    let result = "";
    while (currNode !== null) {
      result += currNode.value + (currNode.next ? "<->" : "");
      currNode = currNode.next;
    }
    console.log(result);
  }
}
const list = new LinkedList();
list.convertToDLL([1, 2, 3, 4, 5, 7]);
list.deleteHead();
list.deleteTail();

list.printLinkedList();
