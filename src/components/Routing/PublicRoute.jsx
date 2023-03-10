import { useSelector } from "react-redux";
import { lazy, Suspense } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { isLogedIn, isAuth } from "redux/user/userSelectors";
// const ContactsPage = lazy(() => import("pages/contacts/Contacts"));
import Contacts from "pages/contacts/Contacts";


const PublicRoute = () =>{

    const { isLogin, token } = useSelector(isAuth);

    if(isLogin){
        return <Navigate to='/contacts'/>
    }

    return <Outlet/>
};

export default PublicRoute;