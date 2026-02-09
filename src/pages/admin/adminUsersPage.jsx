import { useState,useEffect } from "react"
export default function AdminUsersPage(){

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect( ()=>{
        if(loading){
            const token = localStorage.getItem("token")
            axios.get(`${import.meta.env.VITE_BACKEND_URL}/users/all`, {
                headers : {
                    Authorization: `Bearer ${token}`
                }
            }).then((res)=>{
                console.log(res.data);
                setUsers(res.data);
                setLoading(false);
            }).catch((err)=>{
                console.log(err);
                setLoading(false);
            })
        }

    },[loading])

    return(
        <div>Admin Users</div>
    )
}