const assert = require("assert");
const { dropElementsWithWhileAndShift } = require("./dropElementsWithWhileAndShift");
 
describe("Drop it", () => {
    describe("With While And Shift", () => {
        it("dropElementsWithWhileAndShift([1, 2, 3, 4], function(n) {return n >= 3;}) должен вернуть [3, 4]", () => {
            assert.deepEqual([3, 4], dropElementsWithWhileAndShift([1, 2, 3, 4], function (n) { return n >= 3; }))
        })

        it("dropElementsWithWhileAndShift([0, 1, 0, 1], function(n) {return n === 1;}) должен вернуть [1, 0, 1]", () => {
            assert.deepEqual([1, 0, 1], dropElementsWithWhileAndShift([0, 1, 0, 1], function (n) { return n === 1; }))
        })

        it("dropElementsWithWhileAndShift([1, 2, 3], function(n) {return n > 0;}) должен вернуть [1, 2, 3]", () => {
            assert.deepEqual([1, 2, 3], dropElementsWithWhileAndShift([1, 2, 3], function (n) { return n > 0; }))
        })

        it("dropElementsWithWhileAndShift([1, 2, 3, 4], function(n) {return n > 5;}) должен вернуть []", () => {
            assert.deepEqual([], dropElementsWithWhileAndShift([1, 2, 3, 4], function (n) { return n > 5; }))
        })

        it("dropElementsWithWhileAndShift([1, 2, 3, 7, 4], function(n) {return n > 3;}) должен вернуть [7, 4]", () => {
            assert.deepEqual([7, 4], dropElementsWithWhileAndShift([1, 2, 3, 7, 4], function (n) { return n > 3; }))
        })

        it("dropElementsWithWhileAndShift([1, 2, 3, 9, 2], function(n) {return n > 2;}) должен вернуть [3, 9, 2]", () => {
            assert.deepEqual([3, 9, 2], dropElementsWithWhileAndShift([1, 2, 3, 9, 2], function (n) { return n > 2; }))
        })
    })
})