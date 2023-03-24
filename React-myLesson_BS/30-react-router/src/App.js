import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="*" element={<h1>Not Found (404)</h1>} />
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="about" element={<h1>About</h1>} />
          <Route path="contacts" element={<h1>Contacts</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App

// Імпортуємо BrowserRouter
// import { BrowserRouter } from 'react-router-dom'

// Веб сторінка:
// https://reactrouter.com/en/main/router-components/browser-router

// Проведемо тест:
// http://localhost:3000/react-router?q=react#test
// І тапер в компонентах браузера ми бачимо об'єкт і hash, pathname, search:
/**
 * location {
  { hash: "#test", key: "default", pathname: "/react-r…"}
  hash:"#test"
  key:"default"
  pathname:"/react-router"
  search:"?q=react"
  state:null
  new entry: ""
  navigationType:
}
 */

// Завдяки тому, що ми обернули наш додаток в компонент BrowserRouter, ми має мо доступ до об'єкта location, який містить в собі значення шляху /, query string ?, хеш #
// А також доступ до методів навігації navigator, такі як push, replace
// Завдяки цьому, ми можемо самостійно виконувати навігіцію між сторінками, в середині наших компонентів

// Імпортували import { BrowserRouter, Routes, Route } from
/** Прописали:
 * <div className="App">
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
        </Routes>
      </div>
 */

// Додали ще два маршрута:
// <Route path="about" element={<h1>About</h1>} />
// <Route path="contacts" element={<h1>Contacts</h1>} />

// Додали ще маршрут для неіснуючих сторінок
// <Route path="*" element={<h1>Not Found (404)</h1>} />

// Порядок маршрутів в V6 версії не важливий
