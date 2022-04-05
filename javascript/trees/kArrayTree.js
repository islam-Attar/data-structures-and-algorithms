'use strict';
class KArrayTree{
    constructor(root = null){
        this.root = root;
    }
    treeFizzBuzz(){
        let output = [];
        let fizzBuzz = (node)=>{
            if(node.child){
                fizzBuzz(node.child);
            }
            if(node.value % 3 === 0 && node.value % 5 === 0){
                output.push('FizzBuzz');

            }else if(node.value % 3 === 0){
                output.push('Fizz');

            }else if(node.value % 5 === 0){
                output.push('Buzz');

            }else{
                output.push(node.value);
            }
            for (let i = 0; i < node.child.length; i++) {
                if (node.child[i] === null) {
                    continue;
                }   else{
                    fizzBuzz(node.child[i]);
                }

            }
        }
        fizzBuzz(this.root);
        return output;
    }
       
    
}

module.exports = KArrayTree;