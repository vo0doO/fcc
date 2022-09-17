const assert = require("assert");
const { steamrollArrayWithRecursion } = require("./steamrollArrayWithRecursion");


describe("Steamroller", ()=>{

    describe("With Recursion", ()=>{

        it("steamrollArrayWithRecursion([[[\"a\"]], [[\"b\"]]]) должен вернуть [\"a\", \"b\"]", ()=>{
            assert.deepEqual(["a", "b"], steamrollArrayWithRecursion([[["a"]], [["b"]]]))
        })
        
        it("steamrollArrayWithRecursion([1, [2], [3, [[4]]]]) должен вернуть [1, 2, 3, 4]", ()=>{
            assert.deepEqual([1, 2, 3, 4], steamrollArrayWithRecursion([1, [2], [3, [[4]]]]))
        })
        
        it("steamrollArrayWithRecursion([1, [], [3, [[4]]]]) должен вернуть [1, 3, 4]", ()=>{
            assert.deepEqual([1, 3, 4], steamrollArrayWithRecursion([1, [], [3, [[4]]]]))
        })
        
        it("steamrollArrayWithRecursion([1, {}, [3, [[4]]]]) должен вернуть [1, {}, 3, 4]", ()=>{
            assert.deepEqual([1, {}, 3, 4], steamrollArrayWithRecursion([1, {}, [3, [[4]]]]))
        })
        
    })
})
