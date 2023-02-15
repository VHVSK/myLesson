// LESSON 3.6
// Змінні дають можливість повторно використовувати значення
// Можна перезаписувати змінні

// Назви змінних
// можна будь які назви
// Але є рекомеендації

// Три варінати назв для змінних:
// 1. PascalCase - назви для типів та класів. Перша буква велика.
// 2. DB_PASSWORD - знічення відомі до запуска та не міняються, щось типу констант. наприклад змінна яка містить пароль.
// 3. camelCase - всі інші змінні. Перша буква маленька.

// також вони мають бути зрозумілі, наприклад myName, myPassword

// Змінні. Об'явлення змінни
// let, const, var
// let - можна переприсвоювати, можна об'явити, а потім задати значення
// const - створення та присвоювання одночасно!!!
// var - вже не рекомендується використовувати

let a // об'явлення змінної, зараз undefined (значення відсутне)
const c = 10 // об'явлення змінної константи та присвоєння значення
a = true // присвоєння значення

// Відкриємо консоль в браузері та спробуємо цей код
// const не можна змінювати знячення
console.log(b) // error
let b
console.log(b) // undefined
b = true
console.log(b) // true
