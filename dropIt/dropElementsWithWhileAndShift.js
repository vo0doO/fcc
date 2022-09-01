function dropElementsWithWhileAndShift(arr, func) {
    while (!func(arr[0])){
        arr.shift()
    }
    return arr
}

module.exports = {
    dropElementsWithWhileAndShift
}