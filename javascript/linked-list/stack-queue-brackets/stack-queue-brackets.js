const stack = require('../stack-queue/stack');

function stackQueueBrackets(str) {
    const newStack = new stack();
    if (str == "") {
        return null;
    }

    let result = str.split('');
    result.map((element) => {

        if (element == '(' || element == '{' || element == '[') {
            newStack.push(element);

        } else if (element == ')' && newStack.peak() == '(') {
            newStack.pop();
        }
        else if (element == '}' && newStack.peak() == '{') {
            newStack.pop();
        }
        else if (element == ']' && newStack.peak() == '[') {
            newStack.pop();
        }

        else if(element == ']' || element == '}' || element == ')'){
            newStack.push(element);
        }
        
        
    })

    if (newStack.isEmpty()) 
        return true;
    else 
     return false;
    
}

module.exports = stackQueueBrackets;