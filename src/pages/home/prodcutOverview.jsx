import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import axios from "axios";
export default function ProductOverview(){
    const params = useParams();
    const key = params.key;

    const [loadingStatus, setLoadingStatus] = useState("loading");
    const [product, setProduct] = useState({});

    useEffect( ()=>{
        axios.get(`${import.meta.env.VTE_BACKEND_URL}/api/products/${key}`).then( (res)=>{
            setProduct(res.data)
            setLoadingStatus("loaded")
        }).catch( (err)=>{
            console.error(err);
            setLoadingStatus("error")
        })
        
    },[]) //[] ivvaru empty array koduththal useEffect oruthadawei maaththirame run aahum


    return(
        <dev>Prodcut Overview</dev>
    )
}