import "./productCard.css"
export default function ProductCard(props){ //need to be the function's first letter as capital (must)
    
    
    return(
        <div>
            <img src={props.img}/> 
            <span>{props.name}</span>
            <span>{props.price}</span>   {/* {} idhatkul js use seiyya mudiyum props in moolam(app.jsx file in moolam pass ahum attrtributehalei access seiyalaam)  */}
            <p>{props.description}</p>  
        </div>
    )
}