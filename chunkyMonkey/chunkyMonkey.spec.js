const assert = require("assert");
const prog = require("./chunkArrayInGroups");

describe("Chunky Monkey", () =>
    {    
        it("Должен вернуть [[\"a\", \"b\"], [\"c\", \"d\"]]", ()=>{
            assert.deepEqual(prog.chunkArrayInGroups(["a", "b", "c", "d"], 2), [["a", "b"], ["c", "d"]], "Вернулось: " + prog.chunkArrayInGroups(["a", "b", "c", "d"], 2))
        })

        it("Должен вернуть [[0, 1, 2], [3, 4, 5]]", ()=>{
            assert.deepEqual(prog.chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3), [[0, 1, 2], [3, 4, 5]], "Тест пройден")
        })

        it("Должен вернуть [[0, 1], [2, 3], [4, 5]]", ()=>{
            assert.deepEqual(prog.chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2), [[0, 1], [2, 3], [4, 5]], "Тест пройден")
        })

        it("Должен вернуть [[0, 1, 2, 3], [4, 5]]", ()=>{
            assert.deepEqual(prog.chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4), [[0, 1, 2, 3], [4, 5]], "Тест пройден")
        })

        it("Должен вернуть [[0, 1, 2], [3, 4, 5], [6]]", ()=>{
            assert.deepEqual(prog.chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3), [[0, 1, 2], [3, 4, 5], [6]], "Тест пройден")
        })

        it("Должен вернуть [[0, 1, 2, 3], [4, 5, 6, 7], [8]]", ()=>{
            assert.deepEqual(prog.chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4), [[0, 1, 2, 3], [4, 5, 6, 7], [8]], "Тест пройден")
        })

        it("Должен вернуть [[0, 1], [2, 3], [4, 5], [6, 7], [8]]", ()=>{
            assert.deepEqual(prog.chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2), [[0, 1], [2, 3], [4, 5], [6, 7], [8]], "Тест пройден")
        })
    
    }
)
