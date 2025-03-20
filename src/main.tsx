import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import RoomReservation from './pages/RoomReservation'
// import ReservationConfirm from './pages/ReservationConfirm'
// import Home from './pages/Home.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <Home /> */}
    {/* <ReservationConfirm/> */}
    <RoomReservation/>
  </StrictMode>,
)
