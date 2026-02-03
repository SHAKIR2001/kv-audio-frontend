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

        <h1>Create Booking Page</h1>
        <div className="w-full flex flex-col items-center" >
           {
            cart.orderedItems.map( (item)=>{
                <div>
                    <span>{item.key}</span>
                    <span>{item.quantity}</span>
                </div>
            })
           } 
        </div>
        

    </div>
        
    )
}
