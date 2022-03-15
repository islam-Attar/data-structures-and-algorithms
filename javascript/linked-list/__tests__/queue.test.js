"use strict";


const Queue = require("../stack-queue/queue");

describe("Linked-List using Stack", () => {

    it("testing creating", () => {
        const queue = new Queue();

        expect(queue).toBeDefined();
        expect(queue.front).toBeNull();
    });

    it("testing enqueue method", () => {
        const queue = new Queue();
        queue.enqueue(1)
        queue.enqueue(2)

        expect(queue.front.value).toBe(1);
        expect(queue.front.next.value).toBe(2);
    });

    it("testing dequeue method", () => {
        const queue = new Queue();
        const emptyQueue = new Queue();
        queue.enqueue(1)
        queue.enqueue(2)
        queue.enqueue(3)

        expect(queue.dequeue().value).toBe(1);
        expect(emptyQueue.dequeue()).toBe("You can't delete from an empty list");
        
    });

    it("testing peak method", () => {
        const queue = new Queue();
        const emptyQueue = new Queue();
        queue.enqueue(1)
        queue.enqueue(2)
        queue.enqueue(3)

        expect(queue.peak().value).toBe(1);
        expect(emptyQueue.peak()).toBe('exception');
        
    });

    it("testing isEmpty method", () => {
        const queue = new Queue();
        const emptyQueue = new Queue();
        queue.enqueue(1)
        queue.enqueue(2)
        queue.enqueue(3)

        expect(queue.isEmpty()).toBe(false);
        expect(emptyQueue.isEmpty()).toBe(true);
        
    });
});