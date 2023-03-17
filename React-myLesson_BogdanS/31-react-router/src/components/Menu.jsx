import { NavLink } from 'react-router-dom'

// Варіант 01 - йде з коробки, тільки сторити клас стилів active
const Menu = () => {
  return (
    <nav>
      <NavLink to=".">Home</NavLink>
      {/* Замінили / на ., щоб шлях передачався,
      <NavLink to="/">Home</NavLink>
      Тепер у нас не абсолютні посилання, а відносні */}
      <NavLink to="about">About</NavLink>
      <NavLink to="contacts">Contacts</NavLink>
      {/* а Замінили на компонент
       <a href="/">Go to home</a> */}
    </nav>
  )
}

// Варіант 02 - використання className
// Додати className, деструктуризація inActive, перевірити чи inActive правда і повернути відповідний клас стилів.
// Ця можливість доступна тільки для NavLink
// const Menu = () => {
//   return (
//     <nav>
//       <NavLink
//         className={({ isActive }) => (isActive ? 'activeLink active2' : 'link')}
//         to="."
//       >
//         Home
//       </NavLink>
//       <NavLink to="about">About</NavLink>
//       <NavLink to="contacts">Contacts</NavLink>
//     </nav>
//   )
// }

// Варіант 03 - використання style
// Додати style, додати об'єкт стилів використовучи тернарний оператор
// const Menu = () => {
//   return (
//     <nav>
//       <NavLink
//         style={({ isActive }) =>
//           isActive ? { color: 'red' } : { color: 'green' }
//         }
//         to="."
//       >
//         Home
//       </NavLink>
//       <NavLink to="about">About</NavLink>
//       <NavLink to="contacts">Contacts</NavLink>
//     </nav>
//   )
// }

export default Menu

// Щоб виділити активний пункт меню, потрібно використовувати не NavLink, а NavNavLink
// Таким чином до актичного меню автоматично додається стиль active

// В деяких версіях також виділяється також і домашня сторіка, тобто дві виділяжться, тому варто додати end
// <NavLink to="." end>Home</NavLink>
