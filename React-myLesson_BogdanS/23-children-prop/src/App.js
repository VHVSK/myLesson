import './App.css'
import Wrapper from './components/Wrapper'

// ми навчимося вбудовувати одні компоненти в інші компоненти, отримати в якості props.children, тобто в любий свій компонент ми можемо передавти інші блоки JSX кода, а мати доступ до них через props.children
// Тобто, ми можемо передавати компоненти в середині компонента, ніби-то як вкладення тегів в тегах.
// Також, в той же час, ми навчилися передавати і інші властивості, наприклад ми передамл стилізацію для Wrapper
// Через подібний функціонал легко організовувати модальні вікна.

function App() {
  return (
    <div className="App">
      <Wrapper color="blue">
        <h2>Text inside of the Wrapper</h2>
        <button>Click me!</button>
      </Wrapper>
      <Wrapper color="yellow">
        <h2>Another inside of the Wrapper</h2>
        <p>Some description</p>
        <button>Click me!</button>
      </Wrapper>
    </div>
  )
}

export default App

// Зімість визова <Wrapper />, ми визиваэмо <Wrapper></Wrapper>
// В нього додали <h2>Text inside of the Wrapper</h2>, цей параментр буде в props, це об'єкт який містить властивість children, тобто props.children, а значення його якраз <h2>Text inside of the Wrapper</h2>
// Тобто, <h2>Text inside of the Wrapper</h2> Реакт передасть компоненту Wrapper через спеціальну властивість children, тобто props.children
// В компоненті Warpper це значення буде доступно в {props.children}!!!

// Далі у файлі Wrapper ми додали style={{ color: props.color }}, а в файлі App.js передали другу властивість color="red", яка буде доступна нам в props.color
// Потім ми винесемор це в окремий об'єкт та додамо інші стилі
