const assert = require("assert");
const arrayWithFibonacciSequence = require("./arrayWithFibonacciSequence");


describe("Sum all odd fibonacci numbers", () => {

    describe("Array with fibonacci sequence", () => {
        it("Должен вернуть номер", () => {
            assert.equal("number", typeof arrayWithFibonacciSequence.arrayWithFibonacciSequence(1))
        })
        it("Должен вернут 1785", () => {
            assert.equal(1785, arrayWithFibonacciSequence.arrayWithFibonacciSequence(1000))
        })
        it("Должен вернут 4613732", () => {
            assert.equal(4613732, arrayWithFibonacciSequence.arrayWithFibonacciSequence(4000000))
        })
        it("Должен вернут 5", () => {
            assert.equal(5, arrayWithFibonacciSequence.arrayWithFibonacciSequence(4))
        })
        it("Должен вернут 60696", () => {
            assert.equal(60696, arrayWithFibonacciSequence.arrayWithFibonacciSequence(75024))
        })
        it("Должен вернут 135721", () => {
            assert.equal(135721, arrayWithFibonacciSequence.arrayWithFibonacciSequence(75025))
        })
    })
})