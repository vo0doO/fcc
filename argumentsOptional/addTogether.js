function addTogether() {
    const [a, b] = [...arguments]
    if (!Number.isInteger(a)) {
        return undefined
    }
    if (arguments.length > 1) {
        return Number.isInteger(a) && Number.isInteger(b) ? a + b : undefined
    }
    return function() {
            return Number.isInteger(a) && Number.isInteger(arguments[0]) ? a + arguments[0] : undefined
    }
}


module.exports = {
    addTogether
}