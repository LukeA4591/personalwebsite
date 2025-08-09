import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LukeArmstrongSite from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LukeArmstrongSite />
  </StrictMode>,
)
