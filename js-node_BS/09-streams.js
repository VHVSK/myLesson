// ! МОДУЛЬ STREAM
/**
 * Потоки!
 * Як працювати з потоками в модулях JS
 * Поток - це данні, які доступні не всі відразу, а частинами. Це позволяє працювати з великими файлами, які не поміщаються в пам'ять, або данні генеруються частинами...
 * node.js позволяє обровляти частинами.
 * Поток може існувати довго, доки не буде оброблений файл.
 * Файл можна читати частинами, можлтво не потрібно його читати весь.
 * 
 * Що можна за допомогою потоків:
 * Потоки позволяють обробляти данні частинами.
 * Часто використовуються для обробки даних з інших додатків або даних з віддалених серверів.
 *
 * * EventEmitter
 * Потоки являються екземплярами класу EventEmitter
 * Це означає, що ми можемо реагувати на певні події, які виникають при обробці даних в потоці.
 * Одне з таких подіє, є data
 *
 * ! Типи потоків
 *
 * Readable - для читання даних
 * Writable - для запису даних
 * Duplex - як для читання, так і для запису
 * Transform - дуплексний поток, який трансформує вхідні дані.
 *
 */

// ! Запис данних за допомогою потоків
const fs = require('fs')
const writeStream = fs.createWriteStream('./f.txt')

writeStream.write('This is data ')
writeStream.write('written to the file using stream!')
writeStream.write('\n')
writeStream.write('Streams are great!')

writeStream.end()

// ! Читати дані з файлу за допомогою потоків
const fs = require('fs')
// Створити поток
const readStream = fs.createReadStream('./f.txt', 'utf8')
// Подівя дані, приймає частну даних - це dataChunk
readStream.on('data', (dataChunk) => {
  console.log(dataChunk)
})
// Виненкне тоді, коли досягнемо кінця читання
readStream.on('end', () => {
  console.log('File reading comltete!')
})
// Якщо буде помилка, то буде ця подія.
// Звісно, всі ці події обробля.ться в циклі подій, який не блокує основний потік.
readStream.on('error', () => {
  console.log(err)
})

// ! Метод pipe - перенаправляю потоки
// Можна один потік, пенераправити в інший потік.
// Тобто, потік читання, можеио перенаправити в потік запису.
// Тобто, ми можемо прочитати данні з одного файлу та записати в інший.
readableStream.pipe(writeableStream)

// ! Цепочка визовів методів pipe
stream1
  .pipe(stream2) // тут pipe повертає 2 потік
  .pipe(stream3) // тут pipe повертає 3 потік

// Цей вираз рівнозначний з верхнім:
stream1.pipe(stream2)
stream2.pipe(stream3)

// ! КОПІЮВАННЯ ФАЙЛУ ЗА ДОПОГОЮ ПОТОКІВ
const fs = require('fs')
// Створити поток
const readStream = fs.createReadStream('./f.txt', 'utf8')const writeStream = fs.createWriteStream('./f_copy.txt')

readStream.pipe(writeStream)

// Щоб дізнатися про завершення запису в файл!
writeStream.on('close', () => {
    console.log('File copy completed!')
})

// ! Трансформаційний потік, створеня transform потока
const stream = require('stream')

// Transform - це клас, можна тільки його експортувати, тоді без stream створюєится екземпляр.
// Йому ми пережаємо об'єкт.
// transform - це мотод об'єкта Transform
const upperCaseStream = new stream.Transform({
    transform(chunk, encoding, callback) {
        const upperCased = chunk.toString().toUpperCase()
        // chunk - частина даних
        callback(null, upperCased)
        // callback - визивається по завершені, має бути визваний з помилкою або з трансформованою частиною потока. Якщо помилки немає, то перше значення null.
        // callback - часто пишуть cb.
    }
})

// ! Використання transform потока
// приклад з декількома потоками.
process.stdin
.pipe(upperCaseStream)
.pipe(process.stdout)

// process.stdin - поток для читання, приймає данні з терміналу
// .pipe(upperCaseStream) - трансформаційний поток
// .pipe(process.stdout) - process.stdout поток для виводу.

// Пожна протестувати в терміналі:
node> node index.js
Hello Node.js
HELLO NODE.JS
Viktor
VIKTOR

// Зверніть увагу, поток не припиняється, він чекає дані.
