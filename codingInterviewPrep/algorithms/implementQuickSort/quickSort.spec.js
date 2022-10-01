const assert = require("assert")
const { quickSort } = require('./quickSort')
const sortFunc = (a, b) => a - b

describe('Implements Selection Sort', () => {
    it('quickSort должна быть функция', () => {
        assert.equal('function', typeof quickSort)
    })
    it('quickSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]) должен возвращать массив, который не изменился, за исключением порядка', () => {
        assert.deepEqual([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92].sort(sortFunc), quickSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]))
    })
})
