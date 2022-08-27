function divisibilityCheckingWithNamedForLoop(num) {
    let sum = 0;
    nextNumber:
        for(let i = 2; i <= num; i++) {
            for(let j = 2; j < i; j++) {
                if (i%j === 0) {
                    continue nextNumber
                }
            }
            sum += i
        }
    return sum
}

module.exports = {
    divisibilityCheckingWithNamedForLoop: divisibilityCheckingWithNamedForLoop
}