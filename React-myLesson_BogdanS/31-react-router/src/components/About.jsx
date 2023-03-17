import { Link } from 'react-router-dom'

const About = () => {
  return (
    <>
      <h1>About</h1>
      <Link to="/">Go to home</Link>
      {/* а Замінили на компонент
       <a href="/">Go to home</a> */}
    </>
  )
}

export default About
