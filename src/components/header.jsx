import { Link } from "react-router-dom";

export default function Header(){
    return(
        <header className="w-full bg-accent h-[100px] shadow-2xl flex justify-center items-center px-8 sticky top-0 z-50 relative">
            <img src="logo.png" className="w-[80px] h-[80px] object-cover rounded-full border-4 border-white shadow-lg hover:scale-105 transition-transform duration-300 absolute left-8" /> 
            
            <nav className="flex gap-8 items-center">
                <Link to="/" className="text-white text-lg font-semibold hover:text-gray-200 hover:scale-110 transition-all duration-300">Home</Link>
                <Link to="/items" className="text-white text-lg font-semibold hover:text-gray-200 hover:scale-110 transition-all duration-300">Items</Link>
                <Link to="/gallery" className="text-white text-lg font-semibold hover:text-gray-200 hover:scale-110 transition-all duration-300">Gallery</Link>
                <Link to="/contact" className="text-white text-lg font-semibold hover:text-gray-200 hover:scale-110 transition-all duration-300">Contact</Link>
            </nav>
        </header>
    )
}