const assert = require("assert");
const { addTogether } = require("./addTogether");


describe("Add Together", ()=>{
    it("addTogether(2, 3) должен вернуть 5", ()=>{
        assert.deepEqual(5, addTogether(2, 3))
    })
    
    it("addTogether(23, 30) должен вернуть 53", ()=>{
        assert.deepEqual(53, addTogether(23, 30))
    })
    
    it("addTogether(5)(7) должен вернуть 12", ()=>{
        assert.deepEqual(12, addTogether(5)(7))
    })
    
    it("addTogether(\"https://www.youtube.com/watch?v=dQw4w9WgXcQ\") должен вернуть undefined", ()=>{
        assert.deepEqual(undefined, addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ"))
    })
    
    it("addTogether(2, \"3\") должен вернуть undefined", ()=>{
        assert.deepEqual(undefined, addTogether(2, "3"))
    })
    
    it("addTogether(2)([3]) должен вернуть undefined", ()=>{
        assert.deepEqual(undefined, addTogether(2)([3]))
    })
    
    it("addTogether(\"2\", 3) должен вернуть undefined", ()=>{
        assert.deepEqual(undefined, addTogether("2", 3))
    })
    
    it("addTogether(5, undefined) должен вернуть undefined", ()=>{
        assert.deepEqual(undefined, addTogether(5, undefined))
    })
})
