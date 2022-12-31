/** ЗАДАЧА 56 - Деструктуризация объектов
 *
 * 1. Измените функцию "personInfo" так, чтобы получить в консоли такой же вывод
 *
 * 2. Объект, возвращаемый функцией "personInfo", должен содержать только сокращенные имена свойств
 */

const personInfo = ({
  name, // значення таке саме як і значення
  age: personAge, // перейменували властивість
  location: { origin: origin, city: homeCity }, // деструктуризація вкладеного об'єкта
  friendsQty = 0, // вказали значення за умовчанням
  createdAtYear = new Date().getFullYear(), // значення з метода
}) => {
  // данний корд деструктуризує об'єкт, але в завдання вказано що потріно виконати в в длоці параметрів, томи закоментуємо цей блок
  // const {
  //   name,
  //   age: personAge,
  //   location: { origin: origin, city: homeCity },
  //   friendsQty = 0,
  //   createdAtYear = new Date().getFullYear(),
  // } = person

  // Повертаємо запис скороченими властивостями, ми можемо використоввувати скорочений заптс тоді, коли назва валастивості співпадає з назваою змінної.
  // name буде перечеркнути, але ячк тільки ми об'явимо таку змінну, то цей глюк зникне
  return {
    name,
    personAge,
    origin,
    homeCity,
    friendsQty,
    createdAtYear,
  }
}

const person = {
  name: 'Alice',
  age: 19,
  location: {
    country: 'England',
    city: 'London',
  },
}

const result = personInfo(person)

console.log(result)
/*
{
  name: "Alice",
  personAge: 19,
  origin: "England",
  homeCity: "London",
  friendsQty: 0,
  createdAtYear: *current year*
}
*/
