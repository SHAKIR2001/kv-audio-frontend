import './App.css'
import ProductCard from './components/productCard'
import { MdBluetoothAudio } from "react-icons/md";

function App() {


  return (
    <div className='w-full h-screen flex'>

      <div className='w-[400px] h-full bg-green-200'></div>

      <div className="w-full bg-red-900"> 
        <MdBluetoothAudio className="text-[300px] text-white" />
      </div>
      



    </div>

  )
}

export default App
