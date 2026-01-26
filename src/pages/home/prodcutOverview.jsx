import { useParams } from "react-router-dom";
export default function ProductOverview(){
    const params = useParams();
    const key = params.key;

    const [loadingStatus, setLoadingStatus] = useState("loading");
    const [product, setProduct] = useState({});


    return(
        <dev>Prodcut Overview</dev>
    )
}