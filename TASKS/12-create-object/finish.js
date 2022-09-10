/** ЗАДАЧА 12 - Создание объекта
 *
 * 1. Создайте объект с тремя свойствами:
 *  - name
 *  - surname
 *  - favoriteNumber
 *
 * 2. Выведите в консоль строку
 * "My name is <name> <surname> and my favorite number is <favoriteNumber>"
 */

const myObj = {
    name: 'Bogdan',
    surname: 'Bogdanskyi',
    favoriteNumber: 1
}

/* console.log("My name is " + myObj.name + " " + myObj.surname + " and my favorite number is " + myObj.favoriteNumber + "") */

console.log(`My name is ${myObj.name} ${myObj.surname} and my number is ${myObj.favoriteNumber}`)