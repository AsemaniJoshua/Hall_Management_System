// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home.tsx'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import PaymentCreditCard from './pages/PaymentCreditCard.tsx'
import ContactPage from './pages/Contact.tsx'
import PaymentConfirmationPage from './pages/Payment_Confirmation.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/creditcard" element={<PaymentCreditCard/>}/>
      <Route path="/contact" element={<ContactPage/>}/>
      <Route path="/paymentconfirmation" element={<PaymentConfirmationPage/>}/>
    </Routes>
  </BrowserRouter>,
)
