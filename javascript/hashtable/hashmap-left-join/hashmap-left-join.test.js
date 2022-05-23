'use strict';

const hashTable = require('../hash');
const leftJoin = require('./hashmap-left-join');

let table1 = new hashTable(50);
let table2 = new hashTable(50);

table1.set("fond", "enamored");
table1.set("wrath", "anger");
table1.set("diligent", "employed");
table1.set("outfil", "garb");
table1.set("guide", "usher");

table2.set("fond", "averse");
table2.set("wrath", "delight");
table2.set("diligent", "idle");
table2.set("flow", "jam");
table2.set("guide", "follow");


describe('leftJoin test', () => {
    it('all the values in the first hashmap are returned, and if values exist in the “right” hashmap ', () => {
        expect(leftJoin(table1, table2)).toEqual([
            ['outfil', 'garb', null] ,
            ['wrath', 'anger', 'delight'],
            ['guide', 'usher', 'follow'],
            ['fond', 'enamored', 'averse'],
            ['diligent', 'employed', 'idle']
        ]);
    });
});