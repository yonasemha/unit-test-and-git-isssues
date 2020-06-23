let assert = require('assert');

// test boundray condition
function boundrycheck(name,email){
    if(name.length > 4 && email.includes("@")){
       return true;
    }
}

describe('boundry tests',function(){
    it('test name and email',function(){
        assert.equal(boundrycheck("yononam", "yoni@"), true)
    })
})

// type check 
function check(str, num ,bol){
    if(typeof(str)=== "string" && typeof(num) === "number" && typeof(bol)==="boolean"){
          return true;
    }
}

describe(" check type", function(){
    it("string || number ",function(){
        assert.equal(check("yonas",55, false),true)
    })
})

