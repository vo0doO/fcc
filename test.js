const assert = require("assert")

it(" Должен вернуть [[\"a\", \"b\"], [\"c\", \"d\"]]", ()=> {
    assert.equal(chunkArrayInGroups(["a", "b", "c", "d"], 2), [["a", "b"], ["c", "d"]], "Тест пройден")
})