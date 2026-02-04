import { useState, useEffect } from "react";
import axios from "axios";
import { removeFromCart } from "../utils/cart";
export default function BookingItems(props){
    const {itemKey ,quantity, refresh} = props; //refresh use to to get loadCart from cart.jsx
    const [item, setItem] = useState(null);
    const [status, setStatus] = useState("loading"); //loading / error / success

    useEffect(()=>{
        if(status == "loading"){
            axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/products/${itemKey}`).then( (res)=>{
            setProduct(res.data)
            setLoadingStatus("success")
        }).catch( (err)=>{
            console.log(err);
            setStatus("error");
            removeFromCart(itemKey) //if error comes we need to remove the perticuller item from the cart
        })      
        }


    },[status])



    return(
        <div className="flex flex-row items-center" > 
            <span>{itemKey}</span>
            <span> x {quantity}</span>
        
        
        </div>
    )
}