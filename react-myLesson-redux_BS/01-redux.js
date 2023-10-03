// ! REDUX
// Централізовано управляти станом компонетів, це незалежна бібліотека, використовують не тільки в Реакт
// Якщо компонент змінює стан тільки своєму компоненті, то не потріно створювати централізовний стан, а якщо приходиться тягнути стан через багато компонентів, то в такому разі потрібно створити централізований стан, функцію централізовного стану і виконує Redux

// ! Ключові поняття
// Ми маємо в проекті React Components
// 1. STATE - це те, де зберігається безпосередньо інформація о стані всього додатка, це не змінюємий об'єкт (в реакті також не можна, але можна створювати новий стан)
// 2. REDUCER - його задача, це створення нового стану!
// 3. STORE, тобто: STATE та REDUCER - знаходяться в Redux STORE, вони формують Redux STORE. 
// Кожен компонент приходить в STORE за станом! А також, компоненти можуть ложити стан в STORE, але це відбувається не на пряму, а через Reducer!
// 4. ACTION - розуміння дії, за допомогою дій можна впливати на центральний стан всьго додатку! Тобто, можна стоворювати стан на основі попереднього стану, а також певної дії. Дійство - це об'єкт JS, в якому є слово type, наприклад:
{
  type: 'CLEAR_TODOS'
}
// Також, щоб зробити опис дії, додають ще одну властивість:
{
    type: "ADD_TODO",
    payload: {
        id: 1,
        text: 'Learn Redux',
        isCompleted: false
    }
}

// React Components та ACTION - створють STORE 