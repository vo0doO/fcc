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


module.exports = {
    quickSort
}