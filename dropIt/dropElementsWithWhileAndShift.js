function dropElementsWithWhileAndShift(arr, func) {
    while(!func(arr[0])) {
        if (arr.length > 0){
            arr.shift()
        }
        else {
            return []
        }
    }
    return arr
}

module.exports = {
    dropElementsWithWhileAndShift
}