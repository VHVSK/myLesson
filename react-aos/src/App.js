import AOS from 'aos'
import 'aos/dist/aos.css'
import './App.css'

AOS.init()

/**<div
        data-aos="fade-up"
        data-aos-offset="200" - зсув
        data-aos-delay="50" - затримка
        data-aos-duration="1000" - тривалість
        data-aos-easing="ease-in-out" - ефект послаблення 
        data-aos-mirror="true" - дзеркало, пропадає коли
        data-aos-once="false" - один раз, якщо показано, то вже не зникає
        data-aos-anchor-placement="top-center" - розміщення якоря, місце появи
      > */

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
        <h2>Hello World</h2>
        <h3>
          <a
            href="https://github.com/michalsnik/aos"
            target="_blank"
            rel="noreferrer"
          >
            github aos
          </a>
          {', '}
          <a
            href="https://michalsnik.github.io/aos/"
            target="_blank"
            rel="noreferrer"
          >
            demo aos
          </a>
        </h3>
        Labore culpa nulla sunt ullamco et voluptate magna reprehenderit ullamco
        proident velit adipisicing dolore. Dolore anim nulla ea qui eu. Eu
        veniam duis nulla commodo nostrud labore irure irure id. Fugiat duis eu
        voluptate labore. Excepteur ipsum voluptate elit est reprehenderit.
        Deserunt culpa esse fugiat ullamco. Nisi culpa anim mollit aliqua minim
        dolore eu ipsum excepteur mollit reprehenderit. Nulla veniam culpa
        officia irure sunt tempor esse. Aliqua esse dolore commodo ea est
        consectetur. Lorem tempor veniam mollit qui occaecat eiusmod ipsum
        pariatur. Lorem reprehenderit consequat nulla elit. Veniam aute
        voluptate ex consectetur ipsum exercitation aliqua non proident dolore
        voluptate voluptate ullamco. Aute adipisicing quis nisi irure aliqua in
        ipsum ut cupidatat aute laboris aute voluptate. Sint esse laborum velit
        nisi in nostrud in reprehenderit consequat ipsum enim eu. Fugiat
        voluptate eiusmod aliqua qui duis nulla dolore veniam deserunt. Est
        fugiat nostrud nulla ipsum ad amet mollit. Dolor excepteur voluptate do
        officia sit magna deserunt laborum proident dolore velit.
      </div>
      <div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
        <h2>Hello World</h2>
        Labore culpa nulla sunt ullamco et voluptate magna reprehenderit ullamco
        proident velit adipisicing dolore. Dolore anim nulla ea qui eu. Eu
        veniam duis nulla commodo nostrud labore irure irure id. Fugiat duis eu
        voluptate labore. Excepteur ipsum voluptate elit est reprehenderit.
        Deserunt culpa esse fugiat ullamco. Nisi culpa anim mollit aliqua minim
        dolore eu ipsum excepteur mollit reprehenderit. Nulla veniam culpa
        officia irure sunt tempor esse. Aliqua esse dolore commodo ea est
        consectetur. Lorem tempor veniam mollit qui occaecat eiusmod ipsum
        pariatur. Lorem reprehenderit consequat nulla elit. Veniam aute
        voluptate ex consectetur ipsum exercitation aliqua non proident dolore
        voluptate voluptate ullamco. Aute adipisicing quis nisi irure aliqua in
        ipsum ut cupidatat aute laboris aute voluptate. Sint esse laborum velit
        nisi in nostrud in reprehenderit consequat ipsum enim eu. Fugiat
        voluptate eiusmod aliqua qui duis nulla dolore veniam deserunt. Est
        fugiat nostrud nulla ipsum ad amet mollit. Dolor excepteur voluptate do
        officia sit magna deserunt laborum proident dolore velit.
      </div>
      <div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
        <h2>Hello World</h2>
        Labore culpa nulla sunt ullamco et voluptate magna reprehenderit ullamco
        proident velit adipisicing dolore. Dolore anim nulla ea qui eu. Eu
        veniam duis nulla commodo nostrud labore irure irure id. Fugiat duis eu
        voluptate labore. Excepteur ipsum voluptate elit est reprehenderit.
        Deserunt culpa esse fugiat ullamco. Nisi culpa anim mollit aliqua minim
        dolore eu ipsum excepteur mollit reprehenderit. Nulla veniam culpa
        officia irure sunt tempor esse. Aliqua esse dolore commodo ea est
        consectetur. Lorem tempor veniam mollit qui occaecat eiusmod ipsum
        pariatur. Lorem reprehenderit consequat nulla elit. Veniam aute
        voluptate ex consectetur ipsum exercitation aliqua non proident dolore
        voluptate voluptate ullamco. Aute adipisicing quis nisi irure aliqua in
        ipsum ut cupidatat aute laboris aute voluptate. Sint esse laborum velit
        nisi in nostrud in reprehenderit consequat ipsum enim eu. Fugiat
        voluptate eiusmod aliqua qui duis nulla dolore veniam deserunt. Est
        fugiat nostrud nulla ipsum ad amet mollit. Dolor excepteur voluptate do
        officia sit magna deserunt laborum proident dolore velit.
      </div>
      <div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
        <h2>Hello World</h2>
        Labore culpa nulla sunt ullamco et voluptate magna reprehenderit ullamco
        proident velit adipisicing dolore. Dolore anim nulla ea qui eu. Eu
        veniam duis nulla commodo nostrud labore irure irure id. Fugiat duis eu
        voluptate labore. Excepteur ipsum voluptate elit est reprehenderit.
        Deserunt culpa esse fugiat ullamco. Nisi culpa anim mollit aliqua minim
        dolore eu ipsum excepteur mollit reprehenderit. Nulla veniam culpa
        officia irure sunt tempor esse. Aliqua esse dolore commodo ea est
        consectetur. Lorem tempor veniam mollit qui occaecat eiusmod ipsum
        pariatur. Lorem reprehenderit consequat nulla elit. Veniam aute
        voluptate ex consectetur ipsum exercitation aliqua non proident dolore
        voluptate voluptate ullamco. Aute adipisicing quis nisi irure aliqua in
        ipsum ut cupidatat aute laboris aute voluptate. Sint esse laborum velit
        nisi in nostrud in reprehenderit consequat ipsum enim eu. Fugiat
        voluptate eiusmod aliqua qui duis nulla dolore veniam deserunt. Est
        fugiat nostrud nulla ipsum ad amet mollit. Dolor excepteur voluptate do
        officia sit magna deserunt laborum proident dolore velit.
      </div>
      <div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
        <h2>Hello World</h2>
        Labore culpa nulla sunt ullamco et voluptate magna reprehenderit ullamco
        proident velit adipisicing dolore. Dolore anim nulla ea qui eu. Eu
        veniam duis nulla commodo nostrud labore irure irure id. Fugiat duis eu
        voluptate labore. Excepteur ipsum voluptate elit est reprehenderit.
        Deserunt culpa esse fugiat ullamco. Nisi culpa anim mollit aliqua minim
        dolore eu ipsum excepteur mollit reprehenderit. Nulla veniam culpa
        officia irure sunt tempor esse. Aliqua esse dolore commodo ea est
        consectetur. Lorem tempor veniam mollit qui occaecat eiusmod ipsum
        pariatur. Lorem reprehenderit consequat nulla elit. Veniam aute
        voluptate ex consectetur ipsum exercitation aliqua non proident dolore
        voluptate voluptate ullamco. Aute adipisicing quis nisi irure aliqua in
        ipsum ut cupidatat aute laboris aute voluptate. Sint esse laborum velit
        nisi in nostrud in reprehenderit consequat ipsum enim eu. Fugiat
        voluptate eiusmod aliqua qui duis nulla dolore veniam deserunt. Est
        fugiat nostrud nulla ipsum ad amet mollit. Dolor excepteur voluptate do
        officia sit magna deserunt laborum proident dolore velit.
      </div>
      <div
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="bottom-bottom"
        style={{ color: 'red' }}
      >
        <h2>Hello World</h2>
        Labore culpa nulla sunt ullamco et voluptate magna reprehenderit ullamco
        proident velit adipisicing dolore. Dolore anim nulla ea qui eu. Eu
        veniam duis nulla commodo nostrud labore irure irure id. Fugiat duis eu
        voluptate labore. Excepteur ipsum voluptate elit est reprehenderit.
        Deserunt culpa esse fugiat ullamco. Nisi culpa anim mollit aliqua minim
        dolore eu ipsum excepteur mollit reprehenderit. Nulla veniam culpa
        officia irure sunt tempor esse. Aliqua esse dolore commodo ea est
        consectetur. Lorem tempor veniam mollit qui occaecat eiusmod ipsum
        pariatur. Lorem reprehenderit consequat nulla elit. Veniam aute
        voluptate ex consectetur ipsum exercitation aliqua non proident dolore
        voluptate voluptate ullamco. Aute adipisicing quis nisi irure aliqua in
        ipsum ut cupidatat aute laboris aute voluptate. Sint esse laborum velit
        nisi in nostrud in reprehenderit consequat ipsum enim eu. Fugiat
        voluptate eiusmod aliqua qui duis nulla dolore veniam deserunt. Est
        fugiat nostrud nulla ipsum ad amet mollit. Dolor excepteur voluptate do
        officia sit magna deserunt laborum proident dolore velit.
      </div>
      <div
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="bottom-bottom"
        style={{ color: 'green' }}
      >
        <h2>Hello World</h2>
        Labore culpa nulla sunt ullamco et voluptate magna reprehenderit ullamco
        proident velit adipisicing dolore. Dolore anim nulla ea qui eu. Eu
        veniam duis nulla commodo nostrud labore irure irure id. Fugiat duis eu
        voluptate labore. Excepteur ipsum voluptate elit est reprehenderit.
        Deserunt culpa esse fugiat ullamco. Nisi culpa anim mollit aliqua minim
        dolore eu ipsum excepteur mollit reprehenderit. Nulla veniam culpa
        officia irure sunt tempor esse. Aliqua esse dolore commodo ea est
        consectetur. Lorem tempor veniam mollit qui occaecat eiusmod ipsum
        pariatur. Lorem reprehenderit consequat nulla elit. Veniam aute
        voluptate ex consectetur ipsum exercitation aliqua non proident dolore
        voluptate voluptate ullamco. Aute adipisicing quis nisi irure aliqua in
        ipsum ut cupidatat aute laboris aute voluptate. Sint esse laborum velit
        nisi in nostrud in reprehenderit consequat ipsum enim eu. Fugiat
        voluptate eiusmod aliqua qui duis nulla dolore veniam deserunt. Est
        fugiat nostrud nulla ipsum ad amet mollit. Dolor excepteur voluptate do
        officia sit magna deserunt laborum proident dolore velit.
      </div>
      <div
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="bottom-bottom"
        style={{ color: 'violet' }}
      >
        <h2>Hello World</h2>
        Labore culpa nulla sunt ullamco et voluptate magna reprehenderit ullamco
        proident velit adipisicing dolore. Dolore anim nulla ea qui eu. Eu
        veniam duis nulla commodo nostrud labore irure irure id. Fugiat duis eu
        voluptate labore. Excepteur ipsum voluptate elit est reprehenderit.
        Deserunt culpa esse fugiat ullamco. Nisi culpa anim mollit aliqua minim
        dolore eu ipsum excepteur mollit reprehenderit. Nulla veniam culpa
        officia irure sunt tempor esse. Aliqua esse dolore commodo ea est
        consectetur. Lorem tempor veniam mollit qui occaecat eiusmod ipsum
        pariatur. Lorem reprehenderit consequat nulla elit. Veniam aute
        voluptate ex consectetur ipsum exercitation aliqua non proident dolore
        voluptate voluptate ullamco. Aute adipisicing quis nisi irure aliqua in
        ipsum ut cupidatat aute laboris aute voluptate. Sint esse laborum velit
        nisi in nostrud in reprehenderit consequat ipsum enim eu. Fugiat
        voluptate eiusmod aliqua qui duis nulla dolore veniam deserunt. Est
        fugiat nostrud nulla ipsum ad amet mollit. Dolor excepteur voluptate do
        officia sit magna deserunt laborum proident dolore velit.
      </div>
      <div
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="bottom-bottom"
        style={{ color: 'blue' }}
      >
        <h2>Hello World</h2>
        Labore culpa nulla sunt ullamco et voluptate magna reprehenderit ullamco
        proident velit adipisicing dolore. Dolore anim nulla ea qui eu. Eu
        veniam duis nulla commodo nostrud labore irure irure id. Fugiat duis eu
        voluptate labore. Excepteur ipsum voluptate elit est reprehenderit.
        Deserunt culpa esse fugiat ullamco. Nisi culpa anim mollit aliqua minim
        dolore eu ipsum excepteur mollit reprehenderit. Nulla veniam culpa
        officia irure sunt tempor esse. Aliqua esse dolore commodo ea est
        consectetur. Lorem tempor veniam mollit qui occaecat eiusmod ipsum
        pariatur. Lorem reprehenderit consequat nulla elit. Veniam aute
        voluptate ex consectetur ipsum exercitation aliqua non proident dolore
        voluptate voluptate ullamco. Aute adipisicing quis nisi irure aliqua in
        ipsum ut cupidatat aute laboris aute voluptate. Sint esse laborum velit
        nisi in nostrud in reprehenderit consequat ipsum enim eu. Fugiat
        voluptate eiusmod aliqua qui duis nulla dolore veniam deserunt. Est
        fugiat nostrud nulla ipsum ad amet mollit. Dolor excepteur voluptate do
        officia sit magna deserunt laborum proident dolore velit.
      </div>
      <div
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="bottom-bottom"
        style={{ color: 'yellow' }}
      >
        <h2>Hello World</h2>
        Labore culpa nulla sunt ullamco et voluptate magna reprehenderit ullamco
        proident velit adipisicing dolore. Dolore anim nulla ea qui eu. Eu
        veniam duis nulla commodo nostrud labore irure irure id. Fugiat duis eu
        voluptate labore. Excepteur ipsum voluptate elit est reprehenderit.
        Deserunt culpa esse fugiat ullamco. Nisi culpa anim mollit aliqua minim
        dolore eu ipsum excepteur mollit reprehenderit. Nulla veniam culpa
        officia irure sunt tempor esse. Aliqua esse dolore commodo ea est
        consectetur. Lorem tempor veniam mollit qui occaecat eiusmod ipsum
        pariatur. Lorem reprehenderit consequat nulla elit. Veniam aute
        voluptate ex consectetur ipsum exercitation aliqua non proident dolore
        voluptate voluptate ullamco. Aute adipisicing quis nisi irure aliqua in
        ipsum ut cupidatat aute laboris aute voluptate. Sint esse laborum velit
        nisi in nostrud in reprehenderit consequat ipsum enim eu. Fugiat
        voluptate eiusmod aliqua qui duis nulla dolore veniam deserunt. Est
        fugiat nostrud nulla ipsum ad amet mollit. Dolor excepteur voluptate do
        officia sit magna deserunt laborum proident dolore velit.
      </div>
    </div>
  )
}

export default App
