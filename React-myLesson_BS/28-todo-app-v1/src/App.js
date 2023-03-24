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
  // Видалити строку. В даному випадку, ми пердаємо назву цієї функції файлу TodoList.js, а потім файлу Todo.js з параметром index, і там вже визвемо її при подвійному кліку.
  const deleteTodoHandler = (index) => {
    setTodos(todos.filter((_, idx) => idx !== index))
    // setTodos(todos.filter((todo, idx) => idx !== index))
    // Зверніть увагу, так яка ми не використовуємо елемент (змінна todo), то ми можемо замінити його на _
    // filter - працю тк, якщо паравда, то елемент залишається в масиві, якщо ні, то видаляється
  }

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      <TodoList todos={todos} deleteTodo={deleteTodoHandler} />
    </div>
  )
}

export default App

// ДОДАВАННЯ ІКОНОК REACT в файлі Todo.js
