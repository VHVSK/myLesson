import './App.css'
import Persons from './components/Persons'

function App() {
  return (
    <div className="App">
      <Persons />
    </div>
  )
}

export default App

// Сервіс генерації данних - https://mockaroo.com/
// Вибрали потрібні поля за завантажжили в форматі JSON
// Далі створили папку data, в ній створили файл persons.js, та прописали екпорт за умовчання, таким чином ми можемо викорстиовувати цей масив як модуль в інших файлах
// Далі імпортуємо його в наш App
// Рекомендуєтьтся створювати правильну іерархію нашоо проекта, в папці components - копронети, data - дані....

// Нижче варіанти виводу інформації

// Потім ми створили новий файл який виводить компонент з усіма кртками
// Потім додали стилі в файлі App.css

/**
 * В результаті в нас появився такий код, який виводить h1:
 * Рішення 1
 * function App() {
  return (
    <div className="App">
      {persons.map((person) => {
        return <h1>{person.firstName}</h1>
      })}
    </div>
  )
}

 */

/**
 * Рішення 2, прописати вручну всі властивості
function App() {
  return (
    <div className="App">
      {persons.map((person, index) => {
        const { id, firstName, lastName, email, img } = person
        return (
          <Person
            key={index}
            id={id}
            firstName={firstName}
            lastName={lastName}
            email={email}
            img={img}
          />
        )
      })}
    </div>
  )
}
 */

/**
 * Рішення 3, передати весь об'єкт
 * function App() {
  return (
    <div className="App">
      {persons.map((person, index) => {
        return <Person key={index} person={person} />
      })}
    </div>
  )
}
 */

/**
 * Раішення 4, дестректуризацуія об'єкта і таким чином передати всі властивості
 * function App() {
  return (
    <div className="App">
      {persons.map((person, index) => {
        return <Person key={index} {...person} />
      })}
    </div>
  )
}
 */

/**
 * Надійніше використовувати для key - id
 * function App() {
  return (
    <div className="App">
      {persons.map((person) => {
        return <Person key={person.id} {...person} />
      })}
    </div>
  )
}
 */
