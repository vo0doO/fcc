function palindrome(str) {
    const cleanStrArr = str.toLowerCase().match(/[a-z0-9]/g)
    return cleanStrArr.join("") == cleanStrArr.reverse().join("")
}


module.exports = {
    palindrome
}