/** ЗАДАЧА 34 - Массив объектов
 *
 * 1. Создайте массив с 3 объектами "cars"
 *
 * 2. Каждый объект должен иметь три свойства
 *  - carBrand (строка)
 *  - price (число)
 *  - isAvailableForSale (логическое значение)
 *
 * 3. Добавьте еще один объект в массив
 *
 * 4. Выведите результирующий массив в консоль
 */

const cars = [
    {
        carBrand: 'Brand1',
        price: 100,
        isAvailableForSale: false,
    },
    {
        carBrand: 'Brand2',
        price: 200,
        isAvailableForSale: true,
    },
    {
        carBrand: 'Brand3',
        price: 300,
        isAvailableForSale: false,
    },
] 

// , - рекомендується додавати після останньої властивості та старннього об'єкта в масиві, щоб git не показував зміни після додавання
cars.push({
    carBrand: 'Brand4',
    price: 400,
    isAvailableForSale: true,
})


console.log(cars)
console.log(cars[2].carBrand)