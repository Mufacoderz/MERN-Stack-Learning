import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>

      <div className='Container'>
        <h2>BMI Calculator</h2>
        <form>

          <div>
            <label>Weight (ibs)</label>
            <input type="text" placeholder='Enter Weight value' value={weight} />
          </div>

          <div>
            <label>Height (in)</label>
            <input type="text" placeholder='Enter Height value' value={height} />
          </div>

          <div>
            <button className='btn' type='submit'>Submit</button>
            <button className='btn btn-outline' onClick={reload} type='submit'>Reload</button>
          </div>

          <div className='center'>
            <h3>Your BMI is:{bmi}</h3>
            <p>{message}</p>
          </div>

        </form>
      </div>

    </div>
  )
}

export default App
