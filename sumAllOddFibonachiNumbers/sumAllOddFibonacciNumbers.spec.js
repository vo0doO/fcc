const assert = require("assert");
const fibonacciTriples = require("./fibonacciTriples");
const whileLoop = require("./whileLoop");
const arrayWithFibonacciSequence = require("./arrayWithFibonacciSequence");

describe("Sum all odd fibonacci numbers", ()=> {

    describe("Fibonacci triples", ()=>{
        it("Должен вернуть номер", ()=>{
            assert.equal("number", typeof fibonacciTriples.fibonacciTriples(1))
        })
        it("Должен вернут 1785", ()=>{
            assert.equal(1785, fibonacciTriples.fibonacciTriples(1000))
        })
        it("Должен вернут 4613732", ()=>{
            assert.equal(4613732, fibonacciTriples.fibonacciTriples(4000000))
        })
        it("Должен вернут 5", ()=>{
            assert.equal(5, fibonacciTriples.fibonacciTriples(4))
        })
        it("Должен вернут 60696", ()=>{
            assert.equal(60696, fibonacciTriples.fibonacciTriples(75024))
        })
        it("Должен вернут 135721", ()=>{
            assert.equal(135721, fibonacciTriples.fibonacciTriples(75025))
        })
    })

    describe("While loop", ()=>{
        it("Должен вернуть номер", ()=>{
            assert.equal("number", typeof whileLoop.whileLoop(1))
        })
        it("Должен вернут 1785", ()=>{
            assert.equal(1785, whileLoop.whileLoop(1000))
        })
        it("Должен вернут 4613732", ()=>{
            assert.equal(4613732, whileLoop.whileLoop(4000000))
        })
        it("Должен вернут 5", ()=>{
            assert.equal(5, whileLoop.whileLoop(4))
        })
        it("Должен вернут 60696", ()=>{
            assert.equal(60696, whileLoop.whileLoop(75024))
        })
        it("Должен вернут 135721", ()=>{
            assert.equal(135721, whileLoop.whileLoop(75025))
        })
    })

    describe("Array with fibonacci sequence", ()=>{
        it("Должен вернуть номер", ()=>{
            assert.equal("number", typeof arrayWithFibonacciSequence.arrayWithFibonacciSequence(1))
        })
        it("Должен вернут 1785", ()=>{
            assert.equal(1785, arrayWithFibonacciSequence.arrayWithFibonacciSequence(1000))
        })
        it("Должен вернут 4613732", ()=>{
            assert.equal(4613732, arrayWithFibonacciSequence.arrayWithFibonacciSequence(4000000))
        })
        it("Должен вернут 5", ()=>{
            assert.equal(5, arrayWithFibonacciSequence.arrayWithFibonacciSequence(4))
        })
        it("Должен вернут 60696", ()=>{
            assert.equal(60696, arrayWithFibonacciSequence.arrayWithFibonacciSequence(75024))
        })
        it("Должен вернут 135721", ()=>{
            assert.equal(135721, arrayWithFibonacciSequence.arrayWithFibonacciSequence(75025))
        })
    })
})