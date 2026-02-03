import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import axios from "axios";
import ImageSlider from "../../components/imageSlider";
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
            <div className="w-[49%] h-full  ">
                <ImageSlider images={product.image}/>
            </div>
                        <div className="w-[49%] h-full flex flex-col px-6 mt-3">
                            <div className="w-full max-w-xl bg-white rounded-xl shadow-md p-6">
                                <div className="flex items-start justify-between gap-4">
                                    <div className="min-w-0">
                                        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 break-words">
                                            {product.name}
                                        </h1>
                                        <h2 className="mt-2 inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700">
                                            {product.category}
                                        </h2>
                                    </div>

                                    <div className="text-right shrink-0">
                                        <p className="text-xs font-semibold tracking-wide text-gray-500">PRICE</p>
                                        <p className="mt-1 text-xl md:text-2xl font-bold text-purple-600">
                                            LKR {product.price}
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-5 border-t border-gray-100 pt-5">
                                    <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                                        {product.description}
                                    </p>

                                    <p className="mt-4 text-sm text-gray-600">
                                        <span className="font-semibold text-gray-700">Dimensions:</span> {product.dimensions}
                                    </p>
                                </div>

                                <button
                                    className="mt-6 w-full h-11 inline-flex items-center justify-center rounded-lg bg-purple-600 text-white font-semibold text-sm hover:bg-purple-700 active:bg-purple-800 transition"
                                >
                                    Add to cart
                                </button>
                            </div>
                        </div>
             
        </div>
        
            
        }
        {
            loadingStatus == "error" && <div>
                <h1 className="text-5xl  font-bold">Error Occured</h1>
            </div>
        }
        </div>
    )
}