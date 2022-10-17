const assert = require('assert')
const { binarySearch } = require('./binarySearch')


const testArray = [
    0, 1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
    23, 49, 70
];


describe("Implement Binary Search", () => {
    it('binarySearch должно быть функцией.', () => {
        assert.equal('function', typeof binarySearch)
    })
    it('binarySearch(testArray, 0) должно вернуться[13, 5, 2, 0]', () => {
        assert.deepEqual([13, 5, 2, 0], binarySearch(testArray, 0, [], 0, testArray.length - 1))
    })
    it('binarySearch(testArray, 1) должно вернуться[13, 5, 2, 0, 1]', () => {
        assert.deepEqual([13, 5, 2, 0, 1], binarySearch(testArray, 1, [], 0, testArray.length - 1))
    })
    it('binarySearch(testArray, 2) должно вернуться[13, 5, 2]', () => {
        assert.deepEqual([13, 5, 2], binarySearch(testArray, 2, [], 0, testArray.length - 1))
    })
    it('binarySearch(testArray, 6) должно вернуть строку Value Not Found', () => {
        assert.equal('Value Not Found', binarySearch(testArray, 6, [], 0, testArray.length - 1))
    })
    it('binarySearch(testArray, 11) должно вернуться[13, 5, 10, 11]', () => {
        assert.deepEqual([13, 5, 10, 11], binarySearch(testArray, 11, [], 0, testArray.length - 1))
    })
    it('binarySearch(testArray, 13) должно вернуться[13]', () => {
        assert.deepEqual([13], binarySearch(testArray, 13, [], 0, testArray.length - 1))
    })
    it('binarySearch(testArray, 70) должно вернуться[13, 19, 22, 49, 70]', () => {
        assert.deepEqual([13, 19, 22, 49, 70], binarySearch(testArray, 70, [], 0, testArray.length - 1))
    })

})