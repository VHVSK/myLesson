import { RiTodoFill } from 'react-icons/ri'
import styles from './Todo.module.css'

function Todo({ todo, deleteTodo, index }) {
  return (
    <div className={styles.todo} onDoubleClick={() => deleteTodo(index)}>
      <RiTodoFill className={styles.todoIcon} />
      <div className={styles.todoText}>{todo}</div>
    </div>
  )
}

export default Todo

// onDoubleClick={() => deleteTodo(index)}
// Зверніть увагу на синтаксис, нам потрібно передати функцію, а не визвати, тому тут стрілочна функція!!!

// ДОДАВАННЯ ІКОНОК REACT
// https://www.npmjs.com/package/react-icons
// https://react-icons.github.io/react-icons/icons?name=ri

// Вставноити npm пакет
// npm install react-icons

// Імпортувати іконку вказавши її назву та закінчення в шляху ri, так як вона з групи Remix Icon
// import { RiTodoFill } from 'react-icons/ri'
