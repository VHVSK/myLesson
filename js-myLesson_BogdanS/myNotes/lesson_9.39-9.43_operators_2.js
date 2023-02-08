// ЛОГІЧНІ ОПЕРАТОРИ
// !, &&, ||

// ! - не
!10 // false
!0 // true
!'abc' // false
!'' // true
!true // false
!undefined // true

// !! - подвійне ні, перевірити невірність значення
!!10 // true
!!0 // false
!!'abc' // true
!!'' // false
!!true // true
!!undefined // false

// Оператор короткого замикання!!!, тобто при знаходженні далі не перевіряють умови
// &&, ||

// && - і
// Завжди провертає перше неправдиве значення!!!, якщо неправдивих немає, то повертається результат останнього операнда
// якщо одне зі значень не правда, то інші не перевіряються
// Якщо перше правда, то перевіряється друге, якщо друге не правда, то друге повертається, не перше, а друге

// || - або
// Завжди повертає резутьтат першого правдивого операнда, якщо всі неправдиві, то повертається останнього опернда

// Кожен орперанд це вираз JS

// Трюк з оператором І та физовом функції
let b = 10
b && console.log('Виконано')

// Yes
// undefined

let c
c && console.log('Виконано')

// undefined

// Цепочка операторів і та або
a && b && c && d
a || b || c || d

a || b || c || d
// a, b, c, d - не обов'язково мають бути змінними, це можуть бути і функції
// Забжди повертаєтьсязначення одного з операндів!!!

// Цікавий випадок з задачі 48
const valQty = ('undefined' || 0) + 5 // 5
