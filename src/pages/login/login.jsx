import { useState } from "react"
import "./login.css"
export default function LoginPage(){

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    return(

      <div className="w-full h-screen flex justify-center items-center bg-picture ">


        <div className="w-[400px] h-[400px] backdrop-blur-xl rounded-2xl flex justify-center items-center relative">
            
            <img className="absolute top-1 " src="logo.png"/>

        </div>




      </div>
    )
}