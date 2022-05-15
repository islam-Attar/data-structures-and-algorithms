'use strict';
const HashTable = require('./hash');

describe('Hash Table', () => {
    it('instance of', () => {
        const hash = new HashTable(10);
        expect(hash).toBeInstanceOf(HashTable);
    });

    it('Retrieving based on a key returns the value stored', () => {
        const hash = new HashTable(10);
        hash.set('name', 'islam');
        expect(hash.get('name')).toBe('islam');
    });

    it('Successfully returns null for a key that does not exist in the hashtable', () => {
        const hash = new HashTable(10);
        expect(hash.get('name')).toBe(null);
    });



    it('Successfully returns a list of all unique keys that exist in the hashtable', () => {
        const hash = new HashTable(10);
        hash.set('name', 'islam');
        hash.set('age', '25');
        hash.set('city', 'irbid');
        expect(hash.keys()).toEqual(['city', 'age', 'name']);
    });


    it('Successfully retrieve a value from a bucket within the hashtable that has a collision', () => {
        const hash = new HashTable(10);

        hash.set('name', 'islam');
        hash.set('name', 'walid');

        expect(hash.get('name')).toBe('islam');
    });

    it('Successfully returns true if the hashtable contains the key', () => {
        const hash = new HashTable(10);

        hash.set('name', 'islam');
        hash.set('age', '25');
        hash.set('city', 'irbid');

        expect(hash.contains('name')).toBe(true);
        expect(hash.contains('age')).toBe(true);
        expect(hash.contains('country')).toBe(false);
    });


    it('Successfully hash a key to an in-range value', () => {
        const hash = new HashTable(10);
        expect(hash.hash('islam')).toBe(8);
        expect(hash.hash('walid')).toBe(8);
        expect(hash.hash('ibrahim')).toBe(2);
    });

    it('Successfully returns the first word to occur more than once in a string', () => {
        const hash = new HashTable(10);
        expect(hash.repeatedWord('Once upon a time, there was a brave princess who..')).toBe('a');

        expect(hash.repeatedWord(`it was the best of times, it was the worst of times, it was the age of wisdom,
                it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, 
                it was the season of Darkness, it was the spring of hope, it was the winter of despair,
                 we had everything before us, we had nothing before us, we were all going direct to Heaven,
                we were all going direct the other way – in short, the period was so far like the present period,
                 that some of it is noisiest authorities insisted on it is being received, for good or for evil, 
                in the superlative degree of comparison only...`)).toBe('it');

            expect(hash.repeatedWord(`It was a queer, sultry summer, the summer they electrocuted the Rosenbergs,
                                     and I didn’t know what I was doing in New York...`)).toBe('summer');

    });

});