const fs = require("fs")
const assert = require('assert');
const { bubbleSort } = require("./bubbleSort");


const sortFunc = (a, b) => a - b
const filePath = "codingInterviewPrep/algorithms/implementBubbleSort/bubbleSort.js"

describe('Inmplement Bubble Sort', () => {
    it('bubbleSort должно быть function.', () => {
        assert.equal('function', typeof bubbleSort)
    })
    it('bubbleSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]) должен возвращать массив, который не изменился, за исключением порядка', () => {
        assert.deepEqual(
            [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92].sort(sortFunc),
            bubbleSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]))
    })
    it('bubbleSort не должен использовать стандартный метод .sort', () => {
        assert.deepEqual(false, fs.readFileSync(filePath).asciiSlice().includes(".sort("))
    })
})