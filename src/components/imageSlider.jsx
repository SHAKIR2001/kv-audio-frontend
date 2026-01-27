export default function ImageSlider(props){
    const images =  props.images
    return(
        <div className="w-full h-full flex flex-col items-center bg-red-300">
           <img src={images[0]} alt="product" className="w-[90%] h-[50%] object-cover"/>
        </div>
    )
}