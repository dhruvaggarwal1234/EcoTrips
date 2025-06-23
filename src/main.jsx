import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Navbar from './components/NAV/Navbar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Navbar/>
    <App />
  </StrictMode>,
)
