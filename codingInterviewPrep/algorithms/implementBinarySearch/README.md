# Реализовать Бинарный поиск
Бинарный поиск - это алгоритм эффективности O (log (n)) для поиска элемента в отсортированном массиве. Он работает, используя следующие шаги:

Найдите середину valueотсортированного массива. Если value == targetвернетесь (нашли его!).
Если посерединеvalue < target, выполните поиск в правой половине массива при следующем сравнении.
Если посерединеvalue > target, выполните поиск в левой половине массива при следующем сравнении.
Как вы можете видеть, вы последовательно уменьшаете массив вдвое, что дает вам логарифмическую эффективность (n). Для этого испытания мы хотим, чтобы вы показали свою работу - как вы достигли целевого значения... путь, который ты выбрал!

Напишите функциюbinarySearch, которая реализует алгоритм двоичного поиска в массиве, возвращая выбранный вами путь (каждое сравнение средних значений) для поиска цели в массиве.

Функция принимает отсортированный массив целых чисел и целевое значение в качестве входных данных. Он возвращает массив, содержащий (по порядку) среднее значение, которое вы находили при каждом уменьшении исходного массива вдвое, пока не нашли целевое значение. Целевое значение должно быть последним элементом возвращаемого массива. Если значение не найдено, верните строку Value Not Found.

Например, binarySearch([1,2,3,4,5,6,7], 5) вернул бы [4,6,5].