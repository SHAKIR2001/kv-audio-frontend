export default function Testing(){
    let count = 0;
    return(
        <div className="w-full h-screen bg-red-900">
          
            <h1>{count}</h1>
            <button className="cursor-pointer" onClick={()=>{
                count ++
                console.log(count)
            }}>Count</button>

        </div>
    )
}