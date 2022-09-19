function permAlone(str) {
    const result = [] // инициализируем результат

    const perm = (arr, m = []) => {
        const checkFunc = (e, i, a) => e == a[i + 1] // функция проверки на повтор букв
        if (arr.length === 0) { // базовый случай: если длина массива = 0
            let check = m.some(checkFunc) // проверяем перебор на повтор букв 
            if (!check) { // если проверка не успешна
                result.push(m) // добавляем перебор в результат
            }
        }
        else { // рекурсивный случай
            for (let i = 0; i < arr.length; i++) { // перебирая массив
                let curr = arr.slice() // копируем исходный массив
                let next = curr.splice(i, 1) // записываем значение по текущему индексу и удалем его из массива
                perm(curr.slice(), m.concat(next)) // рекурсивный вызов: с остатком от массива и перебором с добавленным следующим значением
            }
        }

    }

    perm(str.split(""))
    return result.length
}

module.exports = {
    permAlone
}