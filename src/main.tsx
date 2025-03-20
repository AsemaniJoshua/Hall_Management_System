// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home.tsx'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import PaymentCreditCard from './pages/PaymentCreditCard.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/creditcard" element={<PaymentCreditCard/>}/>
    </Routes>
  </BrowserRouter>,
)
