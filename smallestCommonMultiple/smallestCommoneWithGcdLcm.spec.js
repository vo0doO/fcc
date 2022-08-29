const assert = require("assert");
const { smallestCommonsWithGcdLcm } = require("assert");

describe("Smallest common multiple", () => {
    describe("With GCD LCM", () => {
        it("smallestCommonsWithGcdLcm([1, 5]) должен вернуть номер", () => {
            assert.equal("number", typeof smallestCommonsWithGcdLcm([1, 5]))
        })
        it("smallestCommonsWithGcdLcm([1, 5]) должен вернуть 60", () => {
            assert.equal(60, smallestCommonsWithGcdLcm([1, 5]))
        })
        it("smallestCommonsWithGcdLcm([5, 1]) должен вернуть 60", () => {
            assert.equal(60, smallestCommonsWithGcdLcm([5, 1]))
        })
        it("smallestCommonsWithGcdLcm([2, 10]) должен вернуть 2520", () => {
            assert.equal(2520, smallestCommonsWithGcdLcm([2, 10]))
        })
        it("smallestCommonsWithGcdLcm([1, 13]) должен вернуть 360360", () => {
            assert.equal(360360, smallestCommonsWithGcdLcm([1, 13]))
        })
        it("smallestCommonsWithGcdLcm([23, 18]) должен вернуть 6056820", () => {
            assert.equal(6056820, smallestCommonsWithGcdLcm([23, 18]))
        })
    })
})