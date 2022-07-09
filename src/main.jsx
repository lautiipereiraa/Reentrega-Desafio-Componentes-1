import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// App() ----- <App /> = llama una funcion en jsx

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
