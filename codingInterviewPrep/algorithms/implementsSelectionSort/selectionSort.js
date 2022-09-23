function selectionSort(array) {
    for (let i in array) {  // для i=0, i+1, i+2... не более длины array
        let min = Math.min(...array.slice(i))   // находим минимальное значение в несортированной части array
        let minI = array.indexOf(min, i)    // находим в несортированной части array индекс минимального значения
        let swap = array[i] // записываем i-e значение в переменную
        array[i] = min  // i-e значение заменяем минимальным
        array[minI] = swap  // минимальное значение заменяем i-ым
    }
    return array
}

module.exports = {
    selectionSort
}