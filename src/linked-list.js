const Node = require('./node');

class LinkedList {
    constructor() {
        this._head = null;
        this._tail = null;
        this.length = 0;
    }

    append(data) {
        let tempNode = new Node(data);

        // for empty list
        if (this._head == null) {
            this._head = tempNode;
            this._tail = tempNode;
        }
        // for non-empty list
        else {
            tempNode.prev = this._tail;
            this._tail.next = tempNode;
            this._tail = tempNode;
        }
        this.length++;
        return this;
    }

    head() {
        if (this.length != 0) {
            return this._head.data;
        }
        else {
            return this._head;
        }
    }

    tail() {
        if (this.length != 0) {
            return this._tail.data;
        }
        else {
            return this._tail;
        }
    }

    at(index) {
        let counter = 0;
        let current = this._head;
        while (counter != index) {
            current = current.next;
            counter++;
        }
        return current.data;
    }

    insertAt(index, data) {
        let counter = 0;
        let current = this._head;
        let tempNode = new Node(data);

        // for empty list with input index == 0;
        if (this._head == null && index == 0) {
            this._head = tempNode;
            this.tail = tempNode;
            this.length++;
        }
        // for non-empty list with index > 0;
        else if (this._head != null && index > 0) {
            while (counter != index) {
                current = current.next;
                counter++;
            }
            tempNode.prev = current.prev;
            tempNode.next = current;
            current.prev.next = tempNode;
        }
        return this;
    }

    isEmpty() {
        return this.length == 0;
    }

    clear() {
        this._head = null;
        this._tail = null;
        this.length = 0;
        return this;
    }

    deleteAt(index) {
        let counter = 0;
        let current = this._head;
        if (this._head == this._tail) {
            this._head = null;
            this._tail = null;
        } else {
            while (counter != index) {
                current = current.next;
                counter++;
            }
            current.next.prev = current.prev;
            current.prev.next = current.next;
        }
        this.length--;
        return this;
    }

    reverse() {
        let current = this._head;
        let prev = null;
        while (current != null) {
            let next = current.next;
            // replacing prev and next
            current.next = prev;
            current.prev = next;
            // updating prev
            prev = current;
            // using next to update current bc current.next was replased
            current = next;
        }
        this._tail = this._head;
        this._head = prev;
        return this;
    }

    indexOf(data) {
        let counter = 0;
        let current = this._head;

        for (let i = 0; i < this.length; i++) {
            if (current.data == data) {
                return i;
            }
            current = current.next;
        }
        return -1;
    }
}

module.exports = LinkedList;
