// ! Принцип роботи redux
// На основі попереднього уроку!

// Аналогія reduce в redux - це псевдокод, це ПРИНЦИП принципу роботи redux:
const numbers = [action1, action2, action3]

function reducer(state, action) {
  // do something with state and action
  // зробити щось із станом і дією
  return newState
}

const currentState = actions.reduce(reducer, initialState)

// Дивіться зобрадення в папці.

// Висновки:
// ! REDUX стоворює поточний стан на основі початкового стану та послідовності дій!
// ! Тому, знаючи початковий стан та всі дії, які виникали, можна відносити ЛЮБИЙ СТАН в додатку які були в минулому!
