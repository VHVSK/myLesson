const fs = require('fs')
let isRunning = true

setTimeout(() => (isRunning = false), 10)
process.nextTick(() => console.log('Next tick'))

function setImmediatePromise() {
  return new Promise((resolve, reject) => {
    // 2)
    // А цим ми розриваємо цикл подій, в порівнянні з resolve()
    setImmediate(() => resolve())
    // 3)
    // за допомогою resolve() ми залишаємося на тій самій ітерації циклу подій, тобто, якщо визавати resolve(), то ми будемо знаходитися весь час на одній і тій самій позиції циклу подій і відпровідно до setTimeout ми не дійдемо!!!
    // resolve()
  })
}

// 1)
// Поки ми очікуємо результата проміса, ми можемо обробляти інші пордії і в нас цикл подій не блокується!
// Тому що, поки ми очікуємо результату промічу, ми бачимо nextTick відразу після першого while
// Потім ми опрацювали setTimeout, тим самим ми зупинили while, таким чином цикл вже не безкінечний!!!
async function whileLoop() {
  while (isRunning) {
    console.log('While loop is running...')
    await setImmediatePromise()
  }
}

whileLoop().then(() => console.log('While loop ended'))
