/** ЗАДАЧА 80 - Сумма положительных и отрицательных чисел
 *
 * 1. Создайте функцию "sumPositiveNegative", которая принимает массив
 * и суммирует отдельно положительные и отрицательные числа.
 *
 * 2. Функция должна вернуть такой объект:
 *  {
 *    positive: 74, // сумма всех положительных чисел
 *    negative: -54 // сумма всех отрицательных чисел
 *  }
 */

const nums = [10, -12, 30, -1, -8, 0, 14, -33, 20]

function sumPositiveNegative(arr) {
  let positive = 0
  let negative = 0

  arr.forEach((element) => {
    if (element >= 0) {
      positive += element
    } else {
      negative += element
    }
  })
  return { positive, negative }
}

// Рішення автора
function sumPositiveNegative2(arr) {
  return arr.reduce(
    (sums, num) => {
      if (num > 0) {
        return {
          ...sums, // Якщо у нас більше властивостей, ми можемо всі розібрати і тальки потріне змінити, тобто спочатку ВСІ розібрати, а потім перезаписати
          positive: sums.positive + num,
        }
      }

      return {
        ...sums, // Аналогічно
        negative: sums.negative + num,
      }
    },
    { positive: 0, negative: 0 }
  )
}

// Рішення автора перед остаточним рішенням
function sumPositiveNegative3(arr) {
  return arr.reduce(
    (sums, num) => {
      if (num > 0) {
        return {
          positive: sums.positive + num,
          negative: sums.negative,
        }
      }

      return {
        positive: sums.positive,
        negative: sums.negative + num,
      }
    },
    { positive: 0, negative: 0 }
  )
}

const result = sumPositiveNegative(nums)
console.log(result)

const result2 = sumPositiveNegative2(nums)
console.log(result2)

const result3 = sumPositiveNegative3(nums)
console.log(result3)
// { positive: 74, negative: -54 }
