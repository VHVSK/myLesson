import { useState } from 'react'
import styles from './TodoForm.module.css'
import Button from '../../UI/Button'

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
        <Button type="submit" title="Submit">
          Submit
        </Button>
        {/* Зверніть увагу, в нас є компонент але він без type, тому ми трохи змінимо код і дізнаємося ще спосіб передати і використати поля яких немає в компоненті */}
      </form>
    </div>
  )
}

export default TodoForm
