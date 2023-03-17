import { BrowserRouter } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>React Router</h1>
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
