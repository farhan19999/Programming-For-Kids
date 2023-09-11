import { useEffect, useState } from "react"
import Footer from "../../../components/footer/Footer"
import Navbar from "../../../components/navbar/Navbar"
import axios from "axios";
import { useSelector } from "react-redux";
import Loading from "../../../components/loading/Loading";
import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
    const navigate = useNavigate();
    const [admin, setAdmin] = useState(null);
    const {loggedIn, loading, userid, role} = useSelector(state=>state.user);
    const server_url = process.env.REACT_APP_SERVER_URL;

    if(loggedIn && role !== "admin"){
        alert("You need to be an admin to access this page");
        navigate("/dashboard");
    }
    useEffect(() => {
        if(!loggedIn) return;
        axios.get(`${server_url}/api/admins/${userid}`)
        .then((res) => {
            setAdmin(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }, [loggedIn, userid, server_url]);
    if(loading || !admin){
        return <Loading />
    }

    return (
        <div>
            <Navbar />
            <h1>Admin Dashboard</h1>
            <p> Welcome to the admin dashboard {admin.name}</p>
            <Footer />
        </div>
    );
}