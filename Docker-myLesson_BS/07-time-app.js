// Розробка веб-додатка TIME APP

import { lstat } from 'fs'

/**
 * Працювати буде наш додаток на:
 * Vue.js - фронтенд
 * Node.js - бекенд
 * MySQL - БД
 * Adminer - керування базою данних
 *
 * Нам потрібно буде відкрити порти для достьува ззовні.
 * Внутрішні порти:
 * фронтенд - 3000
 * бекенд - 5000
 * БД - 3306
 * Adminer - 8080
 *
 * Зоавнішні порти:
 * фронтенд - 3333
 * бекенд - 5555
 * БД - до БД доступа ззовні не буде! З БД будуть працювати бекенд та Adminer в середині. Так має бути, це додатковий рівень захисту.
 * Adminer - 8888
 *
 * Визодить такий мепінг^
 * 3333 -> 3000
 * 5555 -> 5000
 * 8888 -> 8080
 */

// ! План зщапуска додатка в Docker
/**
 * папка додатка: time-app
 *
 * 1. Запуск Docker в контейнерах для подальшої розробки
 * 2. Створити Dockerfile для фронтенд сервіса Vue.js
 * 3. Створити Dockerfile для бекенд сервіса Node.js
 * Створити ці Dockerfile ми будемо для того, щоб запустити фронтенд та бекенд додатки в середині кронтейнера, для цього потрібно стоврити ВЛАСНІ образи!
 * 4. Знайти підходящі образи для сервісів MySQL і Adminer на Docker Hub
 * 5. Створити docker-compose.yml фаул та описати в ньому 4 сервіса, включаючи налаштування мепанга потрів та томів, а також змінні середовища для деяких із сервісів. Будуть інструкції по створеню образів фронтенд та бекенд, а для MySQL і Adminer в нас будуть інструкції на те, який образ з Docker Hub використовувати для сервісів MySQL і Adminer
 * 6. Запустити сервіси та продовжити розробку.
 *
 * Також обговоримо функцію hotreload, яка позволить відразу вносити зміни в ході розробки.
 * Також, нагадуємо, сервізи взаємодіють використовуючи імена.
 */

// ! Огляд фронтенда
// ! Запуск фронтенда без докера
/**
 * Перейти в терміналі в папку frontend
 * Викронати команду встановлення залежносте npm i
 * Викронати команду яка прописана в файлі package.json, в розділі scripts:
 * dev - запустити в режимі розробки, таким чином автоматично доступка функція hotreload
 * build - створити продакшн, кінцеву версію, буде створена папка зі статичними ресурсами які можна викладати на сервер, наприклад nginx
 * Щоб запустити команду
 * * npm run dev
 *
 * Аналогічний запит на потрібно буде виконати при запуску в контейнері длокер, тільки через інструкції Dockerfile
 */

// ! Запуск фронтенда в контейнері Docker та створення Dockerfile
/**
 * Для запуска ми переходимо в папку frontend
 * Стоврюємо файл Dockerfile та заповнюємо його, пояснення там
 * Ми можемо продовжути, а можемо вже протестувати та запустити в контейнері
 *
 * Тестове створення образу:
 * Перйети в терміналі в папаку frontend
 * * ls
 * Перевірити чи є тут файл Dockerfile
 * Для запуска з назвою файла Dockerfile
 * docker build .
 * А з іншою назвою -f file_name:
 * docker build . -f Dockerfile-prod
 * Також запущений Docker Desctop
 * Також використовуючи опцію -t ми може дати ім'я образу:
 * * docker build . -t time-app-frontend
 * => => naming to docker.io/library/time-app-frontend
 * * docker images
 * time-app-frontend        latest    fad6599ca12b   About a minute ago   237MB
 *
 * Тестовий запуст новоствореного образу, створення контейнеру на сонові новоствореного образа:
 * * docker run -p 3000:3000 time-app-frontend
 * > Local:    http://localhost:3000/
 * > Network:  http://172.17.0.2:3000/
 * Щоб проінспектувати що в середині контейнера, потрібно зайти в оболочку sh як ми це робили раніше, відкрити нову вкладку терміналу та виконати
 * * docker ps
 * de4a47e60341
 * * docker exec -it de4a47e60341 sh
 * /app #
 * * ls -la
 * маємо папку node_modules
 * drwxr-xr-x    1 root     root          4096 Mar 30 18:40 node_modules
 * * npm --version
 * 9.5.1
 * * exit
 *
 * Поветаємося в попередню вкладку:
 * * Ctrl + C
 * * docker ps -a
 * бачиом контейнер був створений на основі образа time-app-frontend, статус Exited
 */

