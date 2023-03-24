function Login() {
  function handleFormSubmit(event) {
    event.preventDefault()

    const userDate = {
      username: event.target.username.value,
      password: event.target.password.value,
    }

    console.log(userDate)
    alert(JSON.stringify(userDate))
  }
  return (
    <>
      <h1>Login Form!</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Username:
          <input type="text" name="username" />
        </label>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <button>Login!</button>
      </form>
    </>
  )
}

export default Login

// Створили форму та додати стилі
// Додали до форми onSubmit={handleFormSubmit}
// Створили фукцію handleFormSubmit та помістили event.preventDefault() - щоб не форма не відправлялася, так як ми будемо виводити данні в
// Створили об'єкт userDate та вивели в консоль
// Щоб вивести в алерт, ми об'ект перевели в строку
