import { useState } from "react";
import { loadCart } from "../../utils/cart";
import Header from "../../components/header";
export default function BookingPage(){

    const [cart, setCart] = useState(loadCart()); //get thease from cart.jsx (browser storage)

    function reloadCart(){
        setCart(loadCart());
    }

    return(
    <div className="w-full h-full flex flex-col i items-center">

        <h1>Create Booking Page</h1>
        <div className="w-full flex flex-col items-center" >
           {
            cart.orderedItems.map( (item)=>{
                return<div key={item.key}>
                    <span>{item.key}</span>
                    <span> x {item.quantity}</span>
                    
                </div>
            })
           } 
        </div>
        

    </div>
        
    )
}
