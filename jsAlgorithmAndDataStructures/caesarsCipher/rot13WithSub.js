function rot13WithSub(str) {
    const sub = 'NOPQRSTUVWXYZABCDEFGHIJKLM[\\]^_`nopqrstuvwxyzabcdefghijklm'
    return String.fromCharCode(...str.split("").map(
        (i) => {
            if (65 > i.charCodeAt(0) || i.charCodeAt(0) > 122) {
                return i.charCodeAt(0)
            }
            return sub[i.charCodeAt(0) - 65].charCodeAt(0)
        }
    ))
}


module.exports = {
    rot13WithSub
}