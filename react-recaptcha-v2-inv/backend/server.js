const express = require('express')
const cors = require('cors')
const axios = require('axios')
require('dotenv').config()
const app = express()
const port = 8000

// reCaptcha v2 - працючий варіант
// була проблема з axios запитом, виправив за допомогою AI
// потрібно запустити сервер, трикутник вгорі праворуч...
// потрібно згенерквати ключі reCaptcha на офіційному сайті
// https://clerk.com/blog/implementing-recaptcha-in-react
// https://sl.bing.net/fX5K0TDthbo

// аналогічний варіант, тільки ключ надсилається token, то у тут змінили на token

const SITE_SECRET = process.env.SITE_SECRET
// console.log(SITE_SECRET)

app.use(cors())
app.use(express.json())

// https://expressjs.com/en/starter/hello-world.html
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/verify', async (request, response) => {
  // console.log(request.body)
  const { token } = request.body
  const { data } = await axios.post(
    'https://www.google.com/recaptcha/api/siteverify',
    null,
    {
      params: {
        secret: SITE_SECRET,
        response: token,
      },
    }
  )
  // console.log(data)
  response.send(data)
})

app.listen(port, () => {
  console.log(`Server listening at ${port}`)
})
