import { useState } from "react";
import "./register.css";
import toast from "react-hot-toast";

export default function RegisterPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    // For just checking values
    console.log({
      firstName,
      lastName,
      email,
      password,
      address,
      phone,
    });

    axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/user/register`,{
        email : email,
        firstName : firstName,
        lastName : lastName,
        password : password,
        address : address,
        phone : phone
    } ).then( (res)=>{
        console.log(res)
    }).catch( (err)=>{
        toast.error(err.responce.data.error)
    })


  }

  return (
    <div className="w-full h-screen flex justify-center items-center bg-picture bg-cover bg-center">
      
      <form onSubmit={handleSubmit}>
        {/* Card */}
        <div className="w-[400px] p-8 backdrop-blur-xl bg-black/40 rounded-2xl shadow-2xl flex flex-col items-center">

          {/* Logo */}
          <img
            src="logo.png"
            alt="Logo"
            className="w-[150px] h-[150px] object-cover mb-2"
          />

          {/* Title */}
          <h1 className="text-3xl font-bold text-white mb-1">
            Create Account
          </h1>
          <p className="text-gray-300 mb-6 text-sm">
            Please fill in the details
          </p>

          {/* First Name */}
          <div className="w-full mb-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-full h-12 bg-transparent border-b-2 border-gray-400 text-white text-lg outline-none focus:border-purple-500 transition"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          {/* Last Name */}
          <div className="w-full mb-4">
            <input
              type="text"
              placeholder="Last Name"
              className="w-full h-12 bg-transparent border-b-2 border-gray-400 text-white text-lg outline-none focus:border-purple-500 transition"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          {/* Email */}
          <div className="w-full mb-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full h-12 bg-transparent border-b-2 border-gray-400 text-white text-lg outline-none focus:border-purple-500 transition"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password */}
          <div className="w-full mb-4">
            <input
              type="password"
              placeholder="Password"
              className="w-full h-12 bg-transparent border-b-2 border-gray-400 text-white text-lg outline-none focus:border-purple-500 transition"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Address */}
          <div className="w-full mb-4">
            <input
              type="text"
              placeholder="Address"
              className="w-full h-12 bg-transparent border-b-2 border-gray-400 text-white text-lg outline-none focus:border-purple-500 transition"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          {/* Phone */}
          <div className="w-full mb-6">
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full h-12 bg-transparent border-b-2 border-gray-400 text-white text-lg outline-none focus:border-purple-500 transition"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full h-12 bg-purple-600 hover:bg-purple-700 transition rounded-lg text-white font-semibold text-lg"
          >
            Register
          </button>

        </div>
      </form>
    </div>
  );
}
