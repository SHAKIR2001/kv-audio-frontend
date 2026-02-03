import { useState, useEffect } from "react";
export default function BookingItems(props){
    const {itemKey ,quantity} = props;
    const [item, setItem] = useState(null);
    const [loading, isLoading] = useState(true);

    useEffect(()=>{


    },[])



    return(
        <div className="flex flex-row items-center" > 
            <span>{itemKey}</span>
            <span> x {quantity}</span>
        
        
        </div>
    )
}