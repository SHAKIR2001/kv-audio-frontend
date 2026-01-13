import { useState } from "react"
export default function Testing(){
    const [count,setCount] = useState(0)

    return(
        <div className="w-full h-screen flex justify-center items-center flex-col">
            
            <h1 className="text-4xl">{count}</h1>
            <button className="cursor-pointer border rounded bg-red-500 p-1 m-1" onClick={()=>{
                const newCount = count + 1
                setCount(newCount)
            }}>Count</button>
            
        </div>
         
    )
}