import { useState } from "react"
import "./login.css"
export default function LoginPage(){

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    function handleOnSubmit(){
        
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

    {/* Extra actions */}
    <div className="w-full flex justify-between text-sm text-gray-300">
      <label className="flex items-center gap-2 cursor-pointer">
        <input type="checkbox" className="accent-purple-500" />
        Remember me
      </label>
      <a href="#" className="hover:text-purple-400 transition">
        Forgot password?
      </a>
    </div>

  </div>
  </form>
</div>
    )
}