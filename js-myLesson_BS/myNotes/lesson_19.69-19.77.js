// Цикли. for, while, for in, keys and values, for in, for of - це інтрукції
// Дії які повторюються
// Маємо масив
const myArray = [true, 'abc', 10]

// Маємо об'єкт
const myObject = {
  x: 10,
  y: true,
  z: 'abc',
}
// Можемо перебрати і вивести елементи

// FOR
for (let i = 0; i < 5; i++) {
  console.log(i)
}
// 0, 1, 2, 3, 4

// Приклад перебору масиву (цей варіант не рекомендується)
for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i])
}

// Для перебору масивів існують КРАЩІ методи, йе мотоди прототипів масивів - forEach, map, reduce

// FOEEACH - створений для перебору, а не повернення якогось результату
myArray.forEach((Element, index) => {
  console.log(Element, index)
})
// true 0
// abc 1
// 10 2

// варіант без index, аналогічно можна вивести тільки ключі
myArray.forEach((Element) => {
  console.log(Element)
})

// WHILE - виконується, поки умова правдива
// Потрібно не допускати безкінечного виконання
let a = 0

while (a < 5) {
  console.log(a)
  a++ // уиова яка недопускає безкінечного виконання
}

// DO WHILE - виконувати, поки умова правдива, тільки умова буде виконана не менше одного раху
let j = 10
do {
  console.log(j)
  j++
} while (j < 5)

// FOR IN - перебрати властивостей обєктів
for (const key in myObject) {
  // key
  // myObject[key]
  console.log(key, myObject[key])
}
// x 10
// y true
// z abc

// також можна і масив перебрати (знову ж таки, цей варіант не рекомендується, бо в маисвів є свої методи)
for (const key in myArray) {
  console.log(myArray[key])
}

// foreach для ПЕРЕБОРУ властивостей ОБ'ЄКТА, перевівши їх в масив
// Object.keys(myObject) - дістати ключі
// forEach - перебрати
// keys - ключі
Object.keys(myObject).forEach((key) => {
  console.log(key, myObject[key])
})
// x 10
// y true
// z abc

// Приклад використання з 35 практичного завдання
const objectKeys = Object.keys(myObject)
objectKeys.forEach((key) => {
  console.log(myObject[key])
})

// аналогічно можна перебрати значення
// values - значення!
Object.values(myObject).forEach((value) => {
  console.log(value)
})
// 10 true abc

// FOR OF
// з'явився в ES6
// for of можна перебирати маисви, але зновуж таки не рекомендується, забудьте про це
// for of не для перебору обєктів, так як порядок властивостей не важливий у об'єктів
const myString = 'Hey'

// Приклад 1
for (const letter of myString) {
  // Дія зі значенням
  console.log(letter)
}

// Приклад 2
for (const element of myArray) {
  // Дія зі значенням
  console.log(element)
}

// Для маисвів є свої метоли
// Для обєктів є можливості конвертації в масиви...

// Задача 61
function sumNumbers() {
  // Ключове слово arguments - це спеціальний об'єкт, це НЕ масив, список аргументів який передається функції, методи масиву не доступні
  // arguments.length - доступна кількість аргументів
  // При цьому, через стрілочні функції ця інформація не доступна
  //
  // це варінат вивода через цикл for
  let sum = 0
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i]
  }

  console.log(`Sum of all arguments is ${sum}`)
  return sum
}

sumNumbers(1, 3)
// 4
