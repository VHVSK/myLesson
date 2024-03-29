// Масив - це об'єкт, з цифровими іменами властивостей
// КОЖЕН МАСИВ - ЦЕ ОБ'ЄКТ!!!
// змінна має посилання на об'єкт, тому просто копіювати масив не вийде
// зва масиви будуть різні, так як вини мають різні посилання на ячейку в памя'ті, тому myArray != myArray2

// Варіант масиву створення 1
const myArray = [1, 2, 3]
console.log(myArray)
// (3) [1, 2, 3]

// Варіант масиву створення 2
const myArray2 = new Array(1, 2, 3)
console.log(myArray2)
// (3) [1, 2, 3]

// СТРУКТУРА МИСВА
// Розгорнемо результат в консолі браузера
// (3) [1, 2, 3]
// 0: 1
// 1: 2
// 2: 3
// length: 3
// [[Prototype]]: Array(0)

myArray2.length
// 3

// ОПЕРАТОР ДЛЯ ПОРІВНЯНН МАСИВІВ ТА ОБ'ЄКТІВ
myArray === myArray2
// false

const myArray3 = myArray
myArray === myArray3
// true

// МАСИВ ПРОТИ ОБ'ЄКТА
const myObject = {
  0: 1,
  1: 2,
  2: 3,
  length: 3,
}
// Відрізняється в даному випадку прототип, тобто це впливає які методи стають доступні
// Також в об'єкті не будуть автоматично оновлюваатися властивість length

// РОБОТА З ЕЛЕМЕНТАМИ МАСИВА
// Читаємо значення масису
const myArray4 = [1, true, 'a']
console.log(myArray4[0])
console.log(myArray4[1])
console.log(myArray4.length)

// Точковий запис при цифровому записі не працює!!!
// myArray4.0 - error
// myArray4.'0' - error

myArray4.length = 7 // Так робити не рекомендується
// (7) [1, true, 'a', пусто × 4]

// Порядок елементів в масиві важливий
// Порядок починається з 0

// Змінити значення певного елементу
myArray4[1] = false

// Додати новий елемент до масива
// Для цього потріно знати довжину масиву
// Тому краще викоритовувати спеціальні методи масиву
myArray4[3] = true
myArray4[4] = true

// МЕТОДИ МАСИВА
// Функцій вищого порядку в масивах, методами прототипів, функції прототипу
// push - додати в кінець масиву
// pop - видалити останній елемент масиву, а також повертає видалений елемент
// shift - видалити перший елемент масива, також повертає виджалений елемент
// unshift - додати елемент в початок масиву
// forEach - аргумент являється функцією
// map - очікує від нас колбек функцію, створює новий масив та повертає новий масив, метод map не змінює оригінальний масив
// find() повертає значення масиву першої ітерації в якій true
// та інші
// Їх можна визивати методом точкового запису

// myArray4. - далі підказка

// Розглянемо основні:
// push - додати в кінець масиву
myArray4.push('value push')
// (6) [1, true, 'a', true, true, 'value push']

// pop - видалити останній елемент масиву, а також повертає видалений елемент
myArray4.pop()
// (5) [1, true, 'a', true, true]
const testPop = myArray4.pop()
// (4) [1, true, 'a', true]
console.log(testPop)
// true

// unshift - додати елемент в початок масиву
// Зміниться індекс, індекс звувається
myArray4.unshift(false)
// (5) [false, 1, true, 'a', true]
// false - тепер має індекс 0

// shift - видалити перший елемент масива, також повертає виджалений елемент. Також він мутує об'єкт, навіть якщо призначено типром const, а масив це тип який маэ посилання, тому выдбуваэться мутацыя масива
myArray4.shift()
// false
// (4) [1, true, 'a', true]

// forEach - перебирає елементи масива
// forEach - аргумент являється функцією
// forEach, повертає undefined
// використовуйте анонімні, стрілочні, колбек
// Звісно, ми плануємо що в масиві значення це числа, в даному випадку, так як ми пножимо на 2
myArray4.forEach((el) => console.log(el * 2))
// 2
// VM144:1 NaN
// VM144:1 2
// undefined
console.log(myArray4)
// Як видно, ориганалд не змінився
// (4) [1, true, 'a', true]

