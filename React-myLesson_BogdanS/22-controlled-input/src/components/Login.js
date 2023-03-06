import { useState } from 'react'

function Login() {
  // const [username, setUsername] = useState('')
  // const [password, setPassword] = useState('')
  // Також, можна оптимізувати useState передаючи не просто значення, а об'єкт в якому всі значення
  // А у вхідних значеннях також отримуємо об'єкт, наприклад:
  const [data, setData] = useState({ username: '', password: '' })
  // Як видно, в нас тепер змінилася функція, тому при визові її в onChange={(e) => setPassword(e.target.value)} нам потрібно змінити її, передаючи розділений на властивості через спред оператор об'єкт в якому вже є це значення, але щоб оновити його потрібно його передати повторно, наприклад:
  // onChange={(e) => setData({ ...data, username: e.target.value })}
  // Також потрібно оновити в інпуті валує: value={data.username}

  function handleFormSubmit(event) {
    event.preventDefault()

    /**
     * const userDate = {
      username,
      password,
      // ми скоротили ці значення, так як в нас назви однакові, це скорочене написання властивостей
      // username: username,
      // password: password,
      // username: event.target.username.value,
      // password: event.target.password.value,
    }
     */

    // console.log(userDate)
    // alert(JSON.stringify(userDate))
    // Тепер потрібно оновити ці виводи, а саму змінну userDate мона видалити
    console.log(data)
    alert(JSON.stringify(data))
  }

  // Так як в інпуті onChange має однотипні операції, бажано написати функцію
  // username - змінив, а password - залишив без змін, для приклада
  function handleInputChange(text, name) {
    setData({ ...data, [name]: text })
  }

  return (
    <>
      <h1>Login Form!</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={data.username}
            onChange={(e) => handleInputChange(e.target.value, 'username')}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
        </label>
        <button>Login!</button>
      </form>
    </>
  )
}

export default Login

// На основі попереднього уроку
// Додали до інпута value={username}
// Імпортували реакт import { useState } from 'react'
// Додали строку const [username, setUsername] = useState('')
// Додали до інпута onChange={(e) => setUsername(e.target.value)}
// Тепер нам не потріно дістаити значення введених данних, вони в нас вжє є, тому ми частину коду username: event.target.username.value замінюємо на це значення username: username, аналогічно password
// name="username" та  name="password" - білдьше не потрібні
