// Проміси - це, об'єкт, це обіцянка надати результат пізніше.
// також варто розглядати Async/Await - це надбудова над промісами
// Вони дозволяють обробляти відложені в часі події
// наприклад ми чекаємо відповіді від серверу, ми не знаємо коли буде відповідь
// Тут два варінати, або чекати, або щось робити інше...
// Тому, щоб мати можливість виконувати інші завдання, тому за допомогою Промісів ми можемо обробляти інші скрипти, поки ми чекаємо відповіді.
// Асинхронний запит - відповідь через дейякий час

// Повертає помилку, якщо надати результат надати не може. Або результат.

// У Проміса три стани.:
// осчікування,
// виконаний (якщо повернув результат),
// відхилений (якщо якась помилка)

// СТВОРОЕННЯ ТА ВИКОРИСТАННЯ
const myPromis = new Promise((resolve, reject) => {
  // Обовязково має два параметри resolve, reject
  // resolve - відповідь
  // reject - помилка
  // Виконання асинхронних дій в цій функції
  // В середині цієї фіункції, ПОТРІБНО визвати одну з функцій resolve або reject, обов'язвово
  // resolve ми маємо передати данні, resolve - проміс вважається виконаний
  // reject якщо десь помилдка, ми визиваємо reject, вважвється відхилений
})

// ОТРИМАННЯ РЕЗУЛЬТАТА
myPromis
  .then((value) => {
    // Дія в результатті успішного виконнання
    // value - результат проміса, передане в визові функції  resolve всередині проміса
  })
  .catch((error) => {
    // Дія у випадку видхилення проміса
    // error - значення, передане в визові функції reject всередині проміса
  })

// ВИКОРИСТАННЯ ПРОМІСІВ FETCH
// Отримання данних за допомогою fetch api (ця функція доступна тільки в браузерах)

// давайте протестуємо, відкрийте
// https://jsonplaceholder.typicode.com/
// Потренуємося за допомогою цього ресурсу
// За допомогу. цього сайту, ми можемо відправляти данні і отримувати відповіді в форматі JSON

/*
        // Приклад з сайту
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))

        // рузультат відповіді
        {
            "userId": 1,
            "id": 1,
            "title": "delectus aut autem",
            "completed": false
        }
        */

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((error) => console.error(error))

// fetch - створюється проміс, fetch повертає проміс, при відправки він в стані очікування
// поки він в очікуванні - ніякі функції .then не виконуються
// Якщо сервер  поверне відповідь, то видветься:
// .then(response => response.json())
// Цій функції передасться відповідь
// ми отримали відповідь та призначити response

// далі ми визвали метод response.json()
// Тобто розпарсили, і також отримали проміс
// і ще раз визиваємо .then:
// .then(json => console.log(json))
// Знову відповідь призначили json - console.log(json)

// .catch(error => console.error(error)) - на той випадок якщо була помилка, тобто відклонений запит, їх бажано додавати, щоб не було необроблених помилок

// ПРАКТИКА
// Відкрити консолдь браузера на https://jsonplaceholder.typicode.com/

// Написати
fetch // бачимо що це функція
// написати
fetch('https://jsonplaceholder.typicode.com/todos')
/* бачо проміс, PromiseState = fulfilled
        // Тобто є якийсь результат, але я його не бачу, бо не визвали .then

        Promise {<pending>}
        [[Prototype]]: Promise
        [[PromiseState]]: "fulfilled"
        [[PromiseResult]]: Response
        */

// МАЄМО ТАКИЙ ПРИКЛАД:
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then((response) => {
    console.log(response)
    return response.json()
    // return явно повертає результат
  })
  .then((json) => console.log(json))
  .catch((error) => console.error(error))

// Перед тим як визвати, давайте перейдемо в терміналі в папку з файлом index.js
// cd .\files\
// В файл index.js помістити веще наведений код
//  В мерміналі, в node "з коробки" fetch не працює, тому потріні npn пакети.