// задача 39
const myCities = ['London', 'New York', 'Singapore']
const cityInfo = (city, index) =>
  `${city} is at the index ${index} in the myCities array`

myCities.forEach((city, index) => console.log(cityInfo(city, index)))

// Додаток до задачі 39
// Якщо ми додамо фігурні дужки (відбувається деструктуризація об'єкту), то ми поредаємо об'єкт, в такому випадку ми можемо змінювати порядок змінник, так як в об'єкті немає різниці який порядок.
// const myCities = ['London', 'New York', 'Singapore']
// const cityInfo = ({city, index}) =>
// `${city} is at the index ${index} in the myCities array`
// myCities.forEach((city, index) => console.log(cityInfo({index, city})))
// ... cityInfo({index, city}))) - це ніби такий запис: cityInfo({index: index, city: city})))

// map
// map
// map - очікує від нас колбек функцію, повертає новий масив, аналогічно forEach тільки повертає новий масив
const myArray5 = [1, 2, 3]
console.log(myArray5) // (3) [1, 2, 3]

// 1
const newArray = myArray5.map((el) => el * 3)
console.log(newArray) // [3, 6, 9]
console.log(myArray5) // [1, 2, 3]

// 2
const newArray2 = myArray5.map((el) => {
  el * 3
  // return el * 3
})
console.log(newArray2)
// [undefined, undefined, undefined]
// ха-ха, так як немає return, тому undefined

// 3
const newArray3 = myArray5.map(function (el) {
  // el * 3
  return el * 3
})
console.log(newArray3) // (3) [3, 6, 9]

// З практичної задачі 40
// Перебрати масив методом МАП
// Варіант 1
// метод map повертає масив, тому ми не використовуємо в даному вмпадку foreach
const postsJS = postsJSON.map((el) => JSON.parse(el))

// Варіант 2
// Другий варіант, якщо ми передаємо те саме значення, на якому знаходиться ітерація,
// то це короткий варіант запису, JS сам все зробить))
const postsJS_2 = postsJSON.map(JSON.parse)

// Задача 41
// Функція приймає код посатв та масив об'єктів
// Якщо код поста присутній - він првертає значення данної ітерації
function findPostById(idPost, arrPosts) {
  return arrPosts.find((post) => post.postId === idPost)
}

const posts = [
  { postId: 1355, commentsQuantity: 5 },
  { postId: 5131, commentsQuantity: 13 },
  { postId: 6134, commentsQuantity: 2 },
]

console.log(findPostById(6134, posts)) // { postId: 6134, commentsQuantity: 2 }

// Із задачі 42
// замінили на метод some, так як find повертає певний елемент, якщо він був найдений, я якщо буде значення пусте - '', то вона спрацює не коректно, а some повертає логічне значення правда чи брехня
if (inputArray.some((element) => typeof element !== 'number')) {
  return 'Некоторые элементы не являются числами'
}

// every перебирає всі елементи, якщо вони всі правдиві, то він повертає правду
// далі використаємо коллбек функцію та умовою пропустимо перший індекс, далі порівняємо наступні по індексу який ми отримали в параметрах
// якщо це перший елемент, який ми порівнюємо, то ми просто повернемо правду
if (
  inputArray.every((element, index) =>
    index > 0 ? element >= inputArray[index - 1] : true
  )
) {
  return 'Массив отсортирован по возрастанию'
}

// Задача 43, every
const areArraysEqual = (firstArray, secondArray) => {
  if (
    firstArray.length === secondArray.length &&
    firstArray.every((element, index) => element === secondArray[index])
  ) {
    return true
  }

  return false
}

const a = [1, 2, 3]
const b = [1, 2, 3]

console.log(a === b) // false (Почему?) - тип який посилається на знпсення, відповідно посилання різні

const c = [2, 1, 3]
const d = [1, 2, 3, 4]

