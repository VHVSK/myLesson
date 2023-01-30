/** ЗАДАЧА 75 - Перебор символов строки
 *
 * Подсчитайте количество строчных гласных букв в строке.
 * Гласные буквы - a, e, i, o, u
 */

let vowelsCount = 0
let vowelsCount2 = 0
const vowels = ['a', 'e', 'i', 'o', 'u']

const str = 'Today is the best day of my life'

// Варіант 1
// Перетворити строку на масив: метод split()
str.split('').forEach((char) => {
  if (vowels.includes(char)) {
    vowelsCount++
  }
})

// варіант 2
for (const char2 of str) {
  if (vowels.includes(char2)) {
    vowelsCount2++
  }
}

console.log(vowelsCount)
console.log(vowelsCount2)
// 9
