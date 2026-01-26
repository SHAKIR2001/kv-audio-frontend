import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
export default function ProductOverview(){
    const params = useParams();
    const key = params.key;

    const [loadingStatus, setLoadingStatus] = useState("loading");
    const [product, setProduct] = useState({});

    useEffect( ()=>{
        
    },[])


    return(
        <dev>Prodcut Overview</dev>
    )
}