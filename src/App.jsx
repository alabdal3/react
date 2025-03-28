import { useState } from 'react'
import reactLogo from './assets/headshot.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dolist from './dolist'
import Message from './message'
import Quote from './Quote'

function App() {
  const [count, setCount] = useState(0)
  const [showSecret, setShowSecret] = useState(false)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://nestquest1.netlify.app/" target="_blank">
          <img src={reactLogo} className="logo react" alt="Ibrahim" />
        </a>
      </div>
      <h1>Ibrahim Is Awesome</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 2)}>
          count is {count} Awesome
        </button>
      </div>
      <div className="card">
        <button onClick={() => setShowSecret(!showSecret)}>
          Click me to see the secret message
        </button>
        <Message showMessage={showSecret} />
      </div>
      <Quote />
      <Dolist />

      <p className="read-the-docs">
        You guessed it.... Ibrahim Is Still Awesome
      </p>
    </>
  )
}

export default App
