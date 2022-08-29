function arrayWithFibonacciSequence(num) {
    const fibs = [1, 1];
    let nextNumber;

    while ((nextNumber = fibs[0] + fibs[1]) <= num) {
        fibs.unshift(nextNumber)
    }

    return fibs.filter(i => i % 2).reduce((prev, curr) => curr + prev, 0)
}

module.exports = {
    arrayWithFibonacciSequence
}