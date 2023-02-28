import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'
import Button from './components/Button'

// В цьому проекті, передача стану іншому компоненту через властивість
function App() {
  const [count, setCount] = useState(0)
  const incrementCount = () => {
    setCount(count + 1)
    // console.log(count) // на цьому єтапі ще старе значення
  }
  // console.log(count) // на цьому єтапі ВЖЕ НОВЕ значення, це говорить про те, що ОНОВЛЕННЯ ВІДБУВАЮТЬСЯ АСИНХРОННО

  const texts = ['Click me', 'Click me please', 'Hit me', 'Press me']

  return (
    <div className="App">
      <Counter count={count} />
      {/* <Button count={count} onClickFunction={setCount} /> було */}
      {/* Цей код ми переробили на перебор методом map/. Спочатку винесли всі Button в масив texts, далі визвали texts.map(), а в Button.js додали в аргументи text та в код {text}.
      Але в консолі а нас: Warning: Each child in a list should have a unique "key" prop.
      Тому потрібно вказати ключ key, тому длодали другий аргумент до методжа map - index, а також додали key={index} в Button. Наскільки я зрозумів, key для віртуального дом.

      <Button onClickFunction={incrementCount} />
      <Button onClickFunction={incrementCount} />
      <Button onClickFunction={incrementCount} />
      <Button onClickFunction={incrementCount} /> */}
      {texts.map((text, index) => {
        console.log(index)
        return (
          <Button onClickFunction={incrementCount} text={text} key={index} />
        )
      })}
    </div>
  )
}

export default App

// Виходить, що стан (значення) потрібно зберегати в батьківському компоненту для Counter і Button, а це в нас компонетт App
// Щоб додати стан, ми імпортуємо зовнішній в React useState, зовнішні компоненти ми пишемо з самого початку, а потім вже внутрішні.
// Далі: const [count, setCount] = useState(0), загально прийняте правило, змінну та функцію називати однаково, тільки з префіксом set

// До Counter додали count={count}, а в самому файлі відразу деструктуризували аргументи { count }, та додали в {count} <h1>Total clicks: {count}</h1>
// До Button додали: <Button count={count} onClickFunction={setCount} />
// та в Button.js відрузу деструктуризували параметри { count, onClickFunction }
// а також додали: onClick={() => onClickFunction(count + 1)}
// (цей абзац ми переписали на наступний)

// Але, такий варіант не рекомендується, кнопкам не обо'вязково знати стан батьківського елемента, тому нам потрібно цзолювати станн від кнопок. Щоб це зробити, нам потрібно сткорити фонкцію в App, яка буде приймати стан та збільшувати його, а кнопки будуть лише визивати цю функцію.
// Тобто, ми можемо впливати на батькіський компонент з дочірнього!
// Також, виносити цю функцію з функції App не потрібно, так як вона безпосередньо впливає на цей компонент App
// в Button.js ми видалии count={count}, а також переписали onClick={onClickFunction}

// Далі ми перевірили черговіть виконання, також виявили таку властивість, що у ВІРТУАЛЬНОМУ ДОМ оновлюються всі дочерні елементи (коспоненти), а в РЕАЛЬНОМУ ДОМ тільки змінються значення (те що змінилося, в даному випадку число яке вказує на кількість кліків.)
