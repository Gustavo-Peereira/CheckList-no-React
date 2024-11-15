import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Page } from './List/Page.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
<Page />
  </StrictMode>,
)
