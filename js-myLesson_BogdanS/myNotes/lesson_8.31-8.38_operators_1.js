// ОПЕРАТОРИ - це вбудована функція
// будемо говорити про:
// операнди, a та 10 - операнди
a = 10

// Унарні та бінарні, у бінарних два операнда, аргумента
// Унарні
a++
++a + a
delete obj.a
typeof a
new Object() // створить новий екземпляр
// бінарні
a = 5
a + b
a += 5
a === b // порівнює тип та значення
a && b // бінарний логічний

// Інфіксна, префіксна, постфіксна
// Інфіксний запис, оператор між операндів
a = true
a + b
a += 5
a || b
a > b

// префіксний запис
++a
delete obj.a
typeof a

// постфіксий запис
a++
myFunction()

// Арифметичні +-*.
// Порівняння === !== <= >=
// Логічні ! && ||
// Присвоювання =
// Текстові: typeof - тип значення
// Текстові: instanceof - приналежність об'єкта до того чи ішгого класу
// Текстові: new
// Текстові: delete

// , - також оператор

// ПРИОРИТЕТНІСТЬ ОПРЕРАТОРІВ, ПРИОРИТЕТНІСТЬ ВИКОНАННЯ JS
a +
  (b * c) / d -
  e(
    // */+-
    // для зміни використовуйте ()
    a + b * c
  ) /
    d -
  e

// ЛОГІЧНІ ОПЕРАТОРИ
// ! - ні, не
// && - та, повертає значення одного з операндів
// || - або, повертає значення одного з операндів

// ЛОЖНІ ЗНАЧЕННЯ, НЕПРАВДА
// ! - ні, не. Завжди повертає boolean значення, або true або false; false = false, 0, '', undefined, null

// Відкрити консоль
Boolean('') // Boolean це функція -> false
Boolean(undefined) // -> false
Boolean(0) // -> false
Boolean(' ') // -> true
Boolean('5') // -> true

// typeof
typeof 10 // -> number
typeof undefined // -> undefined
typeof 'Bogdan' // -> string
typeof false // -> boolean
typeof 10 === 'number' // -> true, перевірити чи число
typeof 'number' === 'number' // -> false, це сторока, а не число

let isUndefined
typeof isUndefined === 'undefined' // -> true, щоб перевірити чи існує значення
