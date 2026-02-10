import { useState } from "react";
export default function AdminOrderPage(){

    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect( ()=>{
        if(loading){
            axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/orders`).then( (res)=>{
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
        <div>Orders</div>
    )
}