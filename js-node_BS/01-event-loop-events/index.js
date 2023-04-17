const fs = require('fs') // підключити вбудований модуль роботи з файлами
const dns = require('dns') // для роботи з dns

// Ми можемо протестувати які подію виконуються в першу чергу в циклу подій.
// Порядок коду не сильно залежить від його порпядку виконання. Цей порядок не потрібно сильно аналізувати..., головне знати що вони обробляються асинхронно! Без блокування головного потоку, при цьому колебек функції (друк в консоль, вираховування часу і т.п.) визтиваються в головному потоці.

// Event Loop - обробка подій

// Принцим такий:
/**
 * Початок роботи Event Loop ->
 * -> Timers (якщо є -> process.nextTick -> Promise callback)
 * -> I/O Events (якщо є -> process.nextTick -> Promise callback) (input/output)
 * -> setImmediate (якщо є -> process.nextTick -> Promise callback)
 * -> Close (якщо є -> process.nextTick -> Promise callback)
 * далі вихід з Event Loop або новий цикл
 */

function info(text) {
  console.log(text, '- ' + performance.now().toFixed(2) + ' ms')
}

console.log('Program start')

// Close events
// Стоврити файл txt, після запису фала буде визване подія, в визветься колбек функція
fs.writeFile(
  './js-node_BS/01-event-loop-events/test.txt',
  'Hello Node.js',
  () => info('File written')
)

// Promises
Promise.resolve().then(() => info('Promise 1 (виконується в другу чергу)'))

// Next tick
process.nextTick(() => info('Next tick 1 (виконується в першу чергу)'))

// setImmediate (Check)
setImmediate(() => info('Immediate 1'))

// Timeouts та відкладений Next tick
setTimeout(() => info('Timeout 1'), 0)
setTimeout(() => {
  process.nextTick(() => info('Next tick 2'))
  info('Timeout 2')
}, 100)

// Intervals
let intervalCount = 0
// Запустити інтервал, зупинити коли буде 2 цикл по його ІД
const intervalId = setInterval(() => {
  info(`Interval ${(intervalCount += 1)}`)
  if (intervalCount === 2) clearInterval(intervalId)
}, 50)

// I/O Events
// localhost або google.com
dns.lookup('localhost', (err, address, family) => {
  info('DNS 1 localhost')
  Promise.resolve().then(() => info('Promise 2'))
  process.nextTick(() => info('Next tick 3'))
})

console.log('Program end')
