// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home.tsx'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import PaymentCreditCard from './pages/PaymentCreditCard.tsx'
import Instruction from './components/reservation/Reservation_Instructions/instruction.tsx'
import BookRoom from './components/reservation/Book_Room/bookRoom.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/reservation' element={<Instruction/>}/>
      <Route path="/creditcard" element={<PaymentCreditCard/>}/>
      <Route path='/bookroom' element={<BookRoom/>}/>
    </Routes>
  </BrowserRouter>,
)
