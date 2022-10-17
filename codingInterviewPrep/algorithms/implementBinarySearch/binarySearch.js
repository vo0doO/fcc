function binarySearch(array, number, result, low, high) {
    /**
     * Находим индекс центрального элемента
     * записываем значение по этому индексу в переменную
     */
    let mid = Math.floor((low + (high - low)) / 2)
    let midVal = array[mid]
    /**
     * Первый базовый случай:
     * Если длина массива равна 0
     * искомое значение не найдено
     */
    if (array.length == 0) {
        return "Value Not Found"
    }
    /**
     * Второй базовый случай:
     * Если центральное значение равно искомому
     * добавляем его в результат и возвращаем результат
     */
    if (midVal == number) {
        result.push(number)
        return result
    }

    /** 
     * Рекурсивный случай:
     * Добавляем центральное значение в результат
     * и опеределяем левую и правую части массива
     * Если центральное значение больше искомого
     * то повторяем все с левой частью, иначе с правой
    */
    result.push(midVal)
    let left = array.slice(0, mid)
    let right = array.slice(mid + 1)
    return (midVal > number) ?
        binarySearch(left, number, result, 0, left.length - 1) :
        binarySearch(right, number, result, 0, right.length - 1)
}

module.exports = {
    binarySearch
}