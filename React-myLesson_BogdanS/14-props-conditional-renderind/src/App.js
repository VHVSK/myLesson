import './App.css'
import PetInfo from './components/PetInfo'
import PetInfo2 from './components/PetInfo2'

// Ми підключили цей фунекціональний компонент
// Передамо данні,

function App() {
  return (
    <div className="App">
      <PetInfo animal="cat" age="5" hasPet={true} />
      <PetInfo animal="bird" age={2} hasPet />
      <PetInfo hasPet={false} />
      <PetInfo2 animal="dog" age="3" hasPet={true} />
      <PetInfo2 animal="dog" age="3" hasPet={false} />
    </div>
  )
}

export default App

// Таким чином ми пережаємо строку - age="5"
// Таким чином ми пережаємо число - age={2}
// також передають масиви та об'єкти
// значення hasPet можна опускати або писати значення hasPet={true}

// PetInfo2 - другий варіант виводі, тернарний оператор в JSX
