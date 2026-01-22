import { Link } from "react-router-dom";

export default function Header(){
    return(
        <header className="w-full bg-accent h-[100px] shadow-xl flex justify-center items-center relative">
            <img src="logo.png" className="w-[100px] h-[100px] object-cover absolute left-1 border-[3px] rounded-full border-gray-200" /> 
            <Link to="/" className="text-white text-[25px] font-bold m-1">Home</Link>
            <Link to="/contact" className="text-white  text-[25px] font-bold m-1">Contact</Link>
            <Link to="/gallery" className="text-white  text-[25px] font-bold m-1">Gallery</Link>
            <Link to="/items" className="text-white  text-[25px] font-bold m-1">Items</Link>

           

        </header>
    )
} 