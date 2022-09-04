function convertToRoman(num) {

    let roman = ""
    arabicNumerals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    romanNumerals = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']

    for (let i = 0; i < arabicNumerals.length; i++) {
        while (arabicNumerals[i] <= num) {
            roman += romanNumerals[i]
            num -= arabicNumerals[i]
        }
    }

    return roman
}


module.exports = {
    convertToRoman
}