function Button({ onClickFunction }) {
  return <button onClick={onClickFunction}>Click me!</button>
}

export default Button

// в даному випадку ми передали назву функції в змінній onClickFunction, а згначення це incrementCount.
// Виходить визивається функція incrementCount
