const assert = require("assert");
const { palindrome } = require("./palindrome");

describe("Palindrome checker", () => {

    it('palindrome("eye") должен вернуть boolean', () => {
        assert.equal("boolean", typeof palindrome("eye"))
    })
    it('palindrome("eye") должен вернуть true', () => {
        assert.deepEqual(true, palindrome("eye"))
    })
    it('palindrome("_eye") должен вернуть true', () => {
        assert.deepEqual(true, palindrome("_eye"))
    })
    it('palindrome("race car") должен вернуть true', () => {
        assert.deepEqual(true, palindrome("race car"))
    })
    it('palindrome("not a palindrome") должен вернуть false', () => {
        assert.deepEqual(false, palindrome("not a palindrome"))
    })
    it('palindrome("A man, a plan, a canal. Panama") должен вернуть true', () => {
        assert.deepEqual(true, palindrome("A man, a plan, a canal. Panama"))
    })
    it('palindrome("never odd or even") должен вернуться должен вернуть true', () => {
        assert.deepEqual(true, palindrome("never odd or even"))
    })
    it('palindrome("nope") должен вернуть false', () => {
        assert.deepEqual(false, palindrome("nope"))
    })
    it('palindrome("almostomla") должен вернуть false', () => {
        assert.deepEqual(false, palindrome("almostomla"))
    })
    it('palindrome("My age is 0, 0 si ega ym.") должен вернуть true', () => {
        assert.deepEqual(true, palindrome("My age is 0, 0 si ega ym."))
    })
    it('palindrome("1 eye for of 1 eye.") должен вернуть false', () => {
        assert.deepEqual(false, palindrome("1 eye for of 1 eye."))
    })
    it('palindrome("0_0 (: /-\ :) 0-0") должен вернуть true', () => {
        assert.deepEqual(true, palindrome("0_0 (: /-\ :) 0-0"))
    })
    it('palindrome("five|\_/|four") должен вернуть false', () => {
        assert.deepEqual(false, palindrome("five|\_/|four"))
    })

})