console.log(areArraysEqual(a, b)) // true
console.log(areArraysEqual(a, c)) // false
console.log(areArraysEqual(a, d)) // false

// ЗАДАЧА 44
// знайти в масиві значення, як в примітивного та і об'єкта
function isElementInArray(searchElement, inputArray) {
  if (typeof searchElement !== 'object') {
    return inputArray.includes(searchElement)
  }

  // Далі потріно searchElement конвертувати в строку
  // А також inputArray пройтися по всім елементам та також їх конвертувати

  return inputArray
    .map((element) => JSON.stringify(element))
    .includes(JSON.stringify(searchElement))

  // цей вираз JSON.stringify(element) повертає строку, стрічлочна функція не явно повертає результат
  // Результат буде додаватися в новий масив, який поверне метод map
  // далі, не присвоюючи данні новому масиву, можна визвати метод includes
  // retur result includes - trye or false
}

const tags = [
  ['javascript', 'es6'],
  ['css', 'flexbox'],
  ['html', 'web-browser'],
]

const fruits = [
  { title: 'Orange', quantity: 10 },
  { title: 'Banana', quantity: 5 },
  { title: 'Apple', quantity: 25 },
]

const primitiveTypesArray = [25, 'x', true, undefined, null]

console.log(isElementInArray(['css', 'flexbox'], tags)) // true

console.log(isElementInArray(['flexbox', 'css'], tags)) // false

console.log(isElementInArray({ title: 'Apple', quantity: 25 }, fruits)) // true

console.log(isElementInArray({ title: 'Banana' }, fruits)) // false

console.log(isElementInArray(25, primitiveTypesArray)) // true

// SPRED рператор
const buttton = {
  width: 200,
  text: 'Buy',
}

const butttonRed = {
  ...buttton,
  color: 'red',
}

console.log(butttonRed)

// Сортування, задача 49
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// метод sort() конвертує в строки та сортує строки
const myNumbers = [50, 23, 29, 10, 103]
myNumbers.sort() // [10, 103, 23, 29, 50]

// Щоб сортувати числа, потріно таким чином
myNumbers.sort((a, b) => b - a) // [10, 23, 29, 50, 103]
myNumbers.sort((a, b) => a - b) // [103, 50, 29, 23, 10]

// цей запис розділяє масив на елементи, використовуючи оператор spred (спред, три крапки) (рест, rest) оператор "...",  та формує новий, таким чином ми можено не змінювати глобальний масив
const copyOfSort = [...products]

// Приклад з задачі 51
// Операторы "rest" (остаток) и "spread" (распространение), тобто оператор три крапки ... - він як з'єднує в маисв, так і роз'єдзнує масив на значення
const myFn = (a, ...b) => {
  console.log(a)
  console.log(b)
}

myFn(10, 2, 4) // 10  [ 2, 4]
// звертітьт увагу, визивають з трьома параметрами, а приймає з двума параметрами
// тобто, рест оператор бере всі інші значення та робить з них масив
// залишковий оператор
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Functions/Rest_parameters

// Але, якщо ми хочемо передати масив, але потрібно його значення передати окремими лементами, то ми можемо так самр розібрати його, spread
const scores1 = [0, 1.5, 2.5, 3.7]
const scores2 = [0, 1.5, 2.5, 3.7]
myFn(...scores1)
myFn(...scores1, ...scores2)

// дивісться ще задачі 55, 56, 57

// ОДИН З ВАРІВАНТІВ СТВОРЕННЯ НОВОГО МАСИВУ НА ОСНОВІ ІНШОГО
// Ще про spred оператор
// В задачі 71 з різних масивів зробили один масив, використвували декілька спредів, при чому ориганальний масив не змінюється
const a = [1, 2]
const b = [4, 5]
const c = [8, 9, 10]
const d = 11
// отримаємо новий масив
const combinedArray = [0, ...a, 3, ...b, 6, 7, ...c, d]

// ПЕРШИЙ ВАРІАНТ СТВОРЕННЯ НОВОГО МАСИВУ НА ОСНОВІ ІНШОГО
const a = [1, 2, 3]
const b = [...a]

