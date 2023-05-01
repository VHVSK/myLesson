// Розписано
// const exportedObject = require('./multiple-exports')
// const { myName, myHobbies, myFavoriteNumber } = exportedObject

// Об'єднано:
const { myName, myHobbies, myFavoriteNumber } = require('./multiple-exports')

// Зверніть увагу, що весь файл підключається через require, і тому навіть всі віводи в консоль будуть виведені!

const greetingFn = require('./my-modules/single-export')
// DON'T USE ABSOLUTE PATHS
// Не використовуйте абсолютні шляхи!
// const greetingFn = require('/Users/bogdan/Desktop/node/03-commonjs-modules/single-export.js');

const {
  myName: myOtherName, // так як в нас вже є змінна myName, тому при деструктуризації ми створюємо змінну з іншою назвою
  myFriendsName,
  myGreatHobbies,
} = require('./export-and-import')

// Imports from multiple-exports
console.log(myName)
console.log(myHobbies)
console.log(myFavoriteNumber)

// mutates array in the multiple-exports module!
// Ми можемо додати до масиву, так як масив це об'єкт, посилаючий тип, тому змінили масив.
// Це корисно, наприклад змінювати данні, наприклад доповнювать данні підключення до БД, і інші файли будуть мати до них доступ.
myHobbies.push('climbing')

// Import from single-export
console.log(greetingFn)
greetingFn(myName)

// Imports from export-and-import
console.log(myOtherName)
console.log(myFriendsName)
console.log(myGreatHobbies)
