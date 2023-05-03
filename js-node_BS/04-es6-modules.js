/**
 * ES6 - стандарт який описує JS
 * Імпорт та експорт в JS появилися в 6 версії в 2015 році
 * В node.js появилася в 2019 році, в 12 версії node.js
 *
 * Це новіша т.н. ситема від CommonJS, CommonJS досить часто використовується, тому ми розглянули його раніше.
 *
 * ! Модулі ECMASCRIPT (ES6)
 * * export
 * export - це ключове слово для експорту з модуля
 * * import
 * import - це ключове слово для імпорта з іншого модуля
 * 
 * ! Який підхід використовувати
 * Потрібно використовувати один з них, бажано ES6 в нових проектах.
 * Плюсом є те, що можна імпортувати данні в ES6 з CommonJS підходу, а навпаки ні.
 *
 * ! Як перейти з CommonJS на ES6
 * - змінити розширення файлу на .mjs (module js)
 * - або додати "type": "module" в файлі package.json
 *
 * MODILE та REQUIRE - немає в ES6
 * !! УВАГА! !! В СЕРЕДИНІ МОДКУЛЯ ES6 НЕМАЄ ДОСТУПА ДО ЗМІННИХ MODILE та REQUIRE
 * Відповідно також немає і: exports, __falename, __dirname
 * І модулі ES6 не обертаються в анонімну функцію!
 * Це основні відмінності які потріфбно знати!
 *
 * ! Типи експортів в ES6
 * - іменований експорт
 * - експорт за умовчанням
 * - змішані експорти
 *
 * ! Іменовані експорти
 * Наприклад:
 */

function printHello() {
  console.log('Hello, World!')
}

function printHi() {
  console.log('Hello, Hi!')
}

export { printHello }

// Також можна вказувати декілька назв:
export { printHello, printHi }
// Порядок не важливий.

// Зверніть увагу, { printHello } - це не об'єкт, це частина синтаксису export
// Тепер функція printHello буде доступна в інших модулях які її імпортували.
// Якщо не викорстати слово export, то нічого не експортується!

/**
 * ! Іменований імпорт в ES6
 * Вказують на початку файла, ім'я та шлях, вказуєте відносний шлях
 * Також це не { printHello } і не днеструктуризація
 */

import { printHello } from './hello.mjs'

// Також можна вказувати декілька назв:
import { printHello, printHi } from './hello.mjs'

// Тепер будуть створені дві змінні які будуть доступні
// * Назви змінних мають співпадати, а порядок не важливий!
// Порядок не граєж ролі, також можна перейменовувати, трохи далі.
// Імпортувати можна тільки ті які потрібні
// Також, можна перейменувати назви при імпорті, через ключове слово as
import { printHello as greenFn } from './hello.mjs'

// ! Приклад з модулями:
// Наприклад в нас є файл в якому прописуємо константи:
// contacts.mjs
const URL = 'http://localhost'
const USERNAME = 'admin'
const PASSWORD = 'strong_pass'

export { URL, USERNAME, PASSWORD }

// index.js
import { URL, USERNAME, PASSWORD } from './contacts.mjs'

// Або частковий імпорт:
import { URL, USERNAME } from './contacts.mjs'

// !! ЕКСПОРТ ПЕРЕД ОБ'ЯВЛЕННЯМ ЗМІННОЇ
// Наприклад:
export function printHello2() {
  console.log('Hello, World!')
}

export function printHi2() {
  console.log('Hello, Hi!')
}

// Ми використовуємо фігурні дужки!

// ! ІМЕНОВАНІ ЕКСПОРТИ, практика
// Дивіться файл named-exports.mjs
// export { season, temperature };
// При такому експорті виконується весь файл.

// 2 варіант, inline-exports.mjs
// додавання на початок ключового слова export
// export const humidity = 40;

// !!! ЕКСПОРТИ ЗА УМОВЧАННЯМ
// Для цього використовуйте ключову слово default
// Приклад:
function printHello3() {
  console.log('Hello, World!')
}

// Ми не використовуємо фігурних дужок!
export default printHello3

// ! А при імпорті
// Ми не використовуємо фігурних дужок!
// В даному випадку назва printHello3 може бути іншою.
// * навза може бути іншою при імпорті за умовчанням
import printHello3 from './hello.mjs'

// Приклад експорта, експорт функції, export default getData;
// Файл default-export.mjs

// ! ОПЦІЇ ІМПОРТА
// * Перейменуваня:
// Також, можна перейменувати назви при імпорті, через ключове слово as
import { printHello as greenFn } from './hello.mjs'
// тепер функція greenFn()  буде доступна

// ! ІМПОРТ З ЗОВНІШНІХ ТА ВБЮУДОВАНИХ МОДУЛЕЙ
// Наприклад:
import express from 'express'
import fn from 'fn'

// Вище вкзаний імпорт з експортів за умовчанням, так як не має фігурних дужок

// ! Міксований імпорт з та без {}
// Дивіться файл mixed-exports.mjs
// Наприклад, маємо файл та декілька некспортів:
const USERNAME = 'admin';
const PASSWORD = 'strong-password';
const DEFAULT_SERVER = 'http://localhost';

export default DEFAULT_SERVER;
export { USERNAME, PASSWORD };

// І імпортуємо, змішані іменовані експорти:
import DEFAULT_SERVER, {
  USERNAME,
  PASSWORD
} from './mixed-exports.mjs'
// або 
import DEFAULT_SERVER, {
  USERNAME as MY_USERNAME,
  PASSWORD as MY_PASSWORD,
} from './mixed-exports.mjs'

// ! Для імпортування вбудованих модулей можна додати префікс node:
// Це також і індикатор для вас та інших
// const fs = require('node:fs')
import fs from 'node:fs'

// ! Імпорт вбудованих модулей 
// Файл built-in-module-import.mjs

// !!! КЕШУВАННЯ МОДУЛІВ
// Після завантаження та компіляції модуля, node.js кешує його!!!
// Для більш швидкого його виконання.
// Можна в обидвах підходів використовувати.

// ! Інформацію по вбудованих модулях шукати на офіційному сайті node.js