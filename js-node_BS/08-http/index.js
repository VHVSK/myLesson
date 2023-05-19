const http = require('http')
const {
  getHTML,
  getText,
  getComments,
  handleNotFound,
  postComment,
  getHome,
} = require('./handlers')

const PORT = 5000

// Маємо об'єкт сервер
// запускаємо http на локальному комп'ютері
const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    return getHome(req, res)
  }
  if (req.method === 'GET' && req.url === '/html') {
    return getHTML(req, res)
  }
  if (req.method === 'GET' && req.url === '/text') {
    return getText(req, res)
  }
  if (req.method === 'GET' && req.url === '/comments') {
    return getComments(req, res)
  }
  if (req.method === 'POST' && req.url === '/comments') {
    return postComment(req, res)
  }

  handleNotFound(req, res)
})

// Визавати метод об'єкта
// Запускає цикл подій та очікує подіє події
server.listen(PORT, () => {
  console.log(`Server was launched on port ${PORT}`)
})
