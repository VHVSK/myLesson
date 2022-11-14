/** ЗАДАЧА 39 - Перебор элементов массива
 *
 * 1. Создайте функцию "cityInfo" с двумя параметрами,
 * которая возвращает строку
 * "London is at the index 0 in the myCities array"
 *
 * 2. Переберите все элементы массива "myCities",
 * для каждого элемента вызовите функцию "cityInfo"
 * и выведите в консоль результат вызова функции
 */

const myCities = ['London', 'New York', 'Singapore']

function cityInfo (city, indexArr) {
    console.log(city + ' is at the index ' + indexArr + ' in the myCities array')
}

myCities.forEach(cityInfo)

/**
 * правильний варіант
 *  const myCities = ['London', 'New York', 'Singapore']

    const cityInfo = (city, index) =>
    `${city} is at the index ${index} in the myCities array`

    myCities.forEach((city, index) => console.log(cityInfo(city, index)))

    Якщо ми додамо фігурні дужки (відбувається деструктуризація об'єкту), то ми поредаємо об'єкт, в такому випадку ми можемо змінювати порядок змінник, так як в об'єкті немає різниці який порядок. 

    const myCities = ['London', 'New York', 'Singapore']

    const cityInfo = ({city, index}) =>
    `${city} is at the index ${index} in the myCities array`

    myCities.forEach((city, index) => console.log(cityInfo({index, city})))

    ... cityInfo({index, city}))) - це ніби такий запис: cityInfo({index: index, city: city})))
 */