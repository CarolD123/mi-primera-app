import { useState } from 'react'
import sena from './assets/sena.png'
import Saludo from './components/Saludo'; // Importa el componente
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
    {/* Usa el componente como una etiqueta HTML */}
    <Saludo nombre="Carol Dayana" />
  </div>
      <div>
      <img src={sena} alt="Logosena" />
      </div>
      <h1>Mi primera App</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Incrementar {count}
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
          Decrementar {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
