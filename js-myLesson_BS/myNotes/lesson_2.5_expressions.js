// Вирази
'abc'
10
5 + 2
'Good ' + 'Evening'
a <= b || c !== d
myFunction(c, d)

// Вирази присвоювання, зверніть увагу ми тут не об'являємо змінну
a = 5

// Вирази які порвертають значення, т.н. з побочними діями
a = 5 // Якщо визвати потім а - поверне 5
b++
myFunction(
  c,
  d
) // Шаблонні строки
`${city} is at the index ${index} in the myCities array`

// Тернарний опператор також вираз
const resultMax = a > 5 ? max : min
