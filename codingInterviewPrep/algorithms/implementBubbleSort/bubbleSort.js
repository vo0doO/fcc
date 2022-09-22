function bubbleSort(array) {
    let n = 0 // объявляем счетчик n
    while (array.length > n) { // пока n меньше длины мыссива
        for (let i = 0; i < array.length - 1 - n; i++) { // для i = 0, i + 1, i + 2... не более длины масива - 1 - n
            if (array[i] > array[i + 1]) { // если i-ое значение, больше значения по индексу i + 1
                let swap = array[i] // записываем i-е значение в переменную
                array[i] = array[i + 1] // меняем i-ое значение на значения по индексу i + 1
                array[i + 1] = swap // значения по индексу i + 1 на i-ое
            }
        }
        n++ // увеличиваем значение счётчика n на 1
    }
    return array
}

// bubbleSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92])
module.exports = {
    bubbleSort
}