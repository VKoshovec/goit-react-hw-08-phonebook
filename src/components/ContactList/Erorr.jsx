import { useSelector } from "react-redux";
import { selectErorr } from "redux/selectors";
import Notiflix from "notiflix";

const Erorr = () => {
    return(useSelector(selectErorr) && Notiflix.Notify.failure("Something wrong with API..."))
};

export default Erorr;