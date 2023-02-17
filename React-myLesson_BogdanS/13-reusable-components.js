// У  файлі src/App.js
// Створили компонент
function MyComponent() {
  return (
    <div>
      <h1>Hello from the reusable components</h1>
      <button>Like!</button>
    </div>
  )
}

// Додали його в цей компонент декілька різів, тваким чином можна перевикорисовувати компоненти
function App() {
  return (
    <div className="App">
      <MyComponent />
      <MyComponent />
      <MyComponent />
    </div>
  )
}

// Далі ми винесемо цей компонент d components/MyComponent.js
// допишемо
export default MyComponent

// А в файл App.js ми додали імпорт
import MyComponent from './components/MyComponent'
// В данному випадку розширення не потрібне, але модна додати
// !Важливо називати компоненти з великої букви, так як React з маленької букви шукає вбудовані компорненти, а з великої наші компоненти.
// У файлі App.js компонент який ми імпортуємо можна назвати іншим іменем, ніби як аргументи у функціях, але всеж рекомендується вткористовувати однакові назви

// Створив сам свій компонент OtherComponent
