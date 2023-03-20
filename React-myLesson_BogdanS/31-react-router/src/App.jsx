import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contacts from './components/Contacts'
import Courses from './components/Courses'
import NotFound from './components/NotFound'
import MainLayout from './layouts/MainLayout'
import './App.css'
import SingleCourse from './components/SingleCourse'

// Вкладеність маршрутів
// Аналогічним шляхом, можна зробити багатрівневу вкладеність

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            {/* Якщо користувач на головній сторінці, то <Route index={true} element={<Home />} /> */}
            <Route path="about" element={<About />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="courses" element={<Courses />} />
            <Route path="courses/:courseSlug" element={<SingleCourse />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App

// Так, щоб відслідковувати роутинг потрібна саме така ієрархія: BrowserRouter > div > Routes > Route

// Щоб на кожній сторінці відображалося меню, потрібно Route MainLayout вкласти інші сторінки, а в самій MainLayout прописати <Outlet />

// Щоб показати головну сторінку:
// <Route index element={<Home />} />

// Виходить, сторінка MainLayout має містити в собі всі дочерні сторінки.
// Сторінка index без path, вона передає значення index={true}, це та саме що й запис просто index

// Це для сторінок які не існують
// <Route path="*" element={<NotFound />} />

// Зверніть увагу, що шлях path="/" відносний для всіх інших шляхів!
// Тобто, якщо ми пропишемо шлях /main, <Route path="/main" element={<MainLayout />}>, а також в меню приберемо / в to, а також в to на головну замість / пропишемо . - то всі посиалння заміняться на посилання з префіксом /main, типу http://localhost:3000/main
