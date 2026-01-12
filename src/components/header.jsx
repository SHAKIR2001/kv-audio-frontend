import { Link } from "react-router-dom";

export default function Header(){
    return(
        <header className="w-full h-[100px] shadow-xl ">
            <Link to="/" className=" text-[25px] font-bold">Home</Link>
            <Link to="/admin" className=" text-[25px] font-bold">Admin</Link>





        </header>
    )
}