import Posts from './components/Posts'
import './App.css'

// На основі попереднього прикладу
// Переиисати метод визову fetch з методами then за допомогою asyn await
// async, await - синтаксична надбудова над промісами

function App() {
  return (
    <div className="App">
      <Posts />
    </div>
  )
}

export default App
