import './App.css'
import PetInfo from './components/PetInfo'

// Ми підключили цей фунекціональний компонент
// Передамо данні,

function App() {
  return (
    <div className="App">
      <PetInfo animal="cat" age="5" />
      <PetInfo animal="dog" age="3" />
      <PetInfo animal="bird" age={2} />
    </div>
  )
}

export default App

// Таким чином ми пережаємо строку - age="5"
// Таким чином ми пережаємо число - age={2}
// також передають масиви та об'єкти
