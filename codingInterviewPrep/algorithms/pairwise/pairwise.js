function pairwise(arr, numb) {
    let result = 0 // инициализируем переменную для записи результата
    nextValue: // именуем цикл
    for (let i = 0; i < arr.length; i++) { // перебираем массив со счетчиком i 
        for (let j = 0; j < arr.length; j++) { // перебираем массив со счетчиком j
            if (arr[i] != -1 && arr[j] != -1 && i != j) { // если i-e и j-e значения в массиве не -1 и i и j не равны 
                if (arr[i] + arr[j] === numb) { // если сумма i-го и j-го значений равны numb
                    result += i + j // добавляем в результат сумму индексов i-го и j-го значений
                    arr[i] = -1 // присвиваем -1 значению в массиве по индеку i 
                    arr[j] = -1 // присвиваем -1 значению в массиве по индеку j
                    continue nextValue // переходим к следующей итерации цикла со счётчиком i
                }
            }
        }
    }
    return result
}


// pairwise([1, 4, 2, 3, 0, 5], 7)


module.exports = {
    pairwise
}