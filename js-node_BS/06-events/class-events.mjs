import EventEmitter from 'events'

// наслідуємо EventEmitter
class Post extends EventEmitter {
  // constructor визивається автоматично при створені екземпляра класу
  constructor(author, text) {
    super() // обов'язково визвати constructor батьківського сласу
    this.author = author // додамо данні
    this.text = text // додамо данні
    this.likesQty = 0 // додамо данні
    // створимо відстежувача likePost
    this.on('likePost', (username) => {
      console.log(`${username} liked your post!`)
    })
    // створимо відстежувача error
    this.on('error', (error) => {
      console.error(error)
    })
  }

  // метод, який додає лайки
  like(username) {
    if (!username) {
      return this.emit('error', new Error('No username in the like request!'))
    }
    this.likesQty += 1
    this.emit('likePost', username) // СТВОРИТИ ПОДІЮ
  }
}

const myPost = new Post('Bogdan', 'My great post!')

// console.log(myPost.author);
// console.log(myPost.text);
// console.log(myPost.likesQty);
// myPost. - ввести, подивитися підказку, які методи наслідує
myPost.like('alice')
setTimeout(() => myPost.like(), 1000)
setTimeout(() => myPost.like('alex'), 2000)
// console.log(myPost.likesQty);
