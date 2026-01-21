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
        <div className="w-full h-full flex flex-wrap justify-center  pt-[50px]">
             {state=="loading" && //if state is == loading it means its true then only this div shown
             <div className="h-full w-full  flex justify-center items-center">
                <div className="w-[50px] h-[50px] border-4 border-t-green-500 rounded-full animate-spin"></div>
            
            </div>}
            {state=="success"&& 
            items.map( (item)=>{
                <h1 key={item.key}>{item.name}</h1>
            })
                
            

            }
        

        </div>
    )
}