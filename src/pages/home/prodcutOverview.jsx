import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import axios from "axios";
export default function ProductOverview(){
    const params = useParams();
    const key = params.key;

    const [loadingStatus, setLoadingStatus] = useState("loading");
    const [product, setProduct] = useState({});

    useEffect( ()=>{
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/products/${key}`).then( (res)=>{
            setProduct(res.data)
            setLoadingStatus("loaded")
        }).catch( (err)=>{
            console.error(err);
           setLoadingStatus("error")
        })
        
    },[]) //[] ivvaru empty array koduththal useEffect oruthadawei maaththirame run aahum


    return(
        <div className="w-full h-full  flex justify-center items-center">
        {loadingStatus == "loading" &&<div className="w-full h-full flex justify-center items-center">
            <div className="h-[70px] w-[70px] border-b-2 rounded-b-full border-b-accent animate-spin "></div>
        </div> }
        {loadingStatus == "loaded" && <div className="w-full h-full flex justify-center items-center">
            <div className="w-[49%] h-full  bg-red-500 "></div>
            <div className="w-[49%] h-full flex flex-col items-center">

                <h1>{product.name}</h1>
                <h2>{product.category}</h2>
                <p>{product.description}</p>
                <p>{product.price}</p>
                <h1>{product.dimensions}</h1>

             </div>
        </div>
        
            
        }
        </div>
    )
}