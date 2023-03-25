// Далі відкрити термінал PowerShell

// 1. Щоб перевірити версію докера та сервера:
// * docker version

// 2. Показати список запущених та зупинених контейнерів:
// * docker ps -a

// Це покаже тільки запущені:
// * docker ps

// 3. Показати список локальних образів
// * docker images

// 4. Створити та запустити контейнер:
// * docker run hello-world

//     Status: Downloaded newer image for hello-world:latest
//     Hello from Docker!
//     ...
//     А далі список того, що він зробив.

// docker run hello-world:latest якщо вказати тег, то буде завантажена саме ця версія

// Де hello-world це назва образа.
// Спочатку докер шукає локально, якщо його немає, то він буде шукати на docker hub, там він скачає його та запустить.

// hello-world знаходиться:
// https://hub.docker.com/
// https://hub.docker.com/_/hello-world

// DOCKER OFFICIAL IMAGE

// Цей визов тільки завантажить образ hello-world:
// * docker pull hello-world

// 5. Пепер введемо:
// * docker ps
// * docker ps -a

// В другому виводі ми бачимо що був запущений та зупений hello-world.
// Також ми бачимо:
// CONTAINER ID ... NAMES
// d5cda233eb5c ... mystifying_lovelace

// 6. Щоб видалити зупинений контейнер:
// * docker rm id_or_names_container

// тобто, в даному випадку:
// * docker rm d5cda233eb5c

// Якщо успішно, то вивід: d5cda233eb5c

// 7. Перевіримо чи є у нас образи:
// * docker images

// Є на нашому компі:
// REPOSITORY    TAG       IMAGE ID       CREATED         SIZE
// hello-world   latest    feb5d9fea6a5   18 months ago   13.3kB

// В результаті в нас вже є один образ, тепер можна встановлювати не завантажуючи з докер-хаб.
