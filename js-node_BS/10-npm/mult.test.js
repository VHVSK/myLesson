const mult = require('./mult')

test('should multiply 5 and 10 and return 50', () => {
  expect(mult(5, 10)).toBe(50)
})

// передамо в expect функцію mult зі значенням 5 та 10, якщо результат буде дорівнювати значенню в toBe - то тест пройдено!
