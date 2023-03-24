// Умовні інструкції, if, if else, switch, тернарні оператори (повертають результат)
// Якщо умова правдива, тобто вираз який повертаєтьмся, який конвертується в булево значення true або false

// if
if ('Умова') {
  // Блок коду якщо уи=мова правдива
}

let val = 10
if (val > 5) {
  val += 20
}
// 30

const person = {
  age: 20,
}

if (!person.name) {
  console.log('Not name')
}

// if else
if ('Умова правдива') {
  // Умова правдива
} else {
  // Умова НЕ правдива
}

if (val < 5) {
  val += 20
} else {
  val -= 20
}

// if else if
// виконується одна з умов, перевіря. по черзі
if ('Умова правдива 1') {
  // Умова правдива 1
} else if ('Умова правдива 2') {
  // Умова НЕ правдива 2
} else {
  // Умови які вище НЕ правдиві
}

// Приклад
const age = 25

if (age > 18) {
  console.log('Is adult')
} else if (age >= 12) {
  console.log('Is teeneger')
} else {
  console.log('Is child')
}

// if in functions
const sumPositiveNumbers = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 'One of the arguments is not a number'
  }

  if (a <= 0 || b <= 0) {
    return 'Numbers are not positive'
  }

  return a + b
}

sumPositiveNumbers(20, 30) // 50
sumPositiveNumbers(-20, 30) // 'Numbers are not positive'
sumPositiveNumbers('abc', 30) // 'One of the arguments is not a number'

// switch
switch ('Вираз') {
  case A:
    // Дія якщо вираз === A
    break
  case B:
    // Дія якщо вираз === B
    break
  default:
  // Дія за умовчанням
}

// Приклад
const month = 2

switch (month) {
  case 12:
    console.log('Грудень')
    break
  case 1:
    console.log('Січень')
    break
  case 2:
    console.log('Лютий')
    break
  default:
    console.log('Це не зимній місяць!')
}

// ТЕРНАРНИЙ ОРПЕРАТОР
// Конструкція з ТО - це вираз, а вираз повертає значення
// Умова ? Вираз 1 : Вираз 2
let a = 1
a == 1 ? 1 : 2
// 1

// Також, для зручності читання можна записувати на трьох строках (myFunction() - функції це також вирази)
let value = 11
let value2 = 25

// Приклад 1
value ? console.log('Умова правдива') : console.log('Умова не правдива')
// Умова правдива
// undefined

// Приклад 2
value && value2 ? myFunction(value, value2) : myFunction()

// Приклад 3
console.log(value >= 0 ? value : -value) // 11

value = -5
const res = value >= 0 ? value : -value
console.log(res) // 5
