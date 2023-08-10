require('dotenv').config()
// or
// const dotenv = require('dotenv')
// dotenv.config()

console.log(process.env.DB_USERNAME)
console.log(process.env.DB_PASSWORD)
console.log(process.env.DB_URL)

console.log(process.env.S3_BUCKET)
console.log(process.env.SECRET_KEY)

// всі змінні середовища можна використовувати в своїх проектах
// Зі змінні не змінюються в протягом роботи додатка, по суті це константи
// process.env можна читати з любого файлу свого додатку

// ! Якщо додати свої змінні, можна за допомогою dotenv
// https://www.npmjs.com/package/dotenv

// В момент запуску будуть ініціалізовані ці константи

// Стфоримо файл .env
// вміст:
// S3_BUCKET = 'YOURS3BUCKET'
// SECRET_KEY = 'YOURSECRETKEYGOESHERE'

// запуск в консолі:
// * node index

// В даному випадку буде відповідь:
// undefined
// undefined
// undefined
// YOURS3BUCKET
// YOURSECRETKEYGOESHERE
