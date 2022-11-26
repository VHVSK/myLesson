/** ЗАДАЧА 40 - Конвертация JSON в JavaScript объекты
 *
 * 1. Конвертируйте массив JSON объектов в массив объектов JavaScript
 *
 * 2. Выведите в консоль результирующий массив
 *
 * 3. Выведите в консоль "postId" второго объекта
 *
 * 4. Выведите в консоль "commentsQuantity" последнего объекта
 */

const postsJSON = [
  '{"postId":1355,"commentsQuantity":5}',
  '{"postId":5131,"commentsQuantity":13}',
  '{"postId":6134,"commentsQuantity":2}',
  '{"postId":2351,"commentsQuantity":8}',
]

// Перебрати масив методом МАП
// Варіант 1
// метод map повертає масив, тому ми не використовуємо в даному вмпадку foreach
const postsJS = postsJSON.map((el) => JSON.parse(el))

// Варіант 2
// Другий варіант, якщо ми передаємо те саме значення, на якому знаходиться ітерація, 
// то це короткий варіант запису, JS сам все зробить))
const postsJS = postsJSON.map(JSON.parse)

console.log(postsJS)
console.log(postsJS[2].postId)
console.log(postsJS[postsJS.length - 1].commentsQuantity)
