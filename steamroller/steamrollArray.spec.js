const assert = require("assert");
const { steamrollArray } = require("./steamrollArray");


describe("Steamroller", ()=>{

    it("steamrollArray([[[\"a\"]], [[\"b\"]]]) должен вернуть [\"a\", \"b\"]", ()=>{
        assert.deepEqual(["a", "b"], steamrollArray([[["a"]], [["b"]]]))
    })
    
    it("steamrollArray([1, [2], [3, [[4]]]]) должен вернуть [1, 2, 3, 4]", ()=>{
        assert.deepEqual([1, 2, 3, 4], steamrollArray([1, [2], [3, [[4]]]]))
    })
    
    it("steamrollArray([1, [], [3, [[4]]]]) должен вернуть [1, 3, 4]", ()=>{
        assert.deepEqual([1, 3, 4], steamrollArray([1, [], [3, [[4]]]]))
    })
    
    it("steamrollArray([1, {}, [3, [[4]]]]) должен вернуть [1, {}, 3, 4]", ()=>{
        assert.deepEqual([1, {}, 3, 4], steamrollArray([1, {}, [3, [[4]]]]))
    })

})
