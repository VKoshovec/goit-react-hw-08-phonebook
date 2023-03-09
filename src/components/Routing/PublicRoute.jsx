import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { isLogedIn } from "redux/user/userSelectors";


const PublicRoute = () =>{
   if (useSelector(isLogedIn)) {
     console.log("hi");
     <Outlet/>
   }
};

export default PublicRoute;