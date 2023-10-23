import getCurrentTime from '../utils/getCurrentTime.js'
// імпорт конкретних змінних
// import { ADD_CURRENT_TIME, CLEAR_ALL_TIMES } from './actionTypes.js'

// імпорт всіх змінних
import * as actionTypes from './actionTypes.js'

export function addCurrentTime() {
  return {
    type: actionTypes.ADD_CURRENT_TIME,
    payload: getCurrentTime(),
  }
}

export function clearTimes() {
  return {
    type: actionTypes.CLEAR_ALL_TIMES,
  }
}

// Ми створили функції які створють дію, просто об'єкт з командою дії.
// І тепер, у файлі index.js ми не пишево ці функції вручну, а просто визиваємо ці функції які повертають об'єкт дії.
