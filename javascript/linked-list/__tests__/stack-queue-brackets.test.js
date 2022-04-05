const stackQueueBracketsfun = require('../stack-queue-brackets/stack-queue-brackets')

describe('testing',()=>{

    
    it('testing a correct case',()=>{
        let str = "((TESTING))"
        expect(stackQueueBracketsfun(str)).toBe(true);
    })

    it('testing opening case',()=>{
        let str2 = "{"
        expect(stackQueueBracketsfun(str2)).toBe(false);
    })

    it('testing closing case',()=>{
        let str3 = ")"
        expect(stackQueueBracketsfun(str3)).toBe(false);
    })

    it('testing not matching case',()=>{
        let str4 = "[({}]"
        expect(stackQueueBracketsfun(str4)).toBe(false);
    })

    it('testing empty string edge case',()=>{
        let str1 = ""
        expect(stackQueueBracketsfun(str1)).toBeNull();
    })

    it('testing non-string edge case',()=>{
        let str5 = 343434
        expect(stackQueueBracketsfun(str5)).toBe(null);
    })

    it('testing no brackets edge case',()=>{
        let str6 = '343434'
        expect(stackQueueBracketsfun(str6)).toBe(null);
    })

})

