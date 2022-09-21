function pairwise(arr, numb) {
    let arrCopy = arr.slice()// создаем копию массива для тестирования
    let result = 0 // создаем переменную для записи результатов(индексов) - двумерный массив
    nextValue:
    for (let i = 0; i < arrCopy.length; i++) // перебираем тестовый массив с удалениему 
    {
        nextNextValue:
        for (let j = 0; j < arrCopy.length; j++) // перебираем тестовый массив 
        {
            if (arrCopy[i] != -1 && arrCopy[j] != -1) {
                let sum = arrCopy[i] + arrCopy[j]
                if (sum == numb) {
                    console.log(`Зашло: ${arrCopy[i]}[${i}] + ${arrCopy[j]}[${j}] = ${sum}`)
                    result += i
                    result += j
                    arrCopy[i] = -1
                    arrCopy[j] = -1
                    continue nextValue
                }
            }
        }

        console.log('========')
    }
    return result
}


pairwise([1, 4, 2, 3, 0, 5], 7)


module.exports = {
    pairwise
}