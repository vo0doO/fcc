function quickSort(arr) {
    if (arr.length <= 1) { // базовый случай: если длина массива <= 0
        return arr // вернуть массив
    }
    else { // рекурсивный случай
        let pivot = arr.pop() // выбрать опорный элемент
        let lowArr = arr.filter(i => i <= pivot) // создать массив с элементами меньше опорного
        let higthArr = arr.filter(i => i > pivot) // создать массив с элементами больше опорного
        return quickSort(lowArr).concat(pivot, quickSort(higthArr)) // рекурсивный вызов
    }
}

console.log(quickSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]))

module.exports = {
    quickSort
}