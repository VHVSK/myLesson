'use strict'
window.addEventListener('load', windowLoad)

function windowLoad() {
  // вибрати для зручності дом
  const htmlBlock = document.documentElement
  // отримати збережену тему з локального хранилища браузера
  const saveUserTheme = localStorage.getItem('user-theme')

  // Працюємо з системними налаштуваннями
  let userTheme
  if (window.matchMedia) {
    userTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
  }
  window
    .matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', (e) => {
      !saveUserTheme ? changeTheme() : null
    })

  // Зміна теми по кліку
  const themeButton = document.querySelector('.themeButton')
  const resetButton = document.querySelector('.resetButton')

  if (themeButton) {
    themeButton.addEventListener('click', function (e) {
      resetButton.classList.add('active')
      changeTheme(true)
    })
  }
  if (resetButton) {
    resetButton.addEventListener('click', function (e) {
      resetButton.classList.remove('active')
      localStorage.setItem('user-theme', '')
    })
  }

  // Функція додавання класу
  function setThemeClass() {
    if (saveUserTheme) {
      htmlBlock.classList.add(saveUserTheme)
      resetButton.classList.add('active')
    } else {
      htmlBlock.classList.add(userTheme)
    }
  }

  // додати клас теми
  setThemeClass()

  // функція зміни теми
  function changeTheme(saveTheme = false) {
    let currentTheme = htmlBlock.classList.contains('light') ? 'light' : 'dark'
    let newTheme

    if (currentTheme === 'light') {
      newTheme = 'dark'
    } else if (currentTheme === 'dark') {
      newTheme = 'light'
    }
    htmlBlock.classList.remove(currentTheme)
    htmlBlock.classList.add(newTheme)
    saveTheme ? localStorage.setItem('user-theme', newTheme) : null
  }
}
