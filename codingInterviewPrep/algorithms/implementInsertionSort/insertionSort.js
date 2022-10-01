function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        for (j = i; j > 0 && array[j - 1] > array[j]; j--) {
            let swap = array[j - 1]
            array[j - 1] = array[j]
            array[j] = swap
        }
    }
    return array
}


module.exports = {
    insertionSort
}