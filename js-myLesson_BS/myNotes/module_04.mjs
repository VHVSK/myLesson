// Приклад 2
// Тут назви змінни в файлі який робить імпорт, мають співпадати з назвами в файлі експорт
import {
    one,
    two as twoNew
} from './module_03.mjs'

console.log(one)
console.log(twoNew)

// Також можна перейменувати змінні при імпорті
// Наприклад:
/*
import {
    one as oneRename,
    two as twoRename
} from './module_03.mjs'

console.log(oneRename)
console.log(twoRename)
*/