function smallestCommonsWithNamedForLoop(arr) {
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    let upperBound = 1;
    for (let i = min; i<=max; i++) {
        upperBound *= i
    }
    nextNumb:
        for (let i = max; i < upperBound; i+=max) {
          for (let j = min; j <= max; j++) {
              if (i%j !== 0) {
                  continue nextNumb
              }
          }
          return i
        }
}


module.exports = {
    smallestCommonsWithNamedForLoop
}