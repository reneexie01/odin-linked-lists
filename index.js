// Class for Node

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// Class for LinkedList

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
    }
}

const family = new LinkedList();

family.append('Logan');
family.append('Tina');
family.append('Leya');
family.append('Remee');
family.prepend('Start')

console.log(family)

