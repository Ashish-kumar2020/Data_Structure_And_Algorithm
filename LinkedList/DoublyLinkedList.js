class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // Insert at beginning
    insertAtBeginning(data) {
        const newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }

        this.length++;
    }

    // Insert at end
    insertAtTheEnd(data) {
        const newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
    }

    // Insert at a specific position
    insertAtASpecificPosition(data, position) {
        if (position < 0 || position > this.length) return false;

        if (position === 0) {
            this.insertAtBeginning(data);
            return true;
        }

        if (position === this.length) {
            this.insertAtTheEnd(data);
            return true; // <-- MUST return here
        }

        const newNode = new Node(data);
        let curr = this.head;

        for (let i = 0; i < position - 1; i++) {
            curr = curr.next;
        }

        // curr is node before the insertion point
        newNode.next = curr.next;
        newNode.prev = curr;
        curr.next.prev = newNode;
        curr.next = newNode;

        this.length++;
        return true;
    }

    // Delete a node by value
    deleteANode(data) {
        if (!this.head) return false;

        let curr = this.head;

        while (curr) {
            if (curr.data === data) {
                if (curr === this.head && curr === this.tail) {
                    // only node
                    this.head = null;
                    this.tail = null;
                } else if (curr === this.head) {
                    // remove head
                    this.head = curr.next;
                    if (this.head) this.head.prev = null;
                } else if (curr === this.tail) {
                    // remove tail
                    this.tail = curr.prev;
                    if (this.tail) this.tail.next = null;
                } else {
                    // middle node
                    curr.prev.next = curr.next;
                    curr.next.prev = curr.prev;
                }

                this.length--;
                return true;
            }

            curr = curr.next;
        }

        return false;
    }

    // traverse forward
    traverseForward() {
        let curr = this.head;
        while (curr) {
            console.log(curr.data);
            curr = curr.next;
        }
    }

    // traverse backward (consistent name)
    traverseBackward() {
        let curr = this.tail;
        while (curr) {
            console.log(curr.data);
            curr = curr.prev;
        }
    }

    // Search for a node, returns index or -1
    search(data) {
        let curr = this.head;
        let index = 0;
        while (curr) {
            if (curr.data === data) return index;
            curr = curr.next;
            index++;
        }
        return -1;
    }
}


// -------------------- TEST --------------------

const list = new DoublyLinkedList();

list.insertAtTheEnd(1);
list.insertAtTheEnd(2);
list.insertAtTheEnd(3);
list.insertAtBeginning(0);
list.insertAtASpecificPosition(1.5, 2);

console.log("Forward traversal:");
// list.traverseForward();

console.log("Backward traversal:");
list.traverseBackward();

console.log("Search for 2:", list.search(2));

list.deleteANode(1.5);

console.log("After deletion:");
// list.traverseForward();
