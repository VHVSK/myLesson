import './App.css'
import RandomNumber from './components/RandomNumber'

// В цьому проекті
// Проект зі зміною стану коспонента в середині самого компонента, а також передача властивості

function App() {
  return (
    <div className="App">
      <RandomNumber maxNum={1000} />
    </div>
  )
}

export default App

// Створили компонент RandomNumber
// Долдали його в компонент App
// Длодали стилі в файли index.css and App.css

/** Маємо:
 * <div id="root">
 *  <div class="App">
 *    <div>
 *      <h1>100</h1>
 *      <button>Generate new random number</button>
 *    </div>
 *  </div>
 * </div>
 */

// Далі в файлі RandomNumber.js
