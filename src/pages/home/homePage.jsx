import Header from "../../components/header"
import { Routes, Route } from "react-router-dom"
import Home from "./home"
export default function HomePage(){
    return(
    <>
        <Header/>
        <div className="h-[calc(100vh-100px)] w-full">
           <Routes path="/">
                <Route path="/" element={<Home/>}/>
                <Route path="/contact" element={<h1>Contact</h1>}/>
                <Route path="/gallery" element={<h1>Gallery</h1>}/>
                <Route path="/items" element={<h1>Items</h1>}/>



           </Routes>
        </div>




       
    </>
    )
}