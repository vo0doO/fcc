function smallestCommonsWithPrimeFactors(arr) {
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    let factors = {};
    var result = 1
    for (let i = min; i <= max; i++) {
        let factor = getPrimeFactors(i)
        for (let [k, v] of Object.entries(factor)) {
            if (!factors[k]) {
                factors[k] = v;
            }
            if (factors[k] && factors[k] < v) {
                factors[k] = v
            }
        }
    }
    for (let [k, v] of Object.entries(factors)) {
        result *= Math.pow(k ,v)
    }
    return result 
}


function getPrimeFactors(num) {
    let factors = {};
    for (let prime = 2; prime <= num; prime++) {
        while (num % prime === 0) {
            factors[prime] = (factors[prime]) ? factors[prime] + 1 : 1;
            num /= prime
        }
    }
    return factors
}



module.exports = {
    smallestCommonsWithPrimeFactors
}