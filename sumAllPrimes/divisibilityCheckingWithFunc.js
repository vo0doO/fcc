function divisibilityCheckingWithFunc(num) {

    let sum = 0;
    
    function isPrime(i) {
        for (let j = 2; j < i; j++) {
            if (i%j === 0) {
                return false
            }
        }
        return true
    }

    for (let i = 2; i <= num; i++) {
        if (isPrime(i)) {
            sum += i
        }
    }

    return sum
}

module.exports = {
    divisibilityCheckingWithFunc
}