// ДРУГИЙ ВАРІАНТ СТВОРЕННЯ НОВОГО МАСИВУ НА ОСНОВІ ІНШОГО
const c = Array.from(a)

// ТРЕТІЙ ВАРІАНТ СТВОРЕННЯ НОВОГО МАСИВУ НА ОСНОВІ ІНШОГО
const d = JSON.parse(JSON.stringify(a))

// JSON.stringify(a) - створить строку
// JSON.parse(...) - створить масив
// ВАЖЛИВО: 1 та 2 варіант не зберагіють вложені ОБ'ЄКТИ, вони передають посиалння на об'єкт
// а 3 варіант робить глибинний розбір, навіть вкладені будуть розібрані, також третій варіант застосовують і для розбору об'єктів

// ЗАДАЧА 80
// Спред оператор розбирає властивості об'єкта і ми можемо змінити тільки одну властивість, інші без змін
function sumPositiveNegative2(arr) {
  return arr.reduce(
    (sums, num) => {
      if (num > 0) {
        return {
          ...sums, // Якщо у нас більше властивостей, ми можемо всі розібрати і тальки потріне змінити, тобто спочатку ВСІ розібрати, а потім перезаписати
          positive: sums.positive + num,
        }
      }

      return {
        ...sums, // Аналогічно
        negative: sums.negative + num,
      }
    },
    { positive: 0, negative: 0 }
  )
}

// ЗАДАЧА 75 - перебор строки по символам, пошук значення в строці
let vowelsCount = 0
let vowelsCount2 = 0
const vowels = ['a', 'e', 'i', 'o', 'u']

const str = 'Today is the best day of my life'

// Варіант 1
// Перетворити строку на масив: метод split()
str.split('').forEach((char) => {
  if (vowels.includes(char)) {
    vowelsCount++
  }
})

// варіант 2
for (const char2 of str) {
  if (vowels.includes(char2)) {
    vowelsCount2++
  }
}

console.log(vowelsCount)
console.log(vowelsCount2)

// ЗАДАЧА 79, перебрати масив
const objectWithNumbers2 = {
  a: 10,
  b: 20,
  c: 'string',
  d: 12,
}

function sumObjectValues(nums) {
  let sum = 0
  // за допогою Object.keys() - статичний метод який знаходиться в об'єкті, Object - це батьківський клас всіх об'єктів в JS, оримаємо масив ключів ВЛАСНОГО об'єкта (без унаслідуваних)
  // перебрати ці ключі
  Object.keys(nums).forEach((key) => {
    if (typeof nums[key] === 'number') {
      sum += nums[key]
    }
  })

  return sum
}

const result = sumObjectValues(objectWithNumbers2)
console.log(result)
//42

// ЗАДАЧА 79 - перебрати значення об'єкта, яке ПЕРЕТВОРИЛИ НА МАСИВ
const objectWithNumbers = {
  a: 10,
  b: 20,
  c: 'string',
  d: 12,
}

function sumObjectValues(nums) {
  let sum = 0
  // за допогою Object.keys() - статичний метод який знаходиться в об'єкті, Object - це батьківський клас всіх об'єктів в JS, оримаємо масив ключів ВЛАСНОГО об'єкта (без унаслідуваних)
  // перебрати ці ключі
  Object.keys(nums).forEach((key) => {
    if (typeof nums[key] === 'number') {
      sum += nums[key]
    }
  })

  return sum
}

// самостійне опрацювання з методом reduce
function sumObjectValues_reduce(nums) {
  return Object.keys(nums).reduce(
    (accumulator, currentValue) =>
      typeof nums[currentValue] === 'number'
        ? accumulator + nums[currentValue]
        : accumulator,
    (initialValue = 0)
  )
}

// самостійне опрацювання з методом entries
function sumObjectValues_entries(nums) {
  let sum = 0
  Object.entries(nums).forEach((Element) =>
    typeof Element[1] === 'number' ? (sum += Element[1]) : 0
  )

  return sum
}
