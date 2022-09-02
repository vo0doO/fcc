function binaryAgent(str) {
    return str.split(" ").map(i => String.fromCharCode(parseInt(i, 2))).join("")
}


module.exports = {
    binaryAgent
}