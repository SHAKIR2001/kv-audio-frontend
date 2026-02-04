import { useState, useEffect } from "react";
export default function BookingItems(props){
    const {itemKey ,quantity} = props;
    const [item, setItem] = useState(null);
    const [status, setStatus] = useState("loading"); //loading / error / success

    useEffect(()=>{


    },[])



    return(
        <div className="flex flex-row items-center" > 
            <span>{itemKey}</span>
            <span> x {quantity}</span>
        
        
        </div>
    )
}