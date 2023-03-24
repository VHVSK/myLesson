import { useContext } from 'react'
import UserContext from '../context/UserContext'
// import UserName from './UserName'

const UserInfo = () => {
  // 1
  // Приклад роботи по аналогії UserContext.Consumer
  // return <UserName>{(value) => <h1>{value}</h1>}</UserName>
  // 2
  // Базовиц приклад роботи UserContext.Consumer
  // return (
  //   <UserContext.Consumer>{(value) => <h1>{value}</h1>}</UserContext.Consumer>
  // )
  // 3
  // Використання хука useContext
  // const user = useContext(UserContext)
  // 4
  // Так як ми в цьому варіанті використали в якості параметра не значення, а об'єкт, то нам потрібно виконати деструктуризацію, або використовувати крапковий запис для доступу до данних
  // const { user } = useContext(UserContext)
  const { userName } = useContext(UserContext)
  // const { user, setUser } = useContext(UserContext) - ми навіть так можемо визвати setUser
  // console.log(user)
  // return <h1>{user}</h1>
  return <h1>{userName}</h1>
}

export default UserInfo

// щоб прочитати данні з UserContext нам потрібно використовувати його властивість Consumer
// Тут ми передаємо функцію, ця функція буде автоматично буде визванта, і їй буде в якості значення для параметра value буде передане те, що ми вказали в <UserContext.Provider value={user}>

// UserContext.Consumer - очікує функцію в якості значення

// Така поведінка, коли ми передаємо функцію в якості властивості компонента, називається - props render, тобто рендеринг одного з властивостей компонента
// далі ми навели приклад, як саме працює цей варіант, тільки на простому прикладі:
// Створили компонент UserName, в UserName передали функцію, а в файлі UserName.jsx визвали через props.children('Bogdan')
// І вуаля, вона працює
// Аналогічно працює Consumer
// Нарізі це в закоментовано.

// Далі розглянумо використання хука useContext
// Зверніть увагу, пошук йде по цепочці компонента вверх
// В файлі User немає UserContext.Provider, тому пошук йде далі, але наступним прикладом ми додамо UserContext.Provider і в User

// Далі ми спробуємо додати ще один UserContext, але тепер вже у фалі
// Тобто, якщо ми банально додамо <UserContext.Provider value="Alice">
// То буде вивід Alice, а ми очікували UserContext.Provider з Віктор, але нам на шляху трапився UserContext.Provider з Alice

// Якщо прибрати всі UserContext.Provider, то const user = useContext(UserContext) поверне undefined
// Тобто, по суті, хук const user = useContext(UserContext)
// визиває const UserContext = createContext() у файлі UserContext.jsx
// І якщо в нас немає UserContext.Provider, то значенням хука буде те, що ми передамо createContext(), наприклад createContext('Maria'), а якщо є UserContext.Provider, то буде він використовуватися!!!
