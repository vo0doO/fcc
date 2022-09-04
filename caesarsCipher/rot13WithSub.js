function rot13WithSub(str) {
    const sub = 'NOPQRSTUVWXYZABCDEFGHIJKLM[\\]^_`nopqrstuvwxyzabcdefghijklm'
    let res = []
    for (let i = 0; i < str.split("").length; i++) {
        if (65 > str.charCodeAt(i) || str.charCodeAt(i) > 122) {
            res.push(str[i])
        }
        res.push(sub[str.charCodeAt(i) - 65])
    }
    return res.join("")
}


module.exports = {
    rot13WithSub
}