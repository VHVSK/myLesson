// How to run program: node createfile.mjs <filename> <linesQty>
import fs from 'fs'
import path from 'path'

// ! Створювати файли, читати аргументи, в аргументах назва файлу та кількість строк
// Щоб запустити файл, в терміналі:
// *

// вийти якщо немає 2 та 3 аргнумента
if (!process.argv[2] || !process.argv[3]) {
  console.log('Filename and lines qty must be supplied as arguments')
  process.exit(0)
}

// Мажмо назву файлу та число
const fileName = process.argv[2]
const linesQty = parseInt(process.argv[3])

// Перевіримо, якщо це не число то вийти!
if (isNaN(linesQty)) {
  console.log('Lines qty must be a number')
  process.exit(0)
}

// Записування данних в потоці
const writeStream = fs.createWriteStream(path.join('./files', fileName))

console.log('Start', performance.now())

for (let i = 1; i <= linesQty; i++) {
  // write також можна було б переписати на проміси, щоб не блокувати цикл подій, але не в цьому прикладі
  writeStream.write(
    `This is a line number ${i} in the automatically generated file\n`
  )
}
console.log('End', performance.now())
setTimeout(() => console.log('Timeout', performance.now()), 0)

writeStream.end(() => {
  console.log(
    `Automatically generated file ${fileName} with ${linesQty} lines was created!`
  )
})

// process.argv - в масиві argv знаходяться всі аргументи
// console.log(process.argv)
/**
 * [
  'C:\\Program Files\\nodejs\\node.exe',
  'c:\\....\\domains\\myLesson\\js-node_BS\\09-streams\\create-file.mjs'
]
 */

/**
 * Щоб щапустити:
 * PS C:\...\domains\myLesson\js-node_BS\09-streams> node create-file.mjs files.txt 200
Start 35.69040012359619
End 39.73329997062683
Timeout 41.07820010185242
Automatically generated file files.txt with 200 lines was created!
 */
