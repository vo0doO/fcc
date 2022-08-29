const assert = require("assert");
const fibonacciTriples = require("./fibonacciTriples");


describe("Sum all odd fibonacci numbers", () => {
    describe("Fibonacci triples", () => {
        it("Должен вернуть номер", () => {
            assert.equal("number", typeof fibonacciTriples.fibonacciTriples(1))
        })
        it("Должен вернут 1785", () => {
            assert.equal(1785, fibonacciTriples.fibonacciTriples(1000))
        })
        it("Должен вернут 4613732", () => {
            assert.equal(4613732, fibonacciTriples.fibonacciTriples(4000000))
        })
        it("Должен вернут 5", () => {
            assert.equal(5, fibonacciTriples.fibonacciTriples(4))
        })
        it("Должен вернут 60696", () => {
            assert.equal(60696, fibonacciTriples.fibonacciTriples(75024))
        })
        it("Должен вернут 135721", () => {
            assert.equal(135721, fibonacciTriples.fibonacciTriples(75025))
        })
    })
})