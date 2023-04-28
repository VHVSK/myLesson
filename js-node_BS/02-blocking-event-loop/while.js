// 1 файл
// 2 - non-blocking-while.js
// 3 - fibonacci.js
// 4 - fibonacci-out-of-memory.js
// 5 - fibonacci-with-cache.js
// 6 - fibonacci-linear-complexity.js

// ОСНОВНА ЦІЛЬ цих завдань, це те, що основний поток не повинен бути заблокований на довго!
// Висновок: якщо в нас оптимізовний код і додаток не високонавантажений, то 7 мс блокування основногопотоку не сильно проблематично і тому немає сенсу переходити на проміси.

let isRunning = true
// 2) не доходить до цього
setTimeout(() => (isRunning = false), 0)
// 3) не доходить навіть до цього
process.nextTick(() => console.log('Next tick'))

// 1)
// Цим безкінечним while ми заблокуємо цикл подій!
// Цей цикл виконується в головному потоці, і поки він виконується, цикл подій не може обробляти інші події! А функцію setTimeout ми мали б визвати на наступнцій ітерації, але ми до неї не доходимо, так як while безкінечний в даному випадку!
while (isRunning) {
  console.log('Поки виконується цикл...')
}
