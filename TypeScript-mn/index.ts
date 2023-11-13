import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/todos/1'

interface Todo {
  id: number
  title: string
  completed: boolean
}

axios.get(url).then((response) => {
  const todo = response.data as Todo

  const id = todo.id
  const Title = todo.title
  const Completed = todo.completed

  console.log(
    `Todo ID: ${id}, Todo Title: ${Title}, Todo Completed: ${Completed}`
  )
})
