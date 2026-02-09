import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./login.css"
import axios from "axios"
import toast from "react-hot-toast"

export default function LoginPage(){

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const navigate = useNavigate()

    function handleOnSubmit(e){
        e.preventDefault()

        const backendUrl = import.meta.env.VITE_BACKEND_URL
        axios.post(`${backendUrl}/api/users/login`, {
            email : email, //backend il ulla email & password itku ingu useState moolam eduthth emailum & passowrd ei kuduththal
            password : password
        }).then(
            (res)=>{
                console.log(res)
                toast.success("Login Success, Welcome "+res.data.user.lastName)
                const user = res.data.user //identify this from browser console(res.data.user)
                localStorage.setItem("token", res.data.token) //store the key and value in the  cashe table(token)
                 
               if(user.role === "admin"){
                    navigate("/admin")
                }else{
                    navigate("/")
                }
            }
        ).catch(
            (err)=>{
                console.log(err)
                toast.error(err?.response?.data?.message )
                
               
            }
        )
    
    }

    return(

<div className="w-full h-screen flex justify-center items-center bg-picture bg-cover bg-center">
 <form onSubmit={handleOnSubmit}>
  {/* Card */}
  <div className="w-[400px] p-8 backdrop-blur-xl bg-black/40 rounded-2xl shadow-2xl flex flex-col items-center">

    {/* Logo */}
    <img
      src="logo.png"
      alt="Logo"
      className="w-[150px] h-[150px] object-cover "
    />

    {/* Title */}
    <h1 className="text-3xl font-bold text-white mb-2">
      Welcome Back
    </h1>
    <p className="text-gray-300 mb-8 text-sm">
      Please login to continue
    </p>

    {/* Email */}
    <div className="w-full mb-5">

      <input
        type="email"
        placeholder="Email"
        className="w-full h-12 bg-transparent border-b-2 border-gray-400 text-white text-lg outline-none focus:border-purple-500 transition"
        value={email}
        onChange={
            (e)=>{
                setEmail(e.target.value)
            }}
      />
    </div>

    {/* Password */}
    <div className="w-full mb-6">
      <input
        type="password"
        placeholder="Password"
        className="w-full h-12 bg-transparent border-b-2 border-gray-400 text-white text-lg outline-none focus:border-purple-500 transition"
        value = {password}
        onChange={
            (e)=>{
                setPassword(e.target.value)
            }}
      />
    </div>

    {/* Login Button */}
    <button className="w-full h-12 bg-purple-600 hover:bg-purple-700 transition rounded-lg text-white font-semibold text-lg mb-4">
      Login
    </button>



  </div>
  </form>
</div>
    )
}