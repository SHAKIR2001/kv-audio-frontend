import { useEffect } from "react"
export default function Items(){

    useEffect( ()=>{
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/products`).then( (res)=>{ //prodcuts can be view by anyone thats why i didnt get any token 
        console.log(res)
    }) 
    },[])




    return(
        <h1>Items</h1>
    )
}