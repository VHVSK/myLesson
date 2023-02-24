import { useState } from 'react'

function generateRandomName() {
  return Math.floor(Math.random() * 100)
  // Math.random() - генерація числа від 0 до 1
  // х 100 - щаб отримати ціле число
  // Math.floor() - округлити його
}

function RandomNumber() {
  const [randomNum, setRandomNum] = useState(generateRandomName())
  return (
    <div>
      <h1>{randomNum}</h1>
      <button onClick={}>Generate new random number</button>
    </div>
  )
}

export default RandomNumber

// ЗАДАЧА при натисканні на кнопку - змінювати значення
// Щоб змінити стан, ми за допомогою Реакт хука useState, щоб його використати ми маємо його імпортувати
// Імпорт в фігурних дужках, так як це не звичайниій імпорт за умовчанням, це зовнішня бібліотека, зовнішній npm пакет
// Тепер ми можемо використвувати змінну useState, а це функція, в середині нашої функції RandomNumber
// Визиваємо useState та передаємо їй початкове значення useState(100), яка буде частиною стану (значенням за умовчанням) цього функціонального компонету, і ця функція повертає нам масив з двух елементів
// Далі, ця функція useState повертає масив з двух елементів, і методои деструктуризацуії ми можемо присвоїити це значення двух іншим змінним, напр. const [randomNum, setRandomNum] = useState(100)
// Далі, вже замість 100, в тегу Н1, ми пропишемо змінну в фігурних душках, так як це JS

// Наступний крок, створимо саму фуекцію генерування випадкового числа, це generateRandomName()
// Наступний крок, це додати функцію події кліка, onClick={},звертіть увагу, onClick пишеться в кемелКейс стилі, так це властивості компонета реакт, а div, h1, button - це компонети!!!

