import { useState } from "react"
export default function Testing(){
    const [count,setCount] = useState(0)
    const [items, setItems] = useState("Banana")

    return(
        <div className="w-full h-screen flex justify-center items-center flex-col">
            
            <input type="file"/>
            <button className="bg-blue-500 border-2 w-[80px] h-[50px] rounded-2xl mr-20 cursor-pointer">Upload</button>
   

        </div>
         
    )
}