/* Constructor Functions */ 

// Constructor for Node
/*
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// Constructor for LinkedList

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(value) {
        const node = new Node(value);

        if (!this.head) {
            this.head = node;
        } else {
            let current = this.head;
            
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
    }

    prepend(value) {
        const node = new Node(value);

        node.next = this.head;
        this.head = node;
    }

    size() {
        let counter = 0;
        let current = this.head;

        while (current) {
            counter++;
            current = current.next;
        }

        return counter;
    }

    headNode() {
        return this.head;
    }

    tailNode() {
        let current = this.head;

        if (!current) {
            return null;
        }

        while (current.next) {
            current = current.next;
        }

        return current;
    }

    at(index) {
        let counter = 0;
        let current = this.head;

        if (index < 0 || !current) {
            return null;
        }

        while (current && counter !== index) {
            counter++;
            current = current.next;
        }

        return current;
    }

    pop() {
        let current = this.head;

        if (!current) {
            return null;
        }

        if (!current.next) {
            return null;
        }
    
        while (current.next.next) {
            current = current.next;
        }

        current.next = null;
        
        return current;
    }

    contains(input) {
        let current = this.head;

        if (!current) {
            return null;
        }

        while (current) {
            if (current.value !== input && current.next) {
                current = current.next;
            } else if (current.value == input) {
                return true;
            } else {
                return false;
            }
        }
    }

    find(input) {
        let counter = 0;
        let current = this.head;

        if (!current) {
            return null;
        }

        while (current) {
            if (current.value !== input && current.next) {
                counter++;
                current = current.next;
            } else if (current.value == input) {
                return counter;
            }
        }
    }

    toString() {
        let current = this.head;
        let array = [];

        while (current) {
            let arrayValue = `( ${current.value} )`
            array.push(arrayValue);
            current = current.next;
        }
        array.push('null')
        return array.join(' -> ');
    }

    insertAt(input, index) {
        let node = new Node(input);
        let current = this.head;
        let counter = 0;
        let previousIndex = index - 1;

        while (current) {
            if (counter !== previousIndex) {
                counter++;
                current = current.next;
            } else {
                node.next = current.next;
                current.next = node;
                return;
            }
        }
    }

    removeAt(index) {
        let current = this.head;
        let counter = 0;
        let previousIndex = index - 1;

        while (current) {
            if (counter !== previousIndex) {
                counter++;
                current = current.next;
            } else {
                current.next = current.next.next;
                return;
            }
        }
    }
}


const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(newList);
console.log(newList.size());
console.log(newList.headNode());
console.log(newList.tailNode());
console.log(newList.at(2));
console.log(newList.pop());
console.log(newList);
console.log(newList.contains('leya1'));
console.log(newList.find('leya'));
console.log(newList.toString());
newList.insertAt('loqueen', 2);
console.log(newList.toString());
newList.removeAt(1);
console.log(newList.toString());

*/

function LinkedList() {
    let head = null;
    let size = 0;

    const append = (value) => {
        const node = Node(value);
        if (!head) {
            head = node;
            size++;
        } else {
            let current = head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
            size++;
        }
    }

    const prepend = (value) => {
        const node = Node(value);
        if (!head) {
            head = node;
            size++;
        } else {
            node.next = head;
            head = node;
            size++;
        }
    }

    const getSize = () => size;

    const getHead = () => head;

    const getTail = () => {
        let current = head;
        while (current.next) {
            current = current.next;
        }
        return current;
    }

    const at = (index) => {
        let counter = 0;
        let current = head;

        while (current && counter !== index) {
            current = current.next;
            counter++;
        }
        return current;
    }

    const pop = () => {
        let current = head;
        while (current.next.next) {
            current = current.next;
        }
        current.next = null;
    }

    const contains = (value) => {
        let current = head;
        while (current) {
            if (current.data === value) {
                return true;
            }
            current = current.next;
        }
        return false;
    }

    const find = (value) => {
        let counter = 0;
        let current = head;
        while (current) {
            if (current.data === value) {
                return counter;
            }
            current = current.next;
            counter++
        }
        return null;
    }

    const toString = () => {
        let array = [];
        let string = '';
        let current = head;

        while (current) {
            array.push(current.data);
            current = current.next;
        }

        array.forEach((item) => {
            string += `( ${item} ) -> `
        })

        string += 'null';

        return string;
    }

    const insertAt = (value, index) => {
        const node = Node(value)

        if (index === 0) {
            node.next = head;
            head = node;
            return;
        }

        let counter = 0;
        let current = head;
        while (current) {
           if (counter !== index - 1) {
                counter++;
                current = current.next;
            } else {
                node.next = current.next;
                current.next = node;
                return;
            }
        }
    }

    const removeAt = (index) => {
        if (index === 0) {
            head = head.next;
            return;
        }

        let counter = 0;
        let current = head;
        while (current) {
            if (counter !== index - 1) {
                counter++;
                current = current.next;
            } else {
                current.next = current.next.next;
                return;
            }
        }
    }

    return { append, prepend, getSize, getHead, getTail, at, pop, contains, find, toString, insertAt, removeAt }
}

function Node(value) {
    let data = value;
    let next = null;

    return { data, next }
}

const list = LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
list.insertAt("rat", 0)
list.removeAt(0)

console.log(list.getHead())
console.log(list.toString())
