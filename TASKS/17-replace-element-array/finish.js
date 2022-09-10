/** ЗАДАЧА 17 - Замена элементов массива
 *
 * 1. Создайте массив с нескольким элементами разных типов
 *
 * 2. Выведите в консоль весь массив
 *
 * 3. Замените второй элемент массива на другой
 *
 * 4. Выведите в консоль измененный массив
 */
 const myArray = ['text', 10, true]

 myArray.forEach(value => {
    console.log(value)
 })

 myArray[1] = 20

 myArray.forEach(value => {
    console.log(value)
 })

 console.log(myArray) // [ 'text', 20, true ]