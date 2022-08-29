const assert = require("assert");
const { smallestCommonsWithNamedForLoop } = require("./smallestCommonsWithNamedForLoop");


describe("Smallest common multiple", ()=>{
    describe("With named for loop", ()=> {
        it("smallestCommonsWithNamedForLoop([1, 5]) должен вернуть номер", ()=>{
            assert.equal("number", typeof smallestCommonsWithNamedForLoop([1, 5])  )
        })
        it("smallestCommonsWithNamedForLoop([1, 5]) должен вернуть 60", ()=>{
            assert.equal(60, smallestCommonsWithNamedForLoop([1, 5]))
        })
        it("smallestCommonsWithNamedForLoop([5, 1]) должен вернуть 60", ()=>{
            assert.equal(60, smallestCommonsWithNamedForLoop([5, 1]))
        })
        it("smallestCommonsWithNamedForLoop([2, 10]) должен вернуть 2520", ()=>{
            assert.equal(2520, smallestCommonsWithNamedForLoop([2, 10]))
        })
        it("smallestCommonsWithNamedForLoop([1, 13]) должен вернуть 360360", ()=>{
            assert.equal(360360, smallestCommonsWithNamedForLoop([1, 13]))
        })
        it("smallestCommonsWithNamedForLoop([23, 18]) должен вернуть 6056820", ()=>{
            assert.equal(6056820, smallestCommonsWithNamedForLoop([23, 18]))
        })
    })
})










