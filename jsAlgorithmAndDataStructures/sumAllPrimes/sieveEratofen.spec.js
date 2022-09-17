const assert = require("assert");
const { sieveEratosfen } = require("./sieveEratosfen");


describe("Sum All Primes", ()=>{
    
    describe("Sieve Eratosfen", () => {

        describe('Default', () => { 
            it("Должен вернуть 17", ()=> {
                assert.equal(17, sieveEratosfen(10))
            })
            
            it("Должен вернуть 73156", ()=> {
                assert.equal(73156, sieveEratosfen(977))
            }) 
         })
    })

})