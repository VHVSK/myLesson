/** ЗАДАЧА 20 - Дата
 *
 * 1. Создайте переменную и присвойте ей текущее время в миллисекундах
 *
 * 2. Выведите значение в консоль
 */

const currentDate = new Date()
console.log(currentDate)

const currentDateInMd = currentDate.getTime()
console.log(currentDateInMd)
console.log(currentDate.getDay())
console.log(currentDate.getFullYear())
console.log(currentDate.getHours())
