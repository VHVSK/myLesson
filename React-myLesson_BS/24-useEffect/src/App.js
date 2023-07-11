import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [todo, setTodo] = useState(null)

  useEffect(() => {
    console.log('Callback in useEffect called')
    fetch('https://jsonplaceholder.typicode.com/todos/5')
      .then((response) => response.json())
      .then((json) => setTodo(json))
  }, [])
  console.log('App rendered')
  console.log(todo)

  // fetch('https://jsonplaceholder.typicode.com/todos/5')
  //   .then((response) => response.json())
  //   .then((json) => setTodo(json))

  // .then((json) => console.log(json))

  // Виконавшт цей код, ми побачимо в консолі об'єкт
  // Про fetch дивіться урок в JS
  // Щоб не було затримки, так як ці данні завантажуються через дейкий час, ми створити useState, яка на опчатку приймає null, далі ми отримуємо результат з сервера, далі ми доходимо до функції setTodo, далі реакт бачить зміну і знову ререндерить компонент - таким чином відбувається циклічний запит..........
  // Щоб цього позбутися, існує хук useEffect
  // Тепер, коли ми визвали useEffect в нас рендер виконався один раз.

  // Отже, при першому рендері в нас відбувається запит до сервера, і поки він відбуваєься ми продовжуємо виконання та виводимо в консоль App rendered, далі ми виводимо знаечяння todo яке поки що дорівнює null, і тільки коли ми отримали значення з сервера ми ще раз зробили рендер та вивели App rendered і значення todo яке тепер має значення об'єкт:
  // {userId: 1, id: 5, title: 'laboriosam mollitia et enim quasi adipisci quia provident illum', completed: false}

  // Також, зверніть увагу на 'Callback in useEffect called', це свідчить що вона визивається один раз

  // Як ми бачимо, в функції useEffect другим аргументом є масив, це масив залежностей, він передається при визові, і якщо він пустий (масив []), ця функція виконується тільки один раз. Тому вона не визивається повторно при житьєвому циклі компонента.

  // Наступний крок, це додати залежності та визвати її декілька разів.
  // Якщо в цьому масиві вказати змінні, то якщо ці змінні будуть змінюватися - реакт повторно буде визивати цю функцію useEffect, а в даному випадку це не потрібно, так наша задача отримати відповідь з сервра один раз.
  // Не забуваємо, що навіть при отриманні такого сомого об'єкта, в мові JS це різні обю'єкти, так змінниа містить різні посиланя на об'єкт в пам'яті, тому якщо в даному випадку вкзати цю змінну, ми знову запустимо безкінечний рередеринг.

  return (
    <div className="App">
      {/* <h1>{todo.title}</h1> буде помилка в консолі, так спочатку в нас немає значення, тому потрібно почекати ререндеринг і через перевірку && */}
      <h1>{todo && todo.title}</h1>
    </div>
  )
}

export default App

// Перейшли на сервіс https://jsonplaceholder.typicode.com/
// Який дає доступ до данних через API
// fetch - це вбудований метод в браузерах за умовчання
// Приклад застовування:
/**
 * fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
 */

// Отримуємо об'єкт:
/**
 * {
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
}
 */
