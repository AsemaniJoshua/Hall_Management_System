// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home.tsx'
import { BrowserRouter } from 'react-router-dom'
import Contact from './components/Contact/Contact.tsx'
import Payment_Confirmation from './components/Payment_Confirmation/Payment_Confirmation.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    {/* <Home /> */}
    {/* <Contact /> */}
    <Payment_Confirmation />
  </BrowserRouter>,
)
