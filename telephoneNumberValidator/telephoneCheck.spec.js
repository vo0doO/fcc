const assert = require("assert");
const { telephoneCheck } = require("./telephoneCheck");


describe("Telephone Number Validator", () => {

    it('telephoneCheck("555-555-5555") should return a boolean.', () => {
        assert.deepEqual("boolean", typeof telephoneCheck("555-555-5555"))
    })

    it('telephoneCheck("1 555-555-5555") should return true.', () => {
        assert.deepEqual(true, telephoneCheck("1 555-555-5555"))
    })

    it('telephoneCheck("1 (555) 555-5555") should return true.', () => {
        assert.deepEqual(true, telephoneCheck("1 (555) 555-5555"))
    })

    it('telephoneCheck("5555555555") should return true.', () => {
        assert.deepEqual(true, telephoneCheck("5555555555"))
    })

    it('telephoneCheck("555-555-5555") should return true.', () => {
        assert.deepEqual(true, telephoneCheck("555-555-5555"))
    })

    it('telephoneCheck("(555)555-5555") should return true.', () => {
        assert.deepEqual(true, telephoneCheck("(555)555-5555"))
    })

    it('telephoneCheck("1(555)555-5555") should return true.', () => {
        assert.deepEqual(true, telephoneCheck("1(555)555-5555"))
    })

    it('telephoneCheck("555-5555") should return false.', () => {
        assert.deepEqual(false, telephoneCheck("555-5555"))
    })

    it('telephoneCheck("5555555") should return false.', () => {
        assert.deepEqual(false, telephoneCheck("5555555"))
    })

    it('telephoneCheck("1 555)555-5555") should return false.', () => {
        assert.deepEqual(false, telephoneCheck("1 555)555-5555"))
    })

    it('telephoneCheck("1 555 555 5555") should return true.', () => {
        assert.deepEqual(true, telephoneCheck("1 555 555 5555"))
    })

    it('telephoneCheck("1 456 789 4444") should return true.', () => {
        assert.deepEqual(true, telephoneCheck("1 456 789 4444"))
    })

    it('telephoneCheck("123**&!!asdf#") should return false.', () => {
        assert.deepEqual(false, telephoneCheck("123**&!!asdf#"))
    })

    it('telephoneCheck("55555555") should return false.', () => {
        assert.deepEqual(false, telephoneCheck("55555555"))
    })

    it('telephoneCheck("(6054756961)") should return false.', () => {
        assert.deepEqual(false, telephoneCheck("(6054756961)"))
    })

    it('telephoneCheck("2 (757) 622-7382") should return false.', () => {
        assert.deepEqual(false, telephoneCheck("2 (757) 622-7382"))
    })

    it('telephoneCheck("0 (757) 622-7382") should return false.', () => {
        assert.deepEqual(false, telephoneCheck("0 (757) 622-7382"))
    })

    it('telephoneCheck("-1 (757) 622-7382") should return false.', () => {
        assert.deepEqual(false, telephoneCheck("-1 (757) 622-7382"))
    })

    it('telephoneCheck("2 757 622-7382") should return false.', () => {
        assert.deepEqual(false, telephoneCheck("2 757 622-7382"))
    })

    it('telephoneCheck("10 (757) 622-7382") should return false.', () => {
        assert.deepEqual(false, telephoneCheck("10 (757) 622-7382"))
    })

    it('telephoneCheck("27576227382") should return false.', () => {
        assert.deepEqual(false, telephoneCheck("27576227382"))
    })

    it('telephoneCheck("(275)76227382") should return false.', () => {
        assert.deepEqual(false, telephoneCheck("(275)76227382"))
    })

    it('telephoneCheck("2(757)6227382") should return false.', () => {
        assert.deepEqual(false, telephoneCheck("2(757)6227382"))
    })

    it('telephoneCheck("2(757)622-7382") should return false.', () => {
        assert.deepEqual(false, telephoneCheck("2(757)622-7382"))
    })

    it('telephoneCheck("555)-555-5555") should return false.', () => {
        assert.deepEqual(false, telephoneCheck("555)-555-5555"))
    })

    it('telephoneCheck("(555-555-5555") should return false.', () => {
        assert.deepEqual(false, telephoneCheck("(555-555-5555"))
    })

    it('telephoneCheck("(555)5(55?)-5555") should return false.', () => {
        assert.deepEqual(false, telephoneCheck("(555)5(55?)-5555"))
    })

    it('telephoneCheck("55 55-55-555-5") should return false.', () => {
        assert.deepEqual(false, telephoneCheck("55 55-55-555-5"))
    })

    it('telephoneCheck("11 555-555-5555") should return false.', () => {
        assert.deepEqual(false, telephoneCheck("11 555-555-5555"))
    })
})
