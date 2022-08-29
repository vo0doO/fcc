const assert = require("assert");
const divisibilityCheckingWithNamedForLoop = require("./divisibilityCheckingWithNamedForLoop");



describe("Sum All Primes", ()=>{
    
    describe("Divisibility checking", () => {

        describe("With named for loop", ()=> {
            it("Должен вернуть 17", ()=> {
                assert.equal(17, divisibilityCheckingWithNamedForLoop(10))
            })
            
            it("Должен вернуть 73156", ()=> {
                assert.equal(73156, divisibilityCheckingWithNamedForLoop(977))
            })
        })

    })
})