// EXPRESS
// Фреймворк для node.js який полегшує створення API та веб додатків.

// Переваги:
// Спрощує створеня веб додатків та АПІ, це по мсуті надбудова над HTTP та має додаткові функції
// простий у вивченні
// Публічна бібліотека
// Дуже популярний

// Встановлення
// * npm i express

// Приклад
const express = require('express') // імпорт
const { request } = require('http')
const app = express() // функція

app.get('/', function (req, res) {
  // метод get
  // req - об'єкт який описує весь запит який приходить від клієнта
  // res - об'єкт який ми пізніше надішлемо клієнту, звісно ми його можемо модивікувати.
  res.send('Hello World') // В даному випадку ми відправляємо відповідб такого типу
})

// Тепер потріно запустити додаток визвавши метод listen
// та визвати колбек функцію коди сервер успідно запуститься
app.listen(3000, () => {
  console.log(`App is listening on port ${PORT}`)
})

// ! РОУТИНГ - визначає як відповідає сервер на різні запити від клієнта.
// ...
app.httpMethod(requestPath, handlerFn)

// httpMethod - HTTP метод (get, post, delete and other) or use(all methods)
// requestPath - шлях по якому звертається клієнт, наприклад /users or /logon
// handlerFn - callbeck function, яка визивається при отримані запиту від клієнта.

// Модна додати декілька обробників:
app.httpMethod(requestPath, handlerFn, handlerFn2, ...)
// визиваються одна за одною, з ліва на право.

// ! Приклад маршрута для GET запита
app.get('/', (req, res) => {
  res.send('Hello World!') // send - відпроавка клієнту
})

// req - дані запиту від клієнта
// res - дані відповіді для клієнта

// !!! РОУТИНГ
// Відкрити папку 03 в новому вікні
// * php init -y
// * pmp install express
// create index.js
// cntl + C

// ...

// Для тестування запитів ми встановимо програму Postman

// ! Параметри маршруту
// Приклад шляшу: /users/234

// через дві крапки :
// назви вибираємо ми самі :userId

app.get('/users/:userId', (req, res) => {
  console.log(req.params) // {userId: '234'}
  console.log(req.params.userId) // '234'
})

// Приклад шляшу: /users/234/123

app.get('/users/:userId/:postId', (req, res) => {
  console.log(req.params) // {userId: '234', postId: '123'}
  console.log(req.params.userId) // '234'
  console.log(req.params.postId) // '123'
})

// ! Різні методи для одного і того самого шляху
app.get('/users', (req, res) => {
  res.send('GET req at /users path')
})

app.post('/users', (req, res) => {
  res.send('POST req at /users path')
})

// ! Агалогічно, групуючи цепочкою http методів
app
  .route('/users') // шлях вкахують тільки тут
  .get('/users', (req, res) => {
    res.send('GET req at /users path')
  })
  .post('/users', (req, res) => {
    res.send('GET req at /users path')
  })

  // ! Маршрути в окремих модулях
  // 147 lesson
  // folder Routes

  // Суть в тому, що передаємо шлях через метод use (приймає всі типи методів), а далі вже в іншому модулі розбираємо get or post