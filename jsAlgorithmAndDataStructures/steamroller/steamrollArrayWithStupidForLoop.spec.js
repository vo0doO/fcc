const assert = require("assert");
const { steamrollArrayWithStupidForLoop } = require("./steamrollArrayWithStupidForLoop");


describe("Steamroller", ()=>{

    describe("With Stupid For Loop", ()=>{

        it("steamrollArrayWithStupidForLoop([[[\"a\"]], [[\"b\"]]]) должен вернуть [\"a\", \"b\"]", ()=>{
            assert.deepEqual(["a", "b"], steamrollArrayWithStupidForLoop([[["a"]], [["b"]]]))
        })
        
        it("steamrollArrayWithStupidForLoop([1, [2], [3, [[4]]]]) должен вернуть [1, 2, 3, 4]", ()=>{
            assert.deepEqual([1, 2, 3, 4], steamrollArrayWithStupidForLoop([1, [2], [3, [[4]]]]))
        })
        
        it("steamrollArrayWithStupidForLoop([1, [], [3, [[4]]]]) должен вернуть [1, 3, 4]", ()=>{
            assert.deepEqual([1, 3, 4], steamrollArrayWithStupidForLoop([1, [], [3, [[4]]]]))
        })
        
        it("steamrollArrayWithStupidForLoop([1, {}, [3, [[4]]]]) должен вернуть [1, {}, 3, 4]", ()=>{
            assert.deepEqual([1, {}, 3, 4], steamrollArrayWithStupidForLoop([1, {}, [3, [[4]]]]))
        })
        
    })
})
