// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55
// 0, 1, 2, 3, 4, 5, 6, 7,   8,  9, 10 - індекс

// В цьому прикладі ми не блокуємо цикл подій, ми використовуємо cache для зберігання знайдених чисел.

setTimeout(() => console.log('Timeout'), 0)

// Стоврити кеш та записувати знайдені числа
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/Map
/**
 * const myMap = new Map([
  [1, "one"],
  [2, "two"],
  [3, "three"],
]);
 */
const cache = new Map()

function fib(n) {
  return new Promise((resolve, reject) => {
    if (n === 0 || n === 1) {
      return resolve(n)
    }
    if (cache.has(n)) {
      return resolve(cache.get(n))
    }
    setImmediate(() =>
      fib(n - 1).then((fib1) =>
        fib(n - 2).then((fib2) => {
          // додаткова оптимізація, розбили fib на два послідовних визова.
          //  зберегти знайдене число в cache
          cache.set(n, fib1 + fib2)
          resolve(fib1 + fib2)
        })
      )
    )
  })
}

fib(100000).then((res) => console.log(res))
// Infinity - дуже велике число
