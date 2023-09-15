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

// * use - приймає всі методи, це маршрут який покриває також всі і підмаршрути, '/users', '/users/:id' ...
// * get - очікує тільки get запит
// * post - очікує тільки post запит
// урок 152

// ! Встановлення npm nodemon
// lesson 148

// ! Middleware function in Express
// lesson 158
// Middleware - додаткові задачі (функції) в обробці запиту та відповіді.
// Функції які працють з req, res
// Наприклад, запит пройшов через частини задач:
// User -> Request  -> App -> Middleware 1 -> Middleware 2 -> Middleware 3 -> Response

// * Middleware функції зазвтичай не відправляють відповідь клієнту.
// * В любій фугнкції Middleware має бути визвана функція next()

// Функція може надіслати відповідь з любої частини, 1, 2 або 3.

// Що робить Middleware:
// 1. Виконувати любий код, далі фeнкція next
// 2. Змінювати об'єкти і передавати змінені дані, далі фeнкція next
// 3. Визвати наступну фнкцію, далі фeнкція next
// 4. Завершувати цикл запит-відповідь!

// Якщо функція next не буде визвана, то відповіді може користувач не дочекатися!

// Приклад: 
function logger(req, res, next) {
  console.log(`${req.method} request at ${req.path}`)
  next() // Або next() або закінчити цикл запит-відповідь.
}

// Як використовувати:
app.use(logger) // підключення middleware функції  вдодатку Express.js

// Використання як анонімної функції, приклад:
app.use((req, res, next) => {
  console.log(`${req.method} request at ${req.path}`)
  next() // Або next() або закінчити цикл запит-відповідь.
})

// * Middleware функції які містять логіку додатка принято виносити в окрему папку middleware

// ! MIDDLEWARE
// ! Проект Middleware - практика, урок 159
// Ініціювали проект
// * npm init -y
// Вказали автора.
// Додали експрес
// * npm i expres
// Додали nodemnon як залежність для розробки:
// * npm i -D nodemon

// Замінили в секції scripts:
"scripts": {
        "start": "node app.mjs",
        "dev": "nodemon app.mjs"
    },

// Створили файл app.mjs
// Спробували порядок слідування функцій - пороядок важливий

// * Варіант 1
// Спочатку виконається logger
// Потім app.use((req, res)...
import express from 'express'
const app = express()

// Це Middleware функція, зазвтичай вони не відправляють відповідь клієнту.
const logger = (req, res, next) => {
  console.log(req.method, req.path)
  next()
}

app.use(logger)
app.use((req, res) => res.send('This is express server'))

app.listen(5000, () => console.log('Server is listening at port 5000'))

// * Варіант 2
// Спочатку app.use((req, res)...
// logger - не виконається, так як res.send() вже надіслано!
import express from 'express'
const app = express()

const logger = (req, res, next) => {
  console.log(req.method, req.path)
  next()
}

app.use((req, res) => res.send('This is express server'))
// logger - не виконається, так як res.send() вже надіслано!
app.use(logger)

app.listen(5000, () => console.log('Server is listening at port 5000'))

// * Варіант 3
// Аналолог першому варіанту, все працює
// Можна визщивати перед контроллерами
import express from 'express'
const app = express()

const logger = (req, res, next) => {
  console.log(req.method, req.path)
  next()
}

app.use(logger, (req, res) => res.send('This is express server'))
// (req, res) => res.send('This is express server') - ЦЕ ВЖЕ МОДНА НАЗВАТИ КОНТРОЛЛЕРОМ

app.listen(5000, () => console.log('Server is listening at port 5000'))

// * Варіант 4
// Тільки для get запитів які приходять по кореневому шляху
import express from 'express'
const app = express()

const logger = (req, res, next) => {
  console.log(req.method, req.path)
  next()
}
const myFn = (req, res, next) => {
  console.log(req.method, req.path)
  next()
}

// app.get('/', logger, () => {res.send(...)})
// Можгна визивати декілька функцій.
app.get('/', logger, myFn, () => {res.send(...)})

app.use((req, res) => res.send('This is express server'))

app.listen(5000, () => console.log('Server is listening at port 5000'))

// ! morgan
// Це зовнішній npm пакет morgan
// За допомогою morgan можна логувати інформацію о запитах від клієнта!
// * npm i morgan
// Як вткористовувати:
/**
 * ...
 * import morgan from 'morgan'
 * ...
 * app.use(morgan('tiny')) // визиваємо функцію!
 * ...
 */

// * ПАРСИНГ JSON - варіант 1
// ! Практика - ПАРСИНГ JSON від клієнта без middleware
// За  допомогою postman ми надсилаємо методом ПОСТ запит JSON-ом
{
  "name": "Viktor",
  "isInstructor": false
}

