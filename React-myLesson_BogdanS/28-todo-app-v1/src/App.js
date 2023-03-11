import { useState } from 'react'
import './App.css'
import TodoForm from './components/Todos/TodoForm'
import TodoList from './components/Todos/TodoList'

function App() {
  // Масив строк
  const [todos, setTodos] = useState([])
  // Додавати нову строку
  const addTodoHandler = (text) => {
    // Розділити та додати новий елемент
    setTodos([...todos, text])
  }

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      <TodoList todos={todos} />
    </div>
  )
}

export default App
