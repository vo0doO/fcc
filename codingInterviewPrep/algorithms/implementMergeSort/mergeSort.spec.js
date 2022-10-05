const fs = require("fs");
const assert = require("assert");
const mergeSort = require('./mergeSort')
const sortFunc = (a, b) => a - b;
const filePath = "codingInterviewPrep/algorithms/implementMergeSort/mergeSort.js";


describe('Implements Merge Sort', () => {
    it('mergeSort должна быть функция', () => {
        assert.equal('function', typeof mergeSort)
    })
    it('mergeSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]) должен возвращать массив, который не изменился, за исключением порядка', () => {
        assert.deepEqual([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92].sort(sortFunc), mergeSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]))
    })
    it('mergeSort не должен использовать стандартный метод .sort', () => {
        assert.deepEqual(false, fs.readFileSync(filePath).asciiSlice().includes(".sort("))
    })
})
