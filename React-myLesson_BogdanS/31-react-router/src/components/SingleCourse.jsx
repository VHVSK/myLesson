import { useEffect } from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import courses from '../data/courses'
// import NotFound from './NotFound'

const SingleCourse = () => {
  const params = useParams() // дістати параметри шлуху з батьківських елементів
  const navigate = useNavigate() // Вона повертає функцію, яка приймає два параметра, це шлях та опція (в даному випадку перехіж на один вище відносно поточного)
  const location = useLocation() // повертає об'єкт, який отримує інформація з поточної шляху, pathname
  // Також, там є ключ, по якому можна кешувати сторінки, це унікальний ключ
  // Якщо є query запити, товони будуть в search, щоб їх викоритсвувати, потрібно обернути в об'єкт JS, для цього можна викоритовувати npm пакет:
  // https://www.npmjs.com/package/query-string
  // npm i query-string

  /**
   * {pathname: '/courses/react', search: '', hash: '', state: null, key: '41q3vgd6'}
   */

  console.log(location)
  // В цьому курсі ми його не використовуємо

  const course = courses.find((course) => course.slug === params.courseSlug)
  // console.log(params)

  // 1 варіант
  // Якщо в нас немає співпадінь, то ми можемо порказти сторінку не знайдено
  // if (!course) {
  //   return (
  //     <>
  //       <NotFound />
  //       <Link to=".." relative="path">
  //         All Courses
  //       </Link>
  //     </>
  //   )
  // }

  // 2 варіант, це визвати функцію яка може змінювати локацію, useNavigate()
  // useNavigate - можна перенаправляти на іншу сторінку.
  // Щоб не було помилки (You should call navigate() in a React.useEffect(), not when your component is first rendered.) ми маємо визвавти в середині useEffect()
  // Навіть так в нас будуть помилки, так як {course.title} все ще пробує вивести значення на неіснуючій сторінці, тому ми додали знаки питання ? щоб не виводилися помилки
  // це ? оператор який не виводить помилки
  // Ще є помилка, React Hook useEffect has a missing dependency: 'navigate'. Either include it or remove the dependency array  react-hooks/exhaustive-deps
  // Щоб виправити
  // Тепер все працює!

  useEffect(() => {
    if (!course) {
      navigate('..', { relative: 'path' })
    }
  }, [course, navigate])

  // Аналогічно, якби ми хотіли перейти на типу not-found
  // useEffect(() => {
  //   if (!course) {
  //     navigate('../not-found', { relative: 'path' })
  //   }
  // }, [course])

  return (
    <>
      <h1>Single Course Info</h1>
      <h2>{course?.title}</h2>
      <h2>{course?.slug}</h2>
      <h2>{course?.id}</h2>
      {/* <Link to="/courses">All Courses (абсолютне посилання)</Link> */}
      <Link to=".." relative="path">
        All Courses (Переходити на один рівень вище відносно поточного)
      </Link>
    </>
  )
}

export default SingleCourse

// import { useParams } from 'react-router-dom'
// Хук, щоб отримати парамертр з шляху, ми його отримуємо як об'єкт courseSlug, з <Route path="courses/:courseSlug" element={<SingleCourse />} />

// Метод find()повертає перший елемент у наданому масиві, який задовольняє надану функцію тестування

// Рекомендується використовувати відності посилання!
