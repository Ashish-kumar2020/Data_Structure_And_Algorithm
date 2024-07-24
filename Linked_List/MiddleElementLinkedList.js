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

  // middle element of linked list
  findmiddle() {
    let slow = this.head;
    let fast = this.head;
    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow.value;
  }
}

const list = new LinkedList();
list.converArrayToLinkedList([1, 2, 37, 4, 50, 44]);
console.log(list.findmiddle());
