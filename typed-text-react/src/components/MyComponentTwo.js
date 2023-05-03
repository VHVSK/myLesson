import React from 'react'
import Typed from 'typed.js'

function MyComponentTwo() {
  // Створіть посилання для зберігання елемента DOM, що містить анімацію
  const el = React.useRef(null) // useRef це React Hook, який дозволяє посилатися на значення, яке не потрібне для відтворення.

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['<i>First</i> sentence.', '&amp; a second sentence.'],
      typeSpeed: 50, // швидкість типу в мілісекундах
      startDelay: 1000, // почекати перед запуском введення
      backSpeed: 50, // швидкість зворотного інтервалу в мілісекундах
      backDelay: 700, // час до зворотного інтервалу в мілісекундах
      loop: true, //  {boolean}  рядки циклу
      loopCount: Infinity, // {number} loopCount кількість циклів
    })

    return () => {
      // Знищити введений екземпляр під час очищення, щоб зупинити анімацію
      typed.destroy()
    }
  }, [])

  return (
    <>
      <span ref={el} />
    </>
  )
}

export default MyComponentTwo
