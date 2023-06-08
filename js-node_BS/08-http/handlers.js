const fs = require('fs')
const qs = require('querystring')
const comments = require('./data')

function getHome(req, res) {
  fs.readFile('./files/comment-form.html', (err, data) => {
    if (err) {
      res.statusCode = 500
      res.setHeader('Content-Type', 'text/plain')
      res.end('Server error while loading HTML file')
    } else {
      res.statusCode = 200
      res.setHeader('Content-Type', 'text/html')
      res.end(data)
    }
  })
}

function getHTML(req, res) {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  res.write('<html><body><div>')
  res.write('<h1>Greetings from the HTTP server!</h1>')
  res.write('</div></body></html>')
  res.end()
}

function getText(req, res) {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('This is plain text')
}

// http://localhost:5000/comments
// Тут ми виводимо всі пости, якщо запит черех метод GET
function getComments(req, res) {
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(comments))
}

// Тут ми додаємо пост, якщо запит через метод POST
function postComment(req, res) {
  res.setHeader('Content-Type', 'text/plain')

  // Перевіримо тип контенту
  if (req.headers['content-type'] === 'application/x-www-form-urlencoded') {
    let body = ''

    req.on('data', (chunk) => {
      body += chunk.toString()
    })

    req.on('end', () => {
      try {
        const comment = qs.parse(body)
        comments.push(comment)
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/html')
        res.write('<h1>Comment data was received</h1>')
        res.write('<a href="/">Submit one more comment</a>')
        res.end()
      } catch (error) {
        res.statusCode = 400
        res.end('Invalid Form data')
      }
    })

    // Перевіримо тип контенту
  } else if (req.headers['content-type'] === 'application/json') {
    let commentJSON = ''

    // Отримуємо данні від клієнта частинами та дописуємо в commentJSON, chunk - це частина запиту
    req.on('data', (chunk) => (commentJSON += chunk))

    // Коли всі данні отримуємо, буде подія end
    // data та end створються автоматично, тільки додай відстежувача
    req.on('end', () => {
      // try/catch на той випадок, якщо помилка при конвертації в JSON
      try {
        // Розпарсимо JSON в об'єкт JS
        // Повернемо успішний код та текст
        comments.push(JSON.parse(commentJSON))
        res.statusCode = 200
        res.end('Comment data was received')
      } catch (error) {
        // Тут повернемо помилку
        res.statusCode = 400
        res.end('Invalid JSON')
      }
    })
  } else {
    // Це не JSON формат
    res.statusCode = 400
    res.end('Data must be in the JSON format or as form')
  }
}

function handleNotFound(req, res) {
  res.statusCode = 404
  res.setHeader('Content-Type', 'text/html')
  res.end('<h1>Page not found!</h1>')
}

module.exports = {
  getHTML,
  getText,
  getComments,
  postComment,
  handleNotFound,
  getHome,
}
