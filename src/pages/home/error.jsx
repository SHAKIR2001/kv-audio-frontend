import { Link } from "react-router-dom";

export default function ErrorNotFound(){
    return(
    <>
        <h1>404 Error : Page not found</h1>
        <Link to="/">Go back to home</Link>

    </>
    )
}