const assert = require("assert");
const { smallestCommonsWithGCDLCM } = require("./smallestCommonsWithGCDLCM");

describe("Smallest common multiple", () => {

    describe("With GCD LCM", () => {
        
        it("smallestCommonsWithGCDLCM([1, 5]) должен вернуть номер", () => {
            assert.equal("number", typeof smallestCommonsWithGCDLCM([1, 5]))
        })
        it("smallestCommonsWithGCDLCM([1, 5]) должен вернуть 60", () => {
            assert.equal(60, smallestCommonsWithGCDLCM([1, 5]))
        })
        it("smallestCommonsWithGCDLCM([5, 1]) должен вернуть 60", () => {
            assert.equal(60, smallestCommonsWithGCDLCM([5, 1]))
        })
        it("smallestCommonsWithGCDLCM([2, 10]) должен вернуть 2520", () => {
            assert.equal(2520, smallestCommonsWithGCDLCM([2, 10]))
        })
        it("smallestCommonsWithGCDLCM([1, 13]) должен вернуть 360360", () => {
            assert.equal(360360, smallestCommonsWithGCDLCM([1, 13]))
        })
        it("smallestCommonsWithGCDLCM([23, 18]) должен вернуть 6056820", () => {
            assert.equal(6056820, smallestCommonsWithGCDLCM([23, 18]))
        })
    })
})