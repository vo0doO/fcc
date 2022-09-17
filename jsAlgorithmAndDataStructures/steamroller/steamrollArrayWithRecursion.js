function steamrollArrayWithRecursion(arr, result = []) {
    for (let i = 0; i < arr.length; i++) {
        if(!Array.isArray(arr[i])) {
            result.push(arr[i])
        } else {
            steamrollArrayWithRecursion(arr[i], result)
        }
    }
    return result
}


module.exports = {
    steamrollArrayWithRecursion
}