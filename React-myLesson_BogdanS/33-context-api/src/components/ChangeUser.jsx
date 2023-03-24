import { useContext } from 'react'
import UserContext from '../context/UserContext'

const ChangeUser = () => {
  // Тут також змінили назву
  //   const { user, setUser } = useContext(UserContext)
  const { userName, changeUserName } = useContext(UserContext)

  return (
    // 1)
    // <button onClick={() => setUser(user === 'Viktor' ? 'Alice' : 'Viktor')}>
    //   Change user
    // </button>
    // 2) замінили назву
    <button
      onClick={() => changeUserName(userName === 'Viktor' ? 'Alice' : 'Viktor')}
    >
      Change user
    </button>
  )
}

export default ChangeUser
