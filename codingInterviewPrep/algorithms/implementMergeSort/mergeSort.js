function mergeSort(A) {

    function merge(L, R) {
        let S = []; // инициализируем результирующий массив
        let i = j = 0; // инициализируем счетчики
        while (i < L.length && j < R.length) { // сравсниваем элементы сдвигая индексы и добавляем больший в результат
            S.push((L[i] < R[j]) ? L[i++] : R[j++])
        }
        // обрабатываем последний элемент при разной длине массивов и возвращаем отсортированный массив
        return [
            ...S,
            ...L.slice(i),
            ...R.slice(j)
        ]
    }

    if (A.length <= 1) { // базовый случай
        return A
    }

    let M = Math.floor(A.length / 2) // индекс середины массива
    let L = A.slice(0, M) // левая часть
    let R = A.slice(M) // правая часть

    return merge(mergeSort(L), mergeSort(R))

}

console.log(mergeSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]))

module.exports = {
    mergeSort
}