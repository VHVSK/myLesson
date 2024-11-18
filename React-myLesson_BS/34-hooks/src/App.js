import logo from './logo.svg'
import './App.css'

import { useToggle } from './hooks/useToggle'
import { Books } from './components/Books'
import { books } from './data'
import { useLocalStorage } from './hooks/useLocalStorage'

// ! По уроку МН
// ! Хуки призначеня що виносити деякий функціонал, який часто можна використати повторно, в окремий файл!
// Ми строили хук useToggle в папці hooks
// Далі використали його по аналогії як хук useState
// Пад капотом цей хук змінює значення з true на false, просто конвертує його на протилежний
// Пригодиться щоб щось приховати чи показати, включити чи виключити статус завантажегння і т.п.

function App() {
  // Цей кастомний хук змінює значення з true на false
  const [isVisible, toggleVisible] = useToggle(false)
  // Цей хук зберагіє значення в localStorage
  const [order, setOrder] = useLocalStorage([], 'order')

  const addToOrder = (id) => {
    // тут ми шукаємо в даних books співпадіння по id та метод find повертає його при співпадіні
    const newItem = books.find((item) => item.id === id)
    // тут ми перебираємо поточні танні черех спред оператор ... та додажмо нове значення
    setOrder([...order, newItem])
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <button onClick={toggleVisible}>1. Показати чи приховати</button>
        {isVisible && (
          <>
            <img src={logo} className='App-logo' alt='logo' />
            <a
              className='App-link'
              href='https://reactjs.org'
              target='_blank'
              rel='noopener noreferrer'
            >
              Learn React
            </a>
          </>
        )}
      </header>
      <div>
        <Books items={books} addToOrder={addToOrder} />
      </div>
    </div>
  )
}

export default App
