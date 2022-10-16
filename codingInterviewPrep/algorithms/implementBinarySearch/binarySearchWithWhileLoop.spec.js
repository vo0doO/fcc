const assert = require('assert')
const { binarySearchWithWhileLoop } = require('./binarySearchWithWhileLoop')


const testArray = [
    0, 1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
    23, 49, 70
];


describe("Implement Binary Search", () => {
    it('binarySearchWithWhileLoop должно быть функцией.', () => {
        assert.equal('function', typeof binarySearchWithWhileLoop)
    })
    it('binarySearchWithWhileLoop(testArray, 0) должно вернуться[13, 5, 2, 0]', () => {
        assert.deepEqual([13, 5, 2, 0], binarySearchWithWhileLoop(testArray, 0))
    })
    it('binarySearchWithWhileLoop(testArray, 1) должно вернуться[13, 5, 2, 0, 1]', () => {
        assert.deepEqual([13, 5, 2, 0, 1], binarySearchWithWhileLoop(testArray, 1))
    })
    it('binarySearchWithWhileLoop(testArray, 2) должно вернуться[13, 5, 2]', () => {
        assert.deepEqual([13, 5, 2], binarySearchWithWhileLoop(testArray, 2))
    })
    it('binarySearchWithWhileLoop(testArray, 6) должно вернуть строку Value Not Found', () => {
        assert.equal('Value Not Found', binarySearchWithWhileLoop(testArray, 6))
    })
    it('binarySearchWithWhileLoop(testArray, 11) должно вернуться[13, 5, 10, 11]', () => {
        assert.deepEqual([13, 5, 10, 11], binarySearchWithWhileLoop(testArray, 11))
    })
    it('binarySearchWithWhileLoop(testArray, 13) должно вернуться[13]', () => {
        assert.deepEqual([13], binarySearchWithWhileLoop(testArray, 13))
    })
    it('binarySearchWithWhileLoop(testArray, 70) должно вернуться[13, 19, 22, 49, 70]', () => {
        assert.deepEqual([13, 19, 22, 49, 70], binarySearchWithWhileLoop(testArray, 70))
    })

})