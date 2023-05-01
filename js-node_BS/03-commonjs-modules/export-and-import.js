const { myName, myHobbies } = require('./multiple-exports')

const myFriendsName = 'Alice'

module.exports.myName = myName
module.exports.myFriendsName = myFriendsName
// property names could be different from the variable names
module.exports.myGreatHobbies = myHobbies

// Виходить ми імпортуємо myName, а потім експортуємо myName, такий собі реекспорт змінної
// а myFriendsName ми створили тут
