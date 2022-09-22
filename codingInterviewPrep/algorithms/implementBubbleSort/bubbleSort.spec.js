const assert = require('assert');
const { bubbleSort } = require("./bubbleSort");
const sortFunc = (a, b) => a - b

describe('Inmplement Bubble Sort', () => {
    it('bubbleSort должно быть function.', () => {
        assert.equal('function', typeof bubbleSort)
    })
    it('bubbleSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]) должен возвращать массив, который не изменился, за исключением порядка', () => {
        assert.deepEqual(
            [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92].sort(sortFunc),
            bubbleSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]))
    })
})