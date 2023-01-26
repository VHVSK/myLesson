/** ЗАДАЧА 68 - Проверка наличия аргументов в вызове функции
 *
 * Измените функцию "square" так, чтобы в случае ее вызова
 * без аргумента генерировалась ошибка
 * "Функция "square" не может быть вызвана без аргумента"
 */

function square(a) {
  // Option 1
  if (a === undefined) {
    throw new Error(`Функция "square" не может быть вызвана без аргумента`)
  }
  // Option 2
  // Використовувати arguments
  // якщо arguments.length, перевіряти, якщо довжина 0, то виконувати відповідні дії
  console.log(a * a)
}

square(10)
// 100
try {
  square()
} catch (error) {
  console.log(error.message)
}

// ДО: NaN
// ПОСЛЕ: Uncaught Error: Функция "square" не может быть вызвана без аргумента
