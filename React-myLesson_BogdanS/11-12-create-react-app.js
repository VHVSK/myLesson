/**
 *
 * ДУЖЕ ПОТУЖНА УТИЛІТА
 * Включає в себе сервер для розробки, засіб для створення продакшн версії, сама конфігурує npm пакети.
 * Рекомендується використовувати для всіх майбутніх додатків!
 *
 * https://create-react-app.dev/
 * https://www.npmjs.com/package/create-react-app
 *
 *
 * Щоб сторити проект React потрібно перейти в новостворену папку,
 * виконати команду:
 * *npx create-react-app .*
 * Ця команда означає, що ми викоритали скрипт npm, а саме npx, щоб використати його безпосередньо в цій папці, а не встановлювати пакет глобально, глобально не рекомендужться, бо з часом всеодно їх потріно чистити, а це досить накладно...
 *
 * PS C:\OpenServer\domains\myLesson> cd .\React-myLesson_BogdanS\
 * PS C:\OpenServer\domains\myLesson\React-myLesson_BogdanS> cd .\11-Create-React-App\
 * PS C:\OpenServer\domains\myLesson\React-myLesson_BogdanS\11-Create-React-App> npx create-react-app .
 *
 * Отже, новий проект створений!
 *
 * Що відбулося:
 * пакет встановився в папку 11-Create-React-App
 * встановлені: react, react-dom, and react-scripts with cra-template...
 * тепер ми не будемо підключати скрипти у файлі, як це було до цього
 *
 * Загалом доданор: added 55 packages in 6s
 * Також, використвуючи іншу строку запиту можна встановлювати пакети інших шаблонів, вказується після крапки
 *
 * Далі, пише що є вразливості, і строка коду якою можна полікувати їх..
 * 6 high severity vulnerabilities
 * To address all issues (including breaking changes), run:
 * npm audit fix --force
 *
 * Також, нам пишуть що в цій папці вже можна запускати такі команди:
 *
 * To address all issues (including breaking changes), run:
 * npm audit fix --force
 *
 * npm run eject - Видаляє цей інструмент і копіює залежності збірки, файли конфігурації та сценарії в каталог програм, далі ми вже самостінот контролюємо налаштування та запуск, а не create-react-app. Якщо ви це зробите, ви не зможете повернутися!
 *
 * Радимо почати з введегння, це запуск сервера розробника:
 * *npm start
 * cd C:\OpenServer\domains\myLesson\React-myLesson_BogdanS\11-create-react-app npm start
 *
 * Happy hacking!
 * PS C:\OpenServer\domains\myLesson\React-myLesson_BogdanS\11-Create-React-App>
 *
 * Також, чомусь таких коменд не показало:
 * npm run build - можна сторити продакн версію, який генерує статичня файли які можна розміщувати на сервері
 *
 * Також, команда "npm test" - ми пишемо та тестуємо окремі компонети або весь додаток вцілому.
 *
 * відкриємо навчальну папку в новому вікні браузера за допомогою команти code .
 *
 * В нашій папці є такі файли та папки:
 * .gitignore - ігнорує завантаження певних файлів в гіт репозиторій, і ній також прописаний шлях /build - це наша продакш версія, поки її немає, але потім буде. Також в # misc є файли за допомогою яких часто викоритовують для створення оточення для запуску додатка Реакт або інших додатків JS, також в цих файлах записують параметри піключення до БД або серверів. На різних ОС різні записи.
 * В папці public - знаходиться наш index.html в який монтується наш реакт додаток. також там іконки, robots.txt - файл для сканувальних ботів, в даному випадку дозволяється сканування.
 */

// В продовженння про .gitignore коли ми поділилися поектом без пакпи node_modules:
// Вствновлення залежностей, тобто встановлення всіх модулей якфі потріні для проекту та прописані в package-lock.json та package.json, за допомогою команди:
// *npm install
// Тобто, папкою проекта можна поділитися без папки node_modules, і потім перейти в консолі в папку проекта та виконати команду npm install, таким чино консоль візьме з фацйлів package-lock.json та package.json інформацію по версіям та пакетам та встановить їх.

/**
 * Щоб створити продакшн версію, потірно ввести:
 * *npm run build
 *
 * Створилася оптимізована версія в папці build, ці файли можна викладати на сервер
 * Щоб запустити продакшн версію на локальном сервері потріно ввести, находячись в папці де знаходиться папка build:
 * *npx serve -s build
 *
 * Деякі файли змінють назви, створюється бандл файл, щоб користувачі не могли використавити закешований старий файл.
 *
 * Потрабно зупити сервер:
 * *Ctrl+C
 *
 * Щоб заново згенерувати продакшт версію, потріна та сама команда:
 * *npx serve -s build
 *
 * Щоб запустити тестуванння нашого додатка, потрібно перейти в папку проекта та виконати:
 * *npm test
 * Тести прописані в файлі: src/App.test.js
 * Працює таким чином, визивається функція test, яка рендерить компонент App, далі створюється екран і таким чином можна знайти текст, за допомогою регулирних виразів.
 * В даному випадку суть полягаю в тому, чи буде показаний, чи найдений такий текст: "learn react", прописано в строці:
 * const linkElement = screen.getByText(/learn react/i);
 *
 * Наступний крок, це запуск команди
 * *npm run eject
 *
 * Не забуваємо, що мають бути встанвоелні всі залежності, а також виконалі всі гіт коміти
 * Після тиснемо Y
 * Відбувається зміна проекту... В секції scripts лишається три скрипта: start, build, test;
 * Також, видно що node запускає скрипт.
 *!Таким чином, Create React App більше не контролює проект React.
 * ТОМУ НЕ РЕКОМЕНДУУЄТЬСЯ ЗАПУКАТИ npm run eject
 *
 * Якщо вже така команда виконана, ми можемо надалі згенерувати продакн версію за запустити її.
 * npm start - запустити версію розробника, можемо вносити зміни в проект
 * npm run build - згенерувати продашн версію
 * npx serve -s build - запустити продакшн версію
 *
 *
 *
 */
