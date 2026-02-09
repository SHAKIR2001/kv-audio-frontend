import { useState } from "react"
export default function AdminUsersPage(){

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect( ()=>{
        if(loading){
            const token = localStorage.getItem("token")
        }

    },[loading])

    return(
        <div>Admin Users</div>
    )
}