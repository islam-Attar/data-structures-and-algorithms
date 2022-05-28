'use strict'

const hashTable = require('../hash');
const mostRepeatedWord = require('./most-repeated-word');


describe('mostRepeatedWord function', () => {

    it('should return the most repeated word in a string', () => {
        expect(mostRepeatedWord('In a galaxy far far away')).toEqual('far');
    });

    it('edge case', () => {
        expect(mostRepeatedWord('Taco cat ate a taco')).toEqual('taco');
    });

});
