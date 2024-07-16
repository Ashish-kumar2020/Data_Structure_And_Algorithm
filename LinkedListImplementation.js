class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  //   Convert Array to Linked List
  converArrayToLinkedList(arr) {
    if (arr.length === 0) {
      this.head = null;
      return;
    }
    this.head = new Node(arr[0]);
    let tempMover = this.head;
    for (let i = 1; i < arr.length; i++) {
      const tempNode = new Node(arr[i]);
      tempMover.next = tempNode;
      tempMover = tempNode;
    }
    return this.head;
  }

  //   Print Length of Linked List
  printLinkedListLength() {
    let count = 0;
    let tempMover = this.head;
    while (tempMover) {
      tempMover = tempMover.next;
      count++;
    }
    return count;
  }

  //   Search for element in Linked list
  searchElement(val) {
    let tempMover = this.head;
    if (this.head.value == val) return 1;
    while (tempMover) {
      if (tempMover.value == val) {
        return 1;
      }
      tempMover = tempMover.next;
    }
    return 0;
  }
  //   Print Linked List
  printLinkedList() {
    let currNode = this.head;
    let result = "";
    while (currNode !== null) {
      result += currNode.value + (currNode.next ? "->" : "");
      currNode = currNode.next;
    }
    console.log(result);
  }
}
const list = new LinkedList();
list.converArrayToLinkedList([1, 2, 3, 4, 5]);
list.printLinkedList();
console.log(list.printLinkedListLength());
console.log(list.searchElement(1));
