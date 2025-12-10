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
linkedList.printDispaly();
