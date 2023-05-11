/**
 * ! Модуль PATH
 * Позволяє працювати з шляхами до файлів та папок
 * Цей модуль враховує операціну систему при формувані шляхів
 *
 * ! З'єднати сегментів шляху
 */
const path = require('path')

const linuxP = path.join('/usr', 'node', 'app.js')
console.log(linuxP)
// /usr/node/app.js (MacOS | Linux)

const winP = path.join('D:\\', 'node', 'app.js')
console.log(winP)
// D:\node\app.js (Windows)

// ! Розрахувати абсолютний шлях
const path2 = require('path')

const result = path2.resolve('node', 'index.js')
console.log(result)
// c:\OpenServer\domains\myLesson\node\index.js
