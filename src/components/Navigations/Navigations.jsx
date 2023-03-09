import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import scss from './navigation.module.scss';
import { useSelector } from "react-redux";
import { isLogedIn } from "redux/user/userSelectors";
import { fetchLogOutUser } from "redux/user/userOperations";


const Navigation = () => {
         
    const isAuth = useSelector(isLogedIn);
    const dispatch = useDispatch();
    
    const hedleLogOut = () => {
        dispatch(fetchLogOutUser());
    }
    

    return (
      <nav className={ scss.nav }>      
        {!isAuth && <NavLink className={ scss.link } to="/login">Login</NavLink>}
        {!isAuth && <NavLink className={ scss.link } to="/register">Register</NavLink>}
        {isAuth && <NavLink className={ scss.link } to="/contacts">Contacts</NavLink>}
        {isAuth && <NavLink className={ scss.link } to="/register" onClick={ hedleLogOut }>LogOut</NavLink>}
      </nav>
    )
};

export default Navigation;