// тест при вирішені пробелми з авторизацією:
fetch('google.accounts.id.initialize')
  .then((response) => {
    console.log(response)
  })
  .catch((error) => console.error(error))

// Тому запускаємо в консолі браузера тільки частину наведеного вище коду:
fetch('https://jsonplaceholder.typicode.com/todos/1').then((response) => {
  console.log(response)
  return response.json()
  // return явно повертає результат
})

/* 
        маємо відповідь Response, 
        status = 200, це значить все ок
        body: ReadableStream - тому потріно далі розібрати відповідь

        Response {type: 'basic', url: 'https://jsonplaceholder.typicode.com/todos/1', redirected: false, status: 200, ok: true, …}
        body: ReadableStream
        locked: true
        [[Prototype]]: ReadableStream
        bodyUsed: true
        headers: Headers {}
        ok: true
        redirected: false
        status: 200
        statusText: ""
        type: "basic"
        url: "https://jsonplaceholder.typicode.com/todos/1"
        [[Prototype]]: Response
        */

// ТЕПЕР ВВЕСТИ ВЕСЬ ПРИКЛАД
// Відповідь  - 200 масивів
fetch('https://jsonplaceholder.typicode.com/todos')
  .then((response) => {
    console.log(response)
    return response.json()
    // return явно повертає результат
    // Повертає весь об'єкт
  })
  .then((json) => console.log(json)) // Повертає розібрані данні у форматі JSON
  .catch((error) => console.error(error))

/*Response {type: 'basic', url: 'https://jsonplaceholder.typicode.com/todos', redirected: false, status: 200, ok: true, …}
        VM37:8 (200) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, …]*/

// Масив з один об'єктом
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then((response) => {
    console.log(response)
    return response.json()
    // return явно повертає результат
    // Повертає весь об'єкт
  })
  .then((json) => console.log(json)) // Повертає розібрані данні у форматі JSON
  .catch((error) => console.error(error))

/*
        Тепер маємо ще і потріну нам частину відповіді:
        {userId: 1, id: 1, title: 'delectus aut autem', completed: false}
        */

// ПРАКТИКА З ВІДХИЛЕННЯМ ПРОМІСІВ
// В консолі браузера
// Зайти в Мережу, та вибрати з випадаючого смиску налаштувань: не в мережі
// Запустити код
fetch('https://jsonplaceholder.typicode.com/todos/5')
  .then((response) => response.json())
  .then((json) => console.log(json)) // Повертає розібрані данні у форматі JSON
  .catch((error) => console.error(error))

// Маємо помилку TypeError: Failed to fetch
// Яку вивели цією колбек ф-єю: .catch(error => console.error(error)), ми зловили цю помилку

/*
    Promise {<pending>}
    GET https://jsonplaceholder.typicode.com/todos/5 net::ERR_INTERNET_DISCONNECTED
    TypeError: Failed to fetch
    at <anonymous>:1:1
*/

// Можна вивести тільки текст обєкта error
fetch('https://jsonplaceholder.typicode.com/todos/5')
  .then((response) => response.json())
  .then((json) => console.log(json)) // Повертає розібрані данні у форматі JSON
  .catch((error) => console.error(error.message))

// Failed to fetch

// ВИЗОВ fetch В СЕРЕДИНІ ПРОМІСА
// Задача цього прикладу, упростити визов верхнього прикладу
// Кастомна функція
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

getData('https://jsonplaceholder.typicode.com/todos/3')
  .then((data) => console.log(data))
  .catch((error) => console.log(error.message))

// Тобто, ми створили свій власний проміс, ніби функція, якій передаємо посилання, а в результаті отримуємо тільки два значення, відповідь або помилку
// в data попадає resolve(json)
// error попадає reject(error)

// Існують також і інші бібліотеки які полегшують
// Як варіант, можна джодати в свій можуть приклад вище - getData, та визивати його при необхідності
