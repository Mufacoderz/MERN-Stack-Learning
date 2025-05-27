import { useState } from 'react'
import Header from './component/Header'


function App() {
  const kuronoKishidan = ['Zero', 'kallen', 'ohgi']
        const [likes, setLikes] = useState(0)

        function handleClick(){
          setLikes(likes + 1)
        }

        return(
          <div>
            <Header/>

            <ul>
              {kuronoKishidan.map((kuroKishi) => (
                <li key={kuroKishi}>{kuroKishi}</li>
            ))}
            </ul> 

            <button onClick={handleClick}>Like {}{likes}</button>
          </div>
        )
}

export default App
