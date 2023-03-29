import fs from 'fs'

fs.appendFile('my-file.txt', 'File created Node.js!', (err) => {
  if (err) throw err
  console.log('File created!')
})

// Створити файл та записати в нього текст
// Якщо помилка ми виведемо її
// Якщо все гаразд, ми виведемо: Файл збережений!

// Щоб зробити аналіз контейнера, можна модивікувати скрипт, наприклад додати settimeout
setTimeout(() => console.log('End setTimeout!'), 30000)

// Зверніть увагу, на нашому компютері йього файлу немає, він створений в самому контейнері!
