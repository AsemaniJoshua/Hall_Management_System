import { FC } from 'react';
import logo from '../../public/assets/images/Aamusted logo (2).png'
import { Link } from 'react-router-dom';

const Navbar: FC = () => {
    return (
    <div className=" bg-gray-50">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-lg">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <img 
                src={logo} 
                alt="AAMUSTED Logo" 
                className="h-12 w-auto object-contain"
              />
            </div>

            {/* Center Menu Items */}
            <div className="hidden md:flex items-center space-x-8 text-xl">
              <Link to="/" className="text-gray-700 hover:text-[#900633] px-3 py-2 rounded-md font-medium">About</Link>
              <Link to="/reservation" className="text-gray-700 hover:text-[#900633] px-3 py-2 rounded-md font-medium">Reservation</Link>
              <Link to="/complaint" className="text-gray-700 hover:text-[#900633] px-3 py-2 rounded-md  font-medium">Compliant Desk</Link>
              <Link to="/creditcard" className="text-gray-700 hover:text-[#900633] px-3 py-2 rounded-md font-medium">Payment</Link>
              <Link to="/contactUs" className="text-gray-700 hover:text-[#900633] px-3 py-2 rounded-md font-medium">Contact</Link>
            </div>

            {/* Register Button */}
            <div className="flex items-center">
              <button className="bg-[#900633] text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-[#7a0529] transition-colors duration-200">
                Register Now
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#900633] hover:bg-gray-100 focus:outline-none">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className="md:hidden hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="text-gray-700 hover:text-[#900633] block px-3 py-2 rounded-md text-base font-medium">About</a>
            <a href="#" className="text-gray-700 hover:text-[#900633] block px-3 py-2 rounded-md text-base font-medium">Reservation</a>
            <a href="#" className="text-gray-700 hover:text-[#900633] block px-3 py-2 rounded-md text-base font-medium">Compliant Desk</a>
            <a href="#" className="text-gray-700 hover:text-[#900633] block px-3 py-2 rounded-md text-base font-medium">Payment</a>
            <a href="#" className="text-gray-700 hover:text-[#900633] block px-3 py-2 rounded-md text-base font-medium">Contact</a>
          </div>
        </div>
      </nav>
    </div>
    )
}

export default Navbar;
