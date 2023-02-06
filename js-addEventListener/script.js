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
// можна посилатися на об'єкт з параметрами
const option = {
  capture: false, // фаза на якій має спрацювати обробник події, тобто якщо призначення на якомусь середньому шарі, то при занурені він спрацює, детальніше нижче на Звнурені та вспливанні
  once: false, // якщо true, то обробник буде автоматично видалений після виконання, ніби доданий removeEventListener
  passive: false, // якщо true, то обробник ніколи не визве prevenDefault(), тобто ми не будемо забороняти виконувати події за умовчанням
}

button_4.addEventListener('click', testAlertRemovEL, option)

// Або записати параметри відразу третім аргументом
button_4.addEventListener('click', testAlertRemovEL, { capture: false })

// ОБ'ЄКТ ПОДІЇ //
// називають його event, це об'єкт який записує браузер коли відбувається подія, далі можна передати його в якості аргумента обробнику функції
const button_5 = document.querySelector('.button_5')

button_5.addEventListener('click', showConsole)
// button_5.addEventListener('mouseenter', showConsole)

function showConsole(event) {
  console.log(`Тип обробника type: ${event.type}`)
  console.log(`Об'єкт на скому спрацював обробник target: ${event.target}`)
  console.log(event.target)
  console.log(
    `Об'єкт до якого призначений обробник currentTarget: ${event.currentTarget}`
  )
  console.log(event.currentTarget)
  console.log(
    `Координати кліка відносоно вікна браузера clientX: ${event.clientX}`
  )
  console.log(
    `Координати кліка відносоно вікна браузера clientY: ${event.clientY}`
  )

  console.log(`Всі деталі event: ${event}`)
  console.log(event)
}

// ВСПЛИВАННЯ ТА ЗАНУРЕННЯ (маєтться на увазі, подія спочатку погружається вниз слоїв, а потім піднімається вверх по слоям) //
// Уявімо ситуацію, коли ми маємо вкладені блоки до кожного слухаємо подію, то якшщо ми клікнемо по блоку який знаходиться вище, то в нижньому також спрацює ця подія
// щоб зупинити спрацювання тподії на нижніх блоках:
button_5.addEventListener('click', (event) => {
  console.log(`Спрацював: event.stopPropagation()`)
  event.stopPropagation()
})

const divPink = document.querySelector('.stopPropagation')

divPink.addEventListener('click', (event) => {
  console.log('--- Click on pink div ---')
})

// занурення, тобто, якщо в нас є три шари блоків, до середнього шару призначена опція capture: false - то спочатку при занурені спрацює подія середнього блоку, потім нижнього блоку, потім коли буде вспливати, то спрацює вже подія верхнього блоку.
// фаза на якій має спрацювати обробник події, тобто якщо призначення на якомусь середньому шарі, то при занурені він спрацює, а коли обробник буде підніматися, то спрацють всі інші

// ДЕЛЕГУВАННЯ ПОДІЙ //
// Наприклад, в нас багато об'єктів на які ми хочемо повітити подію, а це в свою чергу добряче грузить систему
// Тому, потрібно повідити подію на один батьківський об'єкт, при винекнені події отримати об'єкт на який клікнули (target, currentTarget) і перевіряємо чи це той об'єкт (наприклад чи кнопка)
// завдякий цьому рішеню, дуже добре реалізовувати наприклад Меню, якщо клік в іншому місці, то меню закривається
const lesson = document.querySelector('.lesson')

lesson.addEventListener(
  'click',
  (e) => (e.target.closest('.button_lesson') ? showConsole2() : showConsole3())
  // closest - перевірка чи це цей об'єкт
)

function showConsole2() {
  console.log('Спрацював клік на кнопці по події батьківського блоку')
}
function showConsole3() {
  console.log('Спрацював на батьківському блоку')
}

// 22,52
// меню, в мене цей приклад не працює, але суть ідеї зрозуміла
// Як і сказава автор, це не кращий варіат по продуктивності
const menuBody = document.querySelector('.menu')

menuBody.addEventListener('click', menu)

function menu(event) {
  if (event.target.closest('.menu__button')) {
    menuBody.classList.toggle('_active')
  }
  if (!event.target.closest('.menu')) {
    menuBody.classList.remove('_active')
  }
}

// ВІДМІНИТИ ПОДІЇ БРАУЗЕРА ЗА УМОВЧАННЯМ - prevenDefault()
const link = document.querySelector('.link')
const link2 = document.querySelector('.link2')

