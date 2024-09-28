import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/app/App.tsx'
import './components/app/index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
