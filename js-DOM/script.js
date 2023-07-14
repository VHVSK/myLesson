// Браузерне тоточення:
// window - глобальний об'єкт стоїть в основі
// 1. DOM: document and ...
// 2. BOM: navigator, location, history and ...
//    navigator - інформація про браузер та про операційну систему
//    location - отримати поточниу адресу сторінки або перенаправити на іншу
//    history - позволяє оримати історію та переходити по ній, наприклоад history.back(), history.forward()
// 3. javascript: Object, Array, function and ...

// ! ПОШУК ТА НІВІГАЦІЯ ПО ДОМ //

// ! ALERTS
// Щоб щось вивести - потріно відкрити консоль браузера

// Також, взіємодія з користувачем, виводять діалогові вікна
// alert, confirm, promt
alert('Hello')
const confirmUser = confirm('Do you speak English?')
const promtUser = promt('What you name?')

// ! DOCUMENT
// html теги показіні у вигляді дерева DOM
// основою звернення э document, наприклад:
const htmlElem = document.documentElement
headElem = document.head
bodyElem = document.body

// ! NEXT, LAST, CHILD, PREV
// Перший та останній елемент у вибраного елемента
const bodyElem = document.body
const firstBodyElem = bodyElem.firstChild // по суті ми отримаємо перенос строкиЮ бо це є перший узел в дочерньому вибраного body
const lastBodyElem = bodyElem.lastChild // тут ми отримаємо сам підключений скрипт, тому рекомендується підключати скрипт джаваскрипт в кінці body
const childNodes = bodyElem.childNodes // отримає всіх дітей вибраного елемента, включая текстрові вузли, отримуємо колекцію, не маисв
childNodes.hasChildNodes() // щоб перевірити всі дочірні вузли, потріно визвати метод

// Щоб звернути до наступного об'єкта
const bodyElemnt = document.body
const previousSiblNode = bodyElemnt.previousSibling
const nextSiblNode = bodyElemnt.nextSibling // в даному випадку нічого, такя як після body нічого немає
const parentNode = bodyElemnt.parentNode // отримати батьківський елемент, по суті, в даному випадку отримаємо весь html

// Щоб отримати доступ до всіх елементів, без текстових вузлів, це також колекція
const bodyChildren = bodyElemnt.children

// аналогічно, тільки не вузли, а самі елементи, також колекція
bodyElemnt.firstElementChild
bodyElemnt.nextElementSibling
// також сусідні та батькістькі елементи
bodyElemnt.previousElementSibling
bodyElemnt.nextElementSibling
bodyElemnt.parentElement

// ! QUERYSELECTOR - шакає та повертає елементи по селектору CSS всередині елемента
// це не масив, це колекція
// повертає статичну колекції, якщо додати елементи скриптом, вони не будуть їх містити
document.querySelectorAll
document.querySelector

// querySelector те є саме що і querySelectorAll, тільки повертає перший попавшийся елемент, а не колекцію елементів

// наприклад
const elem1 = document.querySelectorAll('.myStyle')
const elem2 = document.querySelectorAll('li')
const elem3 = document.querySelectorAll('li.myStyle')
const elem4 = document.querySelectorAll('.myStyle>li') // перший рівень вкладення
const elem5 = document.querySelectorAll('#myId') // по ІД
const elem6 = document.querySelectorAll('[data-item]') // атрибут
const elem7 = document.querySelectorAll('[data-item="85"]') // атрибут зі значенням

// як перебрати
const elemLI = document.querySelectorAll('li')
console.log(elemLI[2])

for (const item of elemLI) {
  console.log(item)
}

elemLI.forEach((item) => {
  console.log(item)
})

// Можна також шукати у вже вибраних елементах
// такий варінат не завжди повертає очікуваний результат
const elementsClassLi = document.querySelectorAll('.classLi')
const subItems = elementsClassLi[0].querySelectorAll('li')
console.log(subItems)

// ! GETELEMENTBYID
// пошук по його id
// id унікальгний та пошук більки в середині document
// писати # не потрібно
// повертає статичну колекцію, якщо додати елементи скриптом, вони не будуть їх містити
const gebi = document.getElementById('idElement')

