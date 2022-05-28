'use strict';

const hashTable = require('../hash');

function mostRepeatedWord(str){
    let hash = new hashTable(str.length);
    let words = str.toLowerCase().split(' ');
    let max = 0;
    let maxWord = '';
    for(let i = 0; i < words.length; i++){
        if(!hash.get(words[i])){
            hash.set(words[i], 1);
        }else{
            hash.set(words[i], hash.get(words[i]) + 1);
        }
        if(hash.get(words[i]) > max){
            max = hash.get(words[i]);
            maxWord = words[i];
        }
    }
    return maxWord;
}

module.exports = mostRepeatedWord;