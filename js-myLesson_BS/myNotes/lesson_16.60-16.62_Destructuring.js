// Деструктуризація  об'єктів
// Є об'єкт, ми хочемо присвоїти властивості нових змінним, щоб отримати доступи та інші
// таким чином, можна це зробити однією сртрокою
// НАприклад:
const userProfile = {
  name: 'Bogdan',
  coments: 23,
  hasSA: false,
}

// Наступним кодом ми деструктуризуємо наш об'єкт, тобто ми ствримо нові змінні з існуючого об'єкту
const { name, coments } = userProfile
const { hasSA } = userProfile
// І ось, маємо
console.log(name) // Bogdan
console.log(hasSA) // false

// В задачі 74 приклад деструктуризації
// зверніть увагу, що вкладені об'єкти також будуть деструктуридзовані ({info: { country: c, age: a }})
// також, ми змінимо назви змінних в новому обєкті (country: c (c- нова назва змінної))
// також, ячкщо одного значення не буде, то воно буде за умовчанням (p = 0)
const shortPerson = (person) => {
  // деструктуризація
  const {
    name: n,
    info: { country: c, age: a },
    postsQuantity: p = 0,
  } = person

  return {
    n,
    c,
    a,
    p,
  }
}

// в цьому варіанті все те саме, тільки ми перенесли деструктуризацію в arguments
const shortPerson2 = ({
  name: n,
  info: { country: c, age: a },
  postsQuantity: p = 0,
}) => {
  return {
    n,
    c,
    a,
    p,
  }
}

// в цьому варінаті ми не явно повернемо результат
// зверніть увагу, ми пишемо в дужках, інакше інтерпретатор подумає що ми виконуємо тіло функції
const shortPerson3 = ({
  name: n,
  info: { country: c, age: a },
  postsQuantity: p = 0,
}) => ({
  n,
  c,
  a,
  p,
})

// Деструктуризація  МАСИВІВ
// Тут вже важливий порядок, індекс!!!!
const fruits = ['Apple', 'Banana']
const [fruitOne, fruitTwo] = fruits

console.log(fruitOne) // Apple
console.log(fruitTwo) // Banana

// замінити значення місцями за допомолгою деструктуризації
let a = 'first'
let b = 'second'

;[a, b] = [b, a]

// Далі про об'єкти
// Деструктуризація параметрів у функціях
const userProfile2 = {
  name: 'Bogdan',
  coments: 23,
  hasSA: false,
}

// {name, coments}  - Деструктуризація ПАРАМЕТРІВ, тобто аргументів
const userInfo = ({ name, coments }) => {
  // тепер замість крапкового запису, ми може використовувати просто змінні
  if (!coments) {
    return `User ${name} has no comments`
  }

  return `User ${name} has ${coments} comments`
}

userInfo(userProfile2) // 'User Bogdan has 23 comments'

// В задачі 54, 55, 56, 57, 58 про деструктуризіцію
// В задачі 58
let person = {
  _id: '5ad8cefcc0971792dacb3f1f',
  index: 4,
  processed: false,
  cart: ['item1', 'item2', 'item3'],
  email: 'slarsen@test.com',
  name: 'Samanta Larsen',
  cartId: 435,
}

// код нижче перезаписує об'єкт person, одночасно видаляючи з глобальної області видимості такі змінні як _id, processed, cart
{
  let _id, processed, cart
  ;({ _id, processed, cart, ...person } = person)
}

// Задача 69 - Деструктуризація о'бєкта
// OPTION 1
const mult = (detstrObj) => {
  const { x, y, z } = detstrObj
  return x * y * z
}

// OPTION 2
const mult2 = ({ x, y, z }) => {
  return x * y * z
}

// OPTION 3
const mult3 = ({ x, y, z }) => x * y * z

const result = mult(objectWithNumbers)

// Задача 70
// Деструктуризація масиву та rest оператор
const arr = [1, 2, 3, 4, 5, 6, 7]

// призначаємо першому та другому індексу значення, а третьому - залишок масиву
const [a, b, ...c] = arr

console.log(a)
// 1
console.log(b)
// 2
console.log(c)
// [3, 4, 5, 6, 7]

// ЗАДАЧА 72, по суті та сама деструктуризація
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
