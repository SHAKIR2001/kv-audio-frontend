export default function AddProduct(){
    return(
        <div className="w-full h-full flex flex-col items-center">
            <h1>Add items</h1>
            <div className="w-[400px]  border flex flex-col ">
                <input type="text" placeholder="Product Key"/>
                <input type="text" placeholder="Product Name"/>
                <input type="text" placeholder="Product Price"/>
                <button className="border cursor-pointer">Add</button>


            </div>
        
        
        
        
        </div>
    )
}