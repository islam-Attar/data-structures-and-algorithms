'use strict'

const { AnimalShelter, Cat, Dog } = require('../stack-queue-animal-shelter/animalShelter');


describe('testing AnimalShelter', () => {

    it('test creating an AnimalShelter instance', () => {
        const animal = new AnimalShelter();
        expect(animal).toBeDefined();
    })

    it('test adding Cat object ', async () => {

        const animal = new AnimalShelter();
        const cat = new Cat("cat");

        animal.enqueue(cat);

        expect(animal.queue.length).toBe(1);
        expect((animal.queue.peak().name)).toEqual("cat");
    })

    it('test adding Dog object ', async () => {

        const animal = new AnimalShelter();
        const dog = new Dog("dog");

        animal.enqueue(dog);

        expect(animal.queue.length).toBe(1);
        expect((animal.queue.peak().name)).toEqual("dog");
    })

    it('test adding Dog object ', async () => {

        const animal = new AnimalShelter();

        const cat = new Cat("cat");
        const dog = new Dog("dog");

        animal.enqueue(cat);
        animal.enqueue(dog);

        expect(animal.queue.length).toBe(2);

        animal.dequeue('cat');
        expect(animal.queue.length).toBe(1);

        animal.dequeue('dog');
        expect(animal.queue.length).toBe(0);

    })
})