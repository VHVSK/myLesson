import Todo from './Todo'
import styles from './TodoList.module.css'

function TodoList({ todos, deleteTodo, toggleTodo }) {
  return (
    <div className={styles.todoListContainer}>
      {!todos.length && <h2>Todo list is empty</h2>}

      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo} // тут передамо не строку, а цілий об'єкт, тоді index={todo.id} не потрібний
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        />
      ))}
    </div>
  )
}

export default TodoList
