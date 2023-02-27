import { useState } from React
import './App.css'
import Counter from './components/Counter'
import Button from './components/Button'

// В цьому проекті, передача стану іншому компоненту через властивість
function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <Counter count={count} />
      <Button />
      <Button />
      <Button />
      <Button />
    </div>
  )
}

export default App

// Виходить, що стан/значення потрібно зберегати в батьківському компоненту для Counter і Button, а це в нас компонетт App
// Щоб додати стан, ми імпортуємо зовнішній в React useState, зовнішні компоненти ми пишемо з самого початку, а потім вже внутрішні.
// Далі: const [count, setCount] = useState(0), загально прийняте правило, змінну та функцію називати однаково, тільки з префіксом set