// ! Запуск бекенда в контейнері Docker та створення Dockerfile
/**
 * По аналогії створюємо Dockerfile
 * Розмістити в папці app
 * Тільки порт 5000
 * Аналогічно коментарі в Dockerfile
 * Аналогічно прикладу вище:
 * * docker build . -t time-app-backend
 *  => => naming to docker.io/library/time-app-backend
 * * docker images
 * time-app-backend         latest    fc3bf61db4b1   About a minute ago   188MB
 * * docker run -p 5000:5000 time-app-backend
 * Express web server is running at http://localhost:5000
 *
 *
 */

// також, копіювати файли Dockerfile в образи немає сенсу, тому можна створити файл .Dockerignore і той перелік не буде копіюватися

// ! Створення yml файла docker-compose.yml
// В корні папки time-app створимо docker-compose.yml
// В фійлі 4 сервіса, ми пропишемо шлях до наших двух докерфайлів для створення власних образів, а для БД та керування БД ми завантажмо офіційні з Докер Хаб
//  Деталі  в цьому файлі.
// Також ми розглянуди що таке Змінні середовища, на прикладі для mysql
// Розгялнемо змінні середовища та запустимо наш yml файл

// ! Змінні середовища
// Ввідні параменти для додатків, паролі та інші данні для процесів та контейнерів, параметри доступів і т.п.
// Відкрити термінал
// Опція змінної середовища -e MY_ENV_VARIABLE, -d - в фоновому режимі
// * docker run -d -e MY_ENV_VARIABLE=test nginx
// c8645bdfe72bef...
// * docker ps
// c8645bdfe72b
// * docker exec -it c8645bdfe72b sh
// Ми в оболочці #
// * printenv
/**
 * HOSTNAME=c8645bdfe72b
    HOME=/root
    PKG_RELEASE=1~bullseye
    TERM=xterm
    NGINX_VERSION=1.23.3
    PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
    NJS_VERSION=0.7.9
    MY_ENV_VARIABLE=test
    PWD=/
 */

// * exit
// * docker stop c8645bdfe72b

// ! Запуск yml файла docker-compose.yml
// Відкрити термінал
// Перейти в напку time-app
// * docker-compose up
// Відбувається процес завантаження
// Відкрити новий термінал
// * docker ps
// Бачимо 4 робочих контейнера
/**
 *     STATUS         PORTS                    NAMES
    b4759151a8f3   mysql               "docker-entrypoint.s…"   8 minutes ago   Up 8 minutes   3306/tcp, 33060/tcp      time-app-mysql-1
    b60ad21f2ef1   time-app-api        "docker-entrypoint.s…"   8 minutes ago   Up 8 minutes   0.0.0.0:5555->5000/tcp   time-app-api-1
    4eeb364d5064   adminer             "entrypoint.sh php -…"   8 minutes ago   Up 8 minutes   0.0.0.0:8888->8080/tcp   time-app-adminer-1
    69b41d982303   time-app-frontend   "docker-entrypoint.s…"   8 minutes ago   Up 8 minutes   0.0.0.0:3333->3000/tcp   time-app-frontend-1
    PS C:\OpenServer\domains\myLesson> 
 */

// ! Запуск нашого веб-додатка
// Відйкрити в браузері
// http://localhost:3333/

// -
// ---
// -----

// Але маємо помилки, проюлема підключення фронтенд до бекеднда:
// GET http://localhost:5555/times net::ERR_EMPTY_RESPONSE
// Uncaught (in promise) TypeError: Failed to fetch

// Давайте подивимося логи контейнера:
// ...
// time-app-api-1       |   sqlMessage: "Table 'time_db.times' doesn't exis
// ...
// time-app-api-1       | [nodemon] app crashed - waiting for file changes before starting...

// Немає таблиці...
// Виявляється, що під час підключення при створенні БД ще не була готова, відповідно  ми отримали помилку та і таблиця не стоврилася

