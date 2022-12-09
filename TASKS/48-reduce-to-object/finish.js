/** ЗАДАЧА 48 - Использование метода "reduce" для создания объекта
 *
 * 1. Создайте функцию "quantitiesByCategories" с одним параметром "products"
 *
 * 2. Эта функция должна возвращать объект с ключами,
 * равными категориям, и значениями,
 * равными сумме всех количеств в каждой категории
 */

// Варіант 1
// const quantitiesByCategories = (products) => {
//   return products.reduce((accumulator, currentValue) => {
//     accumulator[currentValue.category] = (accumulator[currentValue.category] || 0) + currentValue.quantity
//     return accumulator
//   }, {})
// }

// Варіант 2, викориттовуючи коротший запис, з деструктуризацією
const quantitiesByCategories = (products) => {
  return products.reduce((accumulator, currentValue) => {

    const { category, quantity} = currentValue // реструктуризація, це значить, створити дві змінні, та присвоїть їм значення які відповідно відповідають значенням об'єкта currentValue

    accumulator[category] = (accumulator[category] || 0) + quantity
    return accumulator
  }, {})
}


/**
 * () - оператор, має самий верликий приорітет
 * || - оператор
 * (accumulator[currentValue.category] || 0) - це витраз, а вираз та АБО повертає перше правдиве
 */

const inputProducts = [
  {
    title: 'Phone case',
    price: 23,
    quantity: 2,
    category: 'Accessories',
  },
  {
    title: 'Android phone',
    price: 150,
    quantity: 1,
    category: 'Phones',
  },
  {
    title: 'Headphones',
    price: 78,
    quantity: 1,
    category: 'Accessories',
  },
  {
    title: 'Sport Watch',
    price: 55,
    quantity: 2,
    category: 'Watches',
  },
]

console.log(quantitiesByCategories(inputProducts))
/* {
  Accessories: 3,
  Phones: 1,
  Watches: 2
} */
