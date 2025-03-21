import submitIcon from '../../../public/assets/icons/submit_icon.png'
import paymentIcon from '../../../public/assets/icons/payment.png'
import reviewIcon from '../../../public/assets/icons/review.png'
import line17 from '../../../public/assets/icons/Line 17.png'


export default function HowCards(){
  return(
    <div className="bg-black w-full md:h-[460px] flex  items-center justify-center py-14">
       <div className="flex flex-col md:flex-row items-center justify-center gap-[55px] px-5">
          <div className="w-full md:w-[360px] h-[335px] bg-[#fff] rounded-2xl p-6">
            <img src={submitIcon} alt="Submit Room Request Icon" />
            <h1 className="text-[25px] font-[600] py-6 text-center">Submit Room Request</h1>
            <p className="text-[16px] text-center">Log into our management portal and submit your request and provide us with your correct details so we can find a proper room for you.</p>
            <img src={line17} alt="Line 17 Icon" className="mx-auto pt-9"/>
          </div>

          <div className="w-full md:w-[360px] h-[335px] bg-[#fff] rounded-2xl p-6">
            <img src={paymentIcon} alt="Payment Icon" />
            <h1 className="text-[25px] font-[600] py-6 text-center">Make Payment</h1>
            <p className="text-[16px] text-center">After submitting a room request, you can go ahead and make payment from the available payment options so you can be assigned a room.</p>
            <img src={line17} alt="Line 17 Icon" className="mx-auto pt-12"/>
          </div>

          <div className="w-full md:w-[360px] h-[335px] bg-[#fff] rounded-2xl p-6">
            <img src={reviewIcon} alt="Review Icon" />
            <h1 className="text-[25px] font-[600] py-6 text-center">Review Your Room</h1>
            <p className="text-[16px] text-center">After you have be assigned a room , review the room to get all the latest information about the room.</p>
            <img src={line17} alt="Line 17 Icon" className="mx-auto pt-14"/>
          </div>
        </div>
    </div>
  )
}