// ! Щоб вирішити це питання, цю помилку, давайте модифікуємо docker-compose.yml
// Ми змінимо запуск додатка node.js з використанням nodemon
// Ми додамол опцію яка буде завершувати процес nodemon якщо десь в додатку node.js буде помилка.
// Давайте додамо до docker-compose.yml опцію рестарт якщо процес завершився.
// таким чином, якщо буде помилка конетйнер з з бекдодатком перезапуститься, а нас зараз цікавить модифікація запуска nodemon сервісу.
// Перейти в /api/package.json
// Змінимо: "dev": "nodemon index.mjs"
// На: "dev": "nodemon --exitcrash index.mjs"

// А також додамо в наш docker-compose.yml:
// Додати до всіх сервісів:
// restart: always

// А також ми додали до сервісу api, яка вказує на залежність, і стоврення контейнера для сервісу api відбудеться тільки після створення контенера mysql
// depends_on:
//   - mysql

// ! Перестворити образи після коригування, виправлення помилок
// Зупинити працюючі:
// * Ctrl + C
// * docker-compose down
// * docker ps -a
// Тепер можна виконати стоврення нових образів:
// * docker-compose up --build

// ! ПОМИЛКУ НЕ ВИПРАВИЛИ
// ! ВИРІШЕННЯ, остаточний варіант
// В файлі Error_connect_MySql.docx прописане вирішення цього питання.

// в docker-compose.yml дописати:
/***
 * healthcheck:
  test: ["CMD", "mysqladmin" ,"ping", "-h", "localhost"]
  timeout: 20s
  retries: 10
 */

// замінити:
// depends_on:
//   -mysql
// на:
// depends_on:
//   mysql:
//     condition: service_healthy

// Зупинити всі контенери:
// * docker-compose down

// Запустити знову (-d - в фоновому режимі)
// * docker-compose up -d

// Дочекатися поки закінчиться режтим Waiting на Healthy
// Container time-app-mysql-1     Healthy

// І все працює: http://localhost:3333/
// Як виявилося ще ні, нижче рішення:

// ! Пояснення причини помилки
/**
 * Проблема в вебсокетах, так як ми запустили додаток на різних портах 3333:3000, виявляється, що якщо внутрішній порт відрізняється від зовнішнього, по з'єднання веб сокетів не буде встановлене.
 * А вебсокети тут використовуються тому що фронтенд працює в режимі розробки - працює функція hotreload, якби були в прокнш версії де тільки статичні файли, такої помилки не було би.
 */

// ! Інший спосів вирішення помилки:
// Замінити порти на однакові:
// 3333:3000 на 3000:3000

// !! ВСЕЖ ТАКИ МИ ЗАМІНИЛИ ПОРТИ НА ОДНАКОВІ:
// 3000:3000
// Мо суті, наскільки я зрозумів, всі зміни не варто робити, а просто спатити однакові порти!!!

// І все працює: http://localhost:3000/
// Працює добре!
// Відкриємо інструменти розробника, вкладна Мережа, всі, знайти times далі вкладка headers та preview:

// Request URL: http://localhost:5555/times

/**
 * [{id: 3, time: "23:28:19", created_at: "2023-03-31T20:28:20.000Z"},…]
0
: 
{id: 3, time: "23:28:19", created_at: "2023-03-31T20:28:20.000Z"}
1
: 
{id: 4, time: "23:28:20", created_at: "2023-03-31T20:28:20.000Z"}
2
: 
{id: 1, time: "23:28:18", created_at: "2023-03-31T20:28:19.000Z"}
3
: 
{id: 2, time: "23:28:19", created_at: "2023-03-31T20:28:19.000Z"}
 */

// ! Ще варінат:
// У файлі vite.config.js на якому порті ми хочемо підняти сервер для розродкт, для цього прописати після resolve {}
// serser: { host: true, port: 3333 }
// В мене цей спосіб не вирішив питання, додаток працює але весь час перезавантажується кожні 3-5 секунд!

// -----
// ---
// -

// ! Підключеня до БД за допомогою Adminer
// Після запуска докера та створення контейнерів можемо відкрити Adminer в браузері
// http://localhost:8888/
// Для авторизації вказати назву сервіса (можна звертатитися по назві, в даному випадку mysql), яке ми вказали при сторенні образів, а також в docker-compose.yml та mysqlPool.mjs (user: 'root')
//  в полі Server - mysql
//  в полі Name - root
//  в полі Pass - password
//  в полі Database - time_db

// ! Чи зберагіються данні після створення сервісів заново
// Зупинити працюючі:
// * Ctrl + C
// * docker-compose down
// * docker ps -a
// Також можна видалити можна видалити старі контецнери
// * docker container prune
// Тепер можна підняти всі сервіси:
// * docker-compose up -d

