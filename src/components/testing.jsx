export default function Testing(){
    const [count,setCount] = useState(0,)

    return(
        <div className="w-full h-screen bg-red-900">
          
            <h1>{count}</h1>
            <button className="cursor-pointer" onClick={()=>{
                count ++
                console.log(count)
            }}>Count</button>
            <h1>{count}</h1>
        </div>
         
    )
}