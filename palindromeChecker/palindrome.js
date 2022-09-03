function palindrome(str) {
    const cleanStr = str.replace(/[^\w]|_/g, "").toLowerCase()
    const palindromeStr = cleanStr.split("").reverse().join("")
    return cleanStr == palindromeStr
}


module.exports = {
    palindrome
}