'use strict'

const LinkedList = require ('../linked-list/index.js');

class hashTable {
    constructor(size){
        this.size = size;
        this.table = new Array(size);

    }
    hash(key){
        let hash = 0;
        for(let i = 0; i < key.length; i++){
            hash = (hash + key.charCodeAt(i) * i) % this.size;
        }
        return hash;
    }
    set(key, value){
        let index = this.hash(key);
        if(!this.table[index]){
            this.table[index] = new LinkedList();
        }
        let entryData = {[key]: value};
        this.table[index].append(entryData);
    }
  
    get(key){
        const index = this.hash(key);
        if(!this.table[index]){
          return null;
        }
        let current = this.table[index].head;
        while(current){
          if(current.value[key]){
            return current.value[key];
          }
          current = current.next;
        }
        return null;
      }
        
      keys(){
        let keys = [];
        for(let i = 0; i < this.table.length; i++){
          if(this.table[i]){
            let current = this.table[i].head;
            while(current){
              keys.push(Object.keys(current.value)[0]);
              current = current.next;
            }
          }
        }
        return keys;
      }
      
    contains(key){
        const index = this.hash(key);
        if(!this.table[index]){
          return false;
        }
        let current = this.table[index].head;
        while(current){
          if(current.value[key]){
            return true;
          }
          current = current.next;
        }
        return false;
      }
}



module.exports = hashTable;


    

