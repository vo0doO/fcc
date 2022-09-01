function smallestCommonsWithGCDLCM(arr) {

    const max = Math.max(...arr);
    const min = Math.min(...arr);
    const fullArr = [...Array((max - min) + 1).fill(0)].map((_, i) => min + i)

    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b)

    const lcm = (a, b) => a * (b / gcd(a, b))

    return fullArr.reduce((prev, curr) => {
        return lcm(prev, curr)
    })
}

module.exports = {
    smallestCommonsWithGCDLCM
}