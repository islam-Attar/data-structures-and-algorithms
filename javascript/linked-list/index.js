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

  append(newValue) {

    const node = new Node(newValue);

    let current = this.head;

    if (this.head == null) {
      this.head = node;
    }

    else{

      while (current.next != null) {

        current = current.next;
      }

      return current.next = node;
    }
    }

    insertBefore(preValue, newValue) {

      const node = new Node(newValue);
      let current = this.head;
      while (current.next != null) {
          
          if (current.next.value == preValue) {
            
              node.next = current.next;
              current.next = node;
              return null;
          }
          current = current.next;
      }
      }


      insertAfter(preValue, newValue) {
        const node = new Node(newValue);
        let current = this.head;

        while (current.next != null) {
            current = current.next;
            if (current.value == preValue) {
                node.next = current.next;
                current.next = node;
                return null;
            }
        }

    }

  }
  
module.exports = LinkedList;