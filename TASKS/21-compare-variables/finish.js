/** ЗАДАЧА 21 - Сравнение переменных
 *
 * 1. Сравните 2 переменные "myVariable1" и "myVariable2".
 * Выведите в консоль "true", если значение "myVariable1" меньше или равно "myVariable2".
 *
 * 2. Преобразуйте обе переменные в числа перед сравнением.
 */

let myVariable1 = 10
let myVariable2 = '5'

// Напишите код здесь
if(Number(myVariable1) <= Number(myVariable2)) {
    console.log(true)
} else {
    console.log(false)
}

// Варіант автора
//parseInt(myVariable1) або додати + перед строкою, наприклад +'35', в такому випадку JS автоматично конвертує значення в число 

// console.log(parseInt(myVariable1) <= parseInt(myVariable2))

// console.log це функція, це вираз, а вираз поветає значення)))
// Результатлом логічного порівння - повертає логічне значення

myVariable1 = '20'
myVariable2 = 100

// Напишите код здесь
if(Number(myVariable1) <= Number(myVariable2)) {
    console.log(true)
} else {
    console.log(false)
}
