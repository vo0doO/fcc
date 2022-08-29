const assert = require("assert");
const { fibonacciTriples } = require("./fibonacciTriples");


describe("Sum all odd fibonacci numbers", () => {
    describe("Fibonacci triples", () => {
        it("Должен вернуть номер", () => {
            assert.equal("number", typeof fibonacciTriples(1))
        })
        it("Должен вернут 1785", () => {
            assert.equal(1785, fibonacciTriples(1000))
        })
        it("Должен вернут 4613732", () => {
            assert.equal(4613732, fibonacciTriples(4000000))
        })
        it("Должен вернут 5", () => {
            assert.equal(5, fibonacciTriples(4))
        })
        it("Должен вернут 60696", () => {
            assert.equal(60696, fibonacciTriples(75024))
        })
        it("Должен вернут 135721", () => {
            assert.equal(135721, fibonacciTriples(75025))
        })
    })
})