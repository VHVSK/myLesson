// Оператор ділення об'єкта на властивості - ...

const button = {
  with: 200,
  text: 'Buy',
}

const redButton = {
  ...button, // зверніть увагу, тут записано розділення на початку, в такому разі властивості які будуть повторюватисяЮ, вони будуть перезаписуватися
  color: 'red',
}

console.table(redButton)

// наступний приклад
const newButton = {
  ...button,
  ...redButton,
}

console.table(redButton)

// Звертайте увагу, чи не було вкладених об'єктів
