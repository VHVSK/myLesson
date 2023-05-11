import EventEmitter from 'events'
import fs from 'fs'

// Це просто приклад, так завичай не роблять, для подібних дій є спеціальзовані функції

const fileEmitter = new EventEmitter()

const filePath = './first.txt'

// Створити відстежувача 1
fileEmitter.on('writeComplete', () => {
  console.log(`File ${filePath} was written`)
  fs.appendFile(filePath, '\nOne more line', () => {
    fileEmitter.emit('appendComplete') // визвати подію 2
  })
})
// Створити відстежувача 2
fileEmitter.on('appendComplete', () => {
  console.log(`Appended text to the ${filePath} file`)
  fs.rename(filePath, './renamed-first.txt', () => {
    fileEmitter.emit('renameComplete') // визвати подію 3
  })
})
// Створити відстежувача 3
fileEmitter.on('renameComplete', () => {
  console.log('File was renamed') // кінець
})

// записати файл та визвати подію, щоб її зловив відстежувач
fs.writeFile(filePath, 'First file text', () => {
  fileEmitter.emit('writeComplete')
})
