import { useEffect, useState } from "react"
import axios from "axios"
import toast from "react-hot-toast";
export default function Items(){

    const [state, setState] = useState("loading") //loading , success, error
    const [items , setItems] = useState([]);

    useEffect( ()=>{
        
      if(state == "loading"){

           axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/products`).then( (res)=>{ //prodcuts can be view by anyone thats why i didnt get any token 
           setItems(res.data)
           setState("success")
        }).catch( (err)=>{
           toast.error(err?.response?.data?.error || "Erorr occured")
           setState("error")

        }) 
     }

    },[])




    return(
        <div className="w-full h-full flex flex-wrap justify-center bg-amber-500 pt-[50px]">
            dsfas

        </div>
    )
}