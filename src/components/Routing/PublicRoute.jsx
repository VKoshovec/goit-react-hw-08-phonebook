import { useSelector } from "react-redux";
import { lazy, Suspense } from "react";
import { Outlet, NavLink } from "react-router-dom";
import { isLogedIn } from "redux/user/userSelectors";
const ContactsPage = lazy(() => import("pages/contacts/Contacts"));


const PublicRoute = () =>{
   if (!useSelector(isLogedIn)) {
     console.log("Public");
     <Outlet/>
   }
   <NavLink to={ ContactsPage }/>
};

export default PublicRoute;