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

  it('Testing string method:', () => {
    const link = new LinkedLilst();
    link.insert('c');
    link.insert('b');
    link.insert('a');
    expect(link.toString()).toBe('{a} ->{b} ->{c} ->Null');
  });

  it('Testing kthFromEnd method:', () => {
    const link = new LinkedLilst();
    link.insert(5);
    link.insert(4);
    link.insert(3);
    link.insert(2);
    link.insert(1);

    expect(link.kthFromEnd(0)).toEqual(5);
    expect(link.kthFromEnd(1)).toEqual(4);
    expect(link.kthFromEnd(2)).toEqual(3);
    expect(link.kthFromEnd(3)).toEqual(2);
    expect(link.kthFromEnd(4)).toEqual(1);
    expect(link.kthFromEnd(10)).toEqual('Exception');
  });

  it('Testing append method:', () => {
    const link = new LinkedLilst();
    link.append(1);
    link.append(2);
    link.append(3);
    

    expect(link.head.value).toEqual(1);
    expect(link.head.next.value).toEqual(2);
    expect(link.head.next.next.value).toEqual(3);
    expect(link.head.next.next.next).toBeNull();
  });


  it('Testing insert-before method:', () => {
    const link = new LinkedLilst() ;
    link.insert(4)
    link.insert(3)
    link.insert(1)
    link.insertBefore(3, 2);
    expect(link.head.value).toBe(1);
    expect(link.head.next.value).toBe(2);
    expect(link.head.next.next.value).toBe(3);
    expect(link.head.next.next.next.value).toBe(4);
    expect(link.head.next.next.next.next).toBeNull();
  });


  it('testing insertAfter method:',()=>{
    const link = new LinkedLilst();
    link.insert(4)
    link.insert(3)
    link.insert(2)
    link.insert(1)
    link.insertAfter(4,5);
    expect(link.head.value).toBe(1);
    expect(link.head.next.value).toBe(2);
    expect(link.head.next.next.value).toBe(3);
    expect(link.head.next.next.next.value).toBe(4);
    expect(link.head.next.next.next.next.value).toBe(5);
    expect(link.head.next.next.next.next.next).toBeNull();
  })


  it('testing zipList method:',()=>{
    const link1 = new LinkedLilst();
    const link2 = new LinkedLilst();
    const link3 = new LinkedLilst();
    

    link1.insert(5);
    link1.insert(3);
    link1.insert(1);

    link2.insert(6);
    link2.insert(4);
    link2.insert(2);

    link3.zipList(link1,link2);
  
  expect(link3.toString()).toBe('{1} ->{2} ->{3} ->{4} ->{5} ->{6} ->Null')
  
  })

});
