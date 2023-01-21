// Способи повісити подію на елемен
// 1. Прописати в самому коді: <button onclick="console.log('Клік')">Ловимо подію кліка</button>
// 2. Використання DOM об'єкта
const button = document.querySelector('.button')
button.onclick = () => alert('Клік, зловили через DOM (стрілочна функція)')

// можна запакувати у функцію
const button2 = document.querySelector('.button2')
button2.onclick = myFunction
// Щоб не визвати автоматичне виконання цієї функції, ми пишемо без дужок!!!

function myFunction() {
  alert('Клік, через функцію')
}

// недолік ціих методів - не можна повісити декілька методів на одну подію, так як це перезапише подію
