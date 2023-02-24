let textButton_2 = 'Click me, please'

const onButtonClick_2 = () => {
  textButton_2 = 'Hello React'
}

const app_2 = (
  <div className="app">
    <button onClick={onButtonClick_2}>{textButton_2}</button>
  </div>
)

// Так як JSX це надбудова і ми працюємо з JS, а не з DOM, тому при додаванні класу, ми використовуємо не class="", а className=""
// Щоб писати JS в JSX, потрбно його писати в парі фігурних дужок

// Наразі код вище не працює, щоб це працювало, потрібно все перенести в функціональний компонент, компоненти пишутьвсі з велткої літери, нам потріно повернути JSX код,
// також в рендері ми також пишемо JSX: root.render(<App />), а саме <App />
// тому змінимо верхній корд, на код який нижче

const App = ({ initialButtonText, buttonClass }) => {
  console.log('Ще один визов функції App')
  // і цей код не буде працювати, так як ця функція визветься одтин раз, а далі вже коли відбудеться рендериг, до нього вже не буде доступу..., тому потрібно додатвати стан компонента за допомогою хука useState

  // деструктуризація об'єкт props, або в строці аргументів, що й зробимо
  // const { initialButtonText } = props

  //   let buttonText = 'Click me'
  const [buttonText, setButtonText] = React.useState(initialButtonText)
  const [classesList, setClassesList] = React.useState(buttonClass)

  console.log(`Значення buttonText: ${buttonText}`)
  // отже, хук приймає Стартове значення, а повертає цей метод - масив, і методом деструктуризації ми отримаємо дві змінні, значення та функцію. Як видно Стартове значення застосовуємо до buttonText, а функцію до setButtonText при кліку
  // Виходить так, що функція App була визвана двічі, при першову визові функції повертається одне значення, а при другому (клік) інше значення. Відкрийте консоль та перевірте при кліку.
  // Такий тип функцій називається - функції з побічними ефектами (functions with side effects), а якщо повертаються однакові данні при опнакових ввідних данних  - називаються Чистими функціями (Pure function)
  // В даному випадку тут побочний ефект, бо ми визвали зловнішню фуекцію React.useState(), тому при визолві функції App ми можемо отримати різні значення.

  // по аналогії додамо клас при кліку, дивіться по назві classesList

  const onButtonClick = () => {
    setButtonText('Hello React')
    setClassesList('green-btn')
  }

  // повертаємо компонент
  return (
    <div className="app">
      <button className={classesList} onClick={onButtonClick}>
        {buttonText}
      </button>
    </div>
  )
}

// Рендерим компонент
const container = document.getElementById('app')
const root = ReactDOM.createRoot(container)
root.render(<App initialButtonText="Click me" buttonClass="" />)

// Але, приклад вище буде працювати, але робити таке для кожної кнопки ми не будемо, а !!! змінювати ВЛАСТИВІСТЬТ В СЕРЕДИНІ КОМПОНЕНТА КРАЙНЄ НЕ РЕКОМЕНДУЄТЬСЯ, тому має бути спосіб передати властивості цьому коимпоненту...
// Пепередній приклад я залишу у файлі 08-script_old.js, а тут відповідно буде вже відредагована версія

// buttonText="Click me" - це ніби HTML тег з атрибутом, яакий приймає функція App як аргумент та робить з нього об'єкт, відповідно властивість: значення це buttonText: 'Click me'
// Таке як пропс це об'єкт, то можна зробити деструктьуризацію властивостей props, і далі вже визивати просто як назву змінної, а не через крапковий запис, деструктуризацію зробили в блоці параметрів { initialButtonText, buttonClass }, це ми деструтуризовали отриманий об'єкт props

// У файлі 08-sript-clearCode.js цей самий код тільки без коментарів
