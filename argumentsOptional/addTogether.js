function addTogether() {
    const [a, b] = [...arguments]
    if (!Number.isInteger(a)) {
        return undefined
    }
    if (arguments.length == 1) {
        return (b) => addTogether(a, b)
    }
    if (!Number.isInteger(b)) {
        return undefined
    }
    return a + b
}


module.exports = {
    addTogether
}