"use strict";
const Node = require("./node");

class LinkedList {
  constructor() {
    this.head = null;
  }
  insert(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }

  includes(value) {
    let current = this.head;
    if (current.value === value) return true;

    while (current.next) {
      current = current.next;
      if (current.value === value) {
        return true;
      }
    }
    return false;
  }

  toString() {
    let result = '';
    if (!this.head) return 'Empty';
    let current = this.head;
    while (current) {
      let currentValue = current.value;
      current = current.next;
      result = result + `{${currentValue}} ->`;
    }
    result += 'Null';
    return result;
  }
}

module.exports = LinkedList;
