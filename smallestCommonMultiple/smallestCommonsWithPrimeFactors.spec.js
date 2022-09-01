const assert = require("assert");
const { smallestCommonsWithPrimeFactors } = require("./smallestCommonsWithPrimeFactors")

describe("Smallest common multiple", () => {

    describe("With GCD LCM", () => {
        
        it("smallestCommonsWithPrimeFactors([1, 5]) должен вернуть номер", () => {
            assert.equal("number", typeof smallestCommonsWithPrimeFactors([1, 5]))
        })
        it("smallestCommonsWithPrimeFactors([1, 5]) должен вернуть 60", () => {
            assert.equal(60, smallestCommonsWithPrimeFactors([1, 5]))
        })
        it("smallestCommonsWithPrimeFactors([5, 1]) должен вернуть 60", () => {
            assert.equal(60, smallestCommonsWithPrimeFactors([5, 1]))
        })
        it("smallestCommonsWithPrimeFactors([2, 10]) должен вернуть 2520", () => {
            assert.equal(2520, smallestCommonsWithPrimeFactors([2, 10]))
        })
        it("smallestCommonsWithPrimeFactors([1, 13]) должен вернуть 360360", () => {
            assert.equal(360360, smallestCommonsWithPrimeFactors([1, 13]))
        })
        it("smallestCommonsWithPrimeFactors([23, 18]) должен вернуть 6056820", () => {
            assert.equal(6056820, smallestCommonsWithPrimeFactors([23, 18]))
        })
    })
})