class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    };
};

class LinkedList{
    constructor(){
        this.head = null;
    }

    // Append : Insert a new Node
    append(data){
        let newNode = new Node(data);
        if(!this.head){
            this.head = newNode;
        }else{
            let current = this.head;
            while(current.next !== null){
                current = current.next;
            }
            current.next = newNode;
        }
    }

    // Insert a node at the begining
    prepend(data){
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    // Delete a node
    deleteNode(data){
        if(!this.head){
            return;
        };

        if(this.head.data === data){
            this.head = this.head.next;
            return;
        };
        let curr = this.head;
        while(curr.next !== null){
            if(curr.next.data === data){
                curr.next = curr.next.next;
                return;
            }
            curr = curr.next;
        }
    }

    // search for element in linked list
    serachElement(data){
        let curr = this.head;
        while(curr !== null){
            if(curr.data === data){
                return true;
            }
            curr = curr.next;
        }
        return false;
    }


    // display the element of linked list
    printDispaly(){
        let curr = this.head;
        let ele =[];
        while(curr !== null){
            ele.push(curr.data);
            curr = curr.next;
        }
        console.log(ele.join(" -> "))
    }
};

const linkedList = new LinkedList();
linkedList.append(10);
linkedList.append(20);
linkedList.append(30);
linkedList.prepend(5);
linkedList.deleteNode(20);
linkedList.printDispaly();
console.log(linkedList.serachElement(300));


// Complexity Analysis
/*
    1 - Insertion/deletion at the begining = O(1)
    2 - Insertion and deletion at the end = O(n)
    3 - search a element = O(n)
*/