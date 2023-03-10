import { useSelector } from "react-redux";
import { lazy, Suspense } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { isLogedIn } from "redux/user/userSelectors";
import Contacts from "pages/contacts/Contacts";

const Login = lazy(() => import("pages/login/Login"));


const PrivateRoute = () =>{
   if (!useSelector(isLogedIn)) {
    return <Navigate to='/login' />
   }
   return <Outlet/>
};

export default PrivateRoute;