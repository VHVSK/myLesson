// ОБРОБКА ПОМИЛОК
// під час помилки, виконання коду зупиняється, під час виконання коду помилки
// Якщо ми вокристовуємо такий варіат визова помилки, ми ще маємо зробити відповідну обробку помилок try/catch
const fnWithError = () => {
  throw new Error('Some error!')
}

// fnWithError() // для тесту потріно розблокувати
/// console.log('Continue...')

// Отримаємо відповідь в консолі браузера:
// VM39:3 Uncaught Error: Some error!
// at fnWithError (<anonymous>:3:15)
// at <anonymous>:6:5

// Зверніть увагу, ми не побачили Continue...

// TRY/CATCH
// Приклад
try {
  fnWithError()
  // Виконання блоку коду
  // Якщо тут помилка, то буде виконаний другий код блоку
} catch (error) {
  // Саме цей код буде виконаний, якщо в блоку try буде помилка
  console.error(error) // вивід цілої помилка
  console.log(error.message) // вивід тільки повідомлення
}
console.log('Continue...')

// Отримаємо відповідь в консолі браузера:
// Some error!
// VM43:10 Continue...

// Зверніть увагу, ми !побачили Continue...
