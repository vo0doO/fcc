function binaryAgent(str) {
    return String.fromCharCode(
        ...str.split(" ").map(i => parseInt(i, 2))
    )
}


module.exports = {
    binaryAgent
}