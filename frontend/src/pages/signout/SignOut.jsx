import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { logoutUser } from "../../redux/actions/user.action";
export default function SignOut() {
    const {loggedIn} = useSelector(state=>state.user);
    const dispatch = useDispatch();
    if(!loggedIn){
        return <Navigate to='/signin' />;
    }
    else{
        console.log('signing out');
        dispatch(logoutUser());
        return <Navigate to='/signin' />;
    }
}