// app.mjs
/**
 * ...
 * app.use(express.json())
 * ...
 */

// * Варіант 1
// Отримуємо об'єкт JS із запиту від клієнта JSON
import express from 'express'
import morgan from 'morgan'

const app = express()
app.use(morgan('tiny'))

app.use((req, res, next) => {
  let data = ''
  req.on('data', (chunk) => (data += chunk))
  req.on('end', () => console.log(JSON.parse(data)))

  next()
})

app.use((req, res) => res.send('This is express server'))

app.listen(5000, () => console.log('server is listening at port 5000'))

// * ПАРСИНГ JSON - варіант 2
// ! Практика - ПАРСИНГ JSON від клієнта з middleware, урок 162
// * Варіант  - як отримати об'єкт JSON в наступній функції, наступний приклад працює, але основну чатину можна замінити однією строкою app.use(express.json()) - дивіться фінальну версію.
// Якщо запутити цей код і надіслати йому данні, це робили за допомогою postman, спочатку тестували данні у форматі JSON, а потім тестували формою.
// Отримуємо об'єкт JS із запиту від клієнта JSON
import express from 'express'
import morgan from 'morgan'

const app = express()
app.use(morgan('tiny')) // реєструє інформацію про запит

// наступний код можна замінити app.use(express.json()) - перетворює JSON на об’єкт JS у запитах POST, PUT, PATCH
app.use((req, res, next) => { // цей об'єкт
  let data = ''
  req.on('data', (chunk) => (data += chunk))
  // req.on('end', () => console.log(JSON.parse(data))) - було
  req.on('end', () => {
    const parsedJSON = JSON.parse(data)
    req.body = parsedJSON // приклад того, як ми змінили об'єкт req, приклад: req.body
    next() // перенесли функцію сюда, щобдочекатися асинхронної відповіді, щоб дані передалися далі.
  })

  // next() - так як фугнкції асинхронні, ми не можемо отримати данні відразу, тому нам потріно перенести цю функцію трожи вище
})

// В цій функції
// app.use((req, res) => res.send('This is express server')) - було
app.use((req, res) => {
  console.log(req.body) // тепер тут доступний JSON
  return res.send('This is express server')
})

app.listen(5000, () => console.log('server is listening at port 5000'))

// ! Практика - ПАРСИНГ ФОРМИ клієнта без middleware, урок 163
// Якщо запутити цей код і надіслати йому данні, це робили за допомогою postman, спочатку тестували данні у форматі JSON, а потім тестували формою.
// Спочатку розгонутий приклад:
import express from 'express'
import morgan from 'morgan'

const app = express()

app.use(morgan('tiny'))

app.use(express.json())

// app.use(express.urlencoded({ extended: true }))
// Нижче аналог верхньої строки. Дивіться фінальну версію.
app.use((req, res, next) => {
  if (req.headers['content-type'] === 'application/x-www-form-urlencoded') {
    let data = ''
    req.on('data', (chunk) => data += chunk.toString()) // збираємо строку
    req.on('end', () => {
      const parsedFormDate = qs.parse(data) // парсимо її і отримуємо об'єкт JS
      console.log(parsedFormDate)
      next() // обробили форму і next()
    })
  } else {
    // Якщо це не форма, то просто next()
    next()
  }
  
})


app.use((req, res) => {
  console.log(req.body)
  return res.send('This is express server')
})

app.listen(5000, () => console.log('server is listening at port 5000'))

// ! npx, створення проекту
// Встановлення npx - lesson 167
// npx create react app my-app
// npx це пакет для встановлення npm пакета глобано не встановлювати, а разово встаноити та запустити, тобто викоати його.
// Перед цим потріно встаноити npx
// * npm install -g npx
// Якщо немає прав, то спробуйте з sudo
// * sudo npm install -g npx

// Щоб перевірити які пакети встанолені глобально:
// * npm list --global

// Запуск додатка фронтерн та бекенд
// запустити бекенд
// * npm run dev
// Запустити фронтенд
// * npm start

// !!!! CORS
// ! Підключення middleware для політики CORS
// Так як різні сайти, порти, тому підключення може не відбутися, вона забророняє на бекенд сервері, обробляти запити які приходять з іншим сервісів.
// Щоб вона працювала, можжна підключити функцію middleware
// Давайте встановимо npm package CORS
// https://www.npmjs.com/package/cors

// Задйемо в бекенд додаток та встановимо корс
// * npm install cors

// Далі в файлі додатка підключимо корс:
// * import cors from 'cors';
// та підключимо використовуючи app.use
// * app.use(cors());

// Як це працює?
// Перед відправкою любого гет запиту відправляється попередній запит, тоді серве відповідає, що він підтримує КОРС, тобто це налаштування НА СТРОНІ СЕРВЕРУ!!!!


