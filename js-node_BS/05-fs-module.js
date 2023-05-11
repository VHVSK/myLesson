/**
 * ! МОДУЛЬ FS ДЛЯ РОБОТИ З ФАЙЛОВОЮ СИСТЕМОЮ
 * В цьому модулі доступні як синхронні так і асинхронні функції
 * Асинхронні, щоб не блокувати цикл подій на довгий час, щоб не блокувати виконання інших функцій.
 *
 * ! Пишіть асинхронно!
 * - основна задача навчитися писати асинхронно!
 *
 * ! Підходи, стилі виконання модулів FS
 * - Callback API (включає в себе асинхронні функції)
 * - Promise API (включає в себе асинхронні функції)
 * - Synchronous API
 *
 *
 * ! Як оприділити які функції використовуються
 * По словам!
 * async:
 * - readFile
 * - wfiteFile
 * - unlink
 *
 * sync:
 * - readFileSync
 * - writeFileSync
 * - unlinkSynk
 */

/**
 * ! ЧИТАННЯ, 3 варіанти
 * ! Читаємо файл, варіант з колбеком
 */

const fs = require('fs')

// ./ можна не писати, але краще писати, щоб явно вказати, що шекамо в цій же директорії.
// err - помилка, data - данні
// Якщо немає помлки, то err буде null
// utf-8 - хочемо читати в текстому форматі, а не бінарному
fs.readFile('./file.txt', 'utf-8', (err, data) => {
  if (err) {
    console.log(err)
  } else {
    console.log(data)
  }
})

// ! Читаємо файл, варіант з промісами
const fs = require('fs/promises')

fs.readFile('./file.txt', 'utf-8')
  .then((data) => {
    console.log(data)
  })
  .catch((error) => console.log(error))

// При необхідності можна використовувати async/awаit, це синтаксична надбудова над промісами.

// ! Читаємо файл, синхронний варіант
// Цей варіант блокує виконання інших процесів
// тому не рекомендується, личе в не навантажених додатках
const fs = require('fs')

try {
  const data = fs.readFileSync('./file.txt', 'utf-8')
  console.log(data)
} catch (error) {
  console.log(error)
}
// try/catch - щоб перевірити помилки.

/**
 * ! ЗАПИС, 3 варіанти
 * ! Запис в файл, варіант з колбеком
 */

const fs = require('fs')
const dataToWrite = 'Hello Node.js'

fs.write('./file.txt', dataToWrite, (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log('Записано!')
    // Тепер можна виконувати подільші операції які пов'язані з закінченням записом.
    // інші операції повязані з зікінченням запису в файл
    // Інакше, вони можуть виконатися до завершення запису
    // Якщо велика цепочка вкладень, то такий ваірант не дуже читаємий
  }
})

// ! Запис в файл, варіант з промісими
const fs = require('fs/promises')
const dataToWrite = 'Hello Node.js'

fs.writeFile('./file.txt', dataToWrite)
  .then(() => console.log('done'))
  .catch((error) => console.log(error))

// В колбек функціях then та catch варто робити операції пов'язані з закінченням запису в файл.

// ! Запис в файл, варіант синхронний
// Цей варіант блокує виконання інших процесів
const fs = require('fs')
const dataToWrite = 'Hello Node.js'

try {
  fs.dataToWrite('./file.txt', 'utf-8')
  console.log('done')
} catch (error) {
  console.log(error)
}

/**
 * ! ВИДАЛЕННЯ, 3 варіанти
 * ! Видалення файлу, варіант з колбеком
 */
const fs = require('fs')
fs.unlink('./file.txt', (error) => {
  if (error) {
    console.log(error)
  }

  console.log('file deleted')
})

// ! Видалення файлу, варіант з промісими
const fs = require('fs/promises')

fs.unlink('./file.txt')
  .then(() => console.log('file deleted'))
  .catch((error) => console.log(error))

// ! Видалення файлу, варіант синхронний
// Цей варіант блокує виконання інших процесів
const fs = require('fs')

try {
  fs.unlinkSynk('./file.txt')
  console.log('File deleted')
} catch (error) {
  console.log(error)
}

// ! ВСІ ПОТЕНЦІЙНІ ПОМИЛКИ ПОТРІБНО ЛОВИТИ, БО ДОДАТОК БУДЕ ЗУПИНЕНИЙ!
// ! Всі функції з суфіксом ...Synk - блокуютьтся в соновному потоці без бібліотеки libuv
