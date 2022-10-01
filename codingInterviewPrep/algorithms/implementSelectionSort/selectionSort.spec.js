const assert = require("assert")
const { selectionSort } = require('./selectionSort')
const sortFunc = (a, b) => a - b

describe('Implements Selection Sort', () => {
    it('selectionSort должна быть функция', () => {
        assert.equal('function', typeof selectionSort)
    })
    it('selectionSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]) должен возвращать массив, который не изменился, за исключением порядка', () => {
        assert.deepEqual([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92].sort(sortFunc), selectionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]))
    })
})
