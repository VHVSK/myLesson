/**
 * Функції React Router
 * - Роутинг, це перехід між сторінками
 * - Вкладені маршрути
 * - Пареметри маршрутів
 * - Терміни запитів
 * - Завантажники даних (V6)
 * - Обробни ки подій (V6)
 * - Перенаправлення
 * - Сторінки Not Found (404)
 */

/**
 * Що таке URL
 *
 * https:/site.com/all-courses?q=react
 *
 * https - протокол (http + tls)
 * site - домен
 * com - домен верхнього рівня, tld*
 * site.com - корневий домен, root path, / - в кінці можна не показвати, браузер його прибирає, хоча в request URL він міститься (в деталях браузера)
 * mail - може бути поддомен, https:/mail.site.com
 * all-courses, all-courses/1 - шлях, шліх з id
 * q=react - строка запиту, GET параметри
 *
 * Анкори, навігація біж блоками сторінки за допомогою #
 * https:/site.com/react#description
 * https:/site.com/react#reviews
 *
 */

/**
 * Мутоди HTTP
 * GET, POST, PUT, DELETE, PATCH, OPTIONS, HEAD
 *
 * GET - метод для пердачі ресурсів на сервер, в строчці браузера
 * POST - відправка інформацію про ресурси, паролі та інше на сервер
 * PUT - повна заміна первного ресурса
 * PATCH - оновлення частини первного ресурса
 * DELETE - видалити перні ресурси на сервері
 * OPTIONS - отримати від серверу які методи взажмодії він підтримує
 * HEAD - емуляція GET запиту, тільки сервер поверне заголовок, без данних які ми хочемо запросити
 */

/**
 * CRUD *
 * C_ СREATE - POST, PUT - стоврити
 * R_ КEAD - GET - читати
 * U_ ГPDATE - PUT, PATCH - оновити
 * D_ ВELETE - DELETE - видалити
 */

// Відкриємо на сайті:
// https://www.npmjs.com/package/react-router-dom
// https://www.npmjs.com/package/react-router-native - для розробки мобільних додатків
