function permAlone(str) {
    const result = [] // инициализируем результат

    const perm = (arr, m = []) => {
        // базовый случай
        if (arr.length === 0) { // если длина массива = 0
            let check = true // инициализация переменной для записи результата проверки массива
            let j = 0 // инициализация счетчика
            while (j < m.length) { // пока значение счетчика меньше длины массива
                c = m[j] // текушая буква
                n = m[j + 1] // следующая буква
                if (c == n) { // если текущая буква равна следующей
                    check = false // проверка не успешна
                    break // завершаем цикл
                }
                j++ // увеличиваем счётчик
            }
            if (check) { // если проверка успешна
                result.push(m) // добавляем в результат сформированный массив
            }
        }
        else {
            for (let i = 0; i < arr.length; i++) { // перебираем массив
                let curr = arr.slice() // копируем исходный массив
                let next = curr.splice(i, 1) // записываем значение по текущему индексу и удалем его
                perm(curr.slice(), m.concat(next)) // рекурсивный случай
            }
        }

    }

    perm(str.split(""))
    return result.length
}

module.exports = {
    permAlone
}