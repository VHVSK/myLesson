import { useEffect, useState } from 'react'

const useLocalStorage = (initvalue, key) => {
  const getValue = () => {
    const storage = localStorage.getItem(key) // string || null

    if (storage) {
      return JSON.parse(storage) // '[]' || '{}'
    }

    return initvalue
  }
  const [value, setValue] = useState(getValue) // getValue просто передаємо, так як useState під капотом сам її визве

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  console.log(value)

  return [value, setValue]
}

export { useLocalStorage }

// Функція отримує параметр та ключ, щоб зберегти дані в localstorage потрібен ключ та значення
// При рендері визивається useState, який в свою чергу визиває getValue
// getValue отримує дані з localStorage по ключу key, отримує string || null
// Якщо string є, то парисмо його JSON.parse(), щоб отримати об'єкт або масив, інакше просто повертаємо значення initvalue

// useEffect користувачу не помітний, але він завжди зберагіє дані в localStorage якщо key та value змінюються
