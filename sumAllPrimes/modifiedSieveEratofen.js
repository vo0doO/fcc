function modifiedSieveEratofen(num) {
    let sieve = [...Array(num+1).keys()], sum = 0;

    for (let i = 2; i <= num; i++) {
        if (sieve[i]) {
            sum += i;
            for (let j = Math.pow(i, 2); j <= num; j = j+i) {
                sieve[j] = false
            }
        }
    }

    return sum;

}


module.exports = {
    modifiedSieveEratofen: modifiedSieveEratofen
}