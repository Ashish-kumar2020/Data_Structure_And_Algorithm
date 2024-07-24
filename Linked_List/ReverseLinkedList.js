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

  //   Reverse a Linked List
  revrseLinkedList() {
    let curr = this.head;
    let prev = null;
    let temp = null;
    while (curr != null) {
      temp = curr.next;
      curr.next = prev;
      prev = curr;
      curr = temp;
    }
    this.head = prev;
    return this.head;
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
list.converArrayToLinkedList([1, 2, 37, 4, 50, 44]);

list.revrseLinkedList();
list.printLinkedList();
