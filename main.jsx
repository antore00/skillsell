import React from 'react'
import ReactDOM from 'react-dom/client'

function App() {
  return (
    <div style={{ fontFamily: "sans-serif", padding: "40px" }}>
      <h1>Benvenuto in SkillSell 🚀</h1>
      <p>L’app è online e funziona.</p>
      <p>Da qui inizieremo ad aggiungere tutte le funzionalità del marketplace.</p>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
