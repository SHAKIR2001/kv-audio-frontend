import { useEffect, useState } from "react"
import axios from "axios"
export default function Items(){

    const [state, setState] = useState("loading") //loading , success, error
    const [items , setItems] = useState([]);

    useEffect( ()=>{
        
      if(state == "loading"){
           axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/products`).then( (res)=>{ //prodcuts can be view by anyone thats why i didnt get any token 
           setItems(res.data)
           setState("success")
        }).catch( (err)=>{
          console.log(err?.responce?.data?.error || "Erorr occured")
        }) 
     }

    },[])




    return(
        <h1>Items</h1>
    )
}