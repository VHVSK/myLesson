import EventEmitter from 'events'

// 1) створити екземпляр
const myEmitter = new EventEmitter()

// Виконати функцію відстежувача події
const timeoutListenerFn = (secondsQty) => {
  console.log(`Timeout event in ${secondsQty} seconds!`)
}

// Створимо відстежувача події
myEmitter.on('timeout', timeoutListenerFn)

// створимо подію
setTimeout(() => myEmitter.emit('timeout', 1), 1000)
setTimeout(() => myEmitter.emit('timeout', 2), 2000)

// 2) тут буде визвана тільки один раз singleEvent
// Щоб однократно відреагувати на подію, для цього метод once
myEmitter.once('singleEvent', () => {
  console.log('Single event occurred')
})

// Listener function will be called only once!
setTimeout(() => myEmitter.emit('singleEvent'), 500)
setTimeout(() => myEmitter.emit('singleEvent'), 1500)

// 3) Вимкнення відстежувача події
// Пережамо такорє і функцію., бо для одного й того самої події, ми можемо зареєструвати декільки відстежувачів.
// Remove listener from the 'timeout' event
setTimeout(() => myEmitter.off('timeout', timeoutListenerFn), 3000)
// Визвемо, щоб перевірити що попередня строка вимкне відстежувача
setTimeout(() => myEmitter.emit('timeout', 4), 4000)
