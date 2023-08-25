const express = require('express')
const router = require('./routes') // index - можна не писати

const app = express()

// Попали в додаток, через use приймаємо всі методи http і переидуємо їх в папку ./routes
// В папці ./routes ми ми попадаємо в index.js і там ми перекидуємо далі через use всі методи http у відпорвідний контролер, через шлях, наприколад через /comments ми попадаємо в comments.js і там вже в залежності від метода ми попадмо у відповідйну функцію контролера, який нам повертає відповідь через res.send()
// Ідеально!
app.use(router)
// app.use('/', router) - аналогічно app.use(router)

app.listen(5000, () => console.log('Server was started on port 5000'))
