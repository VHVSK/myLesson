import { useCallback } from 'react'
import Particles from 'react-particles'
import { loadFull } from 'tsparticles'
import particlesOptions from './particles.json'

const App = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine)
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine)
  }, [])

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container)
  }, [])

  return (
    <>
      <Particles
        id="tsparticles"
        // Вказати параметри в файлі particles.json локально або відділено через url
        // url="http://foo.bar/particles.json"
        options={particlesOptions}
        init={particlesInit}
        loaded={particlesLoaded}
      />
      <h1>Hello</h1>
      <div
        class="g-signin2"
        data-width="300"
        data-height="200"
        data-longtitle="true"
      ></div>
    </>
  )
}

export default App
