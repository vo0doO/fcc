const assert = require("assert");
const { arrayWithFibonacciSequence } = require("./arrayWithFibonacciSequence");


describe("Sum all odd fibonacci numbers", () => {

    describe("Array with fibonacci sequence", () => {
        it("Должен вернуть номер", () => {
            assert.equal("number", typeof arrayWithFibonacciSequence(1))
        })
        it("Должен вернут 1785", () => {
            assert.equal(1785, arrayWithFibonacciSequence(1000))
        })
        it("Должен вернут 4613732", () => {
            assert.equal(4613732, arrayWithFibonacciSequence(4000000))
        })
        it("Должен вернут 5", () => {
            assert.equal(5, arrayWithFibonacciSequence(4))
        })
        it("Должен вернут 60696", () => {
            assert.equal(60696, arrayWithFibonacciSequence(75024))
        })
        it("Должен вернут 135721", () => {
            assert.equal(135721, arrayWithFibonacciSequence(75025))
        })
    })
})