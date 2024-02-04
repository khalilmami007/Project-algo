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
}

// Example usage:
const SLL1 = new SinglyLinkedList();
console.log(SLL1.addFront(18));
console.log(SLL1.addFront(5));
console.log(SLL1.addFront(73));

// -------------------------

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
    // If the list is empty, return null
    if (!this.head) {
      return null;
    }

    const removedNode = this.head;

    this.head = this.head.next;
    removedNode.next = null;
    return this.head;
  }
}

// Example usage:
const SLL2 = new SinglyLinkedList();
SLL1.addFront(18);
SLL1.addFront(5);

console.log(SLL2.removeFront());
console.log(SLL2.removeFront());
console.log(SLL2.removeFront());

//----------------------------------------------

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
}

// Example usage:
const SLL3 = new SinglyLinkedList();
SLL1.addFront(18);

console.log(SLL3.front());       // 18
console.log(SLL3.removeFront()); // null
console.log(SLL3.front());       // null

