import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'
import Button from './components/Button'

// В цьому проекті, передача стану іншому компоненту через властивість
// На основі проекту номер 12
// задача, створити кнопку яка скидає рахунок натискань
// Використовувати умову И

function App() {
  const [count, setCount] = useState(0)
  const incrementCount = () => {
    setCount(count + 1)
  }

  const resetCount = () => {
    setCount(0)
  }

  const texts = ['Click me', 'Click me please', 'Hit me', 'Press me']
  const buttonStyle = { backgroundColor: 'yellow' }

  return (
    <div className="App">
      <Counter count={count} />
      {texts.map((text, index) => {
        return (
          <Button onClickFunction={incrementCount} text={text} key={index} />
        )
      })}
      {/* Додали кнопку Reset, ... button - вбудований коспонент (з маленької букви)
          В Реакт можна додавати стилі прямо в JSX коді, для цього потрібно передати об'єкт у виразі JS, виразом JS має бути об'ект, тому тут 2 пари фігурних дужок. напр.^
          <button style={{ backgroundColor: 'yellow' }}>Reset</button>
          
          Другий варіант, це створити змінну зі значеннями та передати її. наприклад: 
          const buttonStyle = { backgroundColor: 'yellow' }
          <button style={buttonStyle}>Reset</button>

          Але у великих проектах так не рекомендують робити, там потрібно створювати окремі файли з таблицями стилів та підклюсати їх!

          Далі наша задача додати обробку події onClick, яка приймаж фуннкцію скидання resetCount
      
      */}
      {/** 1 варіант
       * Щоб написати умова І потрібно написати в фігурних дужках, так ми будемо писати код JS
       * Операнд && операнд, оператор && - це оператор короткого замикання, тобто якщо знаходиться перший ФАЛЬШИВИЙ то наступні не аналізуються.
       */}
      {count > 0 && (
        <div>
          <button style={buttonStyle} onClick={resetCount}>
            --- Reset, opt. 1 ---{' '}
          </button>
        </div>
      )}

      {/**
       * 2 варіант
       * Додати логічний операт заперечення у вигляді двох знаків оклику. Якщо додати !! то ми зможемо конвертувати значення змінної count в логічне true or false
       */}
      {!!count && (
        <div>
          <button style={buttonStyle} onClick={resetCount}>
            --- Reset, opt. 2 ---{' '}
          </button>
        </div>
      )}
    </div>
  )
}

export default App
