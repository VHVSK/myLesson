function Button({ onClickFunction, text }) {
  return <button onClick={onClickFunction}>{text}</button>
}

export default Button

// в даному випадку ми передали назву функції в змінній onClickFunction, а згначення це incrementCount.
// Виходить визивається функція incrementCount
