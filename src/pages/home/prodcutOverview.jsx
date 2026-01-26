import { useParams } from "react-router-dom";
export default function ProductOverview(){
    const params = useParams();
    const key = params.key;
    

    return(
        <dev>Prodcut Overview</dev>
    )
}