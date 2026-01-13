import { useState } from "react"
export default function Testing(){
    const [count,setCount] = useState(0)
    const [items, setItems] = useState("Banana")

    return(
        <div className="w-full h-screen flex justify-center items-center flex-col">
            
            <h1 className="text-4xl m-2">{count + " " +items+"s" }</h1>
            <button className="cursor-pointer border rounded bg-red-500 p-1 m-1" onClick={()=>{
                const newCount = count + 1
                setCount(newCount)
            }}>Count</button>

            <div className="flex w-[350px] justify-between items-center m-">

            <button className="cursor-pointer border rounded bg-yellow-500 p-1 m-1" onClick={()=>{
            
            setItems("Banana")

            }}>Banana</button>


            <button className="cursor-pointer border rounded bg-red-500 p-1 m-1" onClick={()=>{
            
            setItems("Apple")

            }}>Apple</button>

            <button className="cursor-pointer border rounded bg-orange-500 p-1 m-1" onClick={()=>{
            
            setItems("Orange")

            }}>Orange</button>


            <button className="cursor-pointer border rounded bg-amber-300 p-1 m-1" onClick={()=>{
            
            setItems("Other")

            }}>Other</button>

            </div>
        </div>
         
    )
}