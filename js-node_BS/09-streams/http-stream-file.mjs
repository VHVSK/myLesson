import http from 'http'
import fs from 'fs'

const server = http.createServer((req, res) => {
  const filePath = './files/index.html'
  // With streams
  // Ми начнемо передавати файл клієнту як тільки ми почнемо читати його. Цей фаріант класний, якщо файл великий.
  if (req.url === '/' && req.method === 'GET') {
    const readStream = fs.createReadStream(filePath)
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    readStream.pipe(res)
    // глянемо в браузері в сторінці розробника, в network:
    // в даному випадку transfer-encoding: chunked
  }
  // Without streams. We read entire file and then send it to the client
  // Цей блок щоб протестувати передачу не частинами, як в попередньому уроці! Тут передача тільки після закінчення читання файлу.
  if (req.url === '/no-stream' && req.method === 'GET') {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.statusCode = 500
        res.end('Error reading file on server')
      } else {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/html')
        res.end(data)
      }
    })
    // в даному випадку transfer-encoding: chunked - НЕМАЄ!
  }
})

server.listen(5000, () => {
  console.log('Server is listening at port 5000')
})

// Щоб запуститии сервер, тиснемо на кодраннер та перейти в браузері на локалхост з потром 5000
