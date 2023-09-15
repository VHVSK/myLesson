import express from 'express'
import morgan from 'morgan'
// import qs from 'querystring' - цей модуль не потрібний, якщо використовуємо https://www.npmjs.com/package/qs, дивіться нижче

// Якщо запутити цей код і надіслати йому данні, це робили за допомогою postman, спочатку тестували данні у форматі JSON, а потім тестували формою.

// Якщо ми відправляємо запит методом GET, тобто не данні JSON і не форма, то req.body буде пустий об'єкт.

const app = express()

// logs info about request
// реєструє інформацію про запит
// app.use(morgan('combined')) - варіанти відповіді.
app.use(morgan('tiny'))

// converts JSON to JS Object in POST, PUT, PATCH requests
// перетворює JSON на об’єкт JS у запитах POST, PUT, PATCH
app.use(express.json()) // в результаті об'єкт JS, який надіслали як JSON на цей скрипт
// convets form data to JS Object in POST, PUT, PATCH requests
// перетворює дані форми в об’єкт JS у запитах POST, PUT, PATCH
// { extended: true } - використовується зовнішній модуль qs, https://www.npmjs.com/package/qs
// { extended: false }- використовується вбудований модуль qs
app.use(express.urlencoded({ extended: true })) // в результаті об'єкт, данні форми які надіслали на цей скрипт

// Запуск серверу
app.use((req, res) => {
  console.log(req.body) // так, ми можемо віправляти запит на сервер, щоб зберегти req.body і т.п.
  return res.send('This is express server')
})

// Порт
app.listen(5000, () => console.log('server is listening at port 5000'))
