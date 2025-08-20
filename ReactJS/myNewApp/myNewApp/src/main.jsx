import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import GlobalContext from './context/globalContext.jsx'

createRoot(document.getElementById('root')).render(
  <GlobalContext>
  <BrowserRouter>
     <StrictMode>
    <App />
  </StrictMode>
  </BrowserRouter>
  </GlobalContext>
  
)
