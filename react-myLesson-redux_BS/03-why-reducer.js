/**
 * ! REDUCER - чому ж REDUCER?
 * reduce() - метод масивів в JS...!
 *
 * [....] -> reduce() -> любий масив можна привести до одного числа або однієї стороки чи до одного об'єкту, залежить від того, що ми хочемо!
 *
 * Наприклад, якщо в нас масив чисел, ми можемо знати їх: суму, середне значення і т.п.
 *
 */

// ____________________________________________________

// ! Як працює reduce в JS
// * 1)
// reduce() - метод масивів в JS...!
// Приклад, принцип роботи reduce в JS для масивів - чиста функція!
const numbers = [5, 12, 3]

function reducer(accumulator, currentValue) {
  return accumulator + currentValue
}

const total = numbers.reduce(reducer, 0)

console.log(total) // 20

reducer(17, 3) // 20
reducer(17, 3) // 20 - відповідь однакова!!!!!
// ! ПРИ ОДНАКОВИХ ВХІДНИХ ДАННИХ - ЗАВЖДИ ОДНАКОВА ВІДПОВІДЬ (ЧИСТА ФУНКЦІЯ)!

// ____________________________________________________

// * 2)
// Приклад не чистої функції:
let acum = 0

function reducer_not(currentValue) {
  accumulator += currentValue
  return accumulator
}

reducer_not(5) // 5
reducer_not(5) // 10 - відповідь різна!!!!!
