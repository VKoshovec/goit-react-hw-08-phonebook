import Notiflix from 'notiflix';
import { selectLoadingState, selectLoadingAuth } from 'redux/selectors';
import { useSelector } from 'react-redux';
 
const Loading = () => {

    const loadingContact = useSelector(selectLoadingState);
    const loadingAuth = useSelector(selectLoadingAuth);

    loadingContact &&  Notiflix.Loading.circle();
    loadingAuth &&  Notiflix.Loading.circle();
    !loadingContact &&  Notiflix.Loading.remove();
    !loadingAuth &&  Notiflix.Loading.remove();

    return ;
}

export default Loading;