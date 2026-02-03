import { useState } from "react";
import { loadCart } from "../../utils/cart";
import Header from "../../components/header";
export default function BookingPage(){

    const [cart, setCart] = useState(loadCart());

    function reloadCart(){
        setCart(loadCart());
    }

    return(
    <div className="w-full h-full bg-amber-300 flex flex-col i items-center">

        <h1>Booking Page</h1>
        

    </div>
        
    )
}
