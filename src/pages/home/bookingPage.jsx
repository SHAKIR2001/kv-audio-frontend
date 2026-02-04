import { useState } from "react";
import { loadCart } from "../../utils/cart";
import BookingItems from "../../components/bookingItem";

export default function BookingPage(){

    const [cart, setCart] = useState(loadCart()); //get thease from cart.jsx (browser storage)

    function reloadCart(){  //this function reload the page using loadCart
        setCart(loadCart());
    }

    return(
    <div className="w-full h-full flex flex-col i items-center">

        
        <div className="w-full flex flex-col items-center mt-2" >
           {
            cart.orderedItems.map( (item)=>{
                return <BookingItems itemKey={item.key} key={item.key} quantity={item.quantity} refresh={reloadCart}/> //send the reloadCart function to bookingItem.jsx through props //2nd key used as a unique key need when using map
            })
           } 
        </div>
        

    </div>
        
    )
}
