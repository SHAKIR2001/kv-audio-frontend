import './App.css'
import ProductCard from './components/productCard'


function App() {


  return (
    <div>

    <div className='w-[800px] h-[800px] bg-yellow-200 relative'>
    <div className='w-[500px] h-[500px] bg-blue-200 relative' >

      <div className='w-[50px] h-[50px] bg-red-500'></div>
      <div className='w-[50px] h-[50px] bg-green-500 absolute right-[15px] bottom-[100px]'></div>
      <div className='w-[50px] h-[50px] bg-yellow-500 fixed right-[5px] bottom-[15px]'></div>

    </div>

     
    </div>
    </div>
  )
}

export default App
