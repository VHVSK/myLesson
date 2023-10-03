// Асинхронні функції
// ASYNC/AWAIT
// Це синтаксис, призначений для спрощеної роботи з промісами, Async/Await - це надбудова над промісами
// з'явився в ЕС6

// Асинхронна функція, так як вказано async
async function asyncFn() {
  // Завжди повертає проміс
}

// Інший варіанти запису
const asyncFn = async () => {
  // Завжди повертає проміс
  // і виконує resolt проміса і в якості результата функції resolt буде строка в даному прикладі
  return 'Success!'
  // Promise {<fulfilled>: 'Success!'}
  //[[PromiseState]]: "fulfilled"
}

asyncFn()

// Тепер ще додамо метод
asyncFn().then((value) => console.log(value))
/*
  Success!
  Promise {<fulfilled>: undefined}
  */

// Перепише функцію, але вже в варіаном повернення помилки
const asyncFn = async () => {
  throw new Error('There was an error!')
}

asyncFn()

/*
  Promise {<rejected>: Error: There was an error!
  at asyncFn (<anonymous>:2:19)
  at <anonymous>:4:9}

      [[PromiseState]]: "rejected" відхилений
  */

// Звісно, щоб піймати її нам потріно використовувати матод
// щоб коректно опрацювати помилку

asyncFn()
  .then((value) => console.log(value)) // успіх
  .catch((error) => console.log(error.messahe)) // пимилка

// Тобто, нам не потріно визивати функції resolt, reject, але не явно, буде визов цих функцій...!!!

// ВИКОРИСТАННЯ AWAIT

const asyncFn = async () => {
  // тобто, можна очікувати результата іншого проміса, тим самим виконувати асинхронні функції
  // await тільки в async
  // await може бути визваний декілька разів
  await _Promise_
}

asyncFn()

// Приклад
async function fetchData(url) {
  try {
    const response = await fetch(url)
    return response.json()
  } catch (error) {
    console.log(error)
  }
}

const url = 'https://jsonplaceholder.typicode.com/posts'

fetchData(url).then((data) => {
  console.log(data)
})

// Прикалад
const timerPromise = () =>
  new Promise((resolve, reject) => setTimeout(() => resolve(), 2000))

const asyncFn = async () => {
  console.log('Timer starts!')
  const startTimer = performance.now()
  // функція зупиняэться, поки не буде виконаний await
  await timerPromise()
  const startEnd = performance.now()

  console.log('Timer ended:', startEnd - startTimer)
}

asyncFn()
/*
    Timer starts!
    Promise {<pending>}
    Timer ended: 2158.2000000476837
*/
