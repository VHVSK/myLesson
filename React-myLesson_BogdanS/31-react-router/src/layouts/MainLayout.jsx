import { Outlet } from 'react-router-dom'
import Menu from '../components/Menu'

const MainLayout = () => {
  return (
    <>
      <Menu />
      <Outlet />
    </>
  )
}

export default MainLayout

// <Outlet />
// Саме <Outlet /> забезпечує показ інших сторінок, які знаходяться в дочірньому:
// <Route path="/" element={<MainLayout />}></Route>
