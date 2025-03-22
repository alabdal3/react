import { useState } from 'react'
import reactLogo from './assets/headshot.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

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
          count is {count}
        </button>
        <p>
          Yup Ibrahim Is Still Awesome
        </p>
      </div>
      <p className="read-the-docs">
        You guessed it.... Ibrahim Is Still Awesome
      </p>
    </>
  )
}

export default App
