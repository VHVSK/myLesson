import logo from './logo.svg'
import './App.css'

// Я описав дії в файлі .env.local
// Також, як виводити данні з сереверу на сторінку безпечно від XSS з виристанням serialize

// * Отже, як це працює:
// Під час розробки змінні беруться з файлу .env.local
// Під час продакшн версії змінні беруться з файлу .env.production.local

// * Спробуємо:
// Дістати змінні з файлу .env
const MY_BASE_PATH = process.env.REACT_APP_BASE_PATH
const MY_NOT_SECRET_CODE = process.env.REACT_APP_NOT_SECRET_CODE
const MY_NODE_ENV = process.env.NODE_ENV

// Скласти строку в залежності від умови процесу
const URL = `${MY_BASE_PATH}/myurl/post/new`

// Протестувати умову:
let test = ''

if (process.env.NODE_ENV !== 'development') {
  // analytics.disable()
  test = 'development if...'
}

if (process.env.NODE_ENV !== 'production') {
  // analytics.disable()
  test = 'production if...'
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{MY_NOT_SECRET_CODE}</p>
        <p>{MY_NODE_ENV}</p>
        <p>{URL}</p>
        <p>{test}</p>
      </header>
    </div>
  )
}

export default App
