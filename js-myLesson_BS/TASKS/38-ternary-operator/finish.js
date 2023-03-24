/** ЗАДАЧА 38 - Тернарный оператор
 *
 * 1. Перепишите инструкцию "if .. else" без использования "else"
 *
 * 2. Перепишите содержимое функции, используя тернарный оператор
 *
 * 3. Замените обычную функцию на стрелочную функцию
 */

// function isArrayEmpty(inputArray) {
//   if (inputArray.length > 0) {
//     return 'Массив не пустой'
//   } else {
//     return 'Массив пустой'
//   }
// }

const isArrayEmpty = (inputArray) => {
  return inputArray.length > 0 ? 'Массив не пустой' : 'Массив пустой'
}

console.log(isArrayEmpty([1, 3]))
console.log(isArrayEmpty([]))

// блін
// не потріно було {}
// return - прериває виконання функції, тому else не потріно!
// правильно та:
/**
 * const isArrayEmpty = (inputArray) =>
  inputArray.length > 0 ? 'Массив не пустой' : 'Массив пустой'
 */
