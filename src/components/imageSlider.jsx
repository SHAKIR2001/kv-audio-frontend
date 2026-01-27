export default function ImageSlider(props){
    const images =  props.images
    return(
        <div className="w-full h-full flex flex-col items-center ">
           {images[0] != null && <img src={images[0]} alt="product" className="w-full h-[450px] 
           object-cover"/>}
        <div className="w-full h-[150px] flex justify-center mt-[20px]">
                {
                    images.map( (image,index)=>{
                        return <img key={index} src={image} alt="Product" className="w-[100px] mr-[2px] h-[100px] object-cover cursor-pointer "/>
                    })
                }
        </div>



        </div>
    )
}