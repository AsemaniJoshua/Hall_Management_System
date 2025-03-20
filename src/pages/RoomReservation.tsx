import Navbar from "../components/Navbar";
import NavInfo from "../components/NavInfo";

export default function RoomReservation(){
  return(
    <>
      <Navbar/>
      <NavInfo title="Autonomy Hall - Room Reservation"/>
      
      <div className="px-20 py-10">
        <div className="flex items-center gap-3 border-b-[1px] border-[#CFCFCF] pb-5">
          <p className="flex items-center gap-1 text-[20px] font-[500]">
            <img src="../../public/assets/icons/date.png" alt="" />
            <span className="">June 15, 2025</span>
          </p>
          <span className="text-[20px] font-[500]">|</span>
          <p className="text-[20px] font-[500]">Reservation ID: <span>123456</span></p>
        </div>

        <h1 className="text-[20px] font-[600] pt-4 pb-20">Applicant Information</h1>

        <div className="flex items-center gap-10 border-b-[1px] border-[#CFCFCF] pb-10">
          <div className="text-[20px]">
            <p>Full Name: <span>Ivy Ahiamadzor</span></p>
            <p className="py-4">Index number / Student ID: <span>1234567890</span></p>
            <p>Email Address: <span>ivy@gmail.com</span></p>
          </div>
          <div className="text-[20px]">
            <p>Reservation ID: <span>123456789</span></p>
            <p className="py-4">Gender: <span>Female</span></p>
            <p>Phone number: <span>0200000000</span></p>
          </div>
        </div>

        <div></div>
      </div>
    </>
  )
}