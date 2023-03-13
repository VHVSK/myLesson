import Todo from './Todo'
import styles from './TodoList.module.css'

function TodoList({ todos, deleteTodo }) {
  return (
    <div className={styles.todoListContainer}>
      {/* Показати текст якщо перша перевірка не нуль, а якщо вона true то йдемо далі */}
      {!todos.length && <h2>Todo list is empty</h2>}

      {todos.map((todo, index) => (
        <Todo key={index} todo={todo} deleteTodo={deleteTodo} index={index} />
      ))}
    </div>
  )
}

export default TodoList
