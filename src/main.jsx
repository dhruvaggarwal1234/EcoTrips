import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Homepage from './Homepage.jsx'
import Navbar from './components/NAV/Navbar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Navbar/>
    <Homepage/>
  </StrictMode>,
)
