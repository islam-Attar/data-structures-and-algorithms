"use strict";


const Stack = require("../stack-queue/stack");

describe("Linked-List using Stack", () => {
    it("testing creating", () => {
      const stack = new Stack();
      expect(stack).toBeDefined();
      expect(stack.top).toBeNull();
    });

    it("testing push method", () => {
        const stack = new Stack();
        stack.push(1)
        stack.push(2)
        
        expect(stack.top.value).toBe(2);
        expect(stack.top.next.value).toBe(1);
      });

      it("testing pop method", () => {
        const stack = new Stack();
        const emptyStack = new Stack();
        stack.push(1)
        stack.push(2)
        stack.push(3)
        
        expect(stack.pop().value).toBe(3);
        expect(stack.top.value).toBe(2)
        expect(emptyStack.pop()).toBe("You can't delete from an empty list")
        
      });

      it("testing peak method", () => {
        const stack = new Stack();
        const emptyStack = new Stack();

        stack.push(1)
        stack.push(2)
        stack.push(3)
        stack.push(4)
        
        expect(stack.peak().value).toBe(4);
        expect(emptyStack.peak()).toBe('exception');
      });

      it("testing isEmpty method", () => {
        const stack = new Stack();
        const emptyStack = new Stack();

        stack.push(1)
        stack.push(2)
        stack.push(3)
        stack.push(4)
        
        expect(stack.isEmpty()).toBe(false);
        expect(emptyStack.isEmpty()).toBe(true);
      });

});