function inventoryUpdate(arr1, arr2) {
    const sortFunc = (a, b) => a[1].localeCompare(b[1], 'en', { caseFirst: 'false' }) // функция для сортировки выходного массива в алфавитном порядке
    // объявляем и инициализируем результирующий массив
    const result = []
    // обходим оба массива
    nextItem:
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i][1].includes(arr2[j][1])) { // если предмет есть и в первом и во втором массивах
                result.push([arr1[i][0] + arr2[j][0], arr1[i][1]]) // добавляем сумму значений в результат
                arr2.splice(j, 1) // удаляем предмет из второго массива
                continue nextItem // переходим к следующему предмету из первого массива
            }
        }
        result.push(arr1[i]) // добавляем предмет из первого массива в результат
    }
    // соединям результат с остатками от второго массива сортируем и возвращаем
    return result.concat(arr2).sort(sortFunc)
}

module.exports = {
    inventoryUpdate
}