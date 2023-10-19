import store from './redux/store.js'

// ! Налаштування взаємодії з магазином Redux

// Стоврили reducer в файлі reducer.js та зробили export

// Ствоили store, зробили експорт бандла за посиланням https://www.jsdelivr.com/package/npm/@reduxjs/toolkit?tab=files та взяли посилання і зробили імпорт configureStore з посилання https://cdn.jsdelivr.net/npm/@reduxjs/toolkit@1.9.5/+esm, та зробили export

// підключили reducer до store, а store до index.js

// ми використовуємо модулі es6, тому потрібно додати type="module" в тег script

// console.log(store)
// маємо: {dispatch: ƒ, subscribe: ƒ, getState: ƒ, replaceReducer: ƒ, @@observable: ƒ}

// console.log(store.getState())
// маємо: []

// підписка на зміну стану store.subscribe(), також цей метод повертає функції, за допомогою якої можна ВІДПИСАТИСЯ!
const unsubscribe = store.subscribe(() =>
  console.log(`Redux store just changed! ${store.getState()}`)
)

// Визиваємо поки що вручну:
store.dispatch({
  type: 'ADD_CURRENT_TIME',
  payload: '11:30:00',
})

// Щоб відписатися, протсо визвіть unsubscribe()
unsubscribe()

store.dispatch({
  type: 'ADD_CURRENT_TIME',
  payload: '11:31:00',
})

// console.log(store.getState(), 'бачимо стан змінився')

store.dispatch({
  type: 'CLEAR_ALL_TIMES',
})

// console.log(store.getState(), 'бачимо стан пустий')

// ! Встановлення Redux DevTools
// шукати в браузері додаток для бораузера Redux DevTools

// ! Створення функції getCurrentTime в папці utils
// Створили фунгкцію яка вповертає поточний час getCurrentTime()

// ! Далі рефакторінг, створимо копію папки і додамо actionCreators and actionTypes
// Щрб не писати вручну CLEAR_ALL_TIMES і т.п.
