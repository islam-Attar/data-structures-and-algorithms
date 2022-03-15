"use strict";
const Node = require("../node");

class Stack {
    constructor() {
        this.top = null;
        this.last = null;
        this.length = 0;
    }

    push(value) {
        let node = new Node(value);

        if (!this.top) {
            this.top = node
            this.last = node
        }
        else {
            node.next = this.top
            this.top = node
        }
        this.length++
    }

    pop() {

        if (!this.top) return "You can't delete from an empty list";

        else {
            let poppedNode = this.top
            this.top = poppedNode.next

            this.length--
            return poppedNode;
        }
    }

    peak() {

        if (!this.top) return 'exception'

        return this.top
    }

    isEmpty() {

        if (!this.top) return true
        
           return false

    }
}

module.exports = Stack