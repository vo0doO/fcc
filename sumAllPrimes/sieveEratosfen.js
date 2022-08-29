function sieveEratosfen(num) {

    let sum = 0;
    const A = Array(num + 1).fill(true)

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (A[i]) {
            for (let j = Math.pow(i, 2); j <= num; j = j + i) {
                A[j] = false
            }
        }
    }

    return A.reduce((prev, curr, idx) => {
        return curr && idx >= 2 ? prev + idx : prev
    }, 0)
}

module.exports = {
    sieveEratosfen
}