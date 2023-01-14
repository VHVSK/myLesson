function darkmode() {
  const wasDarkmode = localStorage.getItem('darkmode') === 'true'

  localStorage.setItem('darkmode', !wasDarkmode)
  document.body.classList.toggle('dark-mode', !wasDarkmode)
}

document.querySelector('.btn').addEventListener('click', darkmode)

function onLoad() {
  document.body.classList.toggle(
    'dark-mode',
    localStorage.getItem('darkmode') === 'true'
  )
}

document.addEventListener('DOMContentLoaded', onLoad)
