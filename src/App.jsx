import './App.css'
import ProductCard from './components/productCard'


function App() {


  return (
    <div className='w-full h-screen flex justify-center items-center'>

    <div className='w-[800px] h-[800px] bg-yellow-200 flex justify-center items-center'>
    <div className='w-[500px] h-[500px] bg-blue-200 flex flex-col justify-center items-center'>

      <div className='w-[50px] h-[50px] bg-red-500'></div>
      <div className='w-[50px] h-[50px] bg-green-500'></div>
      <div className='w-[50px] h-[50px] bg-yellow-500'></div>

    </div>
    </div>

    </div>

  )
}

export default App
