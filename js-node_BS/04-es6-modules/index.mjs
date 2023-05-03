// Два іменованих імпорта
import { season, temperature } from './named-exports.mjs'
// Два іменованих імпорта, 2 варіант експорта, export на початку
import { isRaining, humidity } from './inline-exports.mjs'

// Імпорт функції, export default getData;
// getDataFromServer змінили назву!
import getDataFromServer from './default-export.mjs'

import DEFAULT_SERVER, {
  USERNAME as MY_USERNAME,
  PASSWORD as MY_PASSWORD,
} from './mixed-exports.mjs'

// Обробка імпорта вище
console.log(season)
console.log(temperature)
// Обробка імпорта вище
console.log(isRaining)
console.log(humidity)

// Обробка імпорта вище
getDataFromServer('https://jsonplaceholder.typicode.com/posts/1')
  .then((post) => console.log(post))
  .catch((err) => console.error(err))

// Обробка імпорта вище
console.log(DEFAULT_SERVER)
console.log(MY_USERNAME, MY_PASSWORD)
