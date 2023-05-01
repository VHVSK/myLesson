const myName = 'Bogdan'
const myHobbies = ['swimming', 'boxing', 'cycling']
const myFavoriteNumber = 77

// Буде також віведений цей console.log
console.log('Text from the multiple-exports CommonJS module')

// module.exports and export reference the same object in memory
module.exports.myName = myName
// module.exports.myHobbies = myHobbies
// module.exports.myFavoriteNumber = myFavoriteNumber
exports.myHobbies = myHobbies
exports.myFavoriteNumber = myFavoriteNumber