// Висновок: записи в БД не зберігаються!
// Всі контейнери і данні створються заново!

// ! ТО ЯК ЖЕ ЗБЕРЕГТИ???
// Використовуючи томів до кентейнерів!

// Пояснення ідеї:
// Ми маємо ОС Mac or Windows
// На ньому встановлений Docker Desctop (Linux VM)
// На Docker Desctop запускається контейнер
// Цей контейнер може зв'язуватися з томом на ОС Mac or Windows
// Так і може зв'язуватися з томом на Docker Desctop (Linux VM)

// 1. варіант
// На прикладі образа nginx, ми підключалий інший том за умовчанням, щоб показувати іншу дефолтну папаку чи файл створену в себе на компютері, ми вказали що ми хочемо примапити до нашого контейнера, зробити мепінг томів. Після цього данні в контейнері, були замінені данними з нашого компютера.

// Тобто:
// 1 - використовужться в процесі розробки
// Саме зв'язок Mac or Windows <-> контейнер - і використовують в процесі РОЗРОБКИ!
// Всі зміни в папці Mac or Windows автоматично відображаються в контейнері!
// Якщо ми додаємо новий файл в папці Mac or Windows, він автоматично додаєтьтся в працюючомі контейнері!
// Такий варіант мепінга томів частіще всього використовужться в процесі розробки.

// 2. варіант
//  Зберігання данних, наприлад, данні, такі як БАЗИ ДАННИХ, зробити ці данні доступними для читання та запису для різних контейнерів. Тобто том один і той самий, а до ньбого підключаються різні контейнери.

// Такий варіант використовують зберігання данних і використання їх різними контейнерами!
// 2 варіант, це коли том знаходиться на Docker Desctop (Linux VM) і має зв'язок <-> з контейнером і майбутніми контейнерами.

// Висновок цієї писанини:
// При розробці, файли з кодом ми зберігаємо на нашому компютері, потім ці файли передаються в контейнер при необхідності.
// А якщо нам потрібно зберегти данні, наприклад БД, то ми можемо зберегти їх в оболочці Docker Desctop (Linux VM), щоб всі створені контейнери мали до нього доступ.

// ! Створення тома в середині Докекра (Linux VM) щоб там могли зберагати даннні, напр. БД
// Для цього, потрібно модифікувати docker-compose.yml файл.
// Нап потрібно стоворити мепангш томів, з контейнера в сам докер.
// Ми додали на основному рівні:
/**
 * volumes:
      mysql_data:
 */

// Також в сервсі mysql на рівні image
/**
 * volumes:
      - mysql_data:/var/lib/mysql
 */

// Далі, перезапуск наших сервісів та протестувалти, дадати записи в БД
// Далі, перезапуск наших сервісів, видалити зепинені контенери.
// Відкрити наш додаток і ми побаячимо що наша БД збережена!!!

// Зупинити працюючі:
// * Ctrl + C
// * docker-compose down
// * docker ps -a
// Також можна видалити можна видалити старі контецнери
// * docker container prune
// Тепер можна підняти всі сервіси:
// * docker-compose up -d

// ! Отримання інформації про том в середині Докера
// В консолі ввести
// * docker volume ls
// DRIVER    VOLUME NAME
// local     1b33468804b...
// ...
// local     time-app_mysql_data

// Як видно, тут докер додав префікс time-app_, докер завжди додає префікс
// Далі:
// * docker inspect time-app_mysql_data
/**
 * [
    {
        "CreatedAt": "2023-04-03T16:58:04Z",
        "Driver": "local",
        "Labels": {
            "com.docker.compose.project": "time-app",
            "com.docker.compose.version": "2.15.1",
            "com.docker.compose.volume": "mysql_data"
        },
        "Mountpoint": "/var/lib/docker/volumes/time-app_mysql_data/_data",
        "Name": "time-app_mysql_data",
        "Options": null,
        "Scope": "local"
    }
]

Labels - мітки
Mountpoint - обсолютний шлях до цього това в середині докера 
 */

// ! Том для розробки на нашому комп'ютері, а не в докері
// Ми знаємо, що докер створює копію наштих файлів в своїх контейнерах, також він встановлює залежності node_modules
// Щоб докер використвував файли з нашого компюетра, нам потріно стоврити мепінг томів наш комп:контенйер, потрібно модифікувати docker-compose.yml файл.
// АЛЕ, папку з залежностями node_modules не потрібно копівати, тому нам потрібно два мепінга, один вказати щоб і далі використвоувати node_modules, а другий том файлів на нашому комп'ютері:контенйер
// В контейнері докера буть такі самі файли як на пнашому комп'ютері.

