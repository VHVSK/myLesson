// 2.42
// Що таке функції, це блок коду який можна виконувати багаторазово
// function - функції, це об'єкт, це блок коду, який маже виконуватися багатократно.

let a = 5
let b = 3

let c = a + b
console.log(c) // 8

let a = 8
let b = 12

let c = a + b
console.log(c) // 20

// щоб не було повторення коду потрібно використовувати function
function sum(a, b) {
  const c = a + b
  console.log(c)
}

// визвати функцію
sum(a, b) // 8

// змінимо данні і визвати функцію
let a = 8
let b = 12
sum(a, b) // 20

// Інколи ми бачимо визов фугнкцію без дужок, наприклад: generateRandomName
// Здогадуюся це відбувається коли ми хочемо передати назву функції для подальшого її визову
// Так як з дужками вона ВИЗТИВАЄТЬСЯ, наприклад generateRandomName()

function generateRandomName() {
  return Math.floor(Math.random() * 100)
  // Math.random() - генерація числа від 0 до 1
  // х 100 - щаб отримати ціле число
  // Math.floor() - округлити його
}

// Функції можуть бути:
// ... іменовані
// ... анонімні, не мати і'мя
// ... присвоєні змінній
// ... аргументом при визові функції
// ... хначенням властивості об'єкта, тобто Метод

// ОНСНОВНІ ПРИНЦИПИ JS
// вирази, функції та об'єкти

// функції - це об'єкт
// можна отримати параметри в дужках
// тобто, доступ до властивостей функцій можна отримати через крапку
// Приклад функції:
function myFn(a, b) {
  let c
  a = a + 1
  c = a + b
  return c
}

// return - повертає результат і закінчує роботу функції
// Якщо у функції немає return, вона всеодно поверне undefined

// введіть в консолі браузера, щоб побачити властивості об'єкта
console.dir(myFn)

// щоб визвати функцію, можна також передавати аргументи  при визові функції
// function myFn(a, b) {} - a, b це параметри
// myFn(10, 3); - 10, 3 це аргументи

let sum = myFn(10, 3)
console.log(sum)

// ПЕРЕДАЧА ЗНАЧЕННЯ ЗА ПОСИЛАННЯМ
// В середині функцій не рекомендується змінювати (мутації) властивості зовнішніх об'єктів
// якщо стоїть завдання змінити властивості обєкту ге змінючи оригінал, можна, як варіант, створити в функції дубдікат обєкта за допомогою Object.assign({}, person) і далі вже працювати з копією об'єкта

// Приклад передачі об'єкта в функції з мутацією
const personOne = {
  name: 'Bob',
  age: 21,
}

function incPersonAge(person) {
  person.age += 1
  return person
}

incPersonAge(personOne)
console.log(personOne.age) // -> 22

// Приклад без мутації, а зі стренням нового об'єкта
const personTwo = {
  name: 'Mila',
  age: 18,
}

function incPersonAge2(person) {
  const updatePerson = Object.assign({}, person)
  updatePerson.age += 1
  return updatePerson
}

const updPErsonOne = incPersonAge2(personTwo)
console.log(personTwo.age) // -> 18
console.log(updPErsonOne.age) // -> 19

// Урок 24
// callback function - Колбек функції, передати функції інщу функцію і визвати неї з іншої функції, наприклад

// Приклад 1
function funcOne() {}

function funcTwo(callbackFunc) {
  callbackFunc()
}

funcTwo(funcOne)

// Приклад 2

function printMyName() {
  console.log('Liza')
}

setTimeout(printMyName, 1000)

// Правила роботи з функціями
// Називати функції виходячи з сенсом функції
// Одна функція на одну задачу
// Не змінювати зовнішні змінні, тобто варто створювати в середині функції свої змінні, навіть якщо вони передані. Такі функції називаються Чистими функціями.

// В задачі 53 сказано про замикання в функціях, це коли параметри в методах об'кта, навіть якщо функція виконана, вони все ще доступні
// наприклад
const photosGallery = (title, dimensions, date) => {
  return {
    title,
    date,
    [dimensions]: true,
    info() {
      console.log(`Фото "${title}" имеет разрешение ${dimensions}`)
    },
    publishInfo() {
      console.log(
        `Фото "${title}" было опубликовано ${Math.floor(
          (new Date().getTime() - date.getTime()) / 1000
        )} секунды назад`
      )
    },
  }
}

const myDogPhoto = photosGallery('My dog', '1920x1080', new Date())
myDogPhoto.info() // функція photosGallery вже виконана, а метод все ще доступний
setTimeout(() => myDogPhoto.publishInfo(), 2000) // функція photosGallery вже виконана, а метод все ще доступний

// Задача 55 - деструктуризація результата функції
function minMax(...numbers) {
  return [Math.min(...numbers), Math.max(...numbers)]
}

let min,
  max
  /* Вызовите здесь функцию "minMax" с аргументами 24, 5, 34, 10 
и используя деструктуризацию массивов присвойте значения переменным "min" и "max" */

  // Щоб не ломався код, Притиер додадає ";", тобто перед деструктуризацією потрібно ставити ";"
;[min, max] = minMax(24, 5, 34, 10)
console.log(min, max) // 5, 34

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

// Задача 62
// Різниця в різних записах фунекцій
// При використанні ключового слоіва function можна переназначити значення змінної (тобто назві функції) firstFunction, тобто можна створити змінну firstFunction = '123'
// Також, можгна визивати функції до їх об'явлення і не буде помилки
function firstFunction(a, b) {
  return a + b
}

// вона не має імені
// при виористанні const ми не можемо змінювати значення
// такий спосіб рідко використовують, частіше використовують без слова function, а використовують стрілочну функцію
const secondFunction = function (a, b) {
  return a + b
}

// стрілочна функція
const secondFunction2 = (a, b) => {
  return a + b
}

// Стрілочна коллбек функція
const helloWorld = () => console.log('Hello World!')
setTimeout(helloWorld, 5000)

// ще варіант коллбек функція
const isNumber = (a) =>
  typeof a === 'number' ? `${a} - это число` : `${a} - это не число`

console.log(firstFunction(5, 10))
console.log(secondFunction(15, 10))
console.log(secondFunction2(15, 20))

// Задача 77
// Повернути у фіункції обєкт з методами
// зверніть увагу, після визву createGreeting все ще будуть доступці методи greet та changeGreeting, ми можемо визивати її скільки потріно разів - це називається Замикання (Clousers)
function createGreeting() {
  let greetingString = 'Hey, this is'

  function greet(name) {
    return `${greetingString} ${name}`
  }

  function changeGreeting(newGreating) {
    greetingString = newGreating
  }

  return { greet, changeGreeting } // обєкт з методами
  // зверніть увагу, поветаємо змінні-функції без аргументів, аргументи будемо додавати при визові
}
