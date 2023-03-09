import { NavLink } from "react-router-dom";
import scss from './navigation.module.scss';

const Navigation = () => {

    return (
      <nav className={ scss.nav }>
        <NavLink className={ scss.link } to="/login">Login</NavLink>
        {/* <NavLink className={ scss.link } to="/register">Register</NavLink> */}
        <NavLink className={ scss.link } to="/contacts">Contacts</NavLink>
      </nav>
    )
};

export default Navigation;