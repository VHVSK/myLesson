import store from './redux/store.js'
// note in file index.note.js
import { addCurrentTime, clearTimes } from './redux/actionCreators.js'

// Запустити проект за допомогою Life Server, перед цим натисніть на index.html
// ! даний проект це доповнення до попереднього уроку
// ! actionCreators
// ! actionTypes
// Щоб не писати вручну об'єкти в подіях, потрібно створити actionCreators та actionTypes
// Створимо в папці Redux файл actionCreators.js
// Свторимо файл actionTypes.js та ствримо змінні, і додамо їх в функції у actionCreators.js та в reducer.js

const addTime = document.getElementById('btnAddTime')

addTime.addEventListener('click', () => {
  // передати подію
  store.dispatch(addCurrentTime())
})

// кнопка очистити список часу
const clearTimesbtn = document.getElementById('clearTimes')
clearTimesbtn.addEventListener('click', () => {
  // передати подію
  store.dispatch(clearTimes())
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
