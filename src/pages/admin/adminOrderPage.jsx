import { useState,useEffect } from "react";
import axios from "axios";
export default function AdminOrderPage(){

    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect( ()=>{
        if(loading){
            const token = localStorage.getItem("token")
            axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/orders`, {
                headers : {
                    Authorization : `Bearer ${token}`
                }
            }).then( (res)=>{
                console.log(res.data);
                setOrders(res.data);
                setLoading(false);
            }).catch( (err)=>{
                console.error(err);
                setLoading(false);
            })
        }


    }, [loading]) 

    return(
        <div>Admin Orders page</div>
    )
}