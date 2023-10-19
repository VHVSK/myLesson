import store from './redux/store.js'
// note in file index.note.js
import getCurrentTime from './utils/getCurrentTime.js'

const addTime = document.getElementById('btnAddTime')

addTime.addEventListener('click', () => {
  // передати подію
  store.dispatch({
    type: 'ADD_CURRENT_TIME',
    payload: getCurrentTime(),
  })
})

// кнопка очистити список часу
const clearTimesbtn = document.getElementById('clearTimes')
clearTimesbtn.addEventListener('click', () => {
  // передати подію
  store.dispatch({
    type: 'CLEAR_ALL_TIMES',
  })
})

// Список li в html
const timesList = document.getElementById('timesList')

// тут ми підписуємося на зміну стану subscribe, і вона викликає колбек функцію кожен раз коли змінюється стан.
store.subscribe(() => {
  timesList.innerHTML = ''

  const times = store.getState()

  times.forEach((element) => {
    let li = document.createElement('li')
    li.innerText = element
    timesList.appendChild(li)
  })
})

// При натискані на кнопку ми відправляємо подію та надаєжмо їй результат функції getCurrentTime()
