// Перехід\міграція з промісів на  ASYNC AWAIT

// Приклад з передпопереднього уроку
// Кастомна функція
// Щоб простити без двух промісів
const getData = (url) =>
  new Promise((resolve, reject) =>
    fetch(url)
      .then((response) => response.json())
      .then((json) => resolve(json))
      .catch((error) => reject(error))
  )

// Тепер можна визивати його безліч разів
getData('https://jsonplaceholder.typicode.com/todos/')
  .then((data) => console.log(data))
  .catch((error) => console.log(error.message))

// Тепер давайте перепишемо цю функцію на ASYNC AWAIT
// Поступово
// Запуск в термінал сторінки https://jsonplaceholder.typicode.com/ - не забуваємо

const getData = async (url) => {
  const res = await fetch(url)
  const json = await res.json()
  return json
}

// const getData = async (url) => {
//     const res = await fetch(url) - якщо тут
//     const json = await res.json() - або тут помилка, то getData буде відхилений
//     return json
// }

const url = 'https://jsonplaceholder.typicode.com/todos/'
// пам'ятайте, await працює тільки в асинхронних функція, але браузери позволяють обробляти її
const data = await getData(url) // але тут немає обробника помилки
data
// (200) [{…}, {…}, {…}, {…} …]

// ОБРОБКА ПОМИЛОК В АСИНХРОННИХ ФУНКЦІЯХ
// все що там потріно, це помістити в блок try
try {
  const data = await getData(url)
  console.log(data)
} catch (error) {
  console.log(error.message)
}

// Якщо все ок
// (200) [{…}, {…}, {…}, {…} …]

// Якщо помилка
// GET https://jsonplaceholder.typicode.com/todos/ net::ERR_INTERNET_DISCONNECTED
// Failed to fetch

// Рекомендується використовуваьти асинхронні функції
// Але бувають випадки, коли нам потріно повернути проміс, тоді ми вже використовуємо Проміси

// ОСНОВНІ МОМЕНТИ
// async/await - це сиснтаксична насбудова над промісами
// await синтакс можливий в async
// async функція завжди повертає Promise
// async очікує результат інструкції await та не виконує наступні інструкції, але інші частини нашого додатку можуть працювати
