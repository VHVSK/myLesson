const express = require('express')

const app = express()

app.get('/', (req, res) => res.send('Response from Express'))

app.listen(5000, () => console.log('Server was started on port 5000'))

// Зупстили скрипт
// Відкрили http://localhost:5000/
// Відкрили консоль на вкладку Нетворк, бачимо статус 404, оносити і бачимо статус 403 (повторна, така сама відповідь). Відмітити Disabled cahs - бачимо статус 200, тиснемо на результат і бачимо тип контенту: text / html charset = utf - 8 - і так, express сам встановив цей тип контенту, нам нічого не потріно було робити для цього.

// Якщо перейти на Гітхаб express, і розібратися, то express функція listen, працюжє з http, працювати черех http, це майже те саме що app.listen...(типу того)

// Якщо визвати http://localhost:5000/fdsfds
// Маємо відпоідь з кодом 404. Якщо проаналізувати, то http закунчує по тайм ауту, поки не вийде час, а express відповідає відразу. (це одна з переваг express)
