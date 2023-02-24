function generateRandomName(maxNum) {
  return Math.floor(Math.random() * maxNum)
  // Math.random() - генерація числа від 0 до 1
  // х 100 - щаб отримати ціле число
  // Math.floor() - округлити його
}

export default generateRandomName
