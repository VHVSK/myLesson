// Конкатенація строк
'Hello ' + 'World'

const hello = 'Hello'
const world = 'World'

const greeting = hello + ' ' + world

// Шаблонні строки
const hello2 = 'Hello'
const world2 = 'World'

const greeting2 = `${hello2} ${world2}` // Зфоротні кавички!

// Практика
const iam = 'Bogdan'
const life = 'Kyiv'

const iamLife = `Мене звати ${iam}, я живу в ${life}`
console.log(iamLife)

// Будьте уважні про типи змінних
10 + 'Bogdan' // 10Bogdan
undefined + 'abc' // undefinedabc
