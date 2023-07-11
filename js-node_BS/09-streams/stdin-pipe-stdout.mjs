// import stream from 'stream'
// stream містить Transform, тому щоб потім не писати модуль stream.Transform, але ми експортуємо тільки клас { Transform }
import { Transform } from 'stream'
import fs from 'fs'

// Транформує поток який приходить до нього і далі передає данні в наступний потік:
// Transform осікує опції, це об'єкт
// upperCaseStream - повертає редаблстрим, який можна прочитати
const upperCaseStream = new Transform({
  transform: function (chunk, encoding, cb) {
    const upperCased = chunk.toString().toUpperCase()
    // console.log(upperCased) - тут буфер, а не строка
    // Буфер це тимчасове зберагння в оператівній пам'яті, тому ми .toString() щоб конвертувати з бувера і .toUpperCase() зробити заглавними!
    // Визвати коллбек функцію:
    cb(null, upperCased)
  },
})

// Це завдання, вернути строку задом наперед
const reverseStream = new Transform({
  transform(chunk, encoding, cb) {
    const arrayOfChars = chunk.toString().split('')
    const lastChar = arrayOfChars.pop()
    const reversed = arrayOfChars.reverse().concat(lastChar).join('')
    cb(null, reversed)
  },
})

// upperCaseStream читає з потоку process.stdin і поверттає редаблстрим і ми можемо перенаправити (pipe) і інший потік, наприклад для запису (process.stdout)
process.stdin.pipe(upperCaseStream).pipe(reverseStream).pipe(process.stdout)

// ! Почали урок:
// Спочатку ми запустили в косолі:
// import { stream } from 'stream'
// console.log(process)

// 09-streams node stdin-pipe-stdout.mjs
// Бачиом великий обєкт, process - доступний в любому модулі node.js
// process - містить в собі версію, це версія node.js, а також змінну env - яка містить в собі всі змінні середовища.

// Далі ми модифікували та запустили цей же файл, тут поток слідкує що ми вводимо stdin в терміналі та перенаправляє stdout:
// process.stdin.pipe(process.stdout)
// Пишемо hello
// Отримуємо hello

// Агналогічно, використовуємо поток стандарний вивід:
// process.stdin.pipe(process.stderr)

// ми можемо перенаправити ці потоки в файл.
// Це ми зробили, дивися вище коментар...
// Pipe to file:
// const filePath = './files/stdin-dump.txt';
// const writeStream = fs.createWriteStream(filePath);
// process.stdin.pipe(writeStream);
