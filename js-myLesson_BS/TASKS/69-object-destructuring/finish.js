/** ЗАДАЧА 69 - Деструктуризация объектов
 *
 * Создайте функцию "mult", в которой будут умножаться
 * значения свойств x, y, z переданного объекта
 *
 * Результат умножения верните из функции
 */

const objectWithNumbers = {
  x: 5,
  y: 20,
  z: 3,
}

// Создайте функцию здесь
// OPTION 1
const mult = (detstrObj) => {
  const { x, y, z } = detstrObj
  return x * y * z
}

// РІШЕННЯ АВТОРА
// OPTION 2
// const mult = ({ x, y, z }) => {
//   return x * y * z
// }

// OPTION 3
// const mult = ({ x, y, z }) => x * y * z

const result = mult(objectWithNumbers)
console.log(result)
// 300
