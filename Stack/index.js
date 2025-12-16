class Stack{
    constructor(){
        this.item = [];
    }

    // Add a number to stack
    push(number){
        this.item.push(number);
    }

    // Take the top number off the stack
    pop(){
        if(this.item.length === 0){
            return "Stack is Empty"
        }
        return this.item.pop(); 
    }

    // see what is the top number
    peek(){
        return this.item[this.item.length - 1];
    }

    // check if the stack is empty
    size(){
        return this.item.length;
    };
};

let myStack = new Stack();
myStack.push(5);
myStack.push(10);
console.log(myStack.peek());
myStack.pop();
console.log(myStack.peek())