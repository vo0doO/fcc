const assert = require("assert");
const { modifiedSieveEratofen } = require("./modifiedSieveEratofen");

describe("Sum All Primes", ()=>{
    
    describe("Sieve Eratosfen", () => {

        describe('Modified', () => { 
            it("Должен вернуть 17", ()=> {
                assert.equal(17, modifiedSieveEratofen(10))
            })
            
            it("Должен вернуть 73156", ()=> {
                assert.equal(73156, modifiedSieveEratofen(977))
            }) 
         })
    })

})