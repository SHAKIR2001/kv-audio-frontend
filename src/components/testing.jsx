import { useState } from "react"
export default function Testing(){
    const [file,setFile] = useState(null);

    return(
        <div className="w-full h-screen flex justify-center items-center flex-col">
            
            <input type="file"/>
            <button className="bg-blue-500 border-2 w-[80px] h-[40px] rounded-2xl mr-20 cursor-pointer">Upload</button>
   

        </div>
         
    )
}