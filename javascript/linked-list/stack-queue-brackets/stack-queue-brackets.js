const stack = require('../stack-queue/stack');

function stackQueueBrackets(str) {
    const newStack = new stack();

    if (str == "" || typeof str !== "string") {
        return null;
    }


    let result = str.split('');

    if (!result.includes('(') && !result.includes(')') && !result.includes('{') &&
        !result.includes('}') && !result.includes('[') && !result.includes(']')) return null;

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

        else if (element == ']' || element == '}' || element == ')') {
            newStack.push(element);
        }

    })

    if (newStack.isEmpty())
        return true;
    else
        return false;

}


module.exports = stackQueueBrackets;