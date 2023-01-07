/** ЗАДАЧА 59 - Расширение массивов
 *
 * 1. Создайте новый класс "ExtendedArray", который должен расширять встроенный "Array"
 *
 * 2. Добавьте в новый класс два пользовательских метода:
 *  - "sum" - он должен возвращать сумму всех элементов массива
 *  - "onlyNumbers" - должен возвращать новый массив,
 * который будет содержать только числа из исходного массива
 *
 * 3. Создайте несколько экземпляров нового класса "ExtendedArray"
 * и протестируйте оба метода "sum" и "onlyNumbers".
 *
 * 4. Убедитесь, что остальные методы массивов такие,
 * как "forEach", "map" также доступны
 */

class ExtendedArray extends Array {
  sum() {
    return this.reduce((sum, num) => (sum += num), 0)
  }

  onlyNumbers() {
    return this.filter((el) => typeof el === 'number')
  }
}

const myExtArray = new ExtendedArray(10, 20, 30, true)
console.log(myExtArray) // ExtendedArray(4) [ 10, 20, 30, true ]
console.log(myExtArray.sum()) // 61 (трохи не таку відповідь очікував)
console.log(myExtArray.onlyNumbers()) // ExtendedArray(3) [ 10, 20, 30 ]

// Перевіримотчи доступні унаслідувані методи від класу Array
myExtArray.forEach((element) => {
  console.log(element)
})
// 10
// 20
// 30
// true
