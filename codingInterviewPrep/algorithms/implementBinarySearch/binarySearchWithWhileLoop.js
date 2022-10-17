function binarySearchWithWhileLoop(arr, key) {
    let low = 0
    let high = arr.length - 1
    let result = []
    while (low <= high) {
        let mid = Math.floor((low + (high - low) / 2))
        let midVal = arr[mid]
        if (midVal < key) {
            result.push(midVal)
            low = mid + 1
        }
        else if (midVal > key) {
            result.push(midVal)
            high = mid - 1
        }
        else {
            result.push(midVal)
            return result
        }
    }
    return "Value Not Found"
}


module.exports = {
    binarySearchWithWhileLoop
}