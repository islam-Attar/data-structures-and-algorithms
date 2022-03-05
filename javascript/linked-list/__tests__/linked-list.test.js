"use strict";

const { it } = require("eslint/lib/rule-tester/rule-tester");
// Require our linked list implementation
const LinkedLilst = require("../index");

describe("Linked List", () => {
  it("testing creating LinkedTest", () => {
    const LL = new LinkedLilst();
    expect(LL).toBeDefined();
    expect(LL.head).toBeNull();
  });

  it("inserting to an empty LinkedList", () => {
    const LL = new LinkedLilst();
    LL.insert("a");
    expect(LL.head.value).toEqual("a");
    expect(LL.head.next).toBeNull();
  });

  it("inserting to a non-empty LinkedList", () => {
    const LL = new LinkedLilst();
    LL.insert("a");
    LL.insert("b");
    expect(LL.head.value).toEqual("b");
    expect(LL.head.next.value).toEqual("a");
    expect(LL.head.next.next).toBeNull();
  });

  it("Testing include method:", () => {
    const LL = new LinkedLilst();
    LL.insert("a");
    LL.insert("b");
    LL.includes("a");
    LL.includes("b");
    LL.includes("c");

    expect(LL.includes('a')).toBe(true);
    expect(LL.includes('b')).toBe(true);
    expect(LL.includes('c')).toBe(false);
  });

  it('test of string', () => {
    const link = new LinkedLilst();
    link.insert('c');
    link.insert('b');
    link.insert('a');
    expect(link.toString()).toBe('{a} ->{b} ->{c} ->Null');
  });

});
