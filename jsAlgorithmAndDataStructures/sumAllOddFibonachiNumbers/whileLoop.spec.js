const assert = require("assert");
const whileLoop = require("./whileLoop");


describe("Sum all odd fibonacci numbers", ()=> {
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
})