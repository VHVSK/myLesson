import { NavLink } from 'react-router-dom'

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

export default Menu

// Щоб виділити активний пункт меню, потрібно використовувати не NavLink, а NavNavLink
// Таким чином до актичного меню автоматично додається стиль active

// В деяких версіях також виділяється також і домашня сторіка, тобто дві виділяжться, тому варто додати end
// <NavLink to="." end>Home</NavLink>
