import { config } from 'dotenv'
config()

// Imports entire module including default export
// такий імпорт корисний якщо в нас може бути конфліок імен, ми таким чином створюємо свій простір імен (namespace)
// import * as dotenv from 'dotenv';
// dotenv.config();

console.log(process.env.DB_USERNAME)
console.log(process.env.DB_PASSWORD)
console.log(process.env.DB_URL)

// приклад з імпортами
