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

});