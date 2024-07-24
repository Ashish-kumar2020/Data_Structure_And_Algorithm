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

  // Delete Head of Linked List
  deleteHead() {
    if (this.head === null) return this.head;
    let temp = this.head;
    this.head = this.head.next;
    return this.head;
  }

  // Delete Tail of Linked List
  deleteTail() {
    if (this.head === null || this.head.next === null) return null;
    let temp = this.head;
    while (temp.next.next !== null) {
      temp = temp.next;
    }
    temp.next = null;
    return this.head;
  }

  // Delete At Kth Position
  deleteAtKPosition(k) {
    if (this.head === null) return this.head;
    if (k == 1) {
      this.head = this.head.next;
      return this.head;
    }
    let prev = null;
    let temp = this.head;
    let cnt = 0;
    while (temp !== null) {
      cnt++;
      if (cnt == k) {
        prev.next = temp.next;
        break;
      }
      prev = temp;
      temp = temp.next;
    }
    return this.head;
  }

  // Delete Elemenet
  deleteElement(ele) {
    if (this.head === null) return this.head;
    if (this.head.value == ele) {
      this.head = this.head.next;
      return this.head;
    }
    let prev = null;
    let temp = this.head;

    while (temp !== null) {
      if (temp.value === ele) {
        prev.next = temp.next;
        break;
      }
      prev = temp;
      temp = temp.next;
    }
    return this.head;
  }

  // Insert At Head
  insertAtHead(val) {
    let temp = new Node(val);
    temp.next = this.head;
    this.head = temp;
    return this.head;
  }

  // Insert At Tail
  insertAtTail(val) {
    let temp = new Node(val);
    let curr = this.head;
    while (curr.next.next !== null) {
      curr = curr.next;
    }
    curr.next.next = temp;
    temp.next = null;
    return this.head;
  }

  // Insert At Kth Position
  insertAtKPosition(k, val) {
    if (this.head === null) return null;
    if (k == 1) {
      let temp = new Node(val);
      temp.next = this.head;
      this.head = temp;
      return this.head;
    }
    let curr = this.head;
    let cnt = 0;
    while (curr !== null) {
      cnt++;
      if (cnt == k - 1) {
        let newNode = new Node(val);
        newNode.next = curr.next;
        curr.next = newNode;
        return this.head;
      }
      curr = curr.next;
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

  // Reverse a Linked List
  reverseLinkedList() {
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
// console.log(list.printLinkedListLength());
// console.log(list.searchElement(1));
// list.deleteHead();
// list.deleteHead();
// list.deleteTail();
// list.deleteTail();
// list.deleteAtKPosition(4);
// list.deleteElement(37);
// list.insertAtHead(10);
// list.insertAtTail(345);
// list.insertAtTail(3455);
// list.insertAtKPosition(2, 300);
// list.insertAtKPosition(3, 300);
// console.log(list.findmiddle());
list.reverseLinkedList();
list.printLinkedList();
