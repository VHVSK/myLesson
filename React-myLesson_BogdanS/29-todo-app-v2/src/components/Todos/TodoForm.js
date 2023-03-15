import { useState } from 'react'
import styles from './TodoForm.module.css'

function TodoForm({ addTodo }) {
  const [text, setText] = useState('')
  // Визавати при відправки форми
  const onSubmitHandler = (e) => {
    e.preventDefault() // Не виконувати дії за умовчанням
    addTodo(text) // Додавати нову строку, визиває addTodoHandler на сторінці App.js
    setText('') // Очистити поле вводу, поле вооду контрольоване
  }
  return (
    <div className={styles.todoFormContainer}>
      <form onSubmit={onSubmitHandler}>
        <input
          placeholder="Enter new todo"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default TodoForm
