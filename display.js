class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
    }

    addFront(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }

        return this.head;
    }

    removeFront() {
        if (!this.head) {
            return null;
        }

        const removedNode = this.head;
        this.head = this.head.next;
        removedNode.next = null;

        return this.head;
    }

    front() {
        return this.head ? this.head.data : null;
    }

    display() {
        let current = this.head;
        let result = "";

        while (current) {
            result += current.data;
            if (current.next) {
                result += ", ";
            }
            current = current.next;
        }

        return result;
    }
}

// Example usage:
const SLL1 = new SinglyLinkedList();
SLL1.addFront(76);
SLL1.addFront(2);

console.log(SLL1.display()); 

SLL1.addFront(11.41);

console.log(SLL1.display()); 
