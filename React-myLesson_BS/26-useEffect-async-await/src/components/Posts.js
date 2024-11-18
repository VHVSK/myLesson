import { useEffect, useState } from 'react'
import Post from './Post'

const API_URL = 'https://jsonplaceholder.typicode.com/posts'

function Posts() {
  const [posts, setPosts] = useState([])
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  // Ми переписали цю функцію, щоб не було помилки в консолі, бо useEffect() має повертати або функцію, або undefined
  // useEffect(async () => {
  //   try {
  //     const res = await fetch(API_URL)
  //     const posts = await res.json()
  //     setPosts(posts)
  //   } catch (error) {
  //     setError(error.message)
  //   }
  //   setIsLoading(false)
  // }, [])

  // Наступну функцію ми переписали, щоб використати метод визову функція IIFE
  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const res = await fetch(API_URL)
  //       const posts = await res.json()
  //       setPosts(posts)
  //     } catch (error) {
  //       setError(error.message)
  //     }
  //     setIsLoading(false)
  //   }
  //   fetchData()
  // }, [])

  // Теж саме, тільки використовуючи стрілочну функцію
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await fetch(API_URL)
  //       const posts = await res.json()
  //       setPosts(posts)
  //     } catch (error) {
  //       setError(error.message)
  //     }
  //     setIsLoading(false)
  //   }
  //   fetchData()
  // }, [])

  // Приклад визова функції IIFE - Immediately Invoked Function Expression. Тобто, визвали відразу!
  // Взяли код в дужки, прибрали назву функції, додаючи в кінці () ми визвали її.
  useEffect(() => {
    ;(async function () {
      try {
        const res = await fetch(API_URL) // await - почекати поки не виконається
        const posts = await res.json() // await - покати резулдьтата або помилки
        setPosts(posts)
      } catch (error) {
        setError(error.message)
      }
      setIsLoading(false)
    })()
  }, [])

  // По суті, буде аналогчний результат, просто інший підход
  // Додали async щоб вона була асинхронною
  // await fetch(API_URL) - очікуємо відповідь від серверу
  // const posts = await res.json() - розібрати, повертається проміс методом json(), в результаті в нас масив постів
  // try / catch - зловити помилку
  // setIsLoading(false) - приховатии прелоадер

  // !!! Функція useEffect() - має повертати або undefoned, або іншу функцію!
  // В прикладі з попереднього уроку повертається undefoned, і це допускається в React.

  // useEffect(() => {
  //   fetch(API_URL)
  //     .then((res) => res.json())
  //     .then((posts) => setPosts(posts))
  //     .catch((error) => setError(error.message))
  //     .finally(() => setIsLoading(false))
  // }, [])

  // В наступному прикладі ми додали повернення функції, так можна зробити коли при unmount ДЕМОНТАЖ (прибрати.приховати компонент з видимої частини інтерфейсу) компонента потрібно виконати очищення - то буде визвана якраз функція яка в return
  // useEffect(() => {
  //   fetch(API_URL)
  //     .then((res) => res.json())
  //     .then((posts) => setPosts(posts))
  //     .catch((error) => setError(error.message))
  //     .finally(() => setIsLoading(false))
  //
  //      return () => {
  //        console.log('123')
  //      }
  // }, [])

  if (error) {
    return <h1>Error: {error}</h1>
  }

  return (
    <>
      <h1>Posts</h1>
      <hr />
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        posts.map((post) => <Post key={post.id} {...post} />)
      )}
    </>
  )
}

export default Posts