// Отже, додати volumes в frontend:
/**
 * frontend:
      build: ./frontend
      volumes:
         - /app/node_modules
         - ./frontend:/app
 */

// А також, аналоігчно для бекенда:
/**
 * api:
      build: ./api
      volumes:
      - /app/node_modules
      - ./api:/app
 */

// Після цього потрібно перестворити образ для фронтенд програми і перестворити контейнер.
// * docker-compose down
// Тепер можна підняти всі сервіси:
// * docker-compose up -d

// ! Якщо функція hot reload не працює
// Якщо в наступному уроці функція hot reload для фронтенду програми Vue.js не буде працювати, необхідно у файл vite.config.js додати наступну секцію:

// server: {
// 	watch: {
// 		usePolling: true,
// 	}
// },

// Після цього потрібно перестворити образ для фронтенд програми і перестворити контейнер.
// * docker-compose down
// Тепер можна підняти всі сервіси:
// * docker-compose up -d

// ! Створення файлів в контейнері, які також створяться і на нашій машині
// Зайти в папку frontent в контенері і в оболочку sh
// * docker ps
// time-app-frontend-1
// * docker exec -it time-app-frontend-1 sh
// * cd src/components
// *ls
// Time.vue
// * cat Time.vue

// Повернемося:
// * cd ../..
// Створити папку
// * touch new-file.txt
// Перевірити на нашому комп'ютері, бачомо стрений файл і контейнері, і на нашому комп'ютері.
// Тепер видалимо його на нашому комп'ютері
// * ls
// В контенйері його немає.
// Вийти:
// * exit

// ! Переглянемо логи фронтенд контейнера
// * docker ps
// * docker logs time-app-frontend-1
// Як видно, що автоматиично вайт перезавантажував додаток:
/**
 * ...
 * 6:31:26 PM [vite] hmr update /src/components/Time.vue
   6:43:16 PM [vite] hmr update /src/components/Time.vue
 */

// ! Внесення змін для бекенда, аналогічно фронтенду
// Глянемо логи
// * docker ps
// * docker logs time-app-api-1
/**
 * [nodemon] watching path(s): *.*
   [nodemon] watching extensions: js,mjs,json
   [nodemon] starting `node index.mjs`
 */
// Як видно, сервер автоматично перезапускається, це робить - nodemon

// Відкрити http://localhost:5555/
// Hello from the time saving service!

// Внести зміни в /aps/index.mjs
// Greetings from the time saving service!
// Не спрацювало Hello на Greetings))) (можливо інша версія докера)
// Спрацьовує але з затримкою або через якусь помилку...!!!
// [nodemon] starting `node index.mjs`

// Але час зберігання - зберагіє!
// New time 22:17:03 was saved to the DB
// New time 22:17:03 was saved to the DB

// ! Якщо не працює hot reload
// Якщо у фронтенд програмі не працює hot reload потрібно в vite.config.js додати

// server: { watch: { usePolling: true } }

// Ця строка вже додана, всеодно не працює!

// ! Змінні середовища, читання змінних середовища в бекенд додатку
// В файлі /api/.../mysqlPool.mjs в змінні pool данні підключення до нашої БД
// Створимо константи в цьому ж файлі:
// const MYSQL_HOST = process.env.MYSQL_HOST || 'mysql'

// В node.js моджна отримати доступ до змінної середовища використовуючи об'єкт process, також об'єкт env, і взяти цю змінну MYSQL_HOST, або, якщо її немає то взяти за умовчанням через або ||

// Щоб побачити ці змінні, побрібюно додати їх в файд docker-compose.yml
// В розділі api:
/**
 * environment:
      MYSQL_HOST: mysql
      MYSQL_USER: root
      MYSQL_PORT: '3306'
      MYSQL_PASSWORD: password
      MYSQL_DB: time_db
 */
// Таким чином можна підключитися і до іншого серверу з БД

// Після цього потрібно перестворити образ для фронтенд програми і перестворити контейнер.
// * docker-compose down
// Тепер можна підняти всі сервіси:
// * docker-compose up -d
// Глянемооо логи:
// * docker logs time-app-api-1

