function binarySearch(array, number, result = []) {
    // первый базовый случай
    if (array.length <= 1) { // если длина массива 0
        console.log(array[0], number)
        if (array[0] == number) {
            result.push(array[0])
            return result
        }
        return "Value Not Found" // возвращаем результат
    }
    let middleIndex = Math.floor(array.length / 2) // находим индекс центрального элемента
    let middleValue = array[middleIndex - 1] // записываем центральное значение в переменную
    // второй базовый случай
    if (middleValue == number) { // если центральное значение равно искомому значению
        result.push(number)   // добавляем искомое значение в результат
        return result   // возвращаем результат
    }
    // рекурсивный случай
    result.push(middleValue) // добавляем центральное значение в результат
    let left = array.slice(0, middleIndex)
    let right = array.slice(middleIndex)
    console.log("Left: ", left)
    console.log("Right: ", right)
    return (middleValue > number) ? binarySearch(left, number, result) : binarySearch(right, number, result)  // если центральное значение больше искомого то повторяем все с левой частью массива если меньше то с правой
}

module.exports = {
    binarySearch
}