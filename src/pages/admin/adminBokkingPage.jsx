import { useState } from "react";
export default function AdminBookingPage(){

    const [bookings, setBooking] = useState([]);
    const [loading, setLoading] = useState("loading");

    return(
        <div>Bookings</div>
    )
}