import { useParams } from "react-router-dom";
export default function ProductOverview(){
    const params = useParams();
    console.log(params)
    return(
        <dev>Prodcut Overview</dev>
    )
}