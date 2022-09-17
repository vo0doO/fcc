const assert = require("assert");
const { dropElementsWithFilterAndSlice } = require("./dropElementsWithFilterAndSlice");

describe("Drop it", () => {
    describe("With Filter And Slice", () => {
        it("dropElementsWithFilterAndSlice([1, 2, 3, 4], function(n) {return n >= 3;}) должен вернуть [3, 4]", () => {
            assert.deepEqual([3, 4], dropElementsWithFilterAndSlice([1, 2, 3, 4], function (n) { return n >= 3; }))
        })

        it("dropElementsWithFilterAndSlice([0, 1, 0, 1], function(n) {return n === 1;}) должен вернуть [1, 0, 1]", () => {
            assert.deepEqual([1, 0, 1], dropElementsWithFilterAndSlice([0, 1, 0, 1], function (n) { return n === 1; }))
        })

        it("dropElementsWithFilterAndSlice([1, 2, 3], function(n) {return n > 0;}) должен вернуть [1, 2, 3]", () => {
            assert.deepEqual([1, 2, 3], dropElementsWithFilterAndSlice([1, 2, 3], function (n) { return n > 0; }))
        })

        it("dropElementsWithFilterAndSlice([1, 2, 3, 4], function(n) {return n > 5;}) должен вернуть []", () => {
            assert.deepEqual([], dropElementsWithFilterAndSlice([1, 2, 3, 4], function (n) { return n > 5; }))
        })

        it("dropElementsWithFilterAndSlice([1, 2, 3, 7, 4], function(n) {return n > 3;}) должен вернуть [7, 4]", () => {
            assert.deepEqual([7, 4], dropElementsWithFilterAndSlice([1, 2, 3, 7, 4], function (n) { return n > 3; }))
        })

        it("dropElementsWithFilterAndSlice([1, 2, 3, 9, 2], function(n) {return n > 2;}) должен вернуть [3, 9, 2]", () => {
            assert.deepEqual([3, 9, 2], dropElementsWithFilterAndSlice([1, 2, 3, 9, 2], function (n) { return n > 2; }))
        })
    })
})
