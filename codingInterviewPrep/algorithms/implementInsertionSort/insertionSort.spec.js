const fs = require("fs")
const assert = require("assert")
const { insertionSort } = require('./insertionSort')


const sortFunc = (a, b) => a - b
const filePath = "codingInterviewPrep/algorithms/implementInsertionSort/insertionSort.js"

describe('Implements Selection Sort', () => {
    it('insertionSort должна быть функция', () => {
        assert.equal('function', typeof insertionSort)
    })
    it('insertionSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]) должен возвращать массив, который не изменился, за исключением порядка', () => {
        assert.deepEqual([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92].sort(sortFunc), insertionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]))
    })
    it('insertionSort не должен использовать стандартный метод .sort', () => {
        assert.deepEqual(false, fs.readFileSync(filePath).asciiSlice().includes(".sort("))
    })
})
