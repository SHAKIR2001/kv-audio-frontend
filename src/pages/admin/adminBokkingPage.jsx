import { useState } from "react";
export default function AdminOrderPage(){

    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect( ()=>{


    }, [loading]) 

    return(
        <div>Orders</div>
    )
}