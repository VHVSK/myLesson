// ! Архітектура
// node.js однопотокова
// Але завдяки libuv - написана на с++, позволяє обробляти багато запитів асинхронно

// Приклад блокуючого методу
const fs = require('fs')
const data = fs.readFileSync('./test.txt', 'utf-8')
console.log('File reading finished!')
console.log('Continue...')

// console.log('File reading finished!')
// console.log('Continue...')

// Приклад не блокуючого методу
const fs = require('fs')
fs.readFileSync('./test.txt', 'utf-8', (err, data) => {
  if (!err) {
    console.log('File reading finished!')
  }
})

console.log('Continue...')

// console.log('Continue...')
// console.log('File reading finished!')
