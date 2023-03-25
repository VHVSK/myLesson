// NGINX
// ......
// 1
// ......

// ! Запустимо контейнер NGINX

// Nginx (вимовляється як «engine-x») — це зворотній проксі-сервер із відкритим кодом для протоколів HTTP, HTTPS, SMTP, POP3 та IMAP, а також балансувальник навантаження, HTTP-кеш і веб-сервер (оригінальний сервер).

// * docker run nginx

// Як ми бачос, відбулося завантаження, запус, а також термінал був автоматично підлючений до цього процесу. Наразі ми бачимо логи серверу.
// Тож, виникає питання, як нам підключитися до веб сервуру, так як повернутися в командний рідок.

// Отже, давайте відкриємо нову вкладку терміналу, введемо:
// * docker ps

// CONTAINER ID   a0641950aa66
// PORTS   80/tcp

// 80/tcp - порт за умовчанням по HTTP

// Цей порт відкритий процесом nginx, так як веб сервер працює на якомусь із портів. Порт 80, протокол tcp
// Тепер ми можемо підключитися з браузера до цого проту 80

// НАРАЗІ ми не можемо підключитися до NGINX веб серверу зі свого комп'ютера!!!!

// Щоб підключитися, потрібно налаштовувати мепінг портів, це трохи підніше.

// ......
// 2
// ......

// ! Тепер давайте підключимося в фоновому режимі, щоб термінал не підключався відразу до процесу.

// Зупинити попередній процес.
// Перевірити, тоді запустити:

// * docker run -d nginx

// -d - відєднаний (detached)

// Ми отримаємо ID контенера і ми повернулися в командну строку:
// 2f55453cca4dc94bedb7bd0ed85550f2f97524b1f305dfb2ef901655bc117c18

// Тепер nginx веб сервер працює у фоновому режимі.
// зверніть увагу, завжди створюються нові контенери, зупинені так і лишаються зщупиненими.

// Але ми не можемо підключитися через браузер до нього, давайте перевіримо це.

// Знайдемо код контейнера:
// * docker ps (2f55453cca4d)

// Знайдемо IP:
// * docker container inspect 2f55453cca4d

// Або (цей варіант не спрацював):
// * docker container inspect 2f55453cca4d | grep IPAddress

// Вивід досить великий, але нас цікавить "IPAddress": "172.17.0.2"

// Як зупинити контейнер?
// По цого ID або назві!

// docker ps - маємо 2f55453cca4d
// docker stop 2f55453cca4d
// або убийте один або кілька запущених контейнерів:
// docker kill 2f55453cca4d

// Маємо вивід 2f55453cca4d знасть зупинили!

// ! Також, можна запускати додаткові процеси в запущеному контейнері:

// * docker exec -it 35847fd7b7ec bash

// exec - виконати команду в зупущеному процесі
// -it - опциї підключення інтерактивного терміналу
// 35847fd7b7ec - ID контейнера
// bash - назва процеса

// В результаті ми отримали вивід і попали в середину контейнера:
// root@35847fd7b7ec:/#

// 35847fd7b7ec-  id контейнера, також можна отримати її ввівши команду hostname:
// 35847fd7b7ec

// Далі перейдемо в папку з html:
// * ls
// * cd /usr/share/nginx/html
// * ls -la

// Бачимо:
// ...
// -rw-r--r-- 1 root root  615 Dec 13 15:53 index.html

// Прочитаємо його:
// * cat index.html

// <!DOCTYPE html>
// <html>
// <head>
// <title>Welcome to nginx!</title>
// <style>
// html { color-scheme: light dark; }
// body { width: 35em; margin: 0 auto;
// font-family: Tahoma, Verdana, Arial, sans-serif; }
// </style>
// </head>
// <body>
// <h1>Welcome to nginx!</h1>
// <p>If you see this page, the nginx web server is successfully installed and
// working. Further configuration is required.</p>
// <p>For online documentation and support please refer to
// <a href="http://nginx.org/">nginx.org</a>.<br/>
// Commercial support is available at
// <a href="http://nginx.com/">nginx.com</a>.</p>
// <p><em>Thank you for using nginx.</em></p>
// </body>
// </html>

// Щоб завершити процес bash:
// * exit

// Але контейнер ще працює!
// * docker ps

// ! Щоб створити своє ім'я для контецнера:
// * docker run -d --name my_nginx nginx

// Отримали ID:
// 8daacaa6b358b22ac5e2389fbfd3bf8b5299613ce24822f6d3d8a08842da2f1d

// * docker ps
// NAMES  my_nginx

// Завершимо:
// * docker stop my_nginx
// * docker container prune
// * docker ps -a
