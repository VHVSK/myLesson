import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import './App.css'
import TodoForm from './components/Todos/TodoForm'
import TodoList from './components/Todos/TodoList'

function App() {
  const [todos, setTodos] = useState([])
  const addTodoHandler = (text) => {
    const newTodo = {
      text,
      isCompleted: false,
      id: uuidv4(),
    }
    setTodos([...todos, newTodo])
    // Замість передавання текту ми передаємо об'єкт, так як на потрібно відслідковувати стан задачі, а також ми генеруємо унікальний код для key
    // Краще використовувати унакальний ідентифікатор, а не просто індекс масиву
  }
  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const toggleTodoHandler = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo }
        // Метод map() - не змінює оригінальний масив, а повертає новий масив!
        // { ...todo } - по правилам React ми маємо створювати новий стан при ререндирингу компонента.
        // Ми не можемо просто повернути попередній об'єкт, так як посилання (так як обйкт це тип який містить в соьбі посилання на данні) на конкретний обєкт в памяті зі старого масиву, збережеться в новому масиві!!!
      })
    )
  }

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      <TodoList
        todos={todos}
        deleteTodo={deleteTodoHandler}
        toggleTodo={toggleTodoHandler}
      />
    </div>
  )
}

export default App

// Підключимо npm пакет який генерує унікальні id
// https://www.npmjs.com/package/uuid - посилання
// npm install uuid - командна строка
// import { v4 as uuidv4 } from 'uuid' - імпорт пакета та перейменування функції з v4 на uuidv4
