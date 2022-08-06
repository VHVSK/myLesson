const objectA = {
    a: 10,
    b: true
}

// маємо змінну та значення, значення це ПОСИЛАННЯ на об'єкт!!!

// Створимо копію 
const copyOfA = objectA

// Тепер ми маємо дві змінних: objectA та copyOfA
// Вони мають однакове посилання на об'єкт

copyOfA.a = 20

console.log(copyOfA.a) // -> 20
console.log(objectA.a) // -> 20

// Як видно, обидві змінні змінені

// Також, можна додавати нові властивості об'єкту
copyOfA.c = 'abc'
console.log(objectA.c) // -> abc

// Ctrl + R  - очистити консолі браузера і очищення пам'ті