import fs from 'fs'
import path from 'path'

// Копіювати папку з файлами і іншу папку за допогою потоків

const sourceDir = './files'
const destinationDir = './copied-files'

// Якщо немає папки, вийти з програми
if (!fs.existsSync(sourceDir)) {
  console.warn(`Source dir ${sourceDir} doesn't exist!`)
  console.log('Exiting...')
  process.exit(0) // 0 - корекстне завершення програми
}

// Якщо є така папка, то видалити якщо існує
if (fs.existsSync(destinationDir)) {
  //   fs.rmdirSync(destinationDir, { recursive: true, force: true })
  //   В нових версіях:
  fs.rmSync(destinationDir, { recursive: true })
}
// Тепер стоврити
fs.mkdirSync(destinationDir)

// Читаємо всі файли в певній папці
fs.readdir(sourceDir, (err, fileNames) => {
  if (err) {
    console.log(err)
    process.exit(1) // 1 - НЕ корекстне завершення програми
  }

  // Час старту
  console.log('Start', performance.now())

  // маємо назви файлів fileNames
  fileNames.forEach((fileName, index) => {
    // маємо нахзву файла fileName та інтекс index
    // шлях до цільового файлу
    const sourceFilePath = path.join(sourceDir, fileName)
    // Шлях куди копіюємо та назву нового файлу
    const destinationFilePath = path.join(
      destinationDir,
      `${index + 1}. ${fileName}`
    )

    // потоки
    const readFileStream = fs.createReadStream(sourceFilePath)
    const writeFileStream = fs.createWriteStream(destinationFilePath)

    // виконати перенаправлення
    readFileStream.pipe(writeFileStream)

    // Фініш одного файлу
    writeFileStream.on('finish', () => {
      console.log(`File ${fileName} was copied`)
    })
  })

  // Фініш!
  console.log('End', performance.now())
})
