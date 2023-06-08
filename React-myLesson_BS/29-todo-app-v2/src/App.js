import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import './App.css'
import TodoForm from './components/Todos/TodoForm'
import TodoList from './components/Todos/TodoList'
import TodosActions from './components/Todos/TodosActions'

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
        // Ми не можемо просто повернути попередній об'єкт, так як посилання (так як об'єкт це тип який містить в собі посилання на данні) на конкретний обєкт в памяті зі старого масиву, збережеться в новому масиві!!!
      })
    )
  }

  // Видалити всі задачі та повернути в початковий стан
  const resetTodosHandler = () => {
    setTodos([])
  }
  // Видалити всі завершені задачі
  const deleteCompletedTodosHandler = () => {
    // filter залишає в масиві тільки правдиві значення
    setTodos(todos.filter((todo) => !todo.isCompleted))
  }

  // Рахуємо скільки в нас завершених задач
  // filter повертає масив, ми відразу його можемо порахувати
  const completedTodosCount = todos.filter((todo) => todo.isCompleted).length

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      {!!todos.length && (
        <TodosActions
          completedTodosExist={!!completedTodosCount}
          resetTodos={resetTodosHandler}
          deleteCompletedTodos={deleteCompletedTodosHandler}
        />
      )}
      <TodoList
        todos={todos}
        deleteTodo={deleteTodoHandler}
        toggleTodo={toggleTodoHandler}
      />
      {completedTodosCount > 0 && (
        <h2>{`You have completed ${completedTodosCount} ${
          completedTodosCount > 1 ? 'todos' : 'todo'
        }`}</h2>
      )}
    </div>
  )
}

export default App

// Підключимо npm пакет який генерує унікальні id
// https://www.npmjs.com/package/uuid - посилання
// npm install uuid - командна строка
// import { v4 as uuidv4 } from 'uuid' - імпорт пакета та перейменування функції з v4 на uuidv4

// Якщо є завершені = true
// Подвійне ні, тобто ні, не 0 = false
// !!completedTodosCount
