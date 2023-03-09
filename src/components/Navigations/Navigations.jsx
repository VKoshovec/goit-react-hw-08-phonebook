import { NavLink } from "react-router-dom";
import scss from './navigation.module.scss';
import { useSelector } from "react-redux";
import { isLogedIn } from "redux/user/userSelectors";

const Navigation = () => {

    const isAuth = useSelector(isLogedIn); 

    return (
      <nav className={ scss.nav }>
        { isAuth ? <NavLink className={ scss.link } to="/contacts">Contacts</NavLink>: 
        <NavLink className={ scss.link } to="/login">Login</NavLink> }
        {/* <NavLink className={ scss.link } to="/register">Register</NavLink> */}
      </nav>
    )
};

export default Navigation;