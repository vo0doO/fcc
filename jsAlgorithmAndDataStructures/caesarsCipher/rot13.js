function rot13(str) {
    return String.fromCharCode(...str.split("").map(
        (i) => {
            if (65 > i.charCodeAt(0) || i.charCodeAt(0) > 122) {
                return i.charCodeAt()
            }
            else if ((i.charCodeAt(0) - 13) < 65) {
                return i.charCodeAt(0) + 13
            }
            else {
                return i.charCodeAt(0) - 13
            }
        })
    )
}


module.exports = {
    rot13
}