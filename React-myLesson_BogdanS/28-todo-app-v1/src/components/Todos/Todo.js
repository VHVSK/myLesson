import styles from './Todo.module.css'

function Todo({ todo }) {
  return <h3 className={styles.todo}>{todo}</h3>
}

export default Todo