// повертає колекцію тегів
// передавши * можна оримати всіх потомків
// повертає живі елементи колекції, якщо додати елементи скриптом, вони будуть їх містити
const gebtn = document.getElementsByTagName('li')
const gebts = document.getElementsByClassName('myClass')
const gebtname = document.getElementsByName('list')

// ще один метод, шукає найближчого батьківського елемента
const closestElem = document.querySelector('.class')
const parentList = closestElem.closest('.lessonList')

// щоб перевірити чи міститься певний клас елемнент
const elemMatches = document.querySelectorAll('.myStyle')
for (let elem of elemMatches) {
  if (elem.matches('[class$="lesson_itemList_red"]')) {
    console.log('red')
  } else if (elem.matches('[class$="lesson_itemList_blue"]')) {
    console.log('blue')
  }
}

// також, можемо використовувати властивість навігації
// отримуємо наступний елемент
const text = document.querySelector('.myText')
const list = text.nextElementSibling

// ! РЕДАГУВАТИ СТВОРЮВАТИ та ДОДАВАТИ СВІЙ КОД //
// Редагувати об'єкт
// Спочатку вибрати об'єкт
const text2 = document.querySelector('.myText')
// отримаємо вміст разом з тегами якщо він маістить такі
const modifyText = text2.innerHTML
// щоб замінити вміст
text2.innerHTML = 'Це новий вміст!'
// В тойже час, змінна modifyText ще містить старий текст, тому ми можемо його використати та дописати або допровнити його
text2.innerHTML = `${modifyText} <p>Це новий вміст!</p>`

// аналогічно textContent, тільки не виводить теги
const text3 = document.querySelector('.myText')
const modifyText3 = text2.textContent
// виведе також теги: ...<p>Це новий вміст!</p>
// один із способів захиститися від отримання від юзера не бажаний скрипт
text2.textContent = `${modifyText} <p>Це новий вміст!</p>`

// спосіб отримати наступний вузол, це буде коментар, до самого тексту можна отримати доступ через data
const text4 = document.querySelector('.myText')
const modifyText4 = text4.nextSibling
console.log(modifyText4)
console.log(modifyText4.data)
// щоб змінити його
modifyText4.data = 'Hello'

// Створення нового елемента, тега
const newElement = document.createElement('div')
// після створення його можна наповнити
newElement.innerHTML('Hello!')

// Щоб створити не елемент, а текстовий вузол, то використовуємо createTextNode
const newText = document.createTextNode('Hello!')
console.log(newText)
// всі створені об'єкти не являються частиною документа
// Щоб їх вствити:
// - перед об'єктом - newElement.before(newElement)
// - після об'єкта - newElement.after(newElement)
// - всередина і на початок об'єкта - newElement.prepend(newElement)
// - всередина і в кінець об'єкта - newElement.append(newElement)

// Більш потужний метод вставки
// перший парамертр: beforebegin, afterbegin, beforeend, afterend
// html стає тегами, а не строкою
newElement.insertAdjacentHTML('beforeend', '<h1>Hello World!</h1>')

// Подібні до цього:
newElement.insertAdjacentText('afterbegin', 'Hello!') // вставляє текст
newElement.insertAdjacentElement('afterbegin', newText) // вставляє елемент

// ПЕРЕНЕСЕННЯ ЕЛЕМЕНТІВ
const lessonBlock = document.querySelector('.lesson')
const title = document.querySelector('.h3')
// щоб перенести title в конець блоки lessonBlock
lessonBlock.append(title)

// ! КЛОНУВАННЯ ОБ'ЄКТА
const lessonElement = document.querySelector('.lessonElement')
// клонування без дочерніх елементів
constClone1 = lessonElement.cloneNode()
// клонування разом з дочерніми
constClone2 = lessonElement.cloneNode(true)
// ну і вставити
const lessonBlock2 = document.querySelector('.lesson')
lessonBlock2.append(constClone1) // or constClone2

// ! ВИДАЛИТИ ОБ'ЄКТ з DOM
const lessonElement3 = document.querySelector('.lessonElement')
lessonElement3.remove()

