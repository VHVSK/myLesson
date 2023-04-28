/**
 * https://styled-components.com/
 * https://styled-components.com/docs/basics
 *
 * # with npm
 * * npm install styled-components
 * # with yarn
 * yarn add styled-components
 *
 * Далі імпортувати у файл та стоврювати компоненти та стилізувати їх.
 */

import styled from 'styled-components'

// І використовуємо:

import styled from 'styled-components'

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`

const About = () => {
  return (
    <>
      <Wrapper>
        <Title>About</Title>
      </Wrapper>
    </>
  )
}

export default About
