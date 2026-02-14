import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";

export default function Header(){
    return(
        <header className="w-full bg-accent h-[80px] sm:h-[90px] md:h-[100px] shadow-2xl flex justify-center items-center px-4 md:px-8 sticky top-0 z-50 relative">
            <img src="/logo.png" className="w-12 h-12 sm:w-14 sm:h-14 md:w-[150px] md:h-[150px] object-cover rounded-full hover:scale-105 transition-transform duration-300 absolute left-4 md:left-8 top-1/2 -translate-y-1/2" /> 
            
            <nav className="flex justify-center gap-3 sm:gap-6 md:gap-8 items-center">
                <Link to="/" className="text-white text-xs sm:text-sm md:text-lg font-semibold hover:text-gray-200 hover:scale-110 transition-all duration-300">Home</Link>
                <Link to="/items" className="text-white text-xs sm:text-sm md:text-lg font-semibold hover:text-gray-200 hover:scale-110 transition-all duration-300">Items</Link>
                <Link to="/gallery" className="text-white text-xs sm:text-sm md:text-lg font-semibold hover:text-gray-200 hover:scale-110 transition-all duration-300">Gallery</Link>
                <Link to="/contact" className="text-white text-xs sm:text-sm md:text-lg font-semibold hover:text-gray-200 hover:scale-110 transition-all duration-300">Contact</Link>
                <Link to="/booking" className="text-white text-base md:text-lg font-semibold hover:text-gray-200 hover:scale-110 transition-all duration-300 absolute right-4 md:right-6 top-1/2 -translate-y-1/2"> <FaCartShopping/></Link>                
            </nav>
        </header>
    )
}