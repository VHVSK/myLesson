/**
 * ! Модуль Events
 * Події, як реагувати, обробляти, створювати і т.п.
 *
 * ! Події в node.js
 * 1. Архітектура основана на подіях, НА ПОДІЯХ!
 * 2. Вбудовані модулі, такі як модуль fs, генерують подыъ
 * 3. Наприклад, подія створюється коди дані були прочитані, або коди був отриманий новий запит http-сервером. Напиклад. можна віддвати файс по частинам, використовуючи подія відправики та отримання частини файлу.
 * 4. У відповідь на подію визивається колбек функція, зареєстрована для контретної події.
 * 5. Для однієї події може бути зареєстровані декілька колбек функцій.
 *
 * Це все робиться асинхронно, зявдяки асинхронній природі циклу подій.
 *
 * ! Модуль events надає клас EVENTEMITTER для роботи з подіями в node.js
 * ! Всі обєкти, які створють події, є екземплярами класу EVENTEMITTER
 */

// ! Клас EVENTEMITTER
// Приклад самостійного створення події
const EventEmiter = require('events')
const myEmitter = new EventEmiter() // створоити екземпляр

// Визвати метод, скільки потрібно разів
// myEmitter.addListener, addListener - це аліас .on
myEmitter.on('customEvent', () => {
  // таким чином ми ствирити відстежувача події customEvent
  console.log('CustomEvent was emitted')
})

// а тут ми створюємо події
myEmitter.emit('customEvent')

// І відстежувач реагує на стоврені події.

// ! Передача оргументів колбек функції відстежувача події
// ...
myEmitter.on('newUser', (userName) => {
  console.log('Hello ' + userName)
})
// ...
myEmitter.emit('newUser', 'Cat')

// ! в файлах практики ми розглядаємо, як створювати власні події та визивати їх