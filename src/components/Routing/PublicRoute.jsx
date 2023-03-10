import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";
import { isAuth } from "redux/user/userSelectors";



const PublicRoute = () =>{

    const { isLogin, token } = useSelector(isAuth);

    if(!isLogin && token){
       return <p>...Loading</p>
    }

    if (isLogin){
       return <Navigate to ="/contacts"/> 
    }

    // 
    return <Outlet/>
};

export default PublicRoute;