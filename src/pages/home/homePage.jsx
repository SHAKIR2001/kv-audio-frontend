import Header from "../../components/header"
import { Routes, Route } from "react-router-dom"
import Home from "./home"
import Contact from "./contact"
import Gallery from "./gallery"
import Items from "./items"
import ErrorNotFound from "./error"
import ProductOverview from "./prodcutOverview"
export default function HomePage(){
    return(
    <>
        <Header/>
        <div className="h-[calc(100vh-100px)] bg-primary w-full">
           <Routes path="/">
                <Route path="/" element={<Home/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/gallery" element={<Gallery/>}/>
                <Route path="/items" element={<Items/>}/>
                <Route path="/product/:key" element={<ProductOverview/>}/> 
                <Route path="/*" element={<ErrorNotFound/>}/>

           </Routes>
        </div>




       
    </>
    )
}