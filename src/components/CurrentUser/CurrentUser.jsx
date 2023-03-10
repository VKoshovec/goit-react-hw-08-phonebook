import { useSelector } from "react-redux";
import { isUser } from "redux/user/userSelectors";

const CurrentUser = () => {
    const user = useSelector(isUser);
    return(<div>
       {user && user}
    </div>);
}

export default CurrentUser;