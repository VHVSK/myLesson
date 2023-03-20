import { useParams } from 'react-router-dom'
import courses from '../data/courses'

const SingleCourse = () => {
  const params = useParams()
  const course = courses.find((course) => course.slug === params.SingleCourse)
  console.log(params)
  return <h1>Single Course Info</h1>
}

export default SingleCourse

// import { useParams } from 'react-router-dom'
// Хук, щоб отримати парамертр з шляху, ми його отримуємо як об'єкт courseSlug, з <Route path="courses/:courseSlug" element={<SingleCourse />} />
