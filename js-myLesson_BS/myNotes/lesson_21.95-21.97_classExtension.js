// Розширення класів, новий клас насліжує всі методи батьківського класу
// NumbersArray розширює Array
class NumbersArray extends Array {
  // батьківський контрукотор Array визветься автоматично
  sum() {
    return this.reduce((el, acc) => (acc += el), 0)
  }
  // reduce - щось схоже на перебор масиву, буде визвана стільки разів, скільки має значень
}

const myArray = new NumbersArray(2, 5, 7)
// (2, 5, 7) - аргументи які передаються в клас, і зверніть увагу, в розширеному класі NumbersArray немає контруктора, але він визветься з батьківського класу Array

console.log(myArray) // вже доступний метод sum
myArray.sum() // 14

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
// Метод reduce() применяет функцию reducer к каждому элементу массива (слева-направо), возвращая одно результирующее значение.
// accumulator - Аккумулятор, аккумулирующий значение, которое возвращает функция callback

// В прикладі вище ми строили такий ланцюг дій, цепочка прототипів
// myArray -> NumbersArray -> Array -> Object

// ЩО ТАКЕ ПРОТОТИП?
// Це прихована властивість, її бажано не змінювати вручну
// Comment.prototype === firstComment.__proto__
// Прототип це об'єкт
// В нього є методи і т.п.
// Це створено для того, щоб створити JS як ООП

// СТРОКИ ТА ЧИСЛА ВЕДУТЬ СЕБЕ ЯК ОБ'ЭКТИ
// const num = 10
// num.toString і т. п. - тобто, примітивні типи ведуть себе як об'єкти, бо дать до доступ до методів

// Наприклад, створимо змінну та визавати в консолі браузера
const myName = 'Bogdan'
myName.toUpperCase() // 'BOGDAN'

// Але, якщо використовувати new
const mySecondName = new String('Stashchuk')
mySecondName // ми отримали об'єкт

/*
        String {'Stashchuk'}0: "S"1: "t"2: "a"3: "s"4: "h"5: "c"6: "h"7: "u"8: "k"length: 9[[Prototype]]: String[[PrimitiveValue]]: "Stashchuk"

        навіть length
        а прототип String
        І там, і там є методи
        По суті, навіть якщо змінна тип строка, вона веде себе як об''єкт'
        */

// ЗАДАЧА 59
class ExtendedArray extends Array {
  sum() {
    return this.reduce((sum, num) => (sum += num), 0)
  }

  onlyNumbers() {
    return this.filter((el) => typeof el === 'number')
  }
}

const myExtArray = new ExtendedArray(10, 20, 30, true)
console.log(myExtArray) // ExtendedArray(4) [ 10, 20, 30, true ]
console.log(myExtArray.sum()) // 61 (трохи не таку відповідь очікував)
console.log(myExtArray.onlyNumbers()) // ExtendedArray(3) [ 10, 20, 30 ]
// Перевіримотчи доступні унаслідувані методи від класу Array
myExtArray.forEach((element) => {
  console.log(element)
})
// 10
// 20
// 30
// true

// ЗАДАЧА 79 - Самовстійне опрацювання з методом reduce
function sumObjectValues_reduce(nums) {
  return Object.keys(nums).reduce(
    (accumulator, currentValue) =>
      typeof nums[currentValue] === 'number'
        ? accumulator + nums[currentValue]
        : accumulator,
    (initialValue = 0)
  )
}
