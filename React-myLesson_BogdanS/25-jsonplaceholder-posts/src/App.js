import Posts from './components/Posts'
import './App.css'

// Додаток який виводить список постов
// Є функція обробки помилок
// Є функція прелоадер
// Задача вивести списаок постів з віддаленого серверу в кількості 100 шт, на основі матераілу з попереднього уроку

function App() {
  return (
    <div className="App">
      <Posts />
    </div>
  )
}

export default App
