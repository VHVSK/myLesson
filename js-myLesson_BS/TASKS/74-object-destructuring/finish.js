/** ЗАДАЧА 74 - Деструктуризация объектов
 *
 * Создайте функцию "shortPerson", которая деструктуризирует объект
 * и возвращает его короткую версию
 *
 * Пример результата:
 * { n: "Mike", c: "Spain", a: 23, p: 100 }
 *
 * Если входной объект не имеет поля postsQuantity,
 * он должен получить значение по умолчанию 0
 */

const person1 = {
  name: 'Mike',
  info: {
    country: 'Spain',
    age: 23,
  },
  postsQuantity: 100,
}

const person2 = {
  name: 'Alice',
  info: {
    country: 'Italy',
    age: 25,
  },
}

// Напишите функцию "shortPerson" здесь
// зверніть увагу, що вкладені об'єкти також будуть деструктуридзовані ({info: { country: c, age: a }})
// також, ми змінимо назви змінних в новому обєкті (country: c (c- нова назва змінної))
// також, ячкщо одного значення не буде, то воно буде за умовчанням (p = 0)
const shortPerson = (person) => {
  // деструктуризація
  const {
    name: n,
    info: { country: c, age: a },
    postsQuantity: p = 0,
  } = person

  return {
    n,
    c,
    a,
    p,
  }
}

// в цьому варіанті все те саме, тільки ми перенесли деструктуризацію в arguments
const shortPerson2 = ({
  name: n,
  info: { country: c, age: a },
  postsQuantity: p = 0,
}) => {
  return {
    n,
    c,
    a,
    p,
  }
}

// в цьому варінаті ми не явно повернемо результат
// зверніть увагу, ми пишемо в дужках, інакше інтерпретатор подумає що ми виконуємо тіло функції
const shortPerson3 = ({
  name: n,
  info: { country: c, age: a },
  postsQuantity: p = 0,
}) => ({
  n,
  c,
  a,
  p,
})

console.log(shortPerson3(person1))
// { n: "Mike", c: "Spain", a: 23, p: 100 }

console.log(shortPerson3(person2))
// { n: "Alice", c: "Italy", a: 25, p: 0 }
