"use strict";
const Node = require("../node");

class Queue {
    constructor() {
        this.front = null;
        this.back = null;
        this.length = 0;
    }

    enqueue(value) {
        let node = new Node(value);

        if (!this.front) {
            this.front = node
            this.back = node
        }
        else {
            this.back.next = node
            this.back = node
        }
        this.length++
    }

    dequeue() {

        if (!this.front) return "You can't delete from an empty list"

        let firstNode = this.front
        this.front = firstNode.next
        firstNode.next = null

        this.length--

        return firstNode
    }


    peak(){
    if (!this.front) return "exception"

     return this.front

    }

    isEmpty(){
        if(!this.front) return true

        return false
    }

}

module.exports = Queue