import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import scss from './navigation.module.scss';
import { useSelector } from "react-redux";
import { isLogedIn } from "redux/user/userSelectors";
import { fetchLogOutUser } from "redux/user/userOperations";
import { isUser } from "redux/user/userSelectors";

//chakra
import { Box, Heading } from "@chakra-ui/react"


const Navigation = () => {
         
    const user = useSelector(isUser);   
    const isAuth = useSelector(isLogedIn);
    const dispatch = useDispatch();
    
    const hedleLogOut = () => {
      dispatch(fetchLogOutUser());
    }
    
    return (
      <Box w={ '100%' } h = { 100 } shadow = { "lg" } alignItems = { "center" } 
      display={ "flex" } justifyContent={ "space-evenly" } p ={ 0 } >   

        <Heading p ={ 0 } m = { 0 } color={ "CaptionText" } textAlign={ "center"}
        mt = { 10 } mb = { 10 } textShadow={ "2xl" }>Phonebook</Heading>   

        <Box alignItems = { "center" } w = { "20%" }
        display={ "flex" } justifyContent={ "space-evenly" }> 

        {!isAuth && <NavLink className={ scss.link } to="/login">Login</NavLink>}
        {!isAuth && <p>|</p>}
        {!isAuth && <NavLink className={ scss.link } to="/register">Register</NavLink>}
        {isAuth && <p>{ user }</p>}
        {isAuth && <p>|</p>}
        {isAuth && <NavLink className={ scss.link } to="/login" onClick={ hedleLogOut }>LogOut</NavLink>}
        </Box>

      </Box>
    )
};

export default Navigation;