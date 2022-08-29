function whileLoop(num) {
    let sum = 0; f1 = 1; f2 = 1;
    while (f2 <= num) {
        if (f2 % 2 !== 0) {
            sum += f2
        }
        f1 += f2
        f2 = f1 - f2
    }
    return sum
}

module.exports = {
    whileLoop
}