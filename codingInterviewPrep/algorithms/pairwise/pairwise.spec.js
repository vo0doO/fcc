const assert = require('assert');
const { pairwise } = require('./pairwise');


describe('Pairwise', () => {
    it('pairwise([1, 4, 2, 3, 0, 5], 7) должен вернуть 11', () => {
        assert.equal(11, pairwise([1, 4, 2, 3, 0, 5], 7))
    })
    it('pairwise([1, 3, 2, 4], 4) должен вернуть 1', () => {
        assert.equal(1, pairwise([1, 3, 2, 4], 4))
    })
    it('pairwise([1, 1, 1], 2) должен вернуть 1', () => {
        assert.equal(1, pairwise([1, 1, 1], 2))
    })
    it('pairwise([0, 0, 0, 0, 1, 1], 1) должен вернуть 10', () => {
        assert.equal(10, pairwise([0, 0, 0, 0, 1, 1], 1))
    })
    it('pairwise([], 100) должен вернуть 0', () => {
        assert.equal(0, pairwise([], 100))
    })
})





