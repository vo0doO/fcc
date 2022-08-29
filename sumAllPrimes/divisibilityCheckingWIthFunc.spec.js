const assert = require("assert");
const { divisibilityCheckingWithFunc } = require("./divisibilityCheckingWithFunc");



describe("Sum All Primes", ()=>{

    describe("Divisibility checking", () => {

        describe("With function", ()=> {
            it("Должен вернуть 17", ()=> {
                assert.equal(17, divisibilityCheckingWithFunc(10))
            })
            
            it("Должен вернуть 73156", ()=> {
                assert.equal(73156, divisibilityCheckingWithFunc(977))
            })
        })
    })
})