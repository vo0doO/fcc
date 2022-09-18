const assert = require('assert');
const { permAlone } = require('./permAlone');

describe('No Repeat Please', () => {

    it('permAlone("aab") должен вернуться number', () => {
        assert.equal('number', typeof permAlone("aab"))
    })
    it('permAlone("aab") должен вернуться 2', () => {
        assert.equal(2, permAlone("aab"))
    })
    it('permAlone("aaa") должен вернуться 0', () => {
        assert.equal(0, permAlone("aaa"))
    })
    it('permAlone("aabb") должен вернуться 8', () => {
        assert.equal(8, permAlone("aabb"))
    })
    it('permAlone("abcdefa") должен вернуться 3600', () => {
        assert.equal(3600, permAlone("abcdefa"))
    })
    it('permAlone("abfdefa") должен вернуться 2640', () => {
        assert.equal(2640, permAlone("abfdefa"))
    })
    it('permAlone("zzzzzzzz") должен вернуться 0', () => {
        assert.equal(0, permAlone("zzzzzzzz"))
    })
    it('permAlone("a") должен вернуться 1', () => {
        assert.equal(1, permAlone("a"))
    })
    it('permAlone("aaab") должен вернуться 0', () => {
        assert.equal(0, permAlone("aaab"))
    })
    it('permAlone("aaabb") должен вернуться 12', () => {
        assert.equal(12, permAlone("aaabb"))
    })
})
