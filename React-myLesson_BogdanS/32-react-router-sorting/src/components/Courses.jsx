import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import queryString from 'query-string'
import courses from '../data/courses'

// А якщо в нас буде значення, але не зтих параметрів які можна, сторимо SORT_KEYS, щоб перевірити чи є ключ в ньому
const SORT_KEYS = ['title', 'slug', 'id'] // можна генерувати динамічно

// А якщо немає в цьому масиві, то потрібно перенаправити на сторінку курсів, використаємо хук useEffect

// Функція сортування об'єктів по занченню
function sortCourses(courses, key) {
  // Створити новий масив, щоб не змінювати оригінал
  const sortedCourses = [...courses]
  // Якщо немає ключа, то повернемо масив за умовчанням
  if (!key || !SORT_KEYS.includes(key)) {
    return sortedCourses
    // або немає ключа чи не знаходиться в цьому масиві !SORT_KEYS.includes(key)
  }
  // sortedCourses.sort((a, b) => a[key] - b[key])
  // sortedCourses.sort((a, b) => a[key] > b[key])
  sortedCourses.sort((a, b) => (a[key] > b[key] ? 1 : -1))
  // sort() мутує сам масив, тому не потрібно його присвоювати якійсь змінній
  // Але, оператор мінус працює тільки з числами, а зі строками працює >, <
  // Але, функція sort очікує число, обо плюсову, або мінусове, тому ми використаємо тернарний оператор
  // Тепер все працює. Є і інші способи, а також і бібліотеки для сортування
  return sortedCourses
}

const Courses = () => {
  const location = useLocation()
  // console.log(location)
  // http://localhost:3000/courses?sort=id
  // search: "?sort=id"
  // search: "?sort=title"
  // search: "?sort=slug"

  // Дістати строку та розпарсити її, маємо об'єкт query,в якому є Get параметр query.sort
  const query = queryString.parse(location.search)
  // console.log(query)

  const navigate = useNavigate()

  const [sortKey, setSortKey] = useState(query.sort)
  // console.log(sortKey) // id - тепер ми маємо значення sort, завдяки якому ми можемо відсортувати масив курсів по цьому значенню
  // Створимо функцію яка буде сортувати
  // console.log(sortCourses(courses, sortKey))

  const [sortedCourses, setSortedCourses] = useState(
    sortCourses(courses, sortKey)
  )

  useEffect(() => {
    if (!SORT_KEYS.includes(sortKey)) {
      navigate('.') // перенаправити на сторінку зі всіма курсами, ми тутже, тільки потрібно прибрати строку запиту яка не вірна. Перенаправлення працює, але стан компорненту не очищений від невірного ключа
      // Тому визавати ще функцію
      setSortKey()
      // Тут в нас два рендеринга, navigate та setSortKey
      setSortedCourses([...courses])
      // Також, є сенс визвати setSortedCourses, так як при перенаправлені є сенс повернути масив в початковий стан
    }
  }, [sortKey, navigate])

  return (
    <>
      <h1>{sortKey ? `Sorted "${sortKey}"` : 'Courses'}</h1>
      {sortedCourses.map((course) => (
        <div key={course.id}>
          <Link to={`${course.slug}`} className="courseLink">
            {course.title}
          </Link>
        </div>
      ))}
    </>
  )
}

export default Courses
