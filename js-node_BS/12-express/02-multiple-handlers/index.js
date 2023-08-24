const express = require('express')

const app = express()

const firstHandler = (req, res, next) => {
  // res.send('Response from Express') - якщо тут надіслати відповідь, то ми не дійдемо до secondHandler
  console.log('first handler')
  // next - щоб не зависнути на цій функції і перейти до secondHandler, потрібно передати третій параметр next, зазвичай її так називають, і визвати next()
  // Тобто, в кожній функції крім олстанньої потріно передвати третій парамтр та визивати next()
  next()
}
const secondHandler = (req, res) => {
  console.log('second handler')
  res.send('Response from Express')
}

app.get('/', firstHandler, secondHandler)

app.listen(5000, () => console.log('Server was started on port 5000'))