link.addEventListener('click', (e) => {
  alert('Виконуємо свої дії та відміняємо перехід через e.preventDefault()!')
  e.preventDefault()
})

link2.onclick = () => {
  alert('Виконуємо свої дії та відміняємо перехід через return false!')
  return false
}

// ще один параметр наперед повідомляє браузеру, що подія за умовчанням НЕ ЗБИРАЄТЬСЯ ВІДМІНЯТИ подію за умовчанням, щоб ще менше навантажувати систему і вона працювала плавно
link.addEventListener(
  'click',
  (e) => {
    alert('Виконуємо свої дії та відміняємо перехід через e.preventDefault()!')
    //e.preventDefault() - в даному випадку не можна визивати цей метод
  },
  { passive: true }
)

// 28:48
// ПОДІЇ МІШКИ

// Прості:
// mousedown / mouseup - кнопка натиснута та відпущена
// mouseover / mouseout - момент повя та відходу з елемента та mouseenter / mouseleave
// mousemove - кожен рух миши генерує цю подію
// contextmenu - правою кнопкою миши або іншими методами визвати контекстне меню

/**
 * Комплексні:
 * click - визивається mousedown і потім mouseup над одним і тим самим об'єктом
 * dblclick - подвійний клік на елементі
 */

const mouseEventBtn = document.querySelector('.mouseEvent')

mouseEventBtn.addEventListener('mousedown', (event) => {
  console.log(`Яка кнопка натиснута: ${event.which}`)
})
mouseEventBtn.addEventListener('click', () => {
  console.log('Click')
})
mouseEventBtn.addEventListener('contextmenu', () => {
  console.log('contextmenu')
})

// Рух миши
// 33:25
const boxXY = document.querySelector('.boxXY')

boxXY.addEventListener('mousemove', (e) => {
  boxXY.innerHTML = `clientX: - ${e.clientX} (${e.offsetX}) <br> clientY: - ${e.clientY} (${e.offsetY})`
})

// mouseover / mouseout
// тут є крута властивість target, relatedTarget
const mouseOverAndOut = document.querySelector('.mouseEventMouseOverOut')

mouseOverAndOut.addEventListener('mouseover', (e) => {
  mouseOverAndOut.innerHTML =
    'Курсор над полем. Плюс властивість target: ' +
    e.target +
    '; relatedTarget: ' +
    e.relatedTarget +
    '; Це типу куди зайшов і куди пішов!'
})

mouseOverAndOut.addEventListener('mouseout', (e) => {
  mouseOverAndOut.innerHTML =
    'Курсор НЕ над полем. Плюс властивість target: ' +
    e.target +
    '; relatedTarget: ' +
    e.relatedTarget
})

// також, будьте уважні, якщо об'єкт буде містити в собі дочерні елементи, і коли курсор буде переходлити на дочерній об'єкт, то спрацює "вспливання події", тобто спочатку він вийде а потім знову зайде
// mouseenter / mouseleave - аналошгічно, тільки без встпливання, в свою чергу це зменшує навантажегня коли нам не потрібне "встпливання", з іншої сторни в нас немає делегування
// mouseover / mouseout є делегування, дивіться вище що це таке в прикладі меню

// 41.37 - Приклад функції перетягування об'єкта в межах поля і визвати подія якщо він буде над вкладеним елементом, функція drag-n-drop

// ПОДІЇ КЛАВІАТУРИ
// keydown - клавіша натиснута
// keyup - клавіша відпущена
// також, вони мають властивості event.code, event.key
// event.code -не змінюється
// event.key - змінюєтьтся в залежності від мови та капса

const input = document.getElementById('inputTxt')
const resulInput = document.getElementById('resulInput')

input.addEventListener('keydown', (e) => {
  resulInput.innerHTML = `Натиснута: e.code: ${e.code}; e.key: ${e.key}`
})
input.addEventListener('keyup', (e) => {
  resulInput.innerHTML = `Відрпущена: e.code: ${e.code}; e.key: ${e.key}`
})

// Щоб відстілкувати поєднання клавіш
input.addEventListener('keydown', (e) => {
  if (e.code == 'KeyZ' && (e.ctrlKey || e.metaKey)) {
    alert('Відміна дії')
    // e.metaKey - на Mac
  }
})

// Відстежити якщо клавіша натиснена та не відпущення, тобтто відбувається автоповтор
const repeatEvent = document.getElementById('repeat')
input.addEventListener('keydown', (e) => {
  repeatEvent.innerHTML = ' Чи утримується клавіша: ' + e.repeat
})

// ПОДІЇ СКРОЛА
// 49:15
