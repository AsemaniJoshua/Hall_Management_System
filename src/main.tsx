// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home.tsx'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import PaymentCreditCard from './pages/PaymentCreditCard.tsx'
import Instruction from './components/reservation/Reservation_Instructions/Instruction.tsx'
import BookRoom from './components/reservation/Book_Room/BookRoom.tsx'
import AppsInfo from './components/reservation/Applicants_Info/appsInfo.tsx'
import Modal from './components/Modal.tsx'
import ReservationConfirm from './pages/ReservationConfirm.tsx'
import RoomReservation from './pages/RoomReservation.tsx'
import Contact from './components/Contact/Contact.tsx'
import Complaint from './components/Complaint/Complaint.tsx'
import Payment_Confirmation from './components/Payment_Confirmation/Payment_Confirmation.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/reservation' element={<Instruction/>}/>
      <Route path="/creditcard" element={<PaymentCreditCard/>}/>
      <Route path='/bookroom' element={<BookRoom/>}/>
      <Route path='/applicantInfo' element={<AppsInfo/>}/>
      <Route path='/popup' element={<Modal/>}/>
      <Route path='/reservationconfirm' element={<ReservationConfirm/>}/>
      <Route path='/payment' element={<PaymentCreditCard/>}/>
      <Route path='/later' element={<RoomReservation/>}/>
      <Route path='/contactUs' element={<Contact/>}/>
      <Route path='/complaint' element={<Complaint/>}/>
      <Route path='/paymentConfirm' element={<Payment_Confirmation/>}/>
    </Routes>
  </BrowserRouter>
)
