// ! Приклад використання
// https://jsonplaceholder.typicode.com/
// завдання - запросити данні по API і вивести роздрукувати результат:
// * https://jsonplaceholder.typicode.com/todos

// Ствроимо папку fetchjson
// * fetchjson - створити папку та перейти в неї
// та ініціюємо package.json
// * npm init -y
// Встановити модуль axios
// * npm install axios
// Створити файл index.ts
// Пишемо код.
// Відкрити командний рядок для копмпіляції файлу index.js
// * tsc index.ts
// Повернутися в VSC і ми побачимо файл index.js
// запутсити його
// * node index.js
// Рузультат:
// { userId: 1, id: 1, title: 'delectus aut autem', completed: false }

// Якщо ми встановили TS в проект, через 'npm install typescript --save-dev', то можемо визвати з консолі VSC команддою `npx tsc index.ts`

// В рузультаті, щоб скомпілювати файл та визвати компілбований файл:
// * npx ts-node index.ts

// Відпрвідь: { userId: 1, id: 1, title: 'delectus aut autem', completed: false }
