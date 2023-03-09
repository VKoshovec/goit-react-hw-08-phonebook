import { useSelector } from "react-redux";
import { lazy, Suspense } from "react";
import { Outlet, NavLink } from "react-router-dom";
import { isLogedIn } from "redux/user/userSelectors";
import Contacts from "pages/contacts/Contacts";

const Login = lazy(() => import("pages/login/Login"));


const PrivateRoute = () =>{
   if (useSelector(isLogedIn)) {
     <NavLink to={ Contacts }/>
   }
   console.log("Privane");
   <Outlet/>
};

export default PrivateRoute;