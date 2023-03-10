import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";
import { isAuth } from "redux/user/userSelectors";


const PrivateRoute = () =>{

   const { isLogin, token } = useSelector(isAuth);

   if (!isLogin && token) {
     return <p>...Loading</p>
   }

   if (!isLogin && !token) {
      return <Navigate to='/login'/>
   }

   return <Outlet/>
};

// return <Navigate to='/login' />
export default PrivateRoute;