import styles from './TodoList.module.css'
import Todo from './Todo'

function TodoList({ todos }) {
  return todos.map((todo, index) => <Todo key={index} todo={todo} />)
}

export default TodoList
