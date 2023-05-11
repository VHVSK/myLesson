import EventEmitter from 'events'

const myEmitter = new EventEmitter()

myEmitter.on('myEvent', () => {
  console.log('First event listener')
})

myEmitter.on('myEvent', () => {
  console.log('Second event listener')
})

myEmitter.on('otherEvent', () => console.log('Other event'))

// Default listeners qty is 10
myEmitter.setMaxListeners(25) // вказати, змінити кількість відстежувачів, які можна стоврювати
console.log(myEmitter.getMaxListeners()) // вивести можливу кількість відстежувачів для певного емітера

// Вивести список зареєстрованих подій для певного емітера
console.log(myEmitter.eventNames())

setTimeout(() => myEmitter.emit('myEvent'), 1000)
