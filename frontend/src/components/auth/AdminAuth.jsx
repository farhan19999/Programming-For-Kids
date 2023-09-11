import { useSelector } from "react-redux/es/hooks/useSelector";
import { Navigate, Outlet } from "react-router-dom";

export default function AdminAuth({ children }){
    const { loggedIn, role } = useSelector((state) => state.user);
    console.log('redirecting');
    if (loggedIn && role === "admin") return <Outlet/>;
    else return (<Navigate to="/admin-login" />);
}
