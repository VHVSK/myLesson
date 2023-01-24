// Способи повісити подію на елемен
// 1. Прописати в самому коді: <button onclick="console.log('Клік')">Ловимо подію кліка</button>
// 2. Використання DOM об'єкта
const button = document.querySelector('.button')
button.onclick = () => alert('Клік, зловили через DOM (стрілочна функція =>)')

// можна запакувати у функцію
const button_2 = document.querySelector('.button_2')
button_2.onclick = myFunction
// Щоб не визвати автоматичне виконання цієї функції, ми пишемо без дужок!!!

function myFunction() {
  alert('Клік, через функцію')
}

// недолік ціих методів - не можна повісити декілька методів на одну подію, так як це перезапише подію
// основний метод реагувати на подію, це методи addEventListener та removeEventListener
const button_3 = document.querySelector('.button_3')
button_3.addEventListener('click', function (e) {
  alert('Клік, через функцію addEventListener')
})
button_3.addEventListener('click', function (e) {
  alert('Клік, через функцію addEventListener 2')
})

// Можгна винести код функції без назви у функцію з назвою
button_3.addEventListener('click', testAlert)

function testAlert() {
  alert('Клік, через функцію addEventListener, через окрему функцію')
}

// removeEventListener якщо ми не хочемо щоб браузер і надалі слідкував цю подію,
// це також навантажує систему коритсувача,
// наприклад:
const button_4 = document.querySelector('.button_4')

function testAlertRemovEL() {
  alert(
    'Клік, через функцію addEventListener, через окрему функцію. Другий клік вже не спрацює!'
  )
  button_4.removeEventListener('click', testAlertRemovEL)
}

button_4.addEventListener('click', testAlertRemovEL)

// 7-31 Параметри
