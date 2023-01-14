/** ЗАДАЧА 4 - Объединение строк
 *
 * 1. Объявите три переменные с значениями:
 *  - ваше имя
 *  - ваша фамилия
 *  - ваша профессия
 *
 * 2. Создайте еще одну переменную. Ее значение должно быть, например
 * "Меня зовут <Имя> <Фамилия> и я <Профессия>"
 *
 * 3. Выведите значение последней переменной в консоль
 */

const myName = 'Vikram'
const myFname = 'Petrov'
const myProf = 'developer'

let descr = `My name ${myName} ${myFname} and I am ${myProf}`
let descr2 = 'My name ' + myName + ' ' + myFname + ' and I am ' + myProf

console.log(descr)
console.log(descr2)
