/** ЗАДАЧА 79 - Перебор свойств объекта
 *
 * 1. Создайте функцию "sumObjectValues", которая будет суммировть
 * все значения свойств, которые являются числами.
 *
 * 2. Сумму чисел необходимо вернуть из функции
 *
 * 3. Убедитесь, что итерация выполняется только
 * по собственным свойствам объекта
 */

const objectWithNumbers = {
  a: 10,
  b: 20,
  c: 'string',
  d: 12,
}

function sumObjectValues(nums) {
  let sum = 0
  // за допогою Object.keys() - статичний метод який знаходиться в об'єкті, Object - це батьківський клас всіх об'єктів в JS, оримаємо масив ключів ВЛАСНОГО об'єкта (без унаслідуваних)
  // перебрати ці ключі
  Object.keys(nums).forEach((key) => {
    if (typeof nums[key] === 'number') {
      sum += nums[key]
    }
  })

  return sum
}

// самостійне опрацювання з методом reduce
function sumObjectValues_reduce(nums) {
  return Object.keys(nums).reduce(
    (accumulator, currentValue) =>
      typeof nums[currentValue] === 'number'
        ? accumulator + nums[currentValue]
        : accumulator,
    (initialValue = 0)
  )
}

// самостійне опрацювання з методом entries
function sumObjectValues_entries(nums) {
  let sum = 0
  Object.entries(nums).forEach((Element) =>
    typeof Element[1] === 'number' ? (sum += Element[1]) : 0
  )

  return sum
}

const result = sumObjectValues(objectWithNumbers)
console.log(result)

const result2 = sumObjectValues_reduce(objectWithNumbers)
console.log(result2)

const result3 = sumObjectValues_entries(objectWithNumbers)
console.log(result3)
//42
