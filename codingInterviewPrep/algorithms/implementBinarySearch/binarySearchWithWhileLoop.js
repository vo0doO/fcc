function binarySearchWithWhileLoop(array, number) {
    let result = []
    let lowIndex = 0
    let highIndex = array.length - 1
    while (lowIndex <= highIndex) {

        let middleIndex = Math.floor((lowIndex + (lowIndex - highIndex)) / 2)
        let middleValue = array[middleIndex]

        if (middleValue < number) {
            lowIndex = middleIndex + 1
            result.push(array[middleIndex])
        }

        else if (middleValue > number) {
            highIndex = middleIndex - 1
            result.push(array[middleIndex])
        }
        else {
            result.push(array[middleIndex])
            return result
        }
    }
    return "Value Not Found"
}


module.exports = {
    binarySearchWithWhileLoop
}