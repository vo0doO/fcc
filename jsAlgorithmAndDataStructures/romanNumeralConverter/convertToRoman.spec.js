const assert = require("assert");
const { convertToRoman } = require("./convertToRoman");

describe('Roman numeral converter', () => {
    it('convertToRoman(10) should return the string X', () => {
        assert.equal("X", convertToRoman(10))
    })
    it('convertToRoman(20) should return the string XX', () => {
        assert.equal("XX", convertToRoman(20))
    })
    it('convertToRoman(30) should return the string XXX', () => {
        assert.equal("XXX", convertToRoman(30))
    })
    it('convertToRoman(40) should return the string XL', () => {
        assert.equal("XL", convertToRoman(40))
    })
    it('convertToRoman(50) should return the string L', () => {
        assert.equal("L", convertToRoman(50))
    })
    it('convertToRoman(60) should return the string LX', () => {
        assert.equal("LX", convertToRoman(60))
    })
    it('convertToRoman(80) should return the string LXXX', () => {
        assert.equal("LXXX", convertToRoman(80))
    })
    it('convertToRoman(90) should return the string XC', () => {
        assert.equal("XC", convertToRoman(90))
    })



    it('convertToRoman(3800) should return the string MMMDCC', () => {
        assert.equal("MMMDCCC", convertToRoman(3800))
    })
    it('convertToRoman(3900) should return the string MMMCM', () => {
        assert.equal("MMMCM", convertToRoman(3900))
    })
    it('convertToRoman(3400) should return the string MMMCD', () => {
        assert.equal("MMMCD", convertToRoman(3400))
    })
    it('convertToRoman(3200) should return the string MMMCC', () => {
        assert.equal("MMMCC", convertToRoman(3200))
    })
    it('convertToRoman(3100) should return the string MMMC', () => {
        assert.equal("MMMC", convertToRoman(3100))
    })
    it('convertToRoman(3500) should return the string MMMD', () => {
        assert.equal("MMMD", convertToRoman(3500))
    })
    it('convertToRoman(2) should return the string II', () => {
        assert.equal("II", convertToRoman(2))
    })
    it('convertToRoman(3) should return the string III', () => {
        assert.equal("III", convertToRoman(3))
    })
    it('convertToRoman(4) should return the string IV', () => {
        assert.equal("IV", convertToRoman(4))
    })
    it('convertToRoman(5) should return the string V', () => {
        assert.equal("V", convertToRoman(5))
    })
    it('convertToRoman(9) should return the string IX', () => {
        assert.equal("IX", convertToRoman(9))
    })
    it('convertToRoman(12) should return the string XII', () => {
        assert.equal("XII", convertToRoman(12))
    })
    it('convertToRoman(16) should return the string XVI', () => {
        assert.equal("XVI", convertToRoman(16))
    })
    it('convertToRoman(29) should return the string XXIX', () => {
        assert.equal("XXIX", convertToRoman(29))
    })
    it('convertToRoman(44) should return the string XLIV', () => {
        assert.equal("XLIV", convertToRoman(44))
    })
    it('convertToRoman(45) should return the string XLV', () => {
        assert.equal("XLV", convertToRoman(45))
    })
    it('convertToRoman(68) should return the string LXVIII', () => {
        assert.equal("LXVIII", convertToRoman(68))
    })
    it('convertToRoman(83) should return the string LXXXIII', () => {
        assert.equal("LXXXIII", convertToRoman(83))
    })
    it('convertToRoman(97) should return the string XCVII', () => {
        assert.equal("XCVII", convertToRoman(97))
    })
    it('convertToRoman(99) should return the string XCIX', () => {
        assert.equal("XCIX", convertToRoman(99))
    })
    it('convertToRoman(400) should return the string CD', () => {
        assert.equal("CD", convertToRoman(400))
    })
    it('convertToRoman(500) should return the string D', () => {
        assert.equal("D", convertToRoman(500))
    })
    it('convertToRoman(300) should return the string CCC', () => {
        assert.equal("CCC", convertToRoman(300))
    })
    it('convertToRoman(200) should return the string CC', () => {
        assert.equal("CC", convertToRoman(200))
    })
    it('convertToRoman(100) should return the string C', () => {
        assert.equal("C", convertToRoman(100))
    })
    it('convertToRoman(600) should return the string DC', () => {
        assert.equal("DC", convertToRoman(600))
    })
    it('convertToRoman(800) should return the string DCCC', () => {
        assert.equal("DCCC", convertToRoman(800))
    })
    it('convertToRoman(900) should return the string CM', () => {
        assert.equal("CM", convertToRoman(900))
    })
    it('convertToRoman(501) should return the string DI', () => {
        assert.equal("DI", convertToRoman(501))
    })
    it('convertToRoman(649) should return the string DCXLIX', () => {
        assert.equal("DCXLIX", convertToRoman(649))
    })
    it('convertToRoman(798) should return the string DCCXCVIII', () => {
        assert.equal("DCCXCVIII", convertToRoman(798))
    })
    it('convertToRoman(891) should return the string DCCCXCI', () => {
        assert.equal("DCCCXCI", convertToRoman(891))
    })
    it('convertToRoman(1000) should return the string M', () => {
        assert.equal("M", convertToRoman(1000))
    })
    it('convertToRoman(1004) should return the string MIV', () => {
        assert.equal("MIV", convertToRoman(1004))
    })
    it('convertToRoman(1006) should return the string MVI', () => {
        assert.equal("MVI", convertToRoman(1006))
    })
    it('convertToRoman(1023) should return the string MXXIII', () => {
        assert.equal("MXXIII", convertToRoman(1023))
    })
    it('convertToRoman(2014) should return the string MMXIV', () => {
        assert.equal("MMXIV", convertToRoman(2014))
    })
    it('convertToRoman(3999) should return the string MMMCMXCIX', () => {
        assert.equal("MMMCMXCIX", convertToRoman(3999))
    })

})
