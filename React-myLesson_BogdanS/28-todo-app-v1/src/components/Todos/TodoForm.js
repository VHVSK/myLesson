import { useState } from 'react'
import styles from './TodoForm.module.css'

function TodoForm({ addTodo }) {
  const [text, setText] = useState('')
  const onSubmitHandler = (e) => {
    e.preventDefault()
    addTodo(text)
    setText('')
  }
  return (
    <form onSubmit={onSubmitHandler}>
      <input
        placeholder="Enter new todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className={styles.inputForm}
      />
      <button type="submit">Submit</button>
    </form>
  )
}

export default TodoForm
