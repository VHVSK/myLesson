import { useRef, useState } from 'react'
import './App.css'
import ReCAPTCHA from 'react-google-recaptcha'

export default function App() {
  const recaptchaRef = useRef()
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')

  const onSubmitWithReCAPTCHA = async (e) => {
    e.preventDefault()
    const token = await recaptchaRef.current.executeAsync()
    recaptchaRef.current.reset()

    // apply to form data
    // console.log(token)

    if (!token) {
      alert('Please verify the reCAPTCHA!')
    } else {
      const res = await fetch('http://localhost:8000/verify', {
        method: 'POST',
        body: JSON.stringify({ token }),
        headers: {
          'content-type': 'application/json',
        },
      })
      const data = await res.json()
      if (data.success) {
        // make form submission
        alert('Ok! Form submission successful!')
      } else {
        alert('Error! reCAPTCHA validation failed!')
      }
    }
  }

  return (
    <div className='App'>
      <h1>Hello reCaptcha</h1>
      <form onSubmit={onSubmitWithReCAPTCHA}>
        <input
          name='Email'
          type={'email'}
          value={email}
          required
          placeholder='joe@example.com'
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          name='Name'
          type={'name'}
          value={name}
          required
          placeholder='Joe'
          onChange={(event) => setName(event.target.value)}
        />
        <ReCAPTCHA
          hl={'uk'}
          size='invisible'
          ref={recaptchaRef}
          sitekey={process.env.REACT_APP_SITE_KEY}
        />
        <p>
          <button type='submit'>Sign up</button>
        </p>
      </form>
    </div>
  )
}
