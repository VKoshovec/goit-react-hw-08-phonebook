import { useSelector } from "react-redux";
import { selectAuthErr } from "redux/user/userSelectors";
import Notiflix from "notiflix";

const Error = () => {
    
    const err = useSelector(selectAuthErr);
       return (err && Notiflix.Notify.failure(err))
};


export default Error;