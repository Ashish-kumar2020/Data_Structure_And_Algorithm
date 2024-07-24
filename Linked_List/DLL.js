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
    if (arr.length === 0) {
      this.head = null;
      this.tail = null;
      return;
    }
    this.head = new Node(arr[0]);
    this.tail = this.head;
    let currentNode = this.head;

    for (let i = 1; i < arr.length; i++) {
      const tempNode = new Node(arr[i]);
      currentNode.next = tempNode;
      tempNode.prev = currentNode;
      currentNode = tempNode;
      this.tail = tempNode; // Update tail to the last node
    }
  }

  // Delete Head
  deleteHead() {
    if (!this.head) {
      // If the list is empty, do nothing
      return;
    }
    if (this.head === this.tail) {
      // If there's only one node in the list
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }
  }

  // Delete Tail
  deleteTail() {
    if (!this.tail) {
      // If the list is empty, do nothing
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

  // delete kth node
  deleteKThNode(k) {
    if (this.head == null) return null;
    let cnt = 0;
    let temp = this.head;
    while (temp !== null) {
      cnt++;
      if (cnt === k) break;
      temp = temp.next;
    }
    if (temp === null) {
      return;
    }
    let back = temp.prev;
    let front = temp.next;

    if (back === null && front === null) return null;
    else if (back === null) {
      return this.deleteHead();
    } else if (front === null) {
      return this.deleteTail();
    }
    back.next = front;
    front.prev = back;
    temp.next = null;
    temp.prev = null;
    return this.head;
  }

  deleteNode(temp) {
    let back = temp.prev;
    let front = temp.next;
    if (front === null) {
      back.next = null;
      temp.prev = null;
      return;
    }
    back.next = front;
    front.prev = back;
    temp.next = temp.prev = null;
  }

  // Insertion at head
  insertionBeforeHead(val) {
    let newHead = new Node(val);
    newHead.next = this.head;
    this.head.prev = newHead;
    this.head = newHead;
  }

  // insertion before tail
  insertionBeforeTail(val) {
    if (this.head === null) return this.insertionBeforeHead(val);
    let tail = this.head;
    while (tail.next !== null) {
      tail = tail.next;
    }
    let back = tail.prev;
    let newNode = new Node(val);
    back.next = newNode;
    tail.prev = newNode;
    return this.head;
  }
  // print DLL
  printLinkedList() {
    let currNode = this.head;
    let result = "";
    while (currNode !== null) {
      result += currNode.value + (currNode.next ? " <-> " : "");
      currNode = currNode.next;
    }
    console.log(result);
  }
}

const list = new LinkedList();
list.convertToDLL([1, 2, 3, 4, 5, 6, 7]);
// list.deleteHead();
// list.deleteTail();
// list.deleteKThNode(6);
// list.deleteNode(list.head.next.next.next.next.next);
// list.insertionBeforeHead(12);
list.insertionBeforeTail(20);
list.printLinkedList(); // Output: 2 <-> 3 <-> 4 <-> 5
