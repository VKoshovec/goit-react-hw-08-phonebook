import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCurrentUser } from 'redux/user/userOperations';

const AuthLayout = ({ children }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCurrentUser())
    }, [dispatch]);
   
    return (
        <>{children}</>
    )
}

export default AuthLayout;