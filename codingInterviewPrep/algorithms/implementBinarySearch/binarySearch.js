function binarySearch(array, number) {
    let result = [] // инициализация результирующего массива
    // первый базовый случай
    if (array.length == 0) { // если длина массива 0
        return result // возвращаем результат
    }
    // второй базовый случай
    let middleIndex = Math.floor(array.length / 2) // находим индекс центрального элемента
    let middleValue = array[middleIndex] // записываем центральное значение в переменную
    if (middleValue == number) { // если центральное значение равно искомому значению
        result.push(number)   // добавляем искомое значени в результат
        return result   // возвращаем результат
    }
    // рекурсивный случай
    result.push(middleValue) // добавляем центральное значение в результат
    return (middleValue > number) ? binarySearch(array.slice(0, middleIndex), number) : binarySearch(array.slice(middleIndex), number)  // если центральное значение больше искомого то повторяем все с левой частью массива если меньше то с правой
}

module.exports = {
    binarySearch
}