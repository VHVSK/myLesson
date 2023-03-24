// 2.03.28 - 4.16
// Глобальні об'єкти
// window - web browsers, в браузері
// global - node.js
// в консолі браузера напишіть
window
// результати властивості об'єкта та методів
// вони доступні за умовчанням
// наприклад
window.innerWidth
// ми отримали видиму ширину вікна

// Аналогічно в node.js
global

// а уніфікована назва, працює як в web browsers так і в node.js
globalThis

// 2.07
// властивість ГЛОБАЛЬНОГО об'єктіву
// console - також об'єкт
// Є скорочений варінат доступу
// можна записати так, це рівнозначні записи
console.log(10)
window.console.log(10)

// МЕТОДИ - це властивість об'єкта, значення якого це - функцію
const myCity3 = {
  city: 'New York', // властивість
  ciryGreeting: function () {
    // функція
    console.log('Greetings!')
  },
}

myCity3.ciryGreeting() // визвали функцію, також властиві

// скорочений варіант запису
// ключове слово function можна прибрати
const myCity4 = {
  city: 'New York',
  ciryGreeting() {
    console.log('Greetings!')
  },
}

myCity4.city // доступ до значення
myCity4 / ciryGreeting() // визвати метод
