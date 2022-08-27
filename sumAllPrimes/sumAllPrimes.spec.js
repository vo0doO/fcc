const assert = require("assert");
const sieveEratosfen = require("./sieveEratosfen")
const modifiedSieveEratofen = require("./modifiedSieveEratofen")
const divisibilityCheckingWithFunc = require("./divisibilityCheckingWithFunc");
const divisibilityCheckingWithNamedForLoop = require("./divisibilityCheckingWithNamedForLoop");



describe("Sum All Primes", ()=>{
    
    describe("Divisibility checking", () => {
        describe("With function", ()=> {
            it("Должен вернуть 17", ()=> {
                assert.equal(17, divisibilityCheckingWithFunc.divisibilityCheckingWithFunc(10))
            })
            
            it("Должен вернуть 73156", ()=> {
                assert.equal(73156, divisibilityCheckingWithFunc.divisibilityCheckingWithFunc(977))
            })
        })

        describe("With named for loop", ()=> {
            it("Должен вернуть 17", ()=> {
                assert.equal(17, divisibilityCheckingWithNamedForLoop.divisibilityCheckingWithNamedForLoop(10))
            })
            
            it("Должен вернуть 73156", ()=> {
                assert.equal(73156, divisibilityCheckingWithNamedForLoop.divisibilityCheckingWithNamedForLoop(977))
            })
        })

    })

    describe("Sieve Eratosfen", () => {

        describe('Default', () => { 
            it("Должен вернуть 17", ()=> {
                assert.equal(17, sieveEratosfen.sieveEratosfen(10))
            })
            
            it("Должен вернуть 73156", ()=> {
                assert.equal(73156, sieveEratosfen.sieveEratosfen(977))
            }) 
         })
        
        describe('Modified', () => { 
            it("Должен вернуть 17", ()=> {
                assert.equal(17, modifiedSieveEratofen.modifiedSieveEratofen(10))
            })
            
            it("Должен вернуть 73156", ()=> {
                assert.equal(73156, modifiedSieveEratofen.modifiedSieveEratofen(977))
            }) 
         })
    })

})