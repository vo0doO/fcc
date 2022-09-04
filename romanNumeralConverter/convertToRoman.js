function convertToRoman(num) {
    romanNumerals = {
        "M": 1000,
        "CM": 900,
        "D": 500,
        "CD": 400,
        "C": 100,
        "XC": 90,
        "L": 50,
        "XL": 40,
        "X": 10,
        "IX": 9,
        "V": 5,
        "IV": 4,
        "I": 1
    }
    let thousands = "", hundreas = "", tens = "", units = "";
    const numbersArr = `${num}`.split("")

    if (numbersArr.length == 4) {
        for (let th = 0; th < parseInt(numbersArr[0]); th++) {
            thousands += "M"
        }
        numbersArr.splice(0, 1)
    }

    if (numbersArr.length == 3) {
        if (numbersArr[0] == 9) {
            hundreas += "CM"
        }
        if (9 > numbersArr[0]) {
            if (5 <= numbersArr[0]) {
                hundreas += "D"
                let countH = numbersArr[0] - 5
                if (countH > 0) {
                    for (let h = 0; h < countH; h++) {
                        hundreas += "C"
                    }
                }
            }
        }
        if (4 == numbersArr[0]) {
            hundreas += "CD"
        }
        if (4 > numbersArr[0]) {
            if (1 <= numbersArr[0]) {
                for (let h = 0; h < numbersArr[0]; h++) {
                    hundreas += "C"
                }
            }
        }
        numbersArr.splice(0, 1)
    }

    if (numbersArr.length == 2) {
        if (numbersArr[0] == 9) {
            tens += "XC"
        }
        if (9 > numbersArr[0]) {
            if (5 <= numbersArr[0]) {
                tens += "L"
                let countH = numbersArr[0] - 5
                if (countH > 0) {
                    for (let h = 0; h < countH; h++) {
                        tens += "X"
                    }
                }
            }
        }
        if (4 == numbersArr[0]) {
            tens += "XL"
        }
        if (4 > numbersArr[0]) {
            if (1 <= numbersArr[0]) {
                for (let h = 0; h < numbersArr[0]; h++) {
                    tens += "X"
                }
            }
        }
        numbersArr.splice(0, 1)
    }

    if (numbersArr.length == 1) {
        if (numbersArr[0] == 9) {
            units += "IX"
        }
        if (9 > numbersArr[0]) {
            if (5 <= numbersArr[0]) {
                units += "V"
                let countH = numbersArr[0] - 5
                if (countH > 0) {
                    for (let h = 0; h < countH; h++) {
                        units += "I"
                    }
                }
            }
        }
        if (4 == numbersArr[0]) {
            units += "IV"
        }
        if (4 > numbersArr[0]) {
            if (1 <= numbersArr[0]) {
                for (let h = 0; h < numbersArr[0]; h++) {
                    units += "I"
                }
            }
        }
    }

    return `${thousands}${hundreas}${tens}${units}`
}


module.exports = {
    convertToRoman
}