// КЕРУВАННЯ КЛАСАМИ ТА СТИЛЯМИ
const elementClass = document.querySelector('.lessonElement')
// щоб отримати імена класів
const allClassList = elementClass.className
// щоб перезаписати ці класи
elementClass.className = 'red'
// але валастивість classList можна більше дій
elementClass.classList.add('active') // додати клас
elementClass.classList.remove('active') // видалити клас
elementClass.classList.toggle('active') // якщо немає - додасть, якщо є - втдалить
elementClass.classList.contains('active') // перевіряє чи є, поверне true/false

// також, classList можна перебрати циклом
for (let value of elementClass.classList) {
  console.log(value) // перебере всі класти які є в елеммента
}

// ! КЕРУВАННЯ СТИЛЯМИ
const elementSt = document.querySelector('.lessonElement')
elementSt.style.color = 'red' // задали стиль за допомогою css властивістю
elementSt.style.marginLeft = '10px' // не забуваємо про одиниці виміоу
elementSt.style.zIndex = '2' // задали стиль за допомогою css властивістю
// якщо властивість з двох слів, то замість тире пищемо з великої літери, camelCase

// Щоб отримати значення властивості, просто до нього потріно звернутися
// можна отримати якщзо воно записано в атрибуті style
// якщо не записано, то використовуйте
console.log(elementSt.style.color)

// щоб скинути стилі, можна присвоїти пусту строку
elementSt.style.color = ''

// Щоб додати відразу декілька стилів
// цей метод перезаписує всі які були до цього
elementSt.style.cssText = `margin-bottom: 10px; color: red;`

// Щоб отримати стить елемента, навіть який не записаний в арибуті
const elementStyles = getComputedStyle(elementSt)
console.log(elementStyles.fontSize) // 18px
console.log(parseInt(elementStyles.fontSize)) // 18

// можна навіть отримати стилі псевдоелемента
const elementBeforeStyles = getComputedStyle(elementSt, '::before')
console.log(elementBeforeStyles.backgroundColor) // rgba(128, 128, 128)
// рекомендується вказувати повний запис, наприклад не margin, а marginLeft

// ПАРСИТЬ І ПОВЕРТАЄ ЧИСЛО - parseInt
console.log(parseInt(elementStyles.fontSize)) // 18

// РЕКОМЕНДАЦІЇ
// Керувати класами найбільш приорітетний варіант
// змінювати атрибут стиля тільки в тому випадку, якщо маніпуляція класами нам не допомагає, наприклад змінити коордлинати об'єкта на льоту

// ! ВЛАСТИВОСТІ РІЗНИХ ЕЛЕМЕНТІВ
// у тега посилання інші властивості ніж у тнекствотого поля вводу
// це значить, коли браудет парсить ДОМ, він розпозніє їх і створює відповідні властивості

const link = document.querySelector('a')
const input = document.querySelector('input')

console.log(link.href) // виведе посилання
console.log(input.href) // виведе undefined

// щоб вивести список доступних властивостей
console.dir(link)

// Щоб працювати з нестандартними властивостями та атрибутами
const lessoAtributes = document.querySelector('.element')
lessoAtributes.hasAttribute('name') // перевірити наявність атрибута
lessoAtributes.getAttribute('name') // отримати значення атрибута
lessoAtributes.setAttribute('name', 'value') // вставновити значення атрибута, увага, цей метод не змінює глобальний ДОМ
lessoAtributes.removeAttribute('name') // виджалити атрибут

// ! DATASET
// всі атрибути які починаються з префікса "data-"
// зарезервовані для використання розрорбниками
// вони доступні у властивості dataset
const dataTest = document.querySelector('.element')
// щоб отримати data-атрибут
console.log(dataTest.dataset.size)

// щоб перезаписати
dataTest.dataset.size = '1000'

// щоб отримати data-атрибут-отрибут в якого більше слів - використовуємо камелКейс
// щоб отримати data-атрибут-отрибут в якого більше слів - використовуємо камелКейс
// data-size-value
dataTest.dataset.sizeValue = '1000'

// ЩОБ ПЕРЕВІРИТИ ЯКИЙ ТЕГ У НАШОЇ ВЛАСТИВОСТІ
const link2 = document.querySelector('a')
console.log(link2.tagName) // A

// ЩОБ ПРИХОВАТИ АБО СКРИТИ
link2.hidden(true)
console.log(link2.hidden) // запросити стан
