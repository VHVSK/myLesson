// 2.14~~
// JAVASCRIPT OBJECT NOTETION
// формат обміну данними
{
    "userId": 1,
    "id": 1,
    "title": "Test title",
    "status": {
        "completed": false
    }
}

// передача за допомогою строки
{"userId":1,"id":1,"title":"Test title","status":{"completed": false}}
// конвертація, парсинг строки
// такий метод
JSON.parse()

// навпаки
JSON.stringify()

// Пробуємо, створимо об'єкт
const post = {
    title: 'myPost',
    likesQty: 5
}

JSON.stringify(post) // -> {"title":"myPost","likesQty":5}

const postStringefied = JSON.stringify(post) // створимо нову змінну, її значення буде наша строка

// теперизоб її розпарсити
JSON.parse(postStringefied)
// Можемо присвоїти її змінної
// const parse = JSON.parse(postStringefied)

// ЯК ПЕРЕДАЮТЬСЯ ДЖАННІ З СЕРВЕРІВ
// Відкриємо біля консолі складку Мережа
// Тепер відкриємо в цій вклдаці amazon.com
// Можна фільтрувати потрбіні данні, знайти suggestions та перейти на вкладку відповідь
// -> маємо JSON відповідь (в млєву випадку нічого не було)