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

  kthFromEnd(k) {

    let current = this.head;
    let length = 0;

    while (current != null) {
      current = current.next;
      length++;
    }



    if (k < 0 || k > length) return 'Exception';

    length = length - 1 - k;
    current = this.head;


    while (length != 0) {
      current = current.next;
      length--;
    }
    return current.value;


  }

}

module.exports = LinkedList;
