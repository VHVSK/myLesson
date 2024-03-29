// Функціональні вирази та стрілочні функції
// Об'явлена функція проти функціонального виразу

// Об'явлена функція
// Має імя, можна вико-ти автономно, можна присвоювати змінній, а також як аргумент в визові іншої функції
function myFn (a, b) {
    let c
    a = a + 1
    c = a + b
    return c
}

// функціональний виразу, немає ім'я
// Такі вирази завжди Анонімні
// Перші два варнати не діють, а інші два так: можна присвоювати змінній, а також як аргумент в визові іншої функції
function (a, b) {
    let c
    a = a + 1
    c = a + b
    return c
}

// присвоювати змінній
const myFunction = function (a, b) {
    let c
    a = a + 1
    c = a + b
    return c
}

// В визові іншої функції, калбек функції
setTimeout(function() {
    console.log('Відкладене повідомлення')
}, 1000);

// СТРІЛОЧНІ ФУНКЦІЇ
// Немає ключового слова function
// Стрілочні фунекції це вирази, вони анонімні - немають імені
// =>
// перевагою стрілочних функцій, це те, що якщо вона об'явлена за допомогою const, то її вже не переназначити, тобто змінна const вде не може мати інше значення
(a, b) => {
    let c
    a = a + 1
    c = a + b
    return c
}

// присвоювати змінній
const myFunction2 = (a, b) => {
    let c
    a = a + 1
    c = a + b
    return c
}

myFunction2(5, 3)

// Стрілочна функція в визові іншої функції, калбек функції
setTimeout(() => {
    console.log('Відкладене повідомлення Стрілочної функції')
}, 1000);
// Скорочення
// Можна прибрати круглі дужки при умові якщо тільки один параметр
a => {

}
// Другий варіант, фігурні дужки можна прибрати якщо тіло складіється тільки з одного виразу
(a, b) => a + b // не явно повертає результат виразу, автоматично. return не потрібно

// ЗНАЧЕННЯ ПАРАМЕТРІВ ФУНКЦІЇ ЗА УМОВЧАННЯМ
function multByFactor(value, multiplier = 1) {
    return value * multiplier
}

multByFactor(10, 2) // 20
multByFactor(5) // 5

//
const test1 = function (value, multiplier = 1) {
    return value * multiplier
}

test1(15, 4)

//
const test2 = (value, multiplier = 1) => {
    return value * multiplier
}

test2(15, 2)

//
const test3 = (value, multiplier = 1) => value * multiplier

test2(15, 3)


// ДРУГИЙ ПРИКЛАД ВИКОРИСТОВУВАТИ ПАРАМЕТРИ ЗА УМОВЯЧАННЯМ
// задача newPost - повернути об'єкт
// це варіанти з НЕявним поверненням результату функції (стрілочна функція), тому ми ще має обергути в круглі дужки
const newPost = (post, addedAt = Date()) => ({
    ...post,
    addedAt,
})

const firstPost = {
    id: 1,
    author: "Bogdan",
}

newPost(firstPost);

// Завдання переписати функцію з !явним поверненням результату функції
const newPost2 = function(post, addedAt = Date()) {
    return {
        ...post,
        addedAt
    }
}

const firstPost2 = {
    id: 2,
    author: "Viktor",
}

newPost2(firstPost2)
// {id: 2, author: 'Viktor', addedAt: 'Mon Aug 22 2022 10:35:25 GMT+0300 (за східноєвропейським літнім часом)'}