import ReactLoading from 'react-loading';
import { selectLoadingState } from 'redux/selectors';
import { useSelector } from 'react-redux';
 
const Loading = () => {
    return (useSelector(selectLoadingState) && 
    <ReactLoading type="spinningBubbles" color="black" height={'20%'} width={'20%'} />);
}

export default Loading;