// ! Створення образів на Докер Хаб
// Стоврити облыковий запис https://hub.docker.com/
// Перейти в паку проекта в терміналі
// * ls
// Маємо папки api та frontend, створимо спочатку для frontend
// * cd frontend
// Стоврити образ, де спочатку ім'я нашого облікового запису, слеш, любе ім'я, та шлях (в нашоум випадку ми тут, тому крапка)
// * docker build -t vyhivskyi/time-app-frontend-dev .
// docker build -t vyhivskyi/time-app-frontend-dev:latest .
// Тег latest можна не вказувати
// Чому dev, тому що в інструкціях докер файлі є команда dev в режимі розробки, відповідно цей образ також буде містити цю інструкцію!
// Тепер потрібно виконати вхід в свій обліковий запис:
// * docker login
// Username: vyhivskyi
// Password:
// Login Succeeded
// * docker images
// vyhivskyi/time-app-frontend-dev
// * docker push vyhivskyi/time-app-frontend-dev
// latest: digest: sha256:d7b5e52ca719e14c116ac2df7dd7d35502a5c95407dab38aacc670f1916c7117 size: 1995

// ! Аналогічно і для api
// * cd ../api
// * docker build -t vyhivskyi/time-app-api-dev .
// * docker images
// * docker push vyhivskyi/time-app-api-dev

// все, можемо перевірити на сайтідокер хаб і нашому обліковому записі є наші образи.

// Зупинити процеси та перейти в папку проекта:
// * cd ..
// * docker-compose down
// * docker ps -a

// ! Стврення НОВОГО docker-compose.yml з викристанням образів з Docker Hub
// Скопіювати docker-compose.yml та перейменувати на docker-compose.pub.yml
/**
 * frontend:
 * # build: ./frontend
    # замість build - image
    image: vyhivskyi/time-app-frontend-dev
   api:
    # build: ./api
    # аналогічно, замість build - image
    image: vyhivskyi/time-app-api-dev
 */

// Тег ми упускаємо, бо версія latest у обох

/**
 * також мепінг прибрати, так як в нас наразі задача зупустити, тільки запустит, а не продовжувати розробку:
 * # volumes:
    #   - /app/node_modules
    #   - ./frontend:/app
 * # volumes:
    #   - /app/node_modules
    #   - ./frontend:/app
 */

//  Перейменували том mysql_data на mysql_data_pub
// Все інше без змін.

// ! Запуск з використанням публічних образів
// ! будьте уважні, ми будемо втикристовувати інший docker-compose файл
// * ls
// docker-compose.pub.yml
// Щоб не було конфлікта портів, потрібно зупинити інші процеси, так як порти вказані такі самі
// * docker ps -a
// Якщо немає, то поїхали, з -f, так інша назва:
// * docker-compose -f docker-compose.pub.yml up -d
// Образи взяті з кешу, тому так швидко!
// Ура, все працює!

// ! Видалити локальні образи, щоб впевнитися чи дійсно працюють наші віддалені образи
// Зупинити процеси з -f, так у нас інше і'мя:
// * docker-compose -f docker-compose.pub.yml down
// * docker ps -a
// * docker images
// Можемо видалити всі образи:
// * docker image prune -a
// -a - видалити всі за виключенням тих, в яких є працюючі контейнери
// * docker images
// Образів немає!
// Тестуємо заново, з -f, так як інша назва:
// * docker-compose -f docker-compose.pub.yml up -d
// Пішло завантаження, запуск
// * docker images
/**
 * REPOSITORY                        TAG       IMAGE ID       CREATED          SIZE
vyhivskyi/time-app-api-dev        latest    f37955fc7951   48 minutes ago   188MB       
vyhivskyi/time-app-frontend-dev   latest    eb977898638f   58 minutes ago   237MB       
mysql                             latest    1fecb86b5237   4 days ago       530MB       
adminer                           latest    a5e1b3241b20   13 days ago      250MB 
 */

// Все працює!!!

// Мав труднощі, тільки з тим, що погано працювала функція hot reload якщо змінити текст виводу (Hello from the time saving service 222222!) для сервера!

// ! Якщо нам потрібно завантажити нові версії, ми додаємо через : тег, в першому варіанті latest ми опускали.
// docker build -t vyhivskyi/time-app-frontend-dev:latest .

// ! Зупинити контейнери:
// * docker-compose -f docker-compose.pub.yml down
// ! Видалити образи
// * docker image prune -a
