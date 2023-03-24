import React from 'react'

const Card = () => {
  return (
    <React.Fragment>
      <h1>Viktor</h1>
      <h3>I am recording React course</h3>
      <button>Like!</button>
    </React.Fragment>
  )
}

export default Card

// 1 варіант
// Щоб не додавати батьківський код в наш ДОМ, можна прописати пустий батьківський тег JSX
// <> ..контент.. </>
// В даному випадку це додає Babel, просто в нас в коді його немає. І так як код JSX він конветується в код JS, і Babel автоматично додає автоматично імпорт біблітеки React

// 2 варіант це те саме, тільки не пустий а:
// <React.Fragment>..контент..</React.Fragment>
// Тільки в такому випадку потрібно робити імпорт бібліотеки Реакт
// React - це вбудована бібліотека в React
