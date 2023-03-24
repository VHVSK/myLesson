// Мутация в JavaScript
const a = 10 // не можеа змінювати, число примітивний тип
let b = a // копіювання значення, примітивні копіюються по значенню
b = 30 // ми змінили b, значення а - задишилося без змін...

// А якщо об'єкт, це значення посилаючого типу
// сама змінна містить тільки посиланні на об'єкт
const person = {
  name: 'Bob',
  age: 21,
}

// можемо змінити значення і дрдати нові властивосі, і вони дійсно мутують, тобто зміняться
person.age = 22
person.isAdult = true
// {name: 'Bob', age: 22, isAdult: true}

// МУТАЦІЯ КОПІЇ ОБ'ЄКТІВ
const person2 = person // Маємо об'єкт який містить посилання на перший об'єкт
person2.age = 26
person2.isAdult = false

// в результаті перший об'єкт також зміниться, так воно має тільки посилання на данні
// person {name: 'Bob', age: 26, isAdult: false}
// person2 {name: 'Bob', age: 26, isAdult: false}

// це варто пам'ятати!!!! щоб не зміниться оригінал об'єкта

// 2.30
// Як запобігти мутації
// Варіант 1
const person = {
  name: 'Bob',
  age: 21,
}

// assign - створює новий об'єкт
// assign, доступний як в браузері так і в node.js
// Object - і тип і клас, тому з великої букви
const person3 = Object.assign({}, person)
// !!! Але, змінює тільки корневі властивосі, а якщо він має вкдадені обєкти, то вони не змінюються. Тобто, вложені об'єкти, то вложені властивості залишуться не змінені, тобто цей мктод тільки частково копію, якщо немає у властивостей - об'єктів
person3.age = 33
// person3 {name: 'Bob', age: 33, isAdult: false}
// person {name: 'Bob', age: 26, isAdult: false}

// Варіант 2
// ... - це оператор, розділення обєкта на властивості, spred
const person4 = { ...person } // ... - три крапки, оператор розділення обєкта на властивості
// Але й цей метод не повність копіює, так і в перщому варіанті
person4.age = 44
// person {name: 'Bob', age: 26, isAdult: false}
// person4 {name: 'Bob', age: 44, isAdult: false}

// Варіант 3
// Повністю запобігає мутацій
// Спочатку конвертуємо в строку JSON.stringify(person)
// Далі передаємо як аргумент і конвертуємо в новий обє'кт
// тобто подвійна конвертація
// ориганальний обєкт буде без змін
const person5 = JSON.parse(JSON.stringify(person))