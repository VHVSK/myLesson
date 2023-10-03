import { useEffect, useState } from 'react'
import Post from './Post'

const API_URL = 'https://jsonplaceholder.typicode.com/posts'

function Posts() {
  const [posts, setPosts] = useState([])
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((posts) => setPosts(posts))
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false))
    // .catch((error) => console.log(error.message))
  }, [])

  // Прелоадер в fetch
  // Додали індикатор завантаження, щоб реалізувати це:
  // створили const [isLoading, setIsLoading] = useState(true)
  // додали метод .finally() який визивається в любому випадку і в ній визвали setIsLoading(false)
  // Ми не знаємо який результат, але процес комунікації з сервером ми закінчили

  //   if (isLoading) {
  //     return <h1>Loading...</h1>
  //   }
  //   замінили цей вивід на тернарний оператор в самому виводі

  // Отримали запит від серверу по аналогії попереднього уроку
  // Тільки вже масив
  // Додали .catch() щоб відловити помилки, наприклад якщо немаєж такого сайту то буде в консолі помилка net::ERR_NAME_NOT_RESOLVED
  // Ми переробили вивід помлки, ми створили ще одну змінну const [error, setError] = useState(''), записали поточне значення пусто, і якщо виникає помилка ми визиваємо функцію setError, і якщо помилка є:
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

  //   posts - Отримали масив постів
  //   Перебрали та кожен передади Post.js
}

export default Posts
