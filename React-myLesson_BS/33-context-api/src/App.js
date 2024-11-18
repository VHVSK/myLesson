import { useState } from 'react'
import './App.css'
import User from './components/User'
import UserContext from './context/UserContext'
import ChangeUser from './components/ChangeUser'

// Context API позволяє не викоритостовувати варіат передачі данних через цепочки компонентів

function App() {
  const [user, setUser] = useState('Viktor')
  return (
    // 1) звичайні данні
    // <UserContext.Provider value={user}>
    // 2) в якості об'єкта, використовуємо скорочений запис імені властивостей в об'єкті
    // <UserContext.Provider value={{ user, setUser }}>
    // 3) змінили назви
    <UserContext.Provider value={{ userName: user, changeUserName: setUser }}>
      <div className='App'>
        <User />
        <ChangeUser />
      </div>
    </UserContext.Provider>
  )
}

export default App

// Щоб використовувати UserContext, нам потрібно обентути App в UserContext.Provider та передати value={user}
// А далі, всі дочірні компоненти будуть мати доступ до value
// Далі у файлі UserInfo.jsx

// Створимо новий компонент <ChangeUser />
// Далі в файлах UserInfo та ChangeUser ми підключилися до контексту використовуючи UserContext, тільки в UserInfo ми використовуємо тільки user, а в ChangeUser ми використовуємо user та setUser, щоб при натискані ми могли змінювати стан.
