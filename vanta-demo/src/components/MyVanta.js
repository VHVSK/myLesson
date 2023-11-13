import React, { useState, useEffect, useRef } from 'react'
import EFFECT from 'vanta/src/vanta.waves'

// https://www.vantajs.com/?effect=waves
// https://github.com/tengbao/vanta
// https://jsfiddle.net/usdzfbLt/1/
// https://jsfiddle.net/1mcr7x50/2/

// Підключити <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"></script>

const MyVanta = (props) => {
  const [vantaEffect, setVantaEffect] = useState(null)
  const myRef = useRef(null)

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        EFFECT({
          el: myRef.current,
          color: 0x111111,
          waveHeight: 20,
          shininess: 50,
          waveSpeed: 1.5,
          zoom: 0.75,
        })
      )

      setVantaEffect(
        EFFECT({
          el: '#element2',
          color: 0x5588,
          waveHeight: 20,
          shininess: 50,
          waveSpeed: 1.5,
          zoom: 0.75,
        })
      )
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  return (
    <>
      <div
        style={{
          minHeight: '100vh',
          color: 'white',
          padding: '20px',
          fontSize: '24px',
        }}
        ref={myRef}
      >
        <h1>My header</h1>
        <p>My text</p>
      </div>

      <div
        style={{
          minHeight: '100vh',
          color: 'white',
          padding: '20px',
          fontSize: '24px',
        }}
        id='element2'
      >
        <h2>My header 2</h2>
        <p>My text 2</p>
      </div>
    </>
  )
}
export default MyVanta
