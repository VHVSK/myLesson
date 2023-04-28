// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55
// 0, 1, 2, 3, 4, 5, 6, 7,   8,  9, 10 - індекс

setTimeout(() => console.log('Timeout'), 0)

function fib(n) {
  // Повернути проміс
  return new Promise((resolve, reject) => {
    if (n === 0 || n === 1) {
      // Повернемо функцію resolve замість значення
      return resolve(n)
    }
    // Отже, визиваємо джвісчі асинхронно функціяю fib(), але так як fib() повертає проміс, то нам потрібно почекати обох визовів, тому використаємо метод all() і ми отримуємо масив промісів, далі метод then() і деструктуризація fib1 та fib2, і далі вже сумуємо
    setImmediate(() =>
      Promise.all([fib(n - 1), fib(n - 2)]).then(([fib1, fib2]) =>
        resolve(fib1 + fib2)
      )
    )
  })
}

// JavaScript Promise - результат операції, яка ще не завершена, але буде в якийсь невизначений момент в майбутньому. Прикладом такої операції є мережевий запит. Коли ми витягуємо дані з деякого джерела, наприклад з API, для нас немає ніякого способу абсолютно визначити, коли буде отримано відповідь.

// resolve(value) возвращает Promise выполненный с переданным значением

// setImmediate() Цей метод використовується для розриву тривалих операцій і запуску функції зворотного виклику відразу після завершення браузером інших операцій, таких як події та оновлення дисплея.

// Heap out of memory, при індексі 40
// визиваємо так, бо функція повертає проміс
fib(10).then((res) => console.log(res))

// попередній fibonacci.js
// Аналогічно, ЦЕЙ ВАРІАНТ РЕАЛІЗЦІЇ ФУНКЦІЇ ДУЖЕ ЗАТРАТНИЙ І ПРОБЛЕМНИЙ, ТАК ЯК ВИМАГАЄ БАГАТО ПАМ'ЯТІ, МИ ВИРАХОВУЄМО КОЖНЕ ЧИСЛО ПО БАГАТО РАЗІВ
// Але при цьому ми ВЖЕ НЕ блокуємо визов setTimeout()
// наступний більш оптимальний, наступний fibonacci-with